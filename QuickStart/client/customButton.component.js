import React from 'react';
export class CustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: this.props.initalCount };
        this.increment = this.increment.bind(this);
    }
    increment() {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return <div>
            <input type="button" value={this.state.count} onClick={this.increment} />
        </div>
    }
}