import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/new";
import Link from "next/link";
import { Suspense } from "react";

async function FilterHeader({year, month}) {
    const availableYears = await getAvailableNewsYears();
    let links = availableYears;

    if(
        (year && !availableYears.includes(year)) ||
        (month && !getAvailableNewsMonths(year).includes(month))
        //+month => 문자열에서 넘버로 형변환
    ) {
        throw new Error('Invalid filter.');
    }

    if(year && !month) {
        links = getAvailableNewsMonths(year);
    }

    if(year && month) {
        links = [];
    }

    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map(link => {
                        const href = year ? 
                            `/archive2/${year}/${link}` :
                            `/archive2/${link}`;

                        return (
                            <li key={link}>
                                <Link href={href}>{link}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
 
async function FilteredNews({year, month}) {
    let news;

    if(year && !month) {
        news = await getNewsForYear(year);
    }

    if(year && month) {
        news = await getNewsForYearAndMonth(year, month);
    }

    let newsContent = <p>No news found for the selected period.</p>;
    if(news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }

    return newsContent;
}

//catch-all 라우트
export default async function FilteredNewsPage({params}) {
    const { filter } = await params;
    console.log('filter', filter);
    //...filter => 일치하는 모든 경로 세그먼트의 배열을 담음
    //해당 경로와 하위 모든 경로를 처리하며, URL의 나머지 경로를 배열로 캡처
    //[폴더명]은 단일경로, [...폴더명]은 하위경로까지 동적 처리

    const selectedYear = filter?.[0];
    // ? => filter가 null 또는 undefined일 경우: undefined를 반환하고, 오류를 발생시키지 않음
    //filter?.[0] === filter ? filter[0] : undefined
    
    const selectedMonth = filter?.[1];

    return (
        <>
        <Suspense fallback={<p>Loading filter...</p>}>
            <FilterHeader year={selectedYear} month={selectedMonth} />
        </Suspense>
        <Suspense fallback={<p>Loading news...</p>}>
            <FilteredNews year={selectedYear} month={selectedMonth} />
        </Suspense>
        </>
    );
}