const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);
const list = data.list;

console.log('data', data);

//console.log('list', list);
//console.log('list.age', list.age);
//console.log('list[0].age', list[0].age)

const first = {
  name: list[0].name,
  age: list[0].age,
  prof: list[0].prof,
};
console.log('first', first);

const second = {
  name: list[1].name,
  age: list[1].age,
  prof: list[1].prof,
};
console.log('second', second);