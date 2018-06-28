//******************object destructuring*****************************************************************************************************/

// const person={
//     name:'Apppu',
//     age:26,
//     location:{
//         city:'philadelpia',
//         temp:92
//     }
// };


// const{name:firstname='Anonymous',age}=person;

// console.log(`${firstname} is ${age}.`);

// const{city,temp:temperature}=person.location;

// console.log(`It is ${temperature} in ${city} `);


// const book={
// title:'Ego is the Enemy',
// author:'Ryan Holiday',
// publisher:{
//     name:'Penguin'    
// }
// };

// const{name:publisherName='Self-published'}=book.publisher;

// console.log(publisherName);



//******************Array destructuring ******************************************************************************************/


const address=['1299 S Juniper Street','Philadelphia','Pennsylvinia','19147'];

const [,,state='New York']=address;

console.log(`You are in  ${state}.`);

const item=['coffee(hot)','$2.00','$2.50','$2.75'];

const [name,,medium]=item;

console.log(`A medium ${name} costs ${medium}`);