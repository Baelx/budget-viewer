import React, {Component} from 'react';

import DisplayDate from './DisplayDate';

class Header extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand">Budget Viewer</h1>

            <div className="navbar" id="navbarNav">
                    <DisplayDate />
            </div>
            </nav>
        )
    }
}

export default Header