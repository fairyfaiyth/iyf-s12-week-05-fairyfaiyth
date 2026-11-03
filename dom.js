// ===== Task 9.1: Selecting Elements =====
const header = document.getElementById("main-header");
console.log("getElementById:", header);

const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// Practice
const h1 = document.querySelector("h1");                          // 1
const allContent = document.querySelectorAll(".content");         // 2
const contactForm = document.getElementById("contact-form");      // 3
const emailInput = document.getElementById("email");              // 4
const navItems = document.querySelectorAll("nav li");             // 5
const firstNavLink = document.querySelector(".nav-link");         // 6
const lastParagraph = paragraphs[paragraphs.length - 1];          // 7

console.log(h1, allContent, contactForm, emailInput, navItems, firstNavLink, lastParagraph);
