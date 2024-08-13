document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // Utility function to create elements with classes and text
  const createElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };

  // Header
  const header = createElement("header", "resume-header");
  const name = createElement("h1", "name", "Aytekin Kaplan");
  const title = createElement(
    "h2",
    "title",
    "Fullstack Developer And Software Development Engineer in Test"
  );
  header.append(name, title);

  // Contact Info
  const contact = createElement("section", "contact-info");

  // Email
  const email = createElement("a", "contact-item");
  email.href = "mailto:ytknkpln@gmail.com";
  email.innerHTML = '<i class="fa-solid fa-envelope"></i> ytknkpln@gmail.com';

  // Phone
  const phone = createElement("span", "contact-item");
  phone.innerHTML = '<i class="fa-solid fa-phone"></i> +905432634397';

  // LinkedIn
  const linkedin = createElement("a", "contact-item");
  linkedin.href = "https://www.linkedin.com/in/aytekinkaplan/";
  linkedin.innerHTML = '<i class="fa-brands fa-linkedin"></i> LinkedIn Profile';

  // Location
  const location = createElement("span", "contact-item");
  location.innerHTML = '<i class="fa-solid fa-map-marker-alt"></i> Van, Turkey';

  contact.append(email, phone, linkedin, location);

  // Professional Summary
  const summary = createElement("section", "section summary");
  const summaryTitle = createElement(
    "h3",
    "section-title",
    "Professional Summary"
  );
  const summaryText = createElement(
    "p",
    "summary-text",
    `Experienced Software Development Engineer in Test with a strong background in Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC). Proficient in Java-based Black Box Testing, Functional Testing, and Regression Testing. Skilled in creating Automation Frameworks, including Page Object Module (POM) and Data-Driven/Modular Framework in Selenium WebDriver. Expertise in crafting detailed test scenarios and cases for Smoke, Functional, and Regression testing, ensuring software quality. Well-versed in Manual Testing and Automated Testing using Selenium WebDriver, Maven, Cucumber, Junit, and TestNG. Familiar with Equivalence Class Partitioning, Boundary Value Analysis, and Defect Life Cycle using Jira. Domain knowledge in SQL queries and experience with Postman for manual API Testing. Solid understanding of Object-Oriented Programming (OOP), Jenkins for Continuous Integration, and strong analytical and communication skills. Effective team player capable of working independently in a fast-paced IT environment, meeting project deadlines. As a Fullstack Developer, proficient in both frontend and backend technologies, ensuring seamless integration of components. Experienced in building and maintaining scalable web applications with a focus on performance and user experience.`
  );
  summary.append(summaryTitle, summaryText);

  // Skills
  const skills = createElement("section", "section skills");
  const skillsTitle = createElement("h3", "section-title", "Technical Skills");
  const skillsList = createElement("ul", "skills-list");

  // Technology Icons and Names
  const technologies = {
    Java: "fa-brands fa-java",
    Python: "fa-brands fa-python",
    JavaScript: "fa-brands fa-js",
    HTML: "fa-brands fa-html5",
    CSS: "fa-brands fa-css3",
    SQL: "fa-solid fa-database",
    Git: "fa-brands fa-git",
    AWS: "fa-brands fa-cloud",
    "Selenium WebDriver": "fa-solid fa-robot",
    Jenkins: "fa-solid fa-cogs",
    Jira: "fa-solid fa-tachometer-alt",
    "REST API": "fa-solid fa-plug",
    Flask: "fa-solid fa-flask",
    Django: "fa-brands fa-django",
    Cucumber: "fa-solid fa-lemon",
    Junit: "fa-solid fa-cogs",
    TestNG: "fa-solid fa-bug",
    React: "fa-brands fa-react",
    "Node.js": "fa-brands fa-node",
    MongoDB: "fa-solid fa-database",
    "Express.js": "fa-brands fa-express",
  };

  // Create List Items
  for (const [tech, icon] of Object.entries(technologies)) {
    const skillItem = createElement("li", "skill-item");
    skillItem.innerHTML = `<i class="${icon}"></i> ${tech}`;
    skillsList.appendChild(skillItem);
  }

  skills.append(skillsTitle, skillsList);

  // Experience
  const experience = createElement("section", "section experience");
  const expTitle = createElement(
    "h3",
    "section-title",
    "Professional Experience"
  );
  const expList = createElement("ul", "exp-list");

  const createExpItem = (role, company, period, description) => {
    const item = createElement("li", "exp-item");
    const roleEl = createElement("h4", "role", role);
    const companyEl = createElement("span", "company", company);
    const periodEl = createElement("span", "period", period);
    const descEl = createElement("p", "description", description);
    item.append(roleEl, companyEl, periodEl, descEl);
    return item;
  };

  const exp1 = createExpItem(
    "Test Automation Engineer",
    "Triofan Technology, Information and Internet",
    "Aug 2023 – Present",
    `Utilized Agile/Scrum methodology for project development. Automated UI, API, and Data Validation test cases using Selenium-JUnit Cucumber BDD. Proficient in Git/GitHub for version control. Implemented Page Object Model (POM) for Automation Testing with Java, Selenium WebDriver, and Maven. Developed Selenium WebDriver scripts in Java and Cucumber for UI automation. Established an automation framework from scratch, emphasizing Cucumber BDD for API and Database data validation using multiple queries.`
  );
  expList.appendChild(exp1);

  experience.append(expTitle, expList);

  // Education
  const education = createElement("section", "section education");
  const eduTitle = createElement("h3", "section-title", "Education");
  const degree = createElement("p", "degree", "Department Of Physics Teacher");
  const university = createElement(
    "p",
    "university",
    "Istanbul Marmara University, Turkey | 2003–2008"
  );
  education.append(eduTitle, degree, university);

  // Volunteer Experience
  const volunteer = createElement("section", "section volunteer");
  const volTitle = createElement("h3", "section-title", "Volunteer Experience");
  const volDesc = createElement(
    "p",
    "vol-desc",
    `Education Volunteer at Euphrates Educational Institution since September 2008: Conducted workshops for underprivileged students, focusing on math and science. Collaborated with teachers to create interactive lesson plans with hands-on activities. Contributed to community outreach programs promoting access to quality education. Achievements: Implemented a mentorship program, leading to a 20% improvement in students' academic performance. Contributed to the establishment of a community library for self-directed learning.`
  );
  volunteer.append(volTitle, volDesc);

  // Languages
  const languages = createElement("section", "section languages");
  const langTitle = createElement("h3", "section-title", "Languages");
  const langDesc = createElement(
    "p",
    "lang-desc",
    "Turkish (native), Kurdish (intermediate), English (intermediate)"
  );
  languages.append(langTitle, langDesc);

  // Interpersonal Skills
  const interpersonal = createElement("section", "section interpersonal");
  const interTitle = createElement(
    "h3",
    "section-title",
    "Interpersonal Skills"
  );
  const interDesc = createElement(
    "p",
    "inter-desc",
    "Effective Communication, Adaptability, Problem Solving, Critical Thinking, Teamwork"
  );
  interpersonal.append(interTitle, interDesc);

  // Projects Section
  const projects = createElement("section", "section projects");
  const projectsTitle = createElement("h3", "section-title", "Projects");
  const projectsList = createElement("div", "projects-list");

  const createProjectItem = (title, description, technologies) => {
    const item = createElement("div", "project-item");
    const itemTitle = createElement("h4", "project-title", title);
    const itemDesc = createElement("p", "project-description", description);
    const itemTech = createElement(
      "p",
      "project-tech",
      `Technologies: ${technologies}`
    );
    item.append(itemTitle, itemDesc, itemTech);
    return item;
  };

  const project1 = createProjectItem(
    "Automated Testing Framework",
    "Developed a robust automated testing framework using Selenium WebDriver and Cucumber BDD.",
    "Java, Selenium, Cucumber, Maven"
  );
  const project2 = createProjectItem(
    "E-commerce Website",
    "Built a fully functional e-commerce website with user authentication and payment integration.",
    "React, Node.js, Express, MongoDB"
  );

  projectsList.append(project1, project2);
  projects.append(projectsTitle, projectsList);

  // Testimonials Section
  const testimonials = createElement("section", "section testimonials");
  const testimonialsTitle = createElement(
    "h3",
    "section-title",
    "Testimonials"
  );
  const testimonialsList = createElement("div", "testimonials-list");

  const createTestimonialItem = (text, author, position) => {
    const item = createElement("div", "testimonial-item");
    const itemText = createElement("p", "testimonial-text", `"${text}"`);
    const itemAuthor = createElement(
      "p",
      "testimonial-author",
      `- ${author}, ${position}`
    );
    item.append(itemText, itemAuthor);
    return item;
  };

  const testimonial1 = createTestimonialItem(
    "Aytekin is an exceptional tester with a keen eye for detail. His automation skills have significantly improved our testing efficiency.",
    "Murat Çorlu",
    "Project Manager at Triofan Technology"
  );

  testimonialsList.append(testimonial1);
  testimonials.append(testimonialsTitle, testimonialsList);

  // Dark Mode Toggle
  const darkModeToggle = createElement("button", "dark-mode-toggle", "🌓");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Append all sections to root
  root.append(
    header,
    contact,
    summary,
    skills,
    experience,
    education,
    projects,
    volunteer,
    languages,
    interpersonal,
    testimonials,
    darkModeToggle
  );

  // Animation using GSAP
  gsap.from(".name", { duration: 1, opacity: 0, y: -50 });
  gsap.from(".title", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
  gsap.from(".contact-item", {
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
    delay: 1,
  });
  gsap.from(".section", {
    duration: 0.5,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    delay: 1.5,
  });
});
