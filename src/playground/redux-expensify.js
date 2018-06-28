import{createStore,combineReducers} from 'redux';
import uuid from 'uuid';


//ADD EXPENSE ACTION

const addExpense=(
    {
    description='',
    note='',
    amount=0,
    createdAt=0
}={}

)=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt

    }

});

//REMOVE EXPENSE ACTION

const removeExpense=({id}={}) =>
    ({
    type:'REMOVE_EXPENSE',   
        id
});

//EDIT EXPENSE ACTION

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });

  //SET TEXT FILTER  ACTION

const setTextFilter=(text="") =>
    ({
    type:'SET_TEXT_FILTER',   
    text
});

//SORT BY AMOUNT ACTION

const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT'
});

//SORT BY DATE ACTION

const sortByDate=()=>({
    type:'SORT_BY_DATE'
});

//SET START DATE ACTION

const setStartDate=(date)=>({
    type:'SET_START_DATE',
    date
});

//SET END DATE ACTION

const setEndDate=(date)=>({
    type:'SET_END_DATE',
    date
});

//Expenses Reducer   

const expensesReducerDefaultState=[];
const expensesReducer= (state=expensesReducerDefaultState,action)=>{

    switch(action.type){
        case 'ADD_EXPENSE':
         return [
            ...state,
            action.expense
           ];
           case 'EDIT_EXPENSE':
           return state.map((expense) => {
             if (expense.id === action.id) {
               return {
                 ...expense,
                 ...action.updates
               };
             } else {
               return expense;
             };
           });

        case 'REMOVE_EXPENSE':
          return state.filter(({id})=>id!=action.id);

         
        default:
        return state;
    }

};


//Fileters reduccer

const filtersReducerDefaultState={
text:'',
sortBy:'date',
startDate:undefined,
endDate:undefined

};
const filtersReducer= (state=filtersReducerDefaultState,action)=>{

    switch(action.type){

        case 'SET_TEXT_FILTER':
        return {...state,text:action.text};
        case 'SORT_BY_AMOUNT':
        return{...state,sortBy:'amount'};
        case 'SORT_BY_DATE':
        return{...state,sortBy:'date'};
        case 'SET_START_DATE':
        return{...state,startDate:action.date};
        case 'SET_END_DATE':
        return{...state,endDate:action.date};


        default:
        return state;
    }

};

//time stamps (milli sec)
//january 1st 1970(unix epoch)
//33400 : 33400 milli sec after jan 1st,1970
//-203 : 203 milli sec back from jan 1st 1970

//Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
         if(sortBy==='date'){
             return a.createdAt<b.createdAt? 1:-1

         }
         if(sortBy==='amount'){
            return a.amount<b.amount? 1:-1

        }
    });
  };
  

//Store creation

const store=createStore(
    combineReducers({
      expenses:expensesReducer,
      filters:filtersReducer

    })

);

store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses);
});

//ALL DISPATCHES

const expenseOne=store.dispatch(addExpense({description:'Rent',amount:100,createdAt:-21000}));
const expenseTwo=store.dispatch(addExpense({description:'coffee',amount:300,createdAt:-1000}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
 store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

//store.dispatch(setStartDate(0));

//store.dispatch(setEndDate(900));

//STATE

const demoState={
    expenses:[{
        id:'jhgjh',
        description:'January Rent',
        note:'This is the final payment',
        amount:54500,
        createdAt:0
    }],
    filter:{
        text:'rent',
        sortBy:'amount',//date or amount
        startDate:undefined,
        endDate:undefined
    }
}

