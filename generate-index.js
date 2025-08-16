const fs = require("fs");
const path = require("path");

const PROBLEMS_DIR = path.join(__dirname, "problems");
const README_PATH = path.join(PROBLEMS_DIR, "README.md");

const DIFFICULTY_MAP = {
  easy: "🟩 Easy",
  medium: "🟨 Medium",
  hard: "🟥 Hard",
};

function formatName(fileName) {
  return fileName
    .replace(/\.(js|py)$/, "")
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

function generateTableAndStats() {
  let rows = [];
  let counter = 1;
  const stats = { easy: 0, medium: 0, hard: 0 };

  for (const diff of ["easy", "medium", "hard"]) {
    const dir = path.join(PROBLEMS_DIR, diff);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir);
    const problems = {};

    for (const file of files) {
      const ext = path.extname(file);
      if (![".js", ".py"].includes(ext)) continue;

      const base = file.replace(ext, "");
      if (!problems[base]) problems[base] = {};
      problems[base][ext] = file;
    }

    stats[diff] += Object.keys(problems).length;

    for (const base of Object.keys(problems)) {
      const problemName = formatName(base);
      const jsFile = problems[base][".js"];
      const pyFile = problems[base][".py"];
      const jsLink = jsFile ? `[${jsFile}](./${diff}/${jsFile})` : "—";
      const pyLink = pyFile ? `[${pyFile}](./${diff}/${pyFile})` : "—";

      rows.push(
        `| ${counter} | ${problemName} | ${DIFFICULTY_MAP[diff]} | ${jsLink} | ${pyLink} |`
      );
      counter++;
    }
  }

  const totalSolved = stats.easy + stats.medium + stats.hard;

  return { table: rows.join("\n"), stats, totalSolved };
}

function generateReadme() {
  const { table, stats, totalSolved } = generateTableAndStats();

  const header = `# 📂 Problems Index

This folder contains my solutions to coding interview problems.
Each solution is written in **JavaScript** first, then **Python**.

---

## 📊 Progress Tracker
- Total solved: ${totalSolved}
  - 🟩 Easy: ${stats.easy}
  - 🟨 Medium: ${stats.medium}
  - 🟥 Hard: ${stats.hard}

---

## 📌 Solved Problems

| #  | Problem | Difficulty | JavaScript | Python |
|----|----------|------------|------------|--------|
`;

  const legend = `

---

## 🏷️ Legend
- 🟩 Easy
- 🟨 Medium
- 🟥 Hard
`;

  fs.writeFileSync(README_PATH, header + table + legend, "utf8");
  console.log("✅ problems/README.md generated!");
}

generateReadme();
