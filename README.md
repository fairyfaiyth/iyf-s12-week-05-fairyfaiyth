# Week 5: DOM Manipulation (Interactive To-Do List)

## Author
- **Name:** Faith Mutisya
- **GitHub:** [@fairyfaiyth](https://github.com/fairyfaiyth)
- **Date:** November 3, 2026

## Project Description
An interactive To-Do List app built with plain JavaScript to practice selecting elements, changing the page, and responding to user events. The repo also holds my DOM practice files for Lessons 9 and 10 and five daily challenges.

Live demo: https://fairyfaiyth.github.io/iyf-s12-week-05-fairyfaiyth/

## Technologies Used
- HTML5
- CSS3
- JavaScript (DOM manipulation and events)
- Git and GitHub, GitHub Pages

## Features
- Add tasks (empty tasks are blocked and the input clears after adding)
- Click a task to mark it complete (strikethrough)
- Delete tasks
- Filter by All, Active, or Completed
- Items-left counter and Clear Completed button
- Double-click a task to edit it (bonus)
- Event delegation: one listener on the list handles all task clicks

## How to Run
1. Clone this repository:
   `git clone https://github.com/fairyfaiyth/iyf-s12-week-05-fairyfaiyth.git`
2. Open `index.html` in your browser

Or visit the live demo: https://fairyfaiyth.github.io/iyf-s12-week-05-fairyfaiyth/
Or visit the live link above.

## Lessons Learned
This week I learned how JavaScript can change a web page after it loads. I practiced selecting elements with getElementById and querySelector, moving through the DOM with parent, child and sibling properties, and creating, removing and cloning elements. I learned to use textContent instead of innerHTML for user input because innerHTML can run harmful code. I also learned about event listeners, the event object, and event delegation, where one listener on a parent list handles clicks on every task, including new ones added later. I used all of this to build a working To-Do List with add, complete, delete, filter and edit features.
## Challenges Faced

My first challenge was setting up the repository in Termux. I created it without a README, so the first push needed extra steps, and I learned to set the branch name with git branch -M main. Another challenge was understanding event delegation, because I had to use event.target.closest() to find which task was clicked. Typing and testing code on my phone was also slow, so I tested my pages on GitHub Pages and fixed problems by checking each feature one by one.
