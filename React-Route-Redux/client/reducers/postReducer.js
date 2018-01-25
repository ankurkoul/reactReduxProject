//action reducers 
export default function posts(defStore = [], action) {
    //change store
    //here switch becoz all reducers get called of dispatch if action
    switch (action.type) {
        case 'INCREMENT_LIKES':
            console.log("within post reducers  INCREMENT_LIKE!")
            console.log(action.key)
            let postIndex = action.key;
            return [...defStore.slice(0, postIndex),
            { ...defStore[postIndex], likes: defStore[postIndex].likes + 1 },
            ...defStore.slice(postIndex + 1)
            ]
        //  return defStore;

        case 'DECREMENT_LIKES': {
            console.log("within post reducers  DECREMENT_LIKES!")
            let postIndex = action.index;
            return [
                ...defStore.slice(0, postIndex),
                {
                    ...defStore[postIndex],
                    likes: defStore[postIndex].likes - 1
                },
                ...defStore.slice(postIndex + 1)
            ]
        }
        case 'FETCH_POSTS': {
            console.log("=====within FETCH_POSTS reducers");
            defStore = action.response;
            return defStore;
        }

        default:
            console.log("default post !")
            return defStore;
    }

} 