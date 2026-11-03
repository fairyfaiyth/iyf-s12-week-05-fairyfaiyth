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

// ===== Task 9.2: Traversing the DOM =====
const nav = document.querySelector("nav");
console.log("Parent:", nav.parentElement);
console.log("Children:", nav.children);
console.log("First child:", nav.firstElementChild);
console.log("Last child:", nav.lastElementChild);

const articleEl = document.querySelector("article");
console.log("Next sibling:", articleEl.nextElementSibling);
console.log("Previous sibling:", articleEl.previousElementSibling);
console.log("Descendant links:", nav.querySelectorAll("a"));

// Practice tasks
console.log(1, document.querySelector("#main-header").querySelector("nav"));
console.log(2, document.querySelector(".nav-link").parentElement);
console.log(3, articleEl.nextElementSibling);
console.log(4, document.querySelector("ul").querySelectorAll("li"));
console.log(5, document.querySelector("footer").parentElement); // body

// ===== Task 9.3: Modifying Content =====
// Exercise 1: Text
const heading = document.querySelector("h1");
console.log(heading.textContent);
console.log(heading.innerText);
heading.textContent = "New Title";

// Exercise 2: HTML (using a demo div so the real article stays intact)
const demo = document.createElement("div");
document.querySelector("main").appendChild(demo);
demo.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
`;
// Dangerous demo: uncomment to see why innerHTML is unsafe
// demo.innerHTML = `<img src="x" onerror="alert('hacked')">`;
demo.textContent = `<img src="x" onerror="alert('hacked')">`; // shows as plain text, safe

// Exercise 3: Attributes
const link = document.querySelector(".nav-link");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://developer.mozilla.org");
link.setAttribute("target", "_blank");
console.log(link.hasAttribute("target"));
link.removeAttribute("target");

link.dataset.id = "123";
link.dataset.category = "tech";
console.log(link.dataset.id, link.dataset.category);

// Exercise 4: Styles
const box = document.querySelector(".container");
box.style.backgroundColor = "#f0f0f0";
box.style.padding = "30px";
box.style.borderRadius = "8px";
Object.assign(box.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});

// ===== Task 9.4: Adding & Removing Elements =====
// Exercise 1: Creating elements
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
newParagraph.className = "content highlight";

const articleBox = document.querySelector("article");
articleBox.appendChild(newParagraph);                  // add at end

const firstParagraph = articleBox.querySelector("p");
const beforeP = document.createElement("p");
beforeP.textContent = "Inserted before the first paragraph.";
articleBox.insertBefore(beforeP, firstParagraph);

// Modern methods
const prependP = document.createElement("p");
prependP.textContent = "Prepended (first child).";
articleBox.prepend(prependP);

const appendP = document.createElement("p");
appendP.textContent = "Appended (last child).";
articleBox.append(appendP);

const beforeEl = document.createElement("p");
beforeEl.textContent = "Before firstParagraph.";
firstParagraph.before(beforeEl);

const afterEl = document.createElement("p");
afterEl.textContent = "After firstParagraph.";
firstParagraph.after(afterEl);

// Exercise 2: Removing elements (on temporary items)
const temp = document.createElement("div");
temp.innerHTML = "<p>one</p><p>two</p><p>three</p>";
document.querySelector("main").appendChild(temp);

temp.querySelector("p").remove();                      // remove()
const lastTemp = temp.lastElementChild;
lastTemp.parentElement.removeChild(lastTemp);          // removeChild()

while (temp.firstChild) {                              // clear all children
    temp.removeChild(temp.firstChild);
}
temp.remove();

// Exercise 3: Cloning
const navItem = document.querySelector(".nav-list li");
const clone = navItem.cloneNode(true);                 // true = deep clone
clone.querySelector("a").textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);

// Build: add a nav item dynamically
function addNavItem(text, href) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "nav-link";
    a.textContent = text;
    a.setAttribute("href", href);
    li.appendChild(a);
    document.querySelector(".nav-list").appendChild(li);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");
