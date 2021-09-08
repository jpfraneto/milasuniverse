import * as React from 'react';
import { Link } from 'gatsby';
import {
  navbar,
  navTitle,
  navLinks,
  navLinkItem,
  navLinkText,
} from './styles.module.css';

export const Navbar = () => {
  return (
    <nav className={navbar}>
      <Link to='/' className={navTitle}>
        Milas Universe
      </Link>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to='/' className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to='/about' className={navLinkText}>
            About
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to='/blog' className={navLinkText}>
            Blog
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to='/stories' className={navLinkText}>
            Stories
          </Link>
        </li>
      </ul>
    </nav>
  );
};
