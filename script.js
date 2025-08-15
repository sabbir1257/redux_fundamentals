import { createStore } from 'redux';
const postCountElement = document.querySelector('.post-count');

const initialState = {
  post: 0,
  name: 'Sabbir Sarker',
  age: 25,
};

const INCREMENT = 'post/increment';
const DECREMENT = 'post/decrement';
const INCREASE_BY = 'post/increaseBy';
const DECREASE_BY = 'post/decreaseBy';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, post: state.post + 1 };
    case DECREMENT:
      return { ...state, post: state.post - 1 };
    case INCREASE_BY:
      return { ...state, post: state.post + action.payload };
    case DECREASE_BY:
      return { ...state, post: state.post - action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
  postCountElement.innerText = store.getState().post;
});

postCountElement.innerText = store.getState().post;

store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: INCREASE_BY, payload: 15 });
store.dispatch({ type: DECREASE_BY, payload: 5 });

// unsubscribe();

// setTimeout(() => {
//   store.dispatch({type: DECREMENT})
// }, 2000)

postCountElement.addEventListener('click', () => {
  store.dispatch({ type: INCREMENT });
});
