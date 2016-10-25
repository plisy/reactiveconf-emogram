import * as React from 'react';

import "./Header.css";

class Header extends React.Component<void, void> {
    render() {
        return (
            <nav className="Header">
                <img
                    src="https://static-asm.secure.skypeassets.com/pes/v1/emoticons/emo/views/default_160?etag=1299d1cc-bf60-44f1-9947-2dcdd886030b"
                    alt="Logo"
                    className="Header-logo"
                />
                <div className="Header-title">
                    Emogram
                </div>
            </nav>
        )
    }
}

export default Header;
