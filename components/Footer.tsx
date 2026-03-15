import Link from 'next/link';
import { Facebook, Twitter, Youtube, Rss } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="usa-footer usa-footer--medium" role="contentinfo">
      <div className="grid-container usa-footer__return-to-top">
        <a href="#">Return to top</a>
      </div>

      <div className="usa-footer__primary-section">
        <nav className="usa-footer__nav">
          <ul className="add-list-reset grid-row grid-gap">
            <li className="mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content">
              <Link className="usa-footer__primary-link" href="/overview/introduction">Overview</Link>
            </li>
            <li className="mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content">
              <Link className="usa-footer__primary-link" href="/existing-conditions/demographics">Existing Conditions</Link>
            </li>
            <li className="mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content">
              <Link className="usa-footer__primary-link" href="/goals/overview">Goals</Link>
            </li>
            <li className="mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content">
              <Link className="usa-footer__primary-link" href="/vision/futureprojects">2045 Vision</Link>
            </li>
            <li className="mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content">
              <Link className="usa-footer__primary-link" href="/process/public-involvement">Public Involvement</Link>
            </li>
            <li className="mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content">
              <Link className="usa-footer__primary-link" href="/data/tpm">Appendices</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="usa-footer__secondary-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <div className="plandoc-footer-logo usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
              <div className="mobile-lg:grid-col-auto">
                <a href="https://cuuats.org/">
                  <img className="usa-footer__logo" src="/lrtp2045/img/cuuats-logo.svg" alt="Champaign Urbana Urbanized Area Transportation Study" />
                </a>
              </div>
            </div>
            <div className="usa-footer__contact-links mobile-lg:grid-col-6">
              <div className="usa-footer__social-links grid-row grid-gap-1">
                <div className="grid-col-auto">
                  <a href="https://www.facebook.com/CUUATS/" className="usa-social-link">
                    <Facebook size={24} />
                    <span className="usa-sr-only">Facebook</span>
                  </a>
                </div>
                <div className="grid-col-auto">
                  <a href="https://twitter.com/cuuats" className="usa-social-link">
                    <Twitter size={24} />
                    <span className="usa-sr-only">Twitter</span>
                  </a>
                </div>
                <div className="grid-col-auto">
                  <a href="https://www.youtube.com/channel/UCUuJgNI211l8bczez5T5BkQ" className="usa-social-link">
                    <Youtube size={24} />
                    <span className="usa-sr-only">YouTube</span>
                  </a>
                </div>
                <div className="grid-col-auto">
                  <a href="/lrtp2045/index.xml" className="usa-social-link">
                    <Rss size={24} />
                    <span className="usa-sr-only">RSS</span>
                  </a>
                </div>
              </div>
              <h3 className="usa-footer__contact-heading">Champaign Urbana Urbanized Area Transportation Study</h3>
              <address className="usa-footer__address">
                <div className="usa-footer__contact-info grid-row grid-gap">
                  <div className="grid-col-auto">
                    <a href="tel:+12173283313">(217) 328-3313</a>
                  </div>
                  <div className="grid-col-auto">
                    <a href="mailto:cuuats-lrtp@ccrpc.org">cuuats-lrtp@ccrpc.org</a>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
