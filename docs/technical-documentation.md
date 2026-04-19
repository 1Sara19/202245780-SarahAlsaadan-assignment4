# Technical Documentation

## Project Overview

This project is a personal portfolio website developed using HTML, CSS, and JavaScript. It presents personal information, selected projects, GitHub repositories, and a contact form in a clean, responsive, and interactive interface.

Compared to the earlier version, this portfolio includes more advanced functionality such as project sorting, and GitHub API integration.

## Main Features and Implementation

### 1. Theme Toggle and Theme Persistence

The website supports both dark mode and light mode using JavaScript and CSS custom properties. When the user clicks the theme button, the theme changes immediately, the button icon updates, and the selected theme is saved in `localStorage`. When the page is reopened, the saved theme is loaded automatically.

#### Example code snippet

    function setTheme(theme) {
      if (theme === "light") {
        root.classList.add("light");
        btn.textContent = "🌙";
        btn.setAttribute("aria-label", "Switch to dark mode");
      } else {
        root.classList.remove("light");
        btn.textContent = "☀️";
        btn.setAttribute("aria-label", "Switch to light mode");
      }

      localStorage.setItem("theme", theme);
    }

This improves usability because the website remembers the user’s preference.

### 2. Dynamic Greeting Message

A greeting message appears when the page loads and changes depending on the current time of day: morning, afternoon, or evening. This was implemented using the JavaScript Date object and conditional statements.

#### Example code snippet

    const hour = new Date().getHours();
    let message = "";

    if (hour < 12) {
      message = "Good morning!";
    } else if (hour < 18) {
      message = "Good afternoon!";
    } else {
      message = "Good evening!";
    }

The greeting appears briefly as a notification.

### 3. Project Filtering and Sorting

The Projects section allows users to filter projects by category such as All, Web, and Database. It also allows sorting project titles alphabetically from A to Z or Z to A.

Each project card uses a data-category attribute, and JavaScript updates the visible projects dynamically based on the selected filter or sort option.

#### Example code snippet

    currentFilter = button.dataset.filter;

    if (currentSort === "az") {
      visibleProjects.sort((a, b) => {
        const nameA = a.querySelector("h3").textContent.trim().toLowerCase();
        const nameB = b.querySelector("h3").textContent.trim().toLowerCase();
        return nameA.localeCompare(nameB);
      });
    }

This improves browsing because users can organize the displayed projects without reloading the page.

### 4. GitHub API Integration

The website connects to the GitHub API to display repositories dynamically. Instead of hardcoding repository information in HTML, the JavaScript file fetches the data and creates repository cards automatically.

#### Example code snippet

    fetch("https://api.github.com/users/1Sara19/repos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        return response.json();
      })

After fetching the data, the page shows repository names, descriptions, and links. If the request fails, an error message appears.

## Design and Responsiveness

The layout was designed to be clean, readable, and responsive. CSS Grid is used for project cards, Flexbox is used for navigation and controls, and media queries adjust the layout for smaller screens.

#### Example code snippet

    @media (max-width: 700px) {
      .grid {
        grid-template-columns: 1fr;
      }

      .nav {
        flex-wrap: wrap;
      }
    }

The website works across desktop, tablet, and mobile screen sizes.

## Testing

The website was tested manually in the browser to verify that all interactive features work correctly and produce the expected results.

The testing included the following checks and outcomes:

- Theme toggle: switching between light mode and dark mode worked correctly.
- Theme persistence: the selected theme remained saved after refreshing the page because it was stored in localStorage.
- Greeting message: the greeting changed correctly depending on the time of day (morning, afternoon, evening).
- Project filtering: selecting a category displayed only the matching projects.
- Project sorting: the projects were sorted correctly in alphabetical order from A to Z and from Z to A.
- Contact form validation: error messages appeared when fields were empty or the email format was invalid.
- GitHub API integration: repositories loaded successfully from the GitHub API and were displayed dynamically on the page.

### Lighthouse Results

Lighthouse testing was also used to evaluate the website quality. The desktop results were:

- Performance: 100
- Accessibility: 100
- SEO: 100
- Best Practices: 78

These results showed that the website performed very well in most areas. The lower Best Practices score was mainly related to local testing over HTTP instead of HTTPS, not to a major issue in the website functionality itself.

## Conclusion

This project demonstrates front-end development skills using HTML, CSS, and JavaScript. It includes dynamic features, API integration, state persistence, form validation, and structured documentation.