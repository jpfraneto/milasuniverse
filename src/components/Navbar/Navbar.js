import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  navbar,
  toggleNavBtn,
  navTitle,
  navLinks,
  navLinkItem,
  navLinkText,
  btnTogglee,
  toggledNavList,
  toggledNavItem,
  toggledList,
  milaName,
} from './styles.module.css';
import { CgMenuBoxed } from 'react-icons/cg';

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className={navbar}>
      <Link to='/' className={navTitle}>
        Bienvenida Mila ♡
      </Link>
    </nav>
  );
};
