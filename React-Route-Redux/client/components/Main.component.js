import React from 'react';

export default class Main extends React.Component {


    componentDidMount() {
        //since all actions are already binded to connect
        this.props.fetchPostsData();
    }
    render() {
        console.log(this.props.myposts);
        return <div>
            <h1>Main Component</h1>
            {React.cloneElement(this.props.children, this.props)}
        </div>
    }
}