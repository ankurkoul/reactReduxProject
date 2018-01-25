import React from 'react';


export default class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = { comment: ' ' }
    }
    doSomething() {
        //alert('it works!');
        var data = prompt('any comments');
        this.setState({ comment: 'clicked' });
    }

    render() {

        return (
            <form>
                {this.state.comment}
                <input type="submit" onClick={this.doSomething} />
            </form>
        );
    }
}