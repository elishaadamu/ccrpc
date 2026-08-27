"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-navbar-header" role="banner">
      <div className="site-navbar-container">
        {/* Brand Title with Logo */}
        <Link href="/process/public-involvement" className="site-navbar-brand" aria-label="Long-Range Transportation Plan (PLAN2050) - Tri-Cities Area MPO (TCAMPO)">
          <img 
            src="https://input-v2.netlify.app/MPO_Logo.jpg" 
            alt="TCAMPO Logo" 
            className="site-navbar-logo"
          />
          <div className="site-navbar-titles">
            <span className="site-navbar-title-main">Long-Range Transportation Plan (PLAN2050)</span>
            <span className="site-navbar-title-sub">Tri-Cities Area MPO (TCAMPO)</span>
          </div>
        </Link>
      </div>
    </header>
  );
}
