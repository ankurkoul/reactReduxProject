import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Main from './components/Main.component';
import AllPosts from './components/AllPosts.component';
import SinglePost from './components/SinglePost.component';

import store from './store';
import App from './components/MainScript';

var router = <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={AllPosts}></IndexRoute>
            <Route path="/singlePost/:codeId" component={SinglePost}></Route>
        </Route>
    </Router>
</Provider>


ReactDOM.render(router, document.getElementById("content"));