 //SET TEXT FILTER  ACTION

export const setTextFilter=(text="") =>
    ({
    type:'SET_TEXT_FILTER',   
    text
});

//SORT BY AMOUNT ACTION

export const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT'
});

//SORT BY DATE ACTION

export const sortByDate=()=>({
    type:'SORT_BY_DATE'
});

//SET START DATE ACTION

export const setStartDate=(date)=>({
    type:'SET_START_DATE',
    date
});

//SET END DATE ACTION

export const setEndDate=(date)=>({
    type:'SET_END_DATE',
    date
});
