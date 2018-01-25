//action creator 1.
//action is like event in jS

import axios from 'axios';
export function Increment(key) {
    return {
        type: 'INCREMENT_LIKES',
        key
    }
}


//action creator 2.
export function Decrement(index) {
    return {
        type: 'DECREMENT_LIKES',
        index
    }
}



//action creator 3.
export function AddComment() {
    return {
        type: 'ADD_COMMENT'
    }
}


//action creator 4.
export function RemoveComment() {
    return {
        type: 'REMOVE_COMMENT'
    }
}


export function fetchPostsData() {
    //CALL IT AT COMPONNET DID MOUNT OF CONTAINER COMPONENT

    //to execute delayed behaviour


    //ajax request
    console.log("FETCH_POSTS ajax request made=====>");
    var aPromise = axios.get("https://jsonplaceholder.typicode.com/posts");
    return (dispatch) => {
        aPromise.then(
            //on success dispatch 
            (response) => {
                dispatch({
                    type: 'FETCH_POSTS',
                    response: response.data
                })
            })
    }

}