# Satyanshu Suman — Personal Portfolio

A responsive personal portfolio website for **Satyanshu Suman**, built using only:

- HTML
- CSS
- JavaScript

The website presents Satyanshu's profile, skills, projects, learning focus, and contact information in a modern light-first interface with a dark-mode toggle.
## LIVE DEMO LINK : https://kaiju-x.github.io/Satyanshu-portfolio/
---

# 📌 Table of Contents

1. [Project Overview](#-project-overview)
2. [Objectives](#-objectives)
3. [Technologies Used](#-technologies-used)
4. [🔥 Viva Questions — Study These First](#-viva-questions--study-these-first)
5. [Project Structure](#-project-structure)
6. [Website Sections](#-website-sections)
7. [How the Website Works](#-how-the-website-works)
8. [HTML Explanation](#-html-explanation)
9. [CSS Explanation](#-css-explanation)
10. [JavaScript Explanation](#-javascript-explanation)
11. [Theme Toggle](#-theme-toggle)
12. [Typing Animation](#-typing-animation)
13. [Navigation System](#-navigation-system)
14. [Scroll Reveal Animation](#-scroll-reveal-animation)
15. [Responsive Design](#-responsive-design)
16. [Project Section](#-project-section)
17. [What Happens If Code Is Removed?](#-what-happens-if-code-is-removed)
18. [How to Run](#-how-to-run)
19. [Detailed Viva Questions](#-detailed-viva-questions)
20. [Tricky Viva Questions](#-tricky-viva-questions)
21. [One-Minute Project Explanation](#-one-minute-project-explanation)

---

# 📌 Project Overview

This project is a **personal portfolio website** for Satyanshu Suman.

The main purpose of the website is to display:

- Personal introduction
- Educational background
- Technical skills
- AI/ML projects
- Areas of interest
- Contact information
- GitHub profile

The website is completely frontend-based.

There is:

- No backend
- No database
- No server-side programming

The project uses JavaScript for client-side interaction such as:

- Theme switching
- Mobile navigation
- Typing animation
- Scroll-based active navigation
- Reveal animations
- Automatic copyright year

---

# 🎯 Objectives

The main objectives of this project are:

1. Create a professional personal portfolio.
2. Demonstrate knowledge of HTML.
3. Demonstrate CSS styling and responsive design.
4. Demonstrate JavaScript DOM manipulation.
5. Present AI/ML projects professionally.
6. Make the website responsive on desktop and mobile.
7. Provide both light and dark themes.
8. Keep the source code understandable enough for academic viva.

---

# 🛠 Technologies Used

## HTML5

HTML is used to create the structure of the webpage.

Examples:

```html
<header>
<section>
<nav>
<h1>
<h2>
<p>
<a>
<button>
<footer>
```

HTML tells the browser **what elements exist on the webpage**.

---

## CSS3

CSS is used for:

- Colors
- Fonts
- Spacing
- Layout
- Cards
- Buttons
- Animations
- Responsive design
- Light mode
- Dark mode

Examples:

```css
display: grid;
display: flex;
color: var(--text);
background: var(--surface);
border-radius: 20px;
```

CSS tells the browser **how the elements should look**.

---

## JavaScript

JavaScript adds behavior and interaction.

It controls:

- Navigation menu
- Theme toggle
- Typing effect
- Scroll detection
- Reveal animations
- Current year

For example:

```javascript
document.getElementById("themeToggle");
```

JavaScript tells the browser **what should happen when the user interacts with the page**.

---

# 🔥 Viva Questions — Study These First

This is the most important section to revise before the viva.

## 1. What is your project?

> My project is a responsive personal portfolio website developed using HTML, CSS and JavaScript. It presents Satyanshu Suman's introduction, skills, projects, interests and contact information.

---

## 2. Why did you choose HTML, CSS and JavaScript?

> HTML is used for the structure, CSS is used for styling and layout, and JavaScript is used to add interaction and dynamic behavior.

---

## 3. Is your project frontend or backend?

> It is a frontend project. It does not use a custom backend or database.

---

## 4. What is the role of HTML?

> HTML defines the structure and content of the webpage.

---

## 5. What is the role of CSS?

> CSS controls the appearance, layout, colors, spacing, animations and responsive behavior of the webpage.

---

## 6. What is the role of JavaScript?

> JavaScript provides interactivity such as the theme switcher, typing animation, mobile navigation, scroll-based navigation and reveal animations.

---

## 7. What is DOM?

> DOM stands for Document Object Model. It represents the HTML document as objects that JavaScript can access and modify.

---

## 8. How does the theme toggle work?

> JavaScript detects the button click and adds or removes a `dark` class from the body. CSS contains separate color variables for the normal and dark themes.

---

## 9. How does the website remember the selected theme?

> I use `localStorage` to save either `light` or `dark`. When the page loads, JavaScript reads the saved value and applies the appropriate theme.

---

## 10. What is localStorage?

> `localStorage` is a browser storage mechanism that stores key-value data and keeps it even after the webpage is refreshed.

---

## 11. What is responsive design?

> Responsive design means the website automatically adapts its layout to different screen sizes such as desktops, tablets and mobile phones.

---

## 12. How did you make the website responsive?

> I used CSS media queries, CSS Grid and Flexbox. At smaller screen widths, the columns become single-column layouts and the navigation becomes a mobile menu.

---

## 13. What is CSS Grid?

> CSS Grid is a two-dimensional layout system used to arrange elements into rows and columns.

---

## 14. What is Flexbox?

> Flexbox is a one-dimensional layout system used to arrange items horizontally or vertically.

---

## 15. What is the difference between Grid and Flexbox?

> Grid is mainly useful for two-dimensional layouts involving rows and columns, while Flexbox is mainly useful for one-dimensional layouts.

---

## 16. What is a media query?

> A media query allows CSS rules to be applied depending on conditions such as the screen width.

Example:

```css
@media (max-width: 980px)
```

---

## 17. What is an event listener?

> An event listener waits for an event such as a click, scroll or keyboard action and runs a function when that event occurs.

Example:

```javascript
button.addEventListener("click", function() {
});
```

---

## 18. What is `getElementById()`?

> It selects an HTML element using its unique ID.

Example:

```javascript
document.getElementById("themeToggle");
```

---

## 19. What is `querySelectorAll()`?

> It selects all elements matching a CSS selector.

Example:

```javascript
document.querySelectorAll(".reveal");
```

---

## 20. What is `classList.toggle()`?

> It adds a class if it is absent and removes it if it is already present.

This is useful for the mobile menu and theme system.

---

## 21. What is IntersectionObserver?

> IntersectionObserver is a browser API that detects when an element enters or leaves the visible area of the screen. I use it for the scroll-reveal animations.

---

## 22. How does the typing animation work?

> JavaScript stores multiple role names in an array and uses `slice()` and `setTimeout()` to display and remove characters one by one.

Example roles:

```text
Developer
ML Enthusiast
Computer Vision Builder
NLP Explorer
```

---

## 23. What happens if JavaScript is removed?

> The HTML and CSS will still display the website, but the interactive features such as theme switching, typing animation, mobile navigation and scroll effects will stop working.

---

## 24. What happens if CSS is removed?

> The HTML content will still exist, but the page will lose its visual design, layout, colors, spacing, animations and responsive styling.

---

## 25. What happens if HTML is removed?

> The main webpage structure and content will not exist, so CSS and JavaScript will have nothing meaningful to style or manipulate.

---

## 26. Why did you use semantic HTML?

> I used elements such as `header`, `nav`, `section` and `footer` because they clearly describe the purpose of different parts of the page and improve readability, accessibility and maintainability.

---

## 27. Why use CSS variables?

> CSS variables allow commonly used colors and values to be stored once and reused throughout the stylesheet. They also make theme switching much easier.

---

## 28. Why did you use `localStorage` instead of a normal variable for the theme?

> A normal JavaScript variable disappears when the page is refreshed, while localStorage preserves the selected theme.

---

## 29. What is the purpose of `href="#projects"`?

> It creates an internal link to the section with `id="projects"`.

---

## 30. What is `target="_blank"`?

> It opens the linked page in a new browser tab.

---

## 31. What is `rel="noopener"`?

> It improves security when opening an external page in a new tab by preventing the new page from accessing the original page through `window.opener`.

---

## 32. What is a class?

> A class is used to group elements that should share common styling or behavior.

---

## 33. What is an ID?

> An ID identifies a specific element and should normally be unique within a webpage.

---

## 34. What is `padding`?

> Padding is the space between an element's content and its border.

---

## 35. What is `margin`?

> Margin is the space outside an element's border.

---

## 36. What is `border-radius`?

> It rounds the corners of an element.

---

## 37. What is `transition`?

> Transition creates a smooth visual change between two CSS states.

---

## 38. What is `transform`?

> Transform allows an element to be moved, rotated, scaled or skewed.

---

## 39. What is `translateY(-6px)`?

> It moves an element six pixels upward.

---

## 40. What is a hover effect?

> A hover effect is a CSS change that occurs when the mouse pointer is placed over an element.

---

# 📂 Project Structure

```text
Satyanshu-Portfolio/
│
├── index.html
├── style.css
└── script.js
```

---

# 📄 index.html

This is the main HTML file.

It contains all the content and structure of the website.

---

# 🎨 style.css

This file controls:

- Colors
- Fonts
- Layout
- Cards
- Buttons
- Animations
- Responsive design
- Light mode
- Dark mode

---

# ⚙ script.js

This file controls:

- Theme switching
- Typing animation
- Navigation menu
- Active navigation
- Scroll reveal animation
- Automatic year

---

# 🧱 Website Sections

The portfolio contains:

```text
Navbar
   ↓
Hero
   ↓
About
   ↓
Skills
   ↓
Projects
   ↓
Current Focus
   ↓
Contact
   ↓
Footer
```

---

# 🧭 Navigation Bar

The navbar contains:

- Logo
- Home
- About
- Skills
- Projects
- Focus
- Contact
- Theme button

Example:

```html
<header class="navbar">
```

`header` is a semantic HTML element that represents the top/header area of the website.

---

# 🌟 Hero Section

The hero is the first major section.

It contains:

- Introduction
- Name
- Job/interest title
- Short description
- Buttons
- Quick statistics
- Profile card

Example:

```html
<section class="hero section" id="home">
```

The `id="home"` allows navigation links to jump to this section.

---

# 🔤 Typing Animation

HTML contains:

```html
<span id="typingText">Developer</span>
```

JavaScript changes the text dynamically.

The role changes among:

```text
Developer
ML Enthusiast
Computer Vision Builder
NLP Explorer
```

---

# 👤 About Section

The About section explains:

- Academic background
- Interests
- AI/ML focus
- Learning approach

---

# 🧠 Skills Section

The portfolio contains four major skill categories.

## Programming

```text
Python
NumPy
Pandas
```

## Machine Learning

```text
Scikit-learn
SVM
Logistic Regression
CNN
```

## Computer Vision

```text
OpenCV
TensorFlow
Keras
YOLOv8
```

## NLP & AI Applications

```text
Transformers
Hugging Face
Gradio
Jupyter
```

---

# 🚀 Project Section

The portfolio currently showcases five projects.

## 1. Amazon Multi-Agent Customer Support

Technologies:

```text
Python
Scikit-learn
Logistic Regression
Transformers
Gradio
```

Flow:

```text
User Query
     ↓
Intent Classification
     ↓
Specialized Agent
     ↓
Response
```

Agents include:

- Returns
- Delivery
- Technical Support
- General Queries

Sentiment detection can also help identify frustrated users.

---

# 2. Loan Status Predictor

Technologies:

```text
Python
Pandas
Scikit-learn
SVM
Seaborn
Gradio
```

Flow:

```text
Loan Dataset
      ↓
Preprocessing
      ↓
Categorical Conversion
      ↓
Feature Preparation
      ↓
SVM
      ↓
Loan Prediction
```

The prediction is:

```text
Approved
```

or:

```text
Not Approved
```

---

# 3. Object Recognition

Technologies:

```text
TensorFlow
Keras
CNN
OpenCV
Python
```

Flow:

```text
Image
 ↓
Preprocessing
 ↓
CNN
 ↓
Feature Extraction
 ↓
Classification
```

---

# 4. Iris Tracker

Technologies:

```text
YOLOv8
OpenCV
Gradio
NumPy
Python
```

Basic flow:

```text
Image
 ↓
YOLOv8
 ↓
Iris Detection
 ↓
Location / Bounding Box
```

The project uses the CASIA Iris Thousand dataset.

---

# 5. AI Healthcare Assistant

Technologies:

```text
Python
Transformers
LaMini-Flan-T5
Gradio
MedlinePlus
DuckDuckGo Search
```

Workflow:

```text
User Question
      ↓
Search Medical Resources
      ↓
Retrieve Relevant Information
      ↓
Reviewer Agent
      ↓
Improved Response
      ↓
User
```

Important:

This project is designed for informational assistance and is not a replacement for professional medical diagnosis or treatment.

---

# 🎨 CSS Explanation

CSS means:

**Cascading Style Sheets**

CSS defines the appearance of HTML elements.

---

# CSS Variables

Example:

```css
:root {
  --bg: #f5f8f7;
  --surface: #ffffff;
  --text: #10201b;
  --accent: #089765;
}
```

These are CSS custom properties.

They can be reused:

```css
color: var(--text);
background: var(--surface);
```

---

# Why Use Variables?

Instead of repeating:

```css
#089765
```

many times, we use:

```css
var(--accent)
```

This makes the stylesheet easier to maintain.

---

# Dark Theme Variables

```css
body.dark {
  --bg: #07110f;
  --text: #f2f7f4;
}
```

When the body receives the `dark` class, the dark values override the normal theme values.

---

# CSS Grid

Example:

```css
.hero {
  display: grid;
  grid-template-columns: 1.1fr .9fr;
}
```

This creates a two-column layout.

---

# What is `fr`?

`fr` means **fractional unit**.

For:

```css
1.1fr .9fr
```

the available width is divided proportionally.

---

# Flexbox

Example:

```css
.hero-buttons {
  display: flex;
}
```

Flexbox arranges children in a row or column.

---

# `gap`

```css
gap: 12px;
```

Creates space between grid or flex items.

---

# Padding

```css
padding: 20px;
```

Adds space inside an element.

---

# Margin

```css
margin: 20px;
```

Adds space outside an element.

---

# Border Radius

```css
border-radius: 20px;
```

Rounds corners.

---

# Box Shadow

```css
box-shadow: var(--shadow);
```

Adds depth around an element.

---

# Hover Effect

```css
.card:hover {
  transform: translateY(-6px);
}
```

The card moves slightly upward when hovered.

---

# Transition

```css
transition: transform .25s ease;
```

Makes the change smooth.

---

# Media Queries

Example:

```css
@media (max-width: 980px)
```

This changes the design
