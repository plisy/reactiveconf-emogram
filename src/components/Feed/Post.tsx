import * as React from 'react';
import { EmotionData } from '../../EmotionData';
import Card from './Card';

export interface PostData {
    timestamp: number;
    imageURL: string;
    emotions: EmotionData[];
}

class Post extends React.Component<PostData, void> {
    render() {
        console.log(this.props.emotions);

        return (
            <Card>
                <div className="Post">
                    <img src={this.props.imageURL} alt=""/>
                </div>
            </Card>
        );
    }
}

export default Post;
