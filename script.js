document.getElementById("careerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const problemSolving = parseInt(document.getElementById("problemSolving").value);
  const creativity = parseInt(document.getElementById("creativity").value);
  const communication = parseInt(document.getElementById("communication").value);
  const leadership = parseInt(document.getElementById("leadership").value);
  const experience = parseInt(document.getElementById("experience").value);
  const aspiration = document.getElementById("aspiration").value.toLowerCase();

  let recommendation = "";

  if (aspiration.includes("tech") || problemSolving > 7) {
    recommendation += "• Software Engineer, Data Scientist, AI Specialist<br>";
  }

  if (aspiration.includes("business") || leadership > 7 || communication > 7) {
    recommendation += "• Business Analyst, Project Manager, Sales Manager<br>";
  }

  if (aspiration.includes("design") || creativity > 8) {
    recommendation += "• UX/UI Designer, Graphic Designer, Product Designer<br>";
  }

  if (experience >= 10 && leadership > 6) {
    recommendation += "• Executive Leadership, Strategy Consultant<br>";
  }

  if (!recommendation) {
    recommendation = "Please explore multiple fields or upskill further to gain clarity on a suitable path.";
  }

  document.getElementById("careerOutput").innerHTML = recommendation;
  document.getElementById("resultBox").style.display = "block";
});

// Example JavaScript to show result
document.querySelector("button").addEventListener("click", () => {
  const resultBox = document.querySelector(".result");
  resultBox.style.display = "block";
  });