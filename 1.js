const parser = new DOMParser();
//console.log('parser', parser);

const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
//console.log('xmlString', xmlString);

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");
//console.log('listNode', listNode);
//console.log('studentNode', studentNode);
const list = [];

studentNode.forEach(studentNode => {
const nameNode = studentNode.querySelector("name");
  //console.log('nameNode', nameNode);  
const firstNameNode = nameNode.querySelector("first");
  //console.log('firstNameNode', firstNameNode);
const secondNameNode = nameNode.querySelector("second");
  //console.log('secondNameNode', secondNameNode);
const ageNode = studentNode.querySelector("age");
  //console.log('ageNode', ageNode);
const profNode = studentNode.querySelector("prof");
  //console.log('profNode', profNode);
const langAttr = nameNode.getAttribute('lang');
  //console.log('langAttr', langAttr);
  
  list.push({
    name: firstNameNode.textContent + secondNameNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr,
  })
});


const result = {
  list: list
};
console.log('result', result);