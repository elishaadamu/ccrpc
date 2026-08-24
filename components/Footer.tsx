"use client";

import Link from 'next/link';
import { Facebook, Twitter, Youtube, Rss, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      {/* Back to top banner */}
      <div className="site-footer-top-bar">
        <div className="site-footer-container flex justify-end">
          <button 
            onClick={scrollToTop}
            className="site-footer-back-to-top"
            aria-label="Return to top of page"
          >
            <span>Return to top</span>
            <ArrowUp size={16} className="margin-left-1" />
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="site-footer-main">
        <div className="site-footer-container">
          <div className="site-footer-grid">
            {/* Column 1: Organization & Mission */}
            <div className="site-footer-col site-footer-brand-col">
              <div className="site-footer-logo-wrapper">
                <img 
                  src="/lrtp2045/img/cuuats-logo.svg" 
                  alt="CUUATS Logo" 
                  className="site-footer-logo"
                />
              </div>
              <h3 className="site-footer-agency-title">
                Champaign Urbana Urbanized Area Transportation Study
              </h3>
              <p className="site-footer-agency-desc">
                CUUATS is the Metropolitan Planning Organization (MPO) responsible for the federally mandated continuous, comprehensive, and cooperative transportation planning process in the Champaign-Urbana area.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="site-footer-col">
              <h4 className="site-footer-section-title">Plan Navigation</h4>
              <ul className="site-footer-nav-list">
                <li>
                  <Link href="/" className="site-footer-nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/process/public-involvement" className="site-footer-nav-link">
                    Public Involvement
                  </Link>
                </li>
                <li>
                  <Link href="/data/tpm" className="site-footer-nav-link">
                    System Performance Report
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Info */}
            <div className="site-footer-col">
              <h4 className="site-footer-section-title">Contact Us</h4>
              <div className="site-footer-contact-items">
                <div className="site-footer-contact-item">
                  <MapPin size={18} className="site-footer-icon" />
                  <span>Champaign County Regional Planning Commission<br />1776 E Washington St, Urbana, IL 61802</span>
                </div>
                <div className="site-footer-contact-item">
                  <Phone size={18} className="site-footer-icon" />
                  <a href="tel:+12173283313" className="site-footer-contact-link">(217) 328-3313</a>
                </div>
                <div className="site-footer-contact-item">
                  <Mail size={18} className="site-footer-icon" />
                  <a href="mailto:cuuats-lrtp@ccrpc.org" className="site-footer-contact-link">cuuats-lrtp@ccrpc.org</a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="site-footer-social-wrapper">
                <h5 className="site-footer-social-heading">Connect With Us</h5>
                <div className="site-footer-social-icons">
                  <a 
                    href="https://www.facebook.com/CUUATS/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="site-footer-social-btn"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a 
                    href="https://twitter.com/cuuats" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="site-footer-social-btn"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                  <a 
                    href="https://www.youtube.com/channel/UCUuJgNI211l8bczez5T5BkQ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="site-footer-social-btn"
                    aria-label="YouTube"
                  >
                    <Youtube size={18} />
                  </a>
                  <a 
                    href="/lrtp2045/index.xml" 
                    className="site-footer-social-btn"
                    aria-label="RSS Feed"
                  >
                    <Rss size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="site-footer-bottom-bar">
        <div className="site-footer-container site-footer-bottom-flex">
          <p className="site-footer-copyright">
            © {new Date().getFullYear()} Champaign County Regional Planning Commission (CCRPC) & CUUATS. All rights reserved.
          </p>
          <div className="site-footer-bottom-links">
            <span>Long Range Transportation Plan 2045</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
