import React, {Component} from 'react';

class Table extends Component {

    // constructor(props) {
    //     this.props;
    // }

    render() {
        return (
            <table class="table table-responsive">
            <thead class="thead-dark">
              <tr>
                <th scope="col">{this.props.title}</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" value=""></input></td>
                <td>Otto</td>
                <th scope="row"><input type="number"></input></th>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <th scope="row"><input type="number"></input></th>
              </tr>
              <tr>
                <td>Larry</td>
                <td>the Bird</td>
                <th scope="row"><input type="number"></input></th>
              </tr>
            </tbody>
          </table>
        )
    }
}

export default Table