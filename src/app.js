

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store=configureStore();





store.dispatch(addExpense({description:'Water bill',amount:4500}));
store.dispatch(addExpense({description:'Gas bill',createdAt:1000}));
store.dispatch(addExpense({description:'Rent ',amount:109500}));



//store.dispatch(setTextFilter('water'));


//setTimeout(()=>{ store.dispatch(setTextFilter('bill'));},3000)

store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses);
});

const jsx=(
    <Provider store={store}>

    <AppRouter />
     </Provider> 
);



///******************RENDERING**************************** */
const appRoot=document.getElementById('app');

ReactDOM.render(jsx,appRoot);


