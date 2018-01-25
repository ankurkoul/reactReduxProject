import React from 'react';
export class PostDetailsComponent extends React.Component {
    render() {
        return <div><h5>{this.props.data.title}</h5>
            <h6>{this.props.data.body}</h6>
        </div>
    }
}