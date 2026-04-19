const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const notice = document.getElementById("greetingNotice");

if (notice) {
  const hour = new Date().getHours();
  let message = "";

  if (hour < 12) {
    message = "Good morning!";
  } else if (hour < 18) {
    message = "Good afternoon!";
  } else {
    message = "Good evening!";
  }

  notice.textContent = message;
  notice.classList.add("show");

  setTimeout(() => {
    notice.classList.remove("show");
  }, 2500);
}

const btn = document.getElementById("themeToggle");
const root = document.documentElement;

function setTheme(theme) {
  if (!btn) return;

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

const savedTheme = localStorage.getItem("theme") || "dark";
if (btn) {
  setTheme(savedTheme);

  btn.addEventListener("click", () => {
    const currentTheme = root.classList.contains("light") ? "light" : "dark";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  });
}

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

function showMessage(text, type) {
  if (!msg) return;
  msg.textContent = text;
  msg.className = type;
}

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

if (form && nameInput && emailInput && messageInput) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "") {
      showMessage("Please enter your name.", "error-message");
      return;
    }

    if (email === "") {
      showMessage("Please enter your email address.", "error-message");
      return;
    }

    if (!isValidEmail(email)) {
      showMessage("Please enter a valid email address.", "error-message");
      return;
    }

    if (message === "") {
      showMessage("Please enter your message.", "error-message");
      return;
    }

    showMessage("Your message has been sent successfully.", "success-message");
    form.reset();
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");
const projectsGrid = document.getElementById("projectsGrid");
const projects = Array.from(document.querySelectorAll("#projectsGrid .project"));
const projectsMessage = document.getElementById("projectsMessage");
const sortProjects = document.getElementById("sortProjects");

let currentFilter = "all";
let currentSort = "default";

function updateProjects() {
  if (!projectsGrid || !projectsMessage) return;

  let visibleProjects = projects.filter((project) => {
    const category = project.dataset.category;
    return currentFilter === "all" || category === currentFilter;
  });

  if (currentSort === "az") {
    visibleProjects.sort((a, b) => {
      const nameA = a.querySelector("h3").textContent.trim().toLowerCase();
      const nameB = b.querySelector("h3").textContent.trim().toLowerCase();
      return nameA.localeCompare(nameB);
    });
  } else if (currentSort === "za") {
    visibleProjects.sort((a, b) => {
      const nameA = a.querySelector("h3").textContent.trim().toLowerCase();
      const nameB = b.querySelector("h3").textContent.trim().toLowerCase();
      return nameB.localeCompare(nameA);
    });
  }

  projectsGrid.innerHTML = "";

  if (visibleProjects.length === 0) {
    projectsMessage.textContent = "No projects found in this category.";
  } else {
    projectsMessage.textContent = "";
    visibleProjects.forEach((project) => {
      projectsGrid.appendChild(project);
    });
  }
}

if (filterButtons.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      updateProjects();
    });
  });
}

if (sortProjects) {
  sortProjects.addEventListener("change", () => {
    currentSort = sortProjects.value;
    updateProjects();
  });
}

const githubContainer = document.getElementById("github-container");

if (githubContainer) {
  fetch("https://api.github.com/users/1Sara19/repos")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
      return response.json();
    })
    .then((data) => {
      githubContainer.innerHTML = "";

      const filteredRepos = data
        .filter((repo) => !repo.fork)
        .slice(0, 5);

      if (filteredRepos.length === 0) {
        githubContainer.innerHTML = `<p class="muted">No GitHub repositories available.</p>`;
        return;
      }

      filteredRepos.forEach((repo) => {
        const project = document.createElement("div");
        project.classList.add("project");

        project.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description available."}</p>
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        `;

        githubContainer.appendChild(project);
      });
    })
    .catch(() => {
      githubContainer.innerHTML = `
        <p class="error-message">Failed to load projects. Try again later.</p>
      `;
    });
}