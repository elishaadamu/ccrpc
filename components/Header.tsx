"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isPathActive = (path: string) => {
    if (!pathname) return false;
    return pathname === path || pathname.startsWith(path + '/');
  };

  return (
    <header className="site-navbar-header" role="banner">
      <div className="site-navbar-container">
        {/* Brand Logo & Title */}
        <Link href="/process/public-involvement" className="site-navbar-brand" aria-label="LRTP 2045 - Public Involvement">
          <img 
            src="/lrtp2045/img/cuuats-logo.svg" 
            alt="CUUATS Logo" 
            className="site-navbar-logo"
          />
          <div className="site-navbar-titles">
            <span className="site-navbar-title-main">Long Range Transportation Plan 2045</span>
            <span className="site-navbar-title-sub">Champaign-Urbana Urbanized Area (CUUATS)</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="site-navbar-desktop-nav" aria-label="Main Navigation">
          <ul className="site-navbar-nav-list">
            <li>
              <Link 
                href="/process/public-involvement"
                className={`site-navbar-nav-link ${isPathActive('/process') ? 'is-active' : ''}`}
              >
                Public Involvement
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="site-navbar-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`site-navbar-mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="site-navbar-mobile-header">
          <div className="site-navbar-mobile-brand">
            <img 
              src="/lrtp2045/img/cuuats-logo.svg" 
              alt="CUUATS Logo" 
              className="site-navbar-mobile-logo"
            />
            <span className="site-navbar-mobile-title">LRTP 2045</span>
          </div>
          <button
            type="button"
            className="site-navbar-mobile-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="site-navbar-mobile-nav">
          <ul className="site-navbar-mobile-list">
            <li>
              <Link 
                href="/process/public-involvement"
                className={`site-navbar-mobile-link ${isPathActive('/process') ? 'is-active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Public Involvement
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div 
          className="site-navbar-mobile-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
