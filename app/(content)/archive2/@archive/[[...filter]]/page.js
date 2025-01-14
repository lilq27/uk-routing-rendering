import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/new";
import Link from "next/link";

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

    let links = getAvailableNewsYears();
    let news;
    if(selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    if(selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }
    
    let newsContent = <p>No news found for the selected period.</p>;
    if(news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }

    if(
        (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
        (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
        //+selectedMonth => 문자열에서 넘버로 형변환
    ) {
        throw new Error('Invalid filter.');
    }

    return (
        <>
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map(link => {
                        const href = selectedYear ? 
                            `/archive2/${selectedYear}/${link}` :
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
        {newsContent}
        </>
    );
}