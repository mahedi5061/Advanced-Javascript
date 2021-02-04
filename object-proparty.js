//Normal Method.
// const students=[
//     {id:23, name:'Omar sunny'},
//     {id:27, name:'Manna'},
//     {id:25, name:'Sakib khan'}
// ]
// const std=[];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i].name;
//     const result=element;
//     std.push(result);
  
// }
// console.log(std);

const students=[
    {id:23, name:'Omar sunny'},
    {id:27, name:'Manna'},
    {id:25, name:'Sakib khan'}
]
 const std=students.map(s=>s.name)
 const std1=students.filter(s=>s.id>23)
 const std2=students.find(s=>s.id>23)
console.log(std2);