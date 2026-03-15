import fs from 'fs';
import path from 'path';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SideNav from '@/components/SideNav';
import { navigation } from '@/lib/navigation';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = await params;
  const slugPath = slug.join('/');
  
  // Try to find the markdown file
  // Check public/lrtp2045 first since user is working there, then fallback to ccrpc_scraper
  let filePath = path.join(process.cwd(), 'public', 'lrtp2045', ...slug, 'index.md');
  if (!fs.existsSync(filePath)) {
    filePath = path.join(process.cwd(), 'public', 'lrtp2045', slug.join('/') + '.md');
  }
  
  if (!fs.existsSync(filePath)) {
    filePath = path.join(process.cwd(), 'ccrpc_scraper', 'downloaded_site_markdown', ...slug, 'index.md');
  }

  if (!fs.existsSync(filePath)) {
    filePath = path.join(process.cwd(), 'ccrpc_scraper', 'downloaded_site_markdown', slug.join('/') + '.md');
  }

  if (!fs.existsSync(filePath)) {
    return (
      <>
        <Header />
        <main className="usa-section">
          <div className="grid-container">
            <h1>Page Not Found</h1>
            <p>The page at <code>/{slugPath}</code> could not be found.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Find sidebar links for this section
  const section = navigation.find(n => slugPath.startsWith(n.baseUrl.replace(/^\//, '')));
  
  // Extract headers from content for the active page
  const headerMatches = Array.from(content.matchAll(/^##\s+(.+)$/gm));
  const pageHeaders = headerMatches.map(m => ({
    label: m[1].trim(),
    href: `#${m[1].trim().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`
  }));

  const sideNavItems = section ? section.links.map(link => {
    const isActive = `/${slugPath}` === link.href || `/${slugPath}/` === link.href;
    return {
      ...link,
      active: isActive,
      subItems: isActive ? pageHeaders : []
    };
  }) : [];

  // Find the title for the breadcrumb or hero
  const pageTitle = section?.links.find(l => l.href.includes(slugPath))?.label || slug[slug.length - 1];

  // Extract Hero Title and Description from markdown
  let heroTitle = pageTitle;
  let heroDescription = "";
  let mainContent = content.trim();

  // 1. Extract the first H1 as heroTitle
  const h1Match = mainContent.match(/^#\s+(.+)\r?\n+/);
  if (h1Match) {
    heroTitle = h1Match[1];
    mainContent = mainContent.slice(h1Match[0].length).trim();
    
    // 2. Extract the first paragraph after that H1 as heroDescription
    const pMatch = mainContent.match(/^([^#\r\n][^]*?)(?:\r?\n\r?\n|(?=\r?\n#)|$)/);
    if (pMatch) {
      heroDescription = pMatch[1].trim();
      mainContent = mainContent.slice(pMatch[0].length).trim();
    }

    // 3. Clean up any duplicate H1s that match the heroTitle at the top of remaining content
    // This happens frequently in the scraped markdown files
    while (true) {
      const duplicateH1Match = mainContent.match(/^#\s+(.+)\r?\n+/);
      if (duplicateH1Match && (duplicateH1Match[1].trim() === heroTitle.trim() || duplicateH1Match[1].trim() === pageTitle.trim())) {
        mainContent = mainContent.slice(duplicateH1Match[0].length).trim();
      } else {
        break;
      }
    }
  }

  // Get the section's banner image
  let bannerPath = `/lrtp2045/${slug[0]}/banner.jpg`;
  
  // User requested to use specific banners for sections
  if (slug[0] === 'existing-conditions') {
    bannerPath = 'https://ccrpc.gitlab.io/lrtp2045/existing-conditions/demographics/banner.jpg';
  } else if (slug[0] === 'goals') {
    bannerPath = 'https://ccrpc.gitlab.io/lrtp2045/goals/overview/banner.jpg';
  } else if (slug[0] === 'process') {
    bannerPath = 'https://ccrpc.gitlab.io/lrtp2045/process/public-involvement/banner.jpg';
  } else if (slug[0] === 'data' || slug[0] === 'appendices') {
    bannerPath = 'https://ccrpc.gitlab.io/lrtp2045/data/tpm/banner.jpg';
  }

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="usa-hero" style={{ backgroundImage: `url('${bannerPath}')` }}>
          <div className="grid-container">
            <div className="usa-hero__callout">
              <h1 className="usa-hero__heading">
                <span className="usa-hero__heading--alt">{heroTitle}</span>
              </h1>
              {heroDescription && (
                <p>{heroDescription}</p>
              )}
            </div>
          </div>
        </section>

        <div className="usa-section">
          <div className="grid-container">
            <div className="grid-row grid-gap">
              {sideNavItems.length > 0 && (
                <aside className="usa-layout-docs__sidenav grid-col-12 desktop:grid-col-3">
                  <SideNav items={sideNavItems} />
                </aside>
              )}
              <div className={`usa-layout-docs__main grid-col-12 ${sideNavItems.length > 0 ? 'desktop:grid-col-9' : ''} usa-prose`}>
                <h1>{heroTitle}</h1>

                <MarkdownRenderer 
                  content={mainContent}
                  baseUrl={slugPath}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
