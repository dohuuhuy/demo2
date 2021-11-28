import React, { Children } from 'react';
import Link from 'next/link'
import styles from './Layout.module.css';

const Layout = (props : any) => {
    return (
        <section>
            <header className={styles.header}>
                <ul className={styles.listMenu}>
                    <li><Link href='/login'><a>login</a></Link></li>
                    <li><Link href='/register'><a >register</a></Link></li>
                </ul>
            </header>
            <main className={styles.mainContent}>
            {props.children}
            </main >
            <footer className={styles.footer}>
                <p>
                    Copy right huyi
                </p>
            </footer>
        </section>
    );
};

export default Layout