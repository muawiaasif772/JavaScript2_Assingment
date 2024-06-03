// Task 1: Parsing JSON
// Given a JSON string, parse it into a JavaScript object using JSON.parse()

let person = '{"name":"muawia","city":"BWP","age":"15"}';
let toObj = JSON.parse(person);
console.log(toObj);
// Task 2: Stringifying Objects
// Given a JavaScript object, convert it into a JSON string using JSON.stringify().
let person2 = {
  name: "muawia",
  city: "BWP",
  age: "15",
};

let jsonString = JSON.stringify(person2.city);
console.log(jsonString);
// Task 3: Filtering JSON Array
// Given an array of objects, filter out objects that meet a specific condition.

const products = [
  { id: 1, name: "Apple", price: 1.2 },
  { id: 2, name: "Banana", price: 0.8 },
  { id: 3, name: "Orange", price: 1.0 },
];

// Output: [ { id: 1, name: 'Apple', price: 1.2 }, { id: 3, name: 'Orange', price: 1 } ]
let BooksData = [
  { book: "History", publish: "2002", price: 1199 },
  { book: "Urdu", publish: "1999", price: 890 },
  { book: "physics", publish: "2012", price: 1290 },
  {book:'chemistry',publish:"2019",price:1500},
];
let filt=BooksData.filter((ele)=>ele.publish>2002)
console.log(filt)
let persons2= [
    { name: "Muawia", city: "BWP", age: 15 },
    { name: "Hamza", city: "LHR", age: 20 },
    { name: "Asif", city: "ISB", age: 25 },
    { name: "Talha", city: "KHI", age: 30 },
    { name: "Aisha", city: "FSD", age: 22 }]
// Task 4: Modifying JSON Array
// Given an array of objects, modify some properties of the objects.
let persons1 = [
    { "name": "Muawia", "city": "BWP", "age": 15 },
    { "name": "Hamza", "city": "LHR", "age": 20 },
    { "name": "Asif", "city": "ISB", "age": 25 },
    { "name": "Talha", "city": "KHI", "age": 30 },
    { "name": "Aisha", "city": "FSD", "age": 22 }
]
let updatName=persons1[1].name='ali'
let updatCity=persons1[1].city='TMP'


console.log(persons1)



