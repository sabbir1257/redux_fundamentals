let reduxState = {
    post: 0,
    name: 'Sabbir Sarker',
    age: 25
};
const reducer = (state, action)=>{
    if (action.type === 'post/increment') return {
        ...state,
        post: state.post + 1
    };
    else if (action.type === 'post/decrement') return {
        ...state,
        post: state.post - 1
    };
    else if (action.type === 'post/incrementBy') return {
        ...state,
        post: state.post + action.payload
    };
    return state;
};
// what redux will do
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: 'post/increment'
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: 'post/increment'
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: 'post/decrement'
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: 'post/incrementBy',
    payload: 10
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: 'post/incrementBy',
    payload: 10
});
console.log(reduxState);

//# sourceMappingURL=redux_fundamentals.672d4772.js.map
