import React from 'react';
import Link from 'next/link';
import styles from '../../styles/nav.module.css';

const Navbar = () => {
  return (
    <>
      <nav className={styles.cont}>
        <ul className={styles.main}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
