import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
  active?: boolean;
  subItems?: { href: string; label: string }[];
}

interface SideNavProps {
  items: NavLink[];
}

export default function SideNav({ items }: SideNavProps) {
  return (
    <nav aria-label="Secondary navigation">
      <ul className="usa-sidenav">
        {items.map((item, index) => (
          <li key={index} className="usa-sidenav__item">
            <Link 
              href={item.href} 
              className={item.active ? 'usa-current' : ''}
              aria-current={item.active ? 'page' : undefined}
            >
              {item.label}
            </Link>
            {item.subItems && item.subItems.length > 0 && (
              <ul className="usa-sidenav__sublist">
                {item.subItems.map((sub, subIndex) => (
                  <li key={subIndex} className="usa-sidenav__item">
                    <Link href={sub.href}>
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
