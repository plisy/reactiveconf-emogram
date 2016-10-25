import * as React from 'react';
import logo from 'file!./logo.svg';

import Header from './Header/Header';
import Feed from './Feed/Feed';

class App extends React.Component<void, void> {
    render() {
        return (
            <div className="App">
                <Header />
                <Feed />
            </div>
        );
    }
}

export default App;
