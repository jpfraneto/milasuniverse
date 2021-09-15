import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  navbar,
  toggleNavBtn,
  navTitle,
  navLinks,
  navLinkItem,
  navLinkText,
  toggledNavList,
  toggledNavItem,
  toggledList,
} from './styles.module.css';
import { CgMenuBoxed } from 'react-icons/cg';

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      {clicked ? (
        <nav className={navbar}>
          <ul className={toggledNavList}>
            <li>
              <Link to='/' className={navTitle}>
                Bienvenida Mila
              </Link>
              <span
                tabIndex={0}
                role='button'
                onKeyDown={() => {
                  setClicked(!clicked);
                }}
                onClick={() => {
                  setClicked(!clicked);
                }}
                className={toggleNavBtn}
              >
                <CgMenuBoxed style={{ color: 'grey' }} />
              </span>
            </li>
            <div className={toggledList}>
              <li className={toggledNavItem}>
                <Link to='/' className={navLinkText}>
                  Inicio
                </Link>
              </li>

              <li className={toggledNavItem}>
                <Link to='/blog' className={navLinkText}>
                  Blog
                </Link>
              </li>
              <li className={toggledNavItem}>
                <Link to='/cuarentena' className={navLinkText}>
                  Cuarentena
                </Link>
              </li>
              <li className={toggledNavItem}>
                <Link to='/stories' className={navLinkText}>
                  Historias
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      ) : (
        <nav className={navbar}>
          <Link to='/' className={navTitle}>
            Bienvenida Mila
          </Link>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to='/' className={navLinkText}>
                Inicio
              </Link>
            </li>

            <li className={navLinkItem}>
              <Link to='/blog' className={navLinkText}>
                Blog
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to='/cuarentena' className={navLinkText}>
                Cuarentena
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to='/stories' className={navLinkText}>
                Historias
              </Link>
            </li>
          </ul>
          <span
            role='button'
            tabIndex={0}
            onKeyDown={() => {
              setClicked(!clicked);
            }}
            onClick={() => {
              setClicked(!clicked);
            }}
            className={toggleNavBtn}
          >
            <CgMenuBoxed />
          </span>
        </nav>
      )}
    </div>
  );
};
