// console.log("ASd");
//array
//squre braket
// const numbers:number[]=[4,4,88,6,4]
// //array constructor
// const numbers1:number[]=new Array (4,4,88,6,4);
//using Array.of Method
// const names:string[]=Array.of("a","b","c")
// //object
// const person: {
//     name: string;
//     age: number;
//     address: {
//         city: string;
//         state: string;
//     };
//     num: number[];
// } = {
//     name: "man",
//     age: 21,
//     address: {
//         city: "abd",
//         state: "guj"
//     },
//     num:[1,2,3,4]
// }
// console.log(person);
// type Person = {
//     name: string;
//     age: number;
//     address: {
//         city: string;
//         state: string;
//     }
//     num:number[];
// }
// const person1:Person={
//     name:"manthasb",
//     age:45,
//     address:{
//         city:"dsf",
//         state:"asd"
//     },
//     num:[1,2,3]
// }
// console.log(person1);
// console.log(person1);
// type Product ={
//     name:string;
//     price:number;
//     quantity:number;
// }
// let product:Product={
//     name:"phn",
//     price:15000,
//     quantity:3
// }
// const totalPrice = (product:Product)=>{
//     console.log(
//     product.quantity*product.price
//     );
// }
// totalPrice(product)
//type alias
// type Student={
//     name:string;
//     age:number;
//     gender?:string;
//     greet:(country:string)=>string;
// }
// const student1:Student={
//     name:"Man",
//     age:22,
//     greet:((country):any=>`hi i am ${student1.name} and i am ${student1.age} year old anf i am from${country}`)
// }
// const student2:Student={
//     name:"Manthan",
//     age:20,
//     greet:((country):any=>`hi i am ${student1.name} and i am ${student1.age} year old anf i am from${country}`)
// }
// const introduction :( student1:Student)=>string=( student1:Student):string=>{
//     const {name,age}=student1;
//     return `welcome my name ${name} , ${age}`
// }
// console.log(introduction(student1));
// console.log(student1.greet('INDIA'));
// console.log(student1.greet('usa'));
// enum Roles {
//     user = "user", admin = "admin"
// }
// type LoginDetials = {
//     name: string;
//     email: string;
//     pass: string;
//     role: Roles
// }
// const user1: LoginDetials = {
//     name:"man",
//     email: "asD",
//     pass: "asd",
//     role: Roles.admin,
// }
// console.log(user1);
// const isAdmin: (user1: LoginDetials) => string = (LoginDetials): string=>{
//     const { name, role } = user1;
//     return role === "admin" ? `${name} is allow to edit the website` : `${name} isnot  allow to edit the website`
// }
// console.log(isAdmin(user1));
// type personInfo = readonly[string,number]
// const displayInfo:(person:personInfo)=>void=(person:personInfo):void=>{
//     const[name,age]=person;
//     console.log(`${name} ${age}` );
// }
// const p1:personInfo=["man",4]
// displayInfo(p1)
// type productInfo = readonly[string,number,number]
// const displayInfo:(product:productInfo)=>void=(product:productInfo):void=>{
//     const[name,price,quality] = product;
//     console.log(`Product Name: ${name} Product Price:${price} Product quality : ${quality} `);
// }
// const product1:productInfo = ["Tv",45000,1]
// const product2:productInfo = ["Tv-samsung",47000,2]
// displayInfo(product1)
// displayInfo(product2)
var a = "ab vsd";
a = "sardfasdf";
console.log(a);
