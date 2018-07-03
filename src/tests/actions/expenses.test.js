import{addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('should setup remove expense action object',()=>{
    const action=removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
        
    });
});


test('should setup remove expense action object',()=>{
    const action=editExpense('123abc',{note:'new note value'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            note:'new note value'
        }
        
    });
});

test('should setup add expense action object',()=>{
    const expenseData={
        description:'Rent',
        note:'last month',
        amount:109500,
        createdAt:1000
    };
    const action=addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        
        expense:{
            ...expenseData,
            id:expect.any(String)
          
        }
        
    });
});

test('should setup add expense action object for defaults',()=>{
 
    const action=addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        
        expense:{
            
            id:expect.any(String),
            description:'',
            note:'',
            amount:0,
            createdAt:0
          
        }
        
    });
});