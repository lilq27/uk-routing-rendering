import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsForYear } from "@/lib/new";

export default async function FilteredNewsPage({params}) {
    const { year } = await params;
    const news = getNewsForYear(year);
    return (
        <NewsList news={news}></NewsList>
    );
}