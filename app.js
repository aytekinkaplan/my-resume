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
    "Full Stack Developer And Software Engineer in Testing"
  );
  header.append(name, title);

  // Contact Info
  const contact = createElement("section", "contact-info");
  const email = createElement("a", "contact-item", "ytknkpln@gmail.com");
  email.href = "mailto:ytknkpln@gmail.com";
  const phone = createElement("span", "contact-item", "(543) 263-4397");
  const location = createElement("span", "contact-item", "Van, Turkey");
  contact.append(email, phone, location);

  // About
  const about = createElement("section", "about");
  const aboutTitle = createElement("h3", "section-title", "About Me");
  const aboutText = createElement(
    "p",
    "about-text",
    "Passionate full stack developer with 5+ years of experience in building scalable web applications. Skilled in JavaScript, React, Node.js, and Python. Committed to writing clean, efficient code and constantly learning new technologies."
  );
  about.append(aboutTitle, aboutText);

  // Skills
  const skills = createElement("section", "skills");
  const skillsTitle = createElement("h3", "section-title", "Skills");
  const skillsList = createElement("ul", "skills-list");
  ["JavaScript", "React", "Node.js", "Python", "SQL", "Git", "AWS"].forEach(
    (skill) => {
      const skillItem = createElement("li", "skill-item", skill);
      skillsList.appendChild(skillItem);
    }
  );
  skills.append(skillsTitle, skillsList);

  // Experience
  const experience = createElement("section", "experience");
  const expTitle = createElement("h3", "section-title", "Work Experience");
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
    "Senior Full Stack Developer",
    "TechCorp Inc.",
    "2018 - Present",
    "Led a team of 5 developers in building a cloud-based SaaS platform. Improved system performance by 40% through code optimization."
  );
  const exp2 = createExpItem(
    "Full Stack Developer",
    "WebSolutions LLC",
    "2015 - 2018",
    "Developed and maintained multiple client websites and web applications. Implemented responsive designs and ensured cross-browser compatibility."
  );
  expList.append(exp1, exp2);
  experience.append(expTitle, expList);

  // Education
  const education = createElement("section", "education");
  const eduTitle = createElement("h3", "section-title", "Education");
  const degree = createElement(
    "p",
    "degree",
    "Bachelor of Science in Computer Science"
  );
  const university = createElement(
    "p",
    "university",
    "University of Technology"
  );
  const gradYear = createElement("p", "grad-year", "Graduated: 2015");
  education.append(eduTitle, degree, university, gradYear);

  // Append all sections to root
  root.append(header, contact, about, skills, experience, education);

  // Animations
  gsap.from("header", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".contact-item", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.2,
  });
  gsap.from(".section-title", {
    opacity: 0,
    x: -50,
    duration: 0.5,
    stagger: 0.2,
  });
  gsap.from(".skill-item", {
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
    stagger: 0.1,
  });
  gsap.from(".exp-item", { opacity: 0, x: -50, duration: 0.5, stagger: 0.2 });

  // Interactive elements
  document.querySelectorAll(".skill-item").forEach((item) => {
    item.addEventListener("mouseover", () => {
      gsap.to(item, { scale: 1.1, duration: 0.2 });
    });
    item.addEventListener("mouseout", () => {
      gsap.to(item, { scale: 1, duration: 0.2 });
    });
  });
});
