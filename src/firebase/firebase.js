import * as firebase from 'firebase';




const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

  

firebase.initializeApp(config);
const database=firebase.database();

export{firebase,database as default};

// Setup "expenses" with three items (description, note, amount, createdAt)

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
//   });
  
//   database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 5900,
//     createdAt: 976123498763
//   });
  
//   database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 976123498763
//   });


  
  
  
  
  // database.ref('notes/-LGWDs3PBnjsAohwKQAq').remove();
  
//    database.ref('notes').push({
//      title: 'Course Topics 2',
//      body: 'React Native, Angular, Python,php'
//    });

//  database.ref().on('value', (snapshot) => {
//      const val = snapshot.val();
//      console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   })
  

//  database.ref('location/city')
//    .once('value')
//    .then((snapshot) => {
//      const val = snapshot.val();
//      console.log(val);
//    })
//    .catch((e) => {
//      console.log('Error fetching data', e);
//   });

//  database.ref().set({
//      name:'Apuroopa',
//      age:26,

//      stressLevel: 6,
//      job: {
//        title: 'Software developer',
//        company: 'Google'
//      },
//      location:{
//         city:'Detroit',
//          country:'united states'
//      }
//  }).then(()=>{
//      console.log('Data is saved!');
//  }).catch((e)=>{
//  console.log('This failed.',e);
//  });


//  database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//   });

// database.ref('isSingle')
// .remove()
// .then(()=>{
//     console.log('Data is removed!');
// }).catch((e)=>{
//     console.log('Dis not remove data',e);
// });
