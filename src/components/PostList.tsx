import React from 'react';
import PropsDefault from "./models";

type PostListProps = {
    posts: PropsDefault[];
    title: string;
};

const PostList: React.FC<PostListProps> = ({posts, title}) => {

    if (!posts.length) {
        return (
            <h3 style={{textAlign: 'center'}}>
                No posts found!
            </h3>
        )
    }

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>
                {title}
            </h2>
            <div className="list">
            {posts.map((post: PropsDefault) =>
                    <div className="list__element" key={post.id}>
                        <div className="list__content">
                            <strong> {post.title}</strong>
                            <div>
                                {post.body}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


export default PostList;
