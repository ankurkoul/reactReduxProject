import React from 'react';
import { Link } from 'react-router';
const style = {
    border: "2px solid black",
    padding: "20px",
    margin: "10px"
}
export default class PostDetails extends React.Component {
    render() {

        return <div style={style} className="" >
            <Link to={`/singlePost/${this.props.post.code}`}>  <img src={this.props.post.display_src} />
                <h3>{this.props.post.caption}</h3>
            </Link>
            <button type="button" className="btn btn-default btn-sm" onClick={this.props.Increment.bind(this, this.props.index)} >
                LIKE  &nbsp;<i className="fa fa-thumbs-up" aria-hidden="true"></i>
                {this.props.post.likes}
            </button>

            &nbsp;
            <button type="button" className="btn btn-default btn-sm" onClick={this.props.Decrement.bind(this, this.props.index)} >
                DISLIKE  &nbsp;<i className="fa fa-thumbs-down" aria-hidden="true"></i>

            </button>
        </div >
    }
}