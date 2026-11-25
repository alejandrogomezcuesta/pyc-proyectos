const projects = [
  {
    folder: "alejandro-munoz",
    title: "Movimiento izquierda y derecha",
    student: "Alejandro Muñoz",
    icon: "✦"
  }
];

const projectGrid = document.querySelector("#project-grid");
const projectCount = document.querySelector("#project-count");

projectCount.textContent = String(projects.length).padStart(2, "0");

for (const [index, project] of projects.entries()) {
  const card = document.createElement("a");
  card.className = "project-card";
  card.href = `./${encodeURIComponent(project.folder)}/index.html`;
  card.setAttribute("aria-label", `Jugar a ${project.title}, de ${project.student}`);

  const topLine = document.createElement("div");
  topLine.className = "card-topline";
  topLine.innerHTML = `<span>PROYECTO ${String(index + 1).padStart(2, "0")}</span><span class="card-status">DISPONIBLE</span>`;

  const icon = document.createElement("span");
  icon.className = "game-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = project.icon;

  const title = document.createElement("h3");
  title.textContent = project.title;

  const student = document.createElement("p");
  student.textContent = `Por ${project.student}`;

  const arrow = document.createElement("span");
  arrow.className = "card-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";

  card.append(topLine, icon, title, student, arrow);
  projectGrid.append(card);
}
