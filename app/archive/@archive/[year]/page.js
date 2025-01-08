import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsForYear } from "@/lib/new";

export default function FilteredNewsPage({params}) {
    const newsYear = params.year;
    const news = getNewsForYear(newsYear);
    return (
        <NewsList news={news}></NewsList>
    );
}