# 202245780-SarahAlsaadan-assignment4

# Assignment 4 – Interactive Features

This project is a further improved version of my personal portfolio website from the previous assignments.  
The main goal of this assignment is to continue enhancing the website by adding interactive features, dynamic behavior, and improved user experience using JavaScript.
The website presents my profile, selected projects, GitHub repositories, and a contact form.

## Project Overview

This portfolio website was built using HTML, CSS, and JavaScript.  
It demonstrates front-end development skills through responsive layout design, theme switching, user interaction, DOM manipulation, form validation, and API integration.

## Features

- Responsive design for desktop, tablet, and mobile screens
- Light/Dark mode toggle
- Saved theme preference using localStorage
- Dynamic greeting message based on the time of day
- Project filtering by category
- Project sorting by name
- Contact form validation
- Success and error feedback messages
- Dynamic GitHub repository display using the GitHub API

## Interactive and Dynamic Features

### 1. Theme Toggle
The website allows the user to switch between light mode and dark mode.  
The selected theme is saved using localStorage, so the same preference remains active when the page is reopened.

### 2. Greeting Message
A greeting notification appears when the page loads.  
The message changes depending on the current time:
- Good morning
- Good afternoon
- Good evening

### 3. Project Filtering
Users can filter the projects section by category, such as:
- All
- Web
- Database

This updates the displayed project cards dynamically without reloading the page.

### 4. Project Sorting
Users can sort project items alphabetically:
- A to Z
- Z to A

### 5. Contact Form Validation
The contact form checks user input before submission.  
Validation ensures that:
- name is not empty
- email is not empty
- email format is valid
- message is not empty

### 6. GitHub API Integration
The website fetches repositories dynamically from GitHub using the GitHub API.  

## User Experience

The website was designed to provide a clear and simple browsing experience.

A user can:
1. open the website and immediately see a greeting message
2. read the About section
3. browse projects in the Projects section
4. filter or sort projects interactively
5. view GitHub repositories loaded dynamically
6. switch between light and dark mode
7. fill in the contact form

## Technical Implementation

The project is organized into separate files:

- index.html : page structure and content
- css/styles.css: layout, colors, responsiveness, and visual styling
- js/script.js: interactivity, DOM manipulation, validation, filtering, sorting, theme persistence, and API integration

## How to Run Locally

1. Clone or download the repository  
2. Open the project folder  
3. Open index.html in your browser

Or you can access the website using the live link at the end of this page. 

## AI Usage

AI tools were used to assist with:
- improving UI/UX design and styling
- generating and refining JavaScript logic
- debugging and improving code structure
- supporting documentation writing

More details are provided in:  
ai-usage-report.md file

## Live Deployment

[Click here](https://1sara19.github.io/202245780-SarahAlsaadan-assignment4/)