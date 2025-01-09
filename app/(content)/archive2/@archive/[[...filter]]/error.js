'use client';

export default function FilterError({error}) {
    //error = > Next.js가 자동으로 제공하는 객체
    return (
        <>
        <div id="error">
            <h2>An error occurred!</h2>
            <p>{error.message}</p>
        </div>
        </>
    );
}