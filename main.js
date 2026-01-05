/*************************************************
 * VaultWise - Main JavaScript File
 * Firebase + AI Logic (Prototype)
 *************************************************/

/* ================================
   SIMPLE AI LOGIC (SIMULATED)
================================ */

function generateRecommendations(skills) {
  const jobMap = {
    "python": ["Software Developer", "Data Analyst"],
    "javascript": ["Frontend Developer", "Web Developer"],
    "machine learning": ["ML Engineer", "AI Engineer"],
    "web development": ["Frontend Developer", "Full Stack Developer"]
  };

  const courseMap = {
    "python": ["Python for Everybody – Coursera"],
    "javascript": ["JavaScript Basics – Udemy"],
    "machine learning": ["Machine Learning by Andrew Ng"],
    "web development": ["Full Stack Web Development – Coursera"]
  };

  let jobs = [];
  let courses = [];

  skills.forEach(skill => {
    const key = skill.toLowerCase().trim();
    if (jobMap[key]) jobs.push(...jobMap[key]);
    if (courseMap[key]) courses.push(...courseMap[key]);
  });

  return {
    jobs: [...new Set(jobs)],
    courses: [...new Set(courses)]
  };
}

/* ================================
   FORM HANDLING
================================ */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("careerForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const skillsInput = document.getElementById("skills").value;
    const skillsArray = skillsInput.split(",");

    const recommendations = generateRecommendations(skillsArray);

    document.getElementById("jobResults").innerHTML =
      recommendations.jobs.map(job => `<li>${job}</li>`).join("");

    document.getElementById("courseResults").innerHTML =
      recommendations.courses.map(course => `<li>${course}</li>`).join("");
  });
});
