import MainHeader from '@/components/main-header';

//(폴더명) => 라우트 그룹, 그룹별 layout.js를 사용할 수 있음.
export const metadata = {
    title: 'Next.js Page Routing & Rendering',
    description: 'Learn how to route to different pages.',
};

export default function ContentLayout({ children }) {
    return (
        <div id='page'>
            <MainHeader />
            {children}
        </div>
    );
}