import React from 'react';


const divStyle = {
    margin: '40px',
    border: '5px solid black'
};

export class ShopProductComponent extends React.Component {
    doSomething() {
        //alert('it works!');
        var data = prompt('any comments');

    }
    render() {
        return (<tr>
            <td style={divStyle} onClick={this.doSomething}>{this.props.details.name}</td>
            <td>{this.props.details.price}</td>
            <td>{this.props.details.qty}</td>
            <td><a href="">{this.props.details.img}</a></td>
        </tr>);
    }
}