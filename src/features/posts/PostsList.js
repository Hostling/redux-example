import React from "react";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { postDeleted } from "./postsSlice";

export const PostsList = () => {
    const posts = useSelector((state) => state.posts);

    // const dispatch = useDispatch();

    // const onDelete = (e) => {
    //     dispatch(postDeleted({ id: e.target.name }));
    // };

    const renderedPosts = posts.map((post) => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            {/*<button onClick={onDelete} name={post.id}>*/}
            {/*    Delete*/}
            {/*</button>*/}
        </article>
    ));

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
};
