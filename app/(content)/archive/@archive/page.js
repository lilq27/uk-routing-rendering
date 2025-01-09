import { getAvailableNewsYears } from "@/lib/new";
import Link from "next/link";

//@폴더명 => 병렬 라우트
export default function ArchivePage() {
    const links = getAvailableNewsYears();

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map(link => 
                            <li key={link}>
                                <Link href={`/archive/${link}`}>{link}</Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
        </>
    );
}