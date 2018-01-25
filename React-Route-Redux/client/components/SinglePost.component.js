import React from 'react';
import PostDetails from './PostDetails.component';
import CommentDetails from './CommentsDetails.component';

export default class SinglePost extends React.Component {
    render() {
        // console.log(this.props.myposts);
        var id = this.props.params.codeId;
        var index = this.props.myposts.findIndex((p, i) => {
            return p.code == id
        })
        var currentPost = this.props.myposts.find((p, i) => {
            return p.code == id
        });

        //if no element give empty array
        var postComments = this.props.mycomments[id] || [];

        console.log(postComments);
        var list = postComments.map((p, i) => <CommentDetails data={p.text} key={i} />);
        console.log(list)
        return (<div>

            <PostDetails post={currentPost} index={index} {...this.props} />
            <ul > {list}</ul>
        </div>);
    }
}