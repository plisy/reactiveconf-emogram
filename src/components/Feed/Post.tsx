import * as React from 'react';
import { EmotionData } from '../../EmotionData';
import Card from './Card';
import EmoticonPicker from '../../EmoticonPicker';

export interface PostData {
    timestamp: number;
    imageURL: string;
    emotions: EmotionData[];
}

class Post extends React.Component<PostData, void> {

    private image: HTMLImageElement;
    private canvas: HTMLCanvasElement;
    private canvasContext: CanvasRenderingContext2D | null;

    componentWillMount(): void {
        this.image = document.createElement('img');
        this.image.src = this.props.imageURL;
    }

    componentDidMount() {
        let scaleFactor = 0;

        if (this.image.width >= this.image.height) {
            scaleFactor = this.canvas.width / this.image.width;
        } else {
            scaleFactor = this.canvas.height / this.image.height;
        }

        if (!this.canvasContext) {
            return;
        }

        this.canvasContext.scale(scaleFactor, scaleFactor);

        this.canvasContext.drawImage(this.image, 0, 0);


        this.props.emotions.forEach(emotion => {
            const smily = this.createImageComponent(EmoticonPicker.getEmoticonUrl(emotion));
            smily.onload = () => {
                this.canvasContext && this.canvasContext.drawImage(
                    smily,
                    emotion.faceRectangle.left,
                    emotion.faceRectangle.top,
                    emotion.faceRectangle.width,
                    emotion.faceRectangle.height,
                )
            }
        });
    }

    createImageComponent(url: string): HTMLImageElement {
        const img = document.createElement('img');
        img.src = url;
        return img;
    }

    componentWillUpdate(nextProps: PostData, nextState: void, nextContext: any): void {
        this.image = document.createElement('img');
        this.image.src = nextProps.imageURL;
    }

    private setCanvasRef = (canvas: HTMLCanvasElement) => {
        this.canvas = canvas;

        if (canvas) {
            this.canvasContext = canvas.getContext('2d');
        }
    };

    render() {
        console.log(this.props.emotions);

        return (
            <Card>
                <div className="Post">
                    <canvas width={640} height={640} ref={this.setCanvasRef} />
                </div>
            </Card>
        );
    }
}

export default Post;
