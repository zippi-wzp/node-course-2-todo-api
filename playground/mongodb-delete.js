const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to mongodb server');
    return;
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({
  //   text: 'lorem'
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({
  //   text: 'Walk the dog'
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({
  //   name: "Artem"
  // }).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection('Users').deleteOne({
  //   age: 22
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5aa6afba4d674b61c9339d67')
  }).then((result) => {
    console.log(result);
  });
  // client.close();
});
