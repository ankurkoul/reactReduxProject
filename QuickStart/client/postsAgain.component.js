import React from 'react';
import ReactDOM from 'react-dom';
import { PostDetailsComponent } from './postDetails.component';

export class PostsComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.state = {
            postsData: [],
            currentPostsData: []
        }
    }

    changeArray() {
        //find dom
        //  let box = ReactDOM.findDOMNode(this.refs.txtValue);
        var idValue = ReactDOM.findDOMNode(this.refs.txtValue);

        var dataList = this.state.postsData.filter((item, index) => {
            return (item.id == (idValue.value))
        });
        console.log(this.state.currentPostsData)
        this.setState({ currentPostsData: [...this.state.currentPostsData, dataList] });


    }
    componentDidMount() {

        $.get('https://jsonplaceholder.typicode.com/posts', (res) => this.setState({
            postsData: res,

        }));
    }

    render() {

        //create list
        //  var listComponent = this.state.postsData.map((post, i) => <li> {post.title}</li>);
        var listComponent = this.state.currentPostsData.map((post, i) => <li><PostDetailsComponent data={post} key={i} /></li>);

        //render list
        return <div><h1>Posts</h1>
            post id:  <input type="text" onChange={this.changeArray.bind(this)} ref="txtValue" />
            <ul>{listComponent}</ul>

        </div >
    }
}