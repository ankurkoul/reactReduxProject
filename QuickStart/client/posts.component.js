import React from 'react';
import ReactDOM from 'react-dom';
import { PostDetailsComponent } from './postDetails.component';


export class PostsComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.state = {
            postsData: []
        }
    }

    changeArray() {
        //find dom
        //  let box = ReactDOM.findDOMNode(this.refs.txtValue);
        var id = ReactDOM.findDOMNode(this.refs.txtValue).value;
        if (this.state.postsData.length < 2) {
            $.get('https://jsonplaceholder.typicode.com/posts', (res) => this.setState({ postsData: res })
            );
        }
        var dataList = this.state.postsData.filter((item, index) => { if (index == id) return item; });

        this.setState({ postsData: dataList });


    }
    componentDidMount() {

        $.get('https://jsonplaceholder.typicode.com/posts', (res) => this.setState({ postsData: res }));
    }

    render() {

        //create list
        //  var listComponent = this.state.postsData.map((post, i) => <li> {post.title}</li>);
        var listComponent = this.state.postsData.map((post, i) => <li><PostDetailsComponent data={post} key={i} /></li>);

        //render list
        return <div><h1>Posts</h1>
            Post id:  <input type="text" onChange={this.changeArray.bind(this)} ref="txtValue" />
            <ul>{listComponent}</ul>

        </div >
    }
}