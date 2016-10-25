import * as React from 'react';

import Card from './Card';
import Composer from './Composer';

class Feed extends React.Component<void, void> {

    private handleOnImageChange = (imageFile: File) => {

    };

    render() {

        return (
            <main>
                <Card>
                    <Composer onImageChanged={this.handleOnImageChange} />
                </Card>
            </main>
        )
    }
}

export default Feed;
