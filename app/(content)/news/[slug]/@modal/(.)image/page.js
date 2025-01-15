'use client';

import ModalBackdrop from "@/components/modal-backdrop";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";
import React from "react";


//가로채기 라우트 => ()가로챌 폴더명
//(경로)폴더명
//(.)image => 같은 폴더 내에 있는 image폴더 (폴더 경로x => 실제 렌더링 되는 URL 경로)
//병렬 라우트 사용시 @폴더 경로는 실제 렌더링시 무시됨
export default function InterceptedImagePage({params}) {

    const router = useRouter();
    const { slug } = React.use(params); 
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === slug);

    if(!newsItem) {
        notFound();
    }

    return (
        <>
        <ModalBackdrop />
        <dialog className="modal" open>
            <div className="fullscreen-image">
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
            </div>
        </dialog>
        </>
    )
}