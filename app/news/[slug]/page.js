import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function NewsDetailPage({params}) {
    //params => next.js의 앱 라우터 환경에서만 정해져 있는 객체
    //params => 적 경로의 URL 매개변수를 포함하는 객체.
    //searchParams => 쿼리 문자열을 포함하는 객체.
    //children = > 현재 컴포넌트의 하위 컴포넌트를 나타냄, layout.js에서 동작하며, 현재 경로의 자식 페이지(page.js)를 렌더링

    console.log("params", params);

    const { slug } = await params; //[slug]
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === slug);
    console.log(newsItem);

    if(!newsItem) {
        notFound();
    }

    return (
        <article className="news-article">
            <header>
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}></img>
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
}