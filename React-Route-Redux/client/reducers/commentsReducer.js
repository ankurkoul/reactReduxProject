//action reducers 
export default function comments(defStore = [], action) {
    //change store
    switch (action.type) {
        case 'ADD_COMMENT':
            console.log("within comments reducers  ADD_COMMENT!");
            return defStore;

        case 'REMOVE_COMMENT':
            console.log("within comments reducers REMOVE_COMMENT !");
            return defStore;

        default:
            console.log("default comments !");
            return defStore;
    }
} 