"user strict"


//React

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

//IMPORT REDUCERS
import reducers from './reducers/index';

//IMPORT ACTIONS

import { postBooks, deleteBooks, updateBooks } from './actions/booksAction';

const middleware = applyMiddleware(logger);
const store = createStore(reducers,middleware);   



import  BooksList from './components/pages/booksList';

render (
    <Provider store={store}>
        <BooksList />
    </Provider>, document.getElementById('app')
);




// STEP 2 create and dispatch actions

//-------------------------------------------

//create and dispatch another event
// DISPATCH an other book
// store.dispatch({
//     type: "POST_BOOK",
//     payload: [{
//         id: 3,
//         title: 'this is the third book title',
//         description: 'this is the third book description',
//         price: 40
//     }]
// });


// store.dispatch({ 
//     type: "DELETE_BOOK",
//     payload: { id: 1 } 
// });

// store.dispatch({
//     type:"UPDATE_BOOK",
//     payload:{
//         id: 2,
//         title:'Learn React in 24h'
//     }
// })

// store.dispatch({
//     type:"ADD_TO_CART",
//     payload:[{id:2}]
// })