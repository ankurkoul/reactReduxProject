import React from 'react';
import { Link } from 'react-router';
const style = {
    border: "2px solid black",
    padding: "20px",
    margin: "10px"
}
export default class CommentDetails extends React.Component {
    render() {
        return <div>
            {this.props.data}
        </div>
    }
}