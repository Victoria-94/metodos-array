'use strict'
const programmingBooks = [
    "JavaScript: The Good Parts",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Code Complete: A Practical Handbook of Software Constructi",
    "Design Patterns: Elements of Reusable Object-Oriented Soft",
    "The Pragmatic Programmer: Your Journey to Mastery",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "Python Crash Course",
    "Learning Python",
    "Java: The Complete Reference",
    "Head First Java",
    "C# in Depth",
    "The Go Programming Language",
    "Programming in Scala",
    "Effective Java",
    "Ruby on Rails Tutorial: Learn Web Development with Rails",
    "Node.js Design Patterns",
    "Angular Up and Running",
    "React: Up and Running",
    "Vue.js: Up and Running",
    "Django for Beginners",
    "Flask Web Development",
    "Full Stack Development with Spring Boot and React",
    "Machine Learning Yearning",
    "Data Science for Business",
    "Artificial Intelligence: A Modern Approach",
    "Introduction to Algorithms",
    "Clean Architecture: A Craftsman's Guide to Software Struct",
    "Domain-Driven Design: Tackling Complexity in the Heart of", 
    "Continuous Delivery: Reliable Software Releases through", 
    "Refactoring: Improving the Design of Existing Code",
    "The Mythical Man-Month: Essays on Software Engineering",
    "DevOps Handbook",
    "Git Pro",
];
alert(programmingBooks)

let tituloIngresado = prompt("Ingresa un título de libro:");
let tema= programmingBooks.some(temas=>temas===tituloIngresado)

if (tema){
  alert(`Sí, el libro "${tituloIngresado}" está en la lista.`);
}else {
  alert(`No, el libro "${tituloIngresado}"  está en la lista.`);
}