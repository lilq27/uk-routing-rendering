'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({href, gubun, children}) {

    const path = usePathname();
    console.log("gubun", gubun);

    let classActive = path.startsWith(href) ? 'active' : '';
    if(gubun !== undefined) {
        classActive = (path.startsWith(href) && !path.startsWith(href + gubun)) ? 'active' : '';
    }

    return (
        <Link
            href={href}
            className={classActive}
        >{children}
        </Link>
    );
}