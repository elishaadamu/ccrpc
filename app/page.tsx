import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <a className="usa-skipnav" href="#main-content">Skip to main content</a>
      <div className="usa-overlay"></div>
      
      <Header />

      <main id="main-content">
        <section className="usa-hero" style={{ backgroundImage: "url('/lrtp2045/banner.jpg')" }}>
          <div className="grid-container">
            <div className="usa-hero__callout">
              <h1 className="usa-hero__heading">LRTP 2045</h1>
              <p>As a community transportation policy document, the LRTP provides a regional transportation vision for 2045 to guide future transportation investments.</p>
            </div>
          </div>
        </section>

        <section className="grid-container usa-section">
          <div className="usa-width-one-whole">
            <div className="plandoc-content">
              <p><em><strong>Welcome to the Champaign-Urbana Long Range Transportation Plan (LRTP) 2045!</strong></em></p>
              <p>The LRTP 2045 was approved in December 2019 and will be in effect from 2020
              through 2024. As a web-based plan, all LRTP 2045 content is contained in this
              public website rather than on paper. Explore the key sections below:</p>
            </div>
          </div>
        </section>

        <section className="usa-section usa-section--dark usa-graphic-list">
          <div className="grid-container">
            <div className="usa-graphic-list__row grid-row grid-gap">
              <div className="usa-media-block tablet:grid-col-6">
                <Link href="/process/public-involvement">
                  <img className="usa-media-block__img plandoc-rounded-thumbnail" src="/lrtp2045/process/banner_hu8b7f561f591da6c62ceff47fc226140f_340482_124x124_fill_q75_box_center.jpg" aria-hidden="true" alt="" />
                </Link>
                <div className="usa-media-block__body">
                  <h3 className="usa-graphic-list__heading">Public Involvement</h3>
                  <p>PLAN2050 public involvement engages residents, businesses, community organizations, and regional partners across three key phases to guide transportation decisions through 2050 and ensure investments reflect community needs.</p>
                  <p>
                    <Link href="/process/public-involvement">Learn more <span className="usa-sr-only"> about Public Involvement</span></Link>
                  </p>
                </div>
              </div>

              <div className="usa-media-block tablet:grid-col-6">
                <Link href="/data/tpm">
                  <img className="usa-media-block__img plandoc-rounded-thumbnail" src="/lrtp2045/data/banner_hudc626aaf2bded9ad5e7a0a5f43981335_283893_124x124_fill_q75_box_center.jpg" aria-hidden="true" alt="" />
                </Link>
                <div className="usa-media-block__body">
                  <h3 className="usa-graphic-list__heading">System Performance Report</h3>
                  <p>An evaluation of system performance with respect to Federal performance targets including highway safety, pavement and bridge condition, system reliability, transit asset management, and transit safety.</p>
                  <p>
                    <Link href="/data/tpm">Learn more <span className="usa-sr-only"> about System Performance Report</span></Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
