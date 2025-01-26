document.addEventListener("DOMContentLoaded", () => {
    const personalInfo = {
        name: "Denim Giri",
        title: "Student Software Developer",
        about: "Passionate Computer Science student with experience in web development, backend engineering, and machine learning. Seeking opportunities to apply my skills and grow as a developer.",
        email: "denimgiri92@gmail.com",
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/denim-giri-a76a5532a/",
    };

    const skills = ["JavaScript", "React", "Python", "Git", "HTML/CSS", "Node.js", "SQL","React","Google Maps API", "REST APIs", "Matplotlib", "OpenAI API", "Django","Data Science", "Pandas", "NumPy", "Matplotlib", "OpenAI API", "Gemini API"];

    const projects = [
        {
            title: "Weather Dashboard with Recommendations",
            description: "Developed a weather application using Django, JavaScript, and OpenAI API to provide weather updates and personalized recommendations.",
            technologies: ["Django", "HTML", "CSS", "JavaScript", "Matplotlib", "OpenAI API", "OpenWeather API"],
            github: "https://github.com/your-weather-project"
        },
        {
            title: "AI Enhanced Blog Engine",
            description: "Created an AI-powered blog platform that uses the OpenAI API to automatically generate tags for blog posts.",
            technologies: ["Django", "HTML", "CSS","JavaScript","Prism.js","React", "OpenAI API","Google Maps API","Gemini"],
            github: "https://github.com/your-blog-engine"
        },
        {
            title: "Animated Face Simulation",
            description: "Built an interactive animation of a face with Python's Turtle graphics.",
            technologies: ["Python", "Turtle"],
            github: "https://github.com/your-face-animation"
        },
        {
            title: "Flower Type Prediction with Machine Learning",
            description: "Built a machine learning model to classify flower species using key features such as petal and sepal dimensions. Deployed the application using Streamlit for a user-friendly interface.",
            technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Streamlit"],
            github: "https://github.com/your-flower-prediction"
        },
    ];

    // Populate header
    document.getElementById("name").textContent = personalInfo.name;
    document.getElementById("title").textContent = personalInfo.title;

    // Populate about section
    document.getElementById("about-text").textContent = personalInfo.about;

    const contactLinks = `
        <a href="mailto:${personalInfo.email}"><i class="fas fa-envelope"></i> Email</a>
        <a href="${personalInfo.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>
        <a href="${personalInfo.linkedin}" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
    `;
    document.getElementById("contact-links").innerHTML = contactLinks;

    // Populate skills section
    const skillsList = skills.map(skill => `<span>${skill}</span>`).join("");
    document.getElementById("skills-list").innerHTML = skillsList;

    // Populate projects section
    const projectsGrid = projects.map(project => `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div>${project.technologies.map(tech => `<span>${tech}</span>`).join("")}</div>
            <a href="${project.github}" target="_blank"><i class="fab fa-github"></i> View on GitHub</a>
        </div>
    `).join("");
    document.getElementById("projects-grid").innerHTML = projectsGrid;

    // Populate footer
    document.getElementById("footer-text").textContent = `© $Contact me at:denimgiri92@gmail.com`;
});
