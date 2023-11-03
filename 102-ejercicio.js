// implemetar una llamada a json placeholder usando top level await

const res = await fetch("https://jsonplaceholder.typicode.com/users/1").then((data) => data.json())
console.log(res)