//default.js => page.js와 동일하면 page.js 없어도 됨
//병렬 라우트에서 **default.js**는 해당 라우트 슬롯에 대한 기본 컴포넌트를 정의합니다.
//default.js는 해당 슬롯에 아무 것도 매핑되지 않을 경우, 기본적으로 렌더링되는 컴포넌트를 제공합니다.

//병렬 라우트 사용하는 경우 동일한 예)[year]가 없으면 새로고침시 에러 남 => 같은 [year] 생성하던지 default.js 생성

import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/new";

//@폴더명 => 병렬 라우트
export default function LatestNewsPage() {
    const latestNews = getLatestNews();

    return (
        <>
            <h2>Latest News</h2>
            <NewsList news={latestNews} />
        </>
    );
}
