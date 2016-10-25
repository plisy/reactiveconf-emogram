import * as React from 'react';

import './Card.css';

class Card extends React.Component<void, void> {

    render() {
        return (
            <div className="Card">
                {this.props.children}
            </div>
        );
    }
}

export default Card;
