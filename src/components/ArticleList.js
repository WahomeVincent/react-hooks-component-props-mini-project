import React from "react";

function ArticleList(props) {
    return (
        <>
            <main>
                {props.posts.map(post => {
                   return (
                   <div key={post.id}>
                        <p>{post.title}</p>
                        <p>{post.date}</p>
                        <p>{post.preview}</p>
                        <p>{post.minutes}</p>
                   </div>
                   )
                })}
            </main>
        </>
    )
}

export default ArticleList;