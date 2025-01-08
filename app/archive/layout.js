export default function ArchiveLayout({ archive, latest }) {
    //@ 다음 폴더명을 프로퍼티로 받음
    return (
        <div>
            <h1>News Archive</h1>
            <section id="archive-filter">{archive}</section>
            <section id="archive-latest">{latest}</section>
        </div>
    );
}
