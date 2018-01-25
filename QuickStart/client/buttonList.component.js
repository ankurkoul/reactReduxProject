import React from 'react';
import ReactDOM from 'react-dom';
import { CustomButton } from './customButton.component';

export class ButtonList extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [10, 20, 30, 50];
        this.state = { buttons: this.buttons };

    }

    addItemHandler() {
        //access text box
        let box = ReactDOM.findDOMNode(this.refs.txtValue);

        //add val to collection====>either push/concat or spread operation

        this.setState({
            //  buttons: this.state.buttons.concat(box.value)
            buttons: [...this.state.buttons, + box.value],

        })
    }
    updateRender() {
        //access text box
        let box = ReactDOM.findDOMNode(this.refs.txtValue);
        this.setState({
            //  buttons: this.state.buttons.concat(box.value)
            valtext: box.value
        })
    }

    render() {

        var list = this.state.buttons.map((e, i) => <CustomButton initalCount={e} key={i} />);


        return <div>
            Value: <input type="text" ref="txtValue" onChange={this.updateRender.bind(this)} />
            <input type="button" className="btn btn-warning" value="Add" onClick={this.addItemHandler.bind(this)} />
            {this.state.valtext}
            {list}
        </div>
    }
}