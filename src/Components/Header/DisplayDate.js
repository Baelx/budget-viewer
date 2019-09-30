import React, {Component} from 'react';

class DisplayDate extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    
    render() {
        return (
            <div class="">{this.state.date.toLocaleDateString()}</div>
        )
    }
}

export default DisplayDate;