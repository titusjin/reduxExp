// State argument is not application state, only the state
// this reducer is responsible for
//
// 1. Why set initial value of state = null : cause reux not allowed reducers
// return undifined value .
export default (state = null, action) => {
    let payload = action.payloads;

    switch(action.type) {
        case 'BOOK_SELECTED':
            return {...state, payload};
    }

    return state;
}
