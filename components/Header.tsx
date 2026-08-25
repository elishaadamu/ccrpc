"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigation } from '@/lib/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isSectionActive = (baseUrl: string) => {
    if (!pathname) return false;
    return pathname.startsWith(baseUrl);
  };

  const isLinkActive = (href: string) => {
    if (!pathname) return false;
    return pathname === href || pathname === `${href}/`;
  };

  const handleMouseEnter = (title: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(title);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 250);
  };

  // Only show Public Involvement in the header navbar dropdown
  const headerNav = navigation.filter(
    (section) => section.title === "Public Involvement"
  );

  return (
    <header className="site-navbar-header" role="banner">
      <div className="site-navbar-container">
        {/* Brand Title */}
        <Link href="/process/public-involvement" className="site-navbar-brand" aria-label="LRTP 2045 - Public Involvement">
          <div className="site-navbar-titles">
            <span className="site-navbar-title-main">Long Range Transportation Plan 2045</span>
            <span className="site-navbar-title-sub">Champaign-Urbana Urbanized Area (CUUATS)</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="site-navbar-desktop-nav" aria-label="Main Navigation">
          <ul className="site-navbar-nav-list">
            {headerNav.map((section) => {
              const active = isSectionActive(section.baseUrl);
              const isOpen = openDropdown === section.title;

              return (
                <li 
                  key={section.title}
                  className="site-navbar-dropdown-container"
                  onMouseEnter={() => handleMouseEnter(section.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={`site-navbar-dropdown-toggle ${active ? 'is-active' : ''} ${isOpen ? 'is-open' : ''}`}
                    onClick={() => setOpenDropdown(isOpen ? null : section.title)}
                    aria-expanded={isOpen}
                  >
                    <span>{section.title}</span>
                    <ChevronDown size={16} className={`dropdown-chevron ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="site-navbar-dropdown-menu">
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`site-navbar-dropdown-item ${isLinkActive(link.href) ? 'is-current' : ''}`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
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
            {headerNav.map((section) => (
              <li key={section.title} className="site-navbar-mobile-section">
                <div className="site-navbar-mobile-section-title">
                  {section.title}
                </div>
                <ul className="site-navbar-mobile-sublist">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className={`site-navbar-mobile-link ${isLinkActive(link.href) ? 'is-active' : ''}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
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

