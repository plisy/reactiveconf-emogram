import * as React from 'react';

import './Composer.css';

interface ComposerProps {
    onImageChanged: (imageURL: File | null) => void;
}

class Composer extends React.Component<ComposerProps, void> {
    private input: HTMLInputElement;

    private onChange = () => {
        if (!this.input || !this.input.files) {
            return;
        }

        if (this.input.files.length === 0) {
            this.props.onImageChanged(null);
            return;
        }

        this.props.onImageChanged(this.input.files[0]);
    };

    render() {
        return (
            <div className="Composer">
                <div className="Composer-addButton">
                    <div className="Composer-plus">
                        +
                    </div>
                    Add Photo
                    <input
                        type="file"
                        accept="image/*"
                        multiple={false}
                        onChange={this.onChange}
                        ref={input => { this.input = input; }}
                    />
                </div>

            </div>
        );
    }
}

export default Composer;
