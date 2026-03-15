"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDown, X, Menu } from 'lucide-react';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.usa-nav')) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="usa-header usa-header--extended" role="banner">
      <div className="usa-navbar">
        <div className="usa-logo" id="extended-logo">
          <em className="usa-logo__text">
            <Link href="/" title="Home" aria-label="Home">
              Long Range Transportation Plan 2045
            </Link>
          </em>
        </div>
        <button 
          className="usa-menu-btn" 
          onClick={() => setMobileMenuOpen(true)}
        >
          Menu
        </button>
      </div>

      <nav role="navigation" className={`usa-nav ${mobileMenuOpen ? 'is-visible' : ''}`}>
        <div className="usa-nav__inner">
          <button 
            className="usa-nav__close" 
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <ul className="usa-nav__primary usa-accordion">
            <li className="usa-nav__primary-item">
              <button 
                className={`usa-accordion__button usa-nav__link display-flex flex-align-center ${activeMenu === 'overview' ? 'usa-current' : ''}`}
                aria-expanded={activeMenu === 'overview'}
                aria-controls="extended-nav-section-0"
                onClick={() => toggleMenu('overview')}
              >
                <span>Overview</span>
                <ChevronDown size={16} className={`margin-left-1 transition-transform ${activeMenu === 'overview' ? 'rotate-180' : ''}`} />
              </button>
              <div id="extended-nav-section-0" className={`usa-nav__submenu ${activeMenu === 'overview' ? '' : 'display-none'}`} hidden={activeMenu !== 'overview'}>
                <ul className="usa-nav__submenu-list">
                  <li className="usa-nav__submenu-item">
                    <Link href="/overview/introduction" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Executive Summary</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/overview/historical" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>History</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="usa-nav__primary-item">
              <button 
                className={`usa-accordion__button usa-nav__link display-flex flex-align-center ${activeMenu === 'conditions' ? 'usa-current' : ''}`}
                aria-expanded={activeMenu === 'conditions'}
                aria-controls="extended-nav-section-1"
                onClick={() => toggleMenu('conditions')}
              >
                <span>Existing Conditions</span>
                <ChevronDown size={16} className={`margin-left-1 transition-transform ${activeMenu === 'conditions' ? 'rotate-180' : ''}`} />
              </button>
              <div id="extended-nav-section-1" className={`usa-nav__submenu ${activeMenu === 'conditions' ? '' : 'display-none'}`} hidden={activeMenu !== 'conditions'}>
                <ul className="usa-nav__submenu-list">
                  <li className="usa-nav__submenu-item">
                    <Link href="/existing-conditions/demographics" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Demographics</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/existing-conditions/land" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Land Use</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/existing-conditions/environment" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Environment</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/existing-conditions/health" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Health</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/existing-conditions/transportation" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Transportation</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="usa-nav__primary-item">
              <button 
                className={`usa-accordion__button usa-nav__link display-flex flex-align-center ${activeMenu === 'goals' ? 'usa-current' : ''}`}
                aria-expanded={activeMenu === 'goals'}
                aria-controls="extended-nav-section-2"
                onClick={() => toggleMenu('goals')}
              >
                <span>Goals</span>
                <ChevronDown size={16} className={`margin-left-1 transition-transform ${activeMenu === 'goals' ? 'rotate-180' : ''}`} />
              </button>
              <div id="extended-nav-section-2" className={`usa-nav__submenu ${activeMenu === 'goals' ? '' : 'display-none'}`} hidden={activeMenu !== 'goals'}>
                <ul className="usa-nav__submenu-list">
                  <li className="usa-nav__submenu-item">
                    <Link href="/goals/overview" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Measuring Progress</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/goals/safety" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Safety</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/goals/multicon" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Multimodal Connectivity</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/goals/equity" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Equity</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/goals/economy" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Economy</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/goals/environment" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Environment</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="usa-nav__primary-item">
              <button 
                className={`usa-accordion__button usa-nav__link display-flex flex-align-center ${activeMenu === 'vision' ? 'usa-current' : ''}`}
                aria-expanded={activeMenu === 'vision'}
                aria-controls="extended-nav-section-3"
                onClick={() => toggleMenu('vision')}
              >
                <span>2045 Vision</span>
                <ChevronDown size={16} className={`margin-left-1 transition-transform ${activeMenu === 'vision' ? 'rotate-180' : ''}`} />
              </button>
              <div id="extended-nav-section-3" className={`usa-nav__submenu ${activeMenu === 'vision' ? '' : 'display-none'}`} hidden={activeMenu !== 'vision'}>
                <ul className="usa-nav__submenu-list">
                  <li className="usa-nav__submenu-item">
                    <Link href="/vision/futureprojects" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Future Projects</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/vision/model" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Modeling</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/vision/funding" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Funding</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/vision/implementation" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Implementation</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="usa-nav__primary-item">
              <button 
                className={`usa-accordion__button usa-nav__link display-flex flex-align-center ${activeMenu === 'process' ? 'usa-current' : ''}`}
                aria-expanded={activeMenu === 'process'}
                aria-controls="extended-nav-section-4"
                onClick={() => toggleMenu('process')}
              >
                <span>Public Involvement</span>
                <ChevronDown size={16} className={`margin-left-1 transition-transform ${activeMenu === 'process' ? 'rotate-180' : ''}`} />
              </button>
              <div id="extended-nav-section-4" className={`usa-nav__submenu ${activeMenu === 'process' ? '' : 'display-none'}`} hidden={activeMenu !== 'process'}>
                <ul className="usa-nav__submenu-list">
                  <li className="usa-nav__submenu-item">
                    <Link href="/process/public-involvement" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Overview</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/process/round-one" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Phase One Public Outreach</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/process/round-2" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Phase Two Public Outreach</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/process/round-three" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Phase Three Public Outreach</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="usa-nav__primary-item">
              <button 
                className={`usa-accordion__button usa-nav__link display-flex flex-align-center ${activeMenu === 'appendices' ? 'usa-current' : ''}`}
                aria-expanded={activeMenu === 'appendices'}
                aria-controls="extended-nav-section-5"
                onClick={() => toggleMenu('appendices')}
              >
                <span>Appendices</span>
                <ChevronDown size={16} className={`margin-left-1 transition-transform ${activeMenu === 'appendices' ? 'rotate-180' : ''}`} />
              </button>
              <div id="extended-nav-section-5" className={`usa-nav__submenu ${activeMenu === 'appendices' ? '' : 'display-none'}`} hidden={activeMenu !== 'appendices'}>
                <ul className="usa-nav__submenu-list">
                  <li className="usa-nav__submenu-item">
                    <Link href="/data/tpm" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>System Performance Report</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/data/models" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>Data and Models</Link>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <Link href="/data/tdm" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>TDM Documentation</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="usa-nav__secondary">
            <ul className="usa-nav__secondary-links">
              <li className="usa-nav__secondary-item">
                <a href="https://ccrpc.org/divisions/planning_and_development/transportation/index.php"> CUUATS Home Page </a>
              </li>
              <li className="usa-nav__secondary-item">
                <Link href="/contact" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="usa-overlay is-visible" onClick={() => setMobileMenuOpen(false)}></div>
      )}
    </header>
  );
}
