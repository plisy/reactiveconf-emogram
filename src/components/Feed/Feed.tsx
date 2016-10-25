import * as React from 'react';

import Card from './Card';
import Composer from './Composer';
import { PostData, default as Post } from './Post';

interface FeedState {
    posts?: PostData[];
}

class Feed extends React.Component<void, FeedState> {

    constructor() {
        super();

        this.state = {
            posts: []
        };
    }

    private handleOnImageChange = (post: PostData) => {
        this.setState({
            posts: [ post, ...this.state.posts || [] ]
        });
    };

    render() {

        const posts = this.state.posts && this.state.posts.map(post => (
            <Post key={post.timestamp} {...post} />
        ));

        return (
            <main>
                <Card>
                    <Composer onPostCreated={this.handleOnImageChange} />
                </Card>
                {posts}
            </main>
        )
    }
}

export default Feed;
