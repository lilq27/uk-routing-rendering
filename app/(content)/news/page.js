import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/new";
// import { DUMMY_NEWS } from "@/dummy-news";

export default async function NewsPage() {
    //nextjs에서 서버 내에서 호출 제공, 컴포넌트 내에서 직접 데이터을 가져옴
    const response = await fetch('http://localhost:8080/news');
    
    if(!response.ok) {
        throw new Error('Failed to fetch news.');
    }
    
    const news = await response.json();

    // let newsContent;
    // if(news) {
    //     newsContent = <NewsList news={news}></NewsList>
    // }
    //응답 데이터가 있기 전까지 jsx코드는 생성되지 않기 때문에 필요없음

    // const news2 = await getAllNews();

    return (
        <>
            <h1>News Page</h1>
            <NewsList news={news}></NewsList>   
            {/* <NewsList news={news2}></NewsList> */}
        </>
    );
}