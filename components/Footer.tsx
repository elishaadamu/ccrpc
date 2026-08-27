"use client";

import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

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
                  src="https://input-v2.netlify.app/MPO_Logo.jpg" 
                  alt="TCAMPO Logo" 
                  className="site-footer-logo"
                />
              </div>
              <h3 className="site-footer-agency-title">
                Tri-Cities Area MPO (TCAMPO)
              </h3>
              <p className="site-footer-agency-desc">
                TCAMPO is one of the Metropolitan Planning Organizations (MPOs) responsible for carrying out the federally mandated continuous, comprehensive, and cooperative (3-C) transportation planning process for the Richmond urbanized area.
              </p>
            </div>



            {/* Column 3: Contact & Info */}
            <div className="site-footer-col">
              <h4 className="site-footer-section-title">Contact Us</h4>
              <div className="site-footer-contact-items">
                <div className="site-footer-contact-item">
                  <MapPin size={18} className="site-footer-icon" />
                  <span>Crater Planning District Commission<br />1964 Wakefield Street<br />Petersburg, VA 23805</span>
                </div>
                <div className="site-footer-contact-item">
                  <Phone size={18} className="site-footer-icon" />
                  <a href="tel:+18048611666" className="site-footer-contact-link">804-861-1666</a>
                </div>
                <div className="site-footer-contact-item">
                  <Mail size={18} className="site-footer-icon" />
                  <a href="mailto:office@craterpdc.org" className="site-footer-contact-link">office@craterpdc.org</a>
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
            © {new Date().getFullYear()} Tri-Cities Area MPO (TCAMPO). All rights reserved.
          </p>
          <div className="site-footer-bottom-links">
            <span>Long-Range Transportation Plan (PLAN2050)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
