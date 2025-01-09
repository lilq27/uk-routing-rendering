'use client';

import Link from 'next/link';
import NavLink from './nav-link';

export default function MainHeader() {

    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">NextNews</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink href="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink href="/archive" gubun={2}>Archive</NavLink>
                    </li>
                    <li>
                        <NavLink href="/archive2">Archive2</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}