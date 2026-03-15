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
              public website rather than on paper. A web-based plan allows for more
              interactive content with links to related resources, downloadable data, and
              interactive maps. The content is organized in the following sections:
              <strong>Overview, Existing Conditions, Goals, 2045 Vision, Public Involvement, and
              Appendices.</strong> Explore the plan by clicking on the section drop-down tabs
              at the top of the page which are also summarized in the menu below.</p>
            </div>
          </div>
        </section>

        <section className="usa-section usa-section--dark usa-graphic-list">
          <div className="grid-container">
            <div className="usa-graphic-list__row grid-row grid-gap">
              <div className="usa-media-block tablet:grid-col">
                <Link href="/overview/introduction">
                  <img className="usa-media-block__img plandoc-rounded-thumbnail" src="/lrtp2045/overview/banner_hu560d7c4ad80dacb46504e7b3c5e067a7_299524_124x124_fill_q75_box_center.jpg" aria-hidden="true" alt="" />
                </Link>
                <div className="usa-media-block__body">
                  <h3 className="usa-graphic-list__heading">Overview</h3>
                  <p>This section contains an executive summary of the LRTP 2045 including two videos illustrating the planning process and future vision. This section also provides a history of local transportation infrastructure, local long range transportation plans, and federal transportation planning legislation.</p>
                  <p>
                    <Link href="/overview/introduction">Learn more <span className="usa-sr-only"> about Overview</span></Link>
                  </p>
                </div>
              </div>

              <div className="usa-media-block tablet:grid-col">
                <Link href="/existing-conditions/demographics">
                  <img className="usa-media-block__img plandoc-rounded-thumbnail" src="/lrtp2045/existing-conditions/banner_huf714580235f411366c82ae7f33fe6871_312444_124x124_fill_q75_box_center.jpg" aria-hidden="true" alt="" />
                </Link>
                <div className="usa-media-block__body">
                  <h3 className="usa-graphic-list__heading">Existing Conditions</h3>
                  <p>Using a base year of 2015, existing conditions data establish a baseline from which planning visions can be grounded. This section includes demographic, land use, environmental, and health data as well as information specific to each transportation mode.</p>
                  <p>
                    <Link href="/existing-conditions/demographics">Learn more <span className="usa-sr-only"> about Existing Conditions</span></Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="usa-graphic-list__row grid-row grid-gap">
              <div className="usa-media-block tablet:grid-col">
                <Link href="/goals/overview">
                  <img className="usa-media-block__img plandoc-rounded-thumbnail" src="/lrtp2045/goals/banner_hud41814edda5bc3606af39c05ae075383_379877_124x124_fill_q75_box_center.jpg" aria-hidden="true" alt="" />
                </Link>
                <div className="usa-media-block__body">
                  <h3 className="usa-graphic-list__heading">Goals</h3>
                  <p>The five overarching long-term goals are safety, multimodal connectivity, equity, economy, and environment. These goals and their objectives are based on a combination of the Federal transportation goals, State of Illinois transportation goals, local knowledge, current local planning efforts, and input received from the public.</p>
                  <p>
                    <Link href="/goals/overview">Learn more <span className="usa-sr-only"> about Goals</span></Link>
                  </p>
                </div>
              </div>

              <div className="usa-media-block tablet:grid-col">
                <Link href="/vision/futureprojects">
                  <img className="usa-media-block__img plandoc-rounded-thumbnail" src="/lrtp2045/vision/banner_hu49c03114a9ce8ad2bc0bd62c0ddb3f2a_126258_124x124_fill_q75_box_center.jpg" aria-hidden="true" alt="" />
                </Link>
                <div className="usa-media-block__body">
                  <h3 className="usa-graphic-list__heading">2045 Vision</h3>
                  <p>The combined input about the current and future transportation system conveyed strong public support for a set of overlapping ideas about the future of transportation: a more environmentally sustainable transportation system, additional pedestrian and bicycle infrastructure, shorter off-campus transit times, equitable access to transportation services, and a compact urban area that supports active transportation and limits sprawl development.</p>
                  <p>
                    <Link href="/vision/futureprojects">Learn more <span className="usa-sr-only"> about 2045 Vision</span></Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="usa-graphic-list__row grid-row grid-gap">
              <div className="usa-media-block tablet:grid-col">
                <Link href="/process/public-involvement">
                  <img className="usa-media-block__img plandoc-rounded-thumbnail" src="/lrtp2045/process/banner_hu8b7f561f591da6c62ceff47fc226140f_340482_124x124_fill_q75_box_center.jpg" aria-hidden="true" alt="" />
                </Link>
                <div className="usa-media-block__body">
                  <h3 className="usa-graphic-list__heading">Public Involvement</h3>
                  <p>LRTP outreach includes educating the public about the long range transportation planning process, raising awareness of existing transportation services, and providing opportunities for the public to inform the direction of planning efforts. Special emphasis is placed on public input because the transportation system affects every resident, employee, and visitor in the community.</p>
                  <p>
                    <Link href="/process/public-involvement">Learn more <span className="usa-sr-only"> about Public Involvement</span></Link>
                  </p>
                </div>
              </div>

              <div className="usa-media-block tablet:grid-col">
                <Link href="/data/tpm">
                  <img className="usa-media-block__img plandoc-rounded-thumbnail" src="/lrtp2045/data/banner_hudc626aaf2bded9ad5e7a0a5f43981335_283893_124x124_fill_q75_box_center.jpg" aria-hidden="true" alt="" />
                </Link>
                <div className="usa-media-block__body">
                  <h3 className="usa-graphic-list__heading">Appendices</h3>
                  <p>This section includes additional documentation about the data and statistical modeling processes utilized to evaluate existing transportation conditions and project future transportation conditions.</p>
                  <p>
                    <Link href="/data/tpm">Learn more <span className="usa-sr-only"> about Appendices</span></Link>
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
