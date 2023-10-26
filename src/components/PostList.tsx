import React from 'react';
import PropsDefault from "./model";

type PostListProps = {
    posts: PropsDefault[];
    title: string;
};

const PostList: React.FC<PostListProps> = ({posts, title}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post,) =>
                    <div className="post" key={post.id}>
                        <div className="post__content">
                            <strong> {post.title}</strong>
                            <div>
                                {post.body}
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};


export default PostList;
