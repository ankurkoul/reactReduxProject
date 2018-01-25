import React from 'react';
export class LifeCycleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { courseName: this.props.initalCount };
        this.increment = this.increment.bind(this);
    }

    componentDidMount() {

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