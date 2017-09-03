// State argument is not application state, only the state
// this reducer is responsible for
//
// 1. Why set initial value of state = null : cause reux not allowed reducers
// return undifined value .
// 2.
export default (state = null, action) => {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}
