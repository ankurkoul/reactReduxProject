import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from '../actions/action'
import Main from './Main.component';

function mapStateToCompProps(storeData) {
    return {
        myposts: storeData.posts,
        mycomments: storeData.comments
    }
}

function mapDispatchToProps(dispatch) {
    //dispatch--->make $r.store.dispatch({AllActions})
    return bindActionCreators(allActions, dispatch);
}
//connect functions to mainComponent
var App = connect(mapStateToCompProps, mapDispatchToProps)(Main);
export default App;
