import React, {Component} from 'react';

import DisplayDate from './DisplayDate';

class Header extends Component {
    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <h1 class="navbar-brand">Budget Viewer</h1>

            <div class="navbar" id="navbarNav">
                    <DisplayDate />
            </div>
            </nav>
        )
    }
}

export default Header