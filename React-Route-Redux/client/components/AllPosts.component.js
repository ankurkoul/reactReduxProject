import React from 'react';
import PostDetails from './PostDetails.component';
export default class AllPosts extends React.Component {
    render() {
        //   console.log(this.props.myposts);
        var list = this.props.myposts.map((e, i) => <PostDetails post={e} key={i}
            index={i} {...this.props} />);
        return <div>

            {list}
        </div>
    }
}