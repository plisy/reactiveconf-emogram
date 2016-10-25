import * as React from 'react';

import './Composer.css';
import { EmotionData } from '../../EmotionData';
import { PostData } from './Post';


interface ComposerProps {
    onPostCreated: (post: PostData) => void;
}

interface ComposerState {
    isLoading?: boolean;
}

class Composer extends React.Component<ComposerProps, ComposerState> {
    private input: HTMLInputElement;

    private imageURL: string | null;
    private emotions: EmotionData[] | null;

    constructor(props: ComposerProps) {
        super(props);

        this.state = {
            isLoading: false
        };
    }

    private onChange = () => {
        if (!this.input ||
            !this.input.files ||
            this.input.files.length === 0
        ) {
            return;
        }

        this.processImage(this.input.files[0]);
    };

    private processImage = (imageFile: File) => {

        this.setState({
            isLoading: true
        });

        console.log('Creating image data url.');

        // Get data URL from file we loaded
        const reader = new FileReader();
        reader.onloadend = () => {
            console.log('Created image data url.');

            this.imageURL = reader.result;

            this.tryPublishPost();
        };
        reader.readAsDataURL(imageFile);

        console.log('Sending image to API');

        // Send image to API
        const request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (request.readyState !== XMLHttpRequest.DONE) {
                return;
            }

            console.log('Sent image to API');

            try {
                const res = JSON.parse(request.response);
                this.emotions = res;

                this.tryPublishPost();
            } catch (err) {
                console.log('Response parsing failed.', err.message);
            }
        };

        request.open('POST', 'https://faceprocessor.azurewebsites.net/api/EmotionDetector');
        request.setRequestHeader('content-type', 'multipart/form-data');

        request.send(imageFile);
    };

    private tryPublishPost() {
        if (this.emotions && this.imageURL) {
            this.props.onPostCreated({
                timestamp: Date.now(),
                imageURL: this.imageURL,
                emotions: this.emotions
            });

            this.imageURL = null;
            this.emotions = null;

            this.setState({
                isLoading: false
            });
        }
    }

    render() {
        return (
            <div className="Composer">
                <div className="Composer-addButton">
                    <div className="Composer-plus">
                        +
                    </div>
                    {this.state.isLoading? 'Loading ...' : 'Add Photo'}
                    <input
                        type="file"
                        accept="image/*"
                        multiple={false}
                        disabled={this.state.isLoading}
                        onChange={this.onChange}
                        ref={input => { this.input = input; }}
                    />
                </div>

            </div>
        );
    }
}

export default Composer;
