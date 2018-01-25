import React from 'react';

export class ProductComponent extends React.Component {
    render() {
        //1.React with prop
        //    return (<h1> {this.props.details.name} {this.props.details.price}  </h1>);

        //2.React with prop as index
        return (<h1> {this.props.index} .{this.props.details.name} {this.props.details.price}  </h1>);
    }
}