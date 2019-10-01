import React, {Component} from 'react';

class Table extends Component {

    constructor(props) {
      super(props);
      // this.props;
      this.state = {
        rows: 1
      };
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      this.setState(prevState => {
        return {
          rows: prevState.rows + 1
        }
      })
    }

    render() {
      let tableRows = [];
      for(let i = 0; i < this.state.rows; i++) {
        tableRows.push(
          <tr>
          <th scope="col">{this.props.title}</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
        </tr>
        )
        }

        return (
          <div>

          <table className="table table-responsive">
            <thead className="thead-dark">
              <tr>
                <th scope="col">{this.props.title}</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </table>
          <button onClick={this.handleClick}>Add Row</button>
          </div>
        )
    }
}

export default Table