const handleToggle = (targetId) => {
  document.querySelectorAll("nav > ul > li").forEach((li) => {
    li.textContent === targetId
      ? li.classList.add("active")
      : li.classList.remove("active");
  });

  document.querySelectorAll("main > .content > section").forEach((section) => {
    section.id === targetId
      ? section.classList.remove("hidden")
      : section.classList.add("hidden");
  });
};

/* clock */

let mapping = {};


const updateTime = () => {
  const date = new Date();
  const timeZone = "Asia/Singapore";
  const dateString = formatter.format(date).substring(0, 10);

  const originalTime = document.getElementById("clock").textContent;
};

document.addEventListener("DOMContentLoaded", async () => {
  document.getElementById("clock-wrapper").classList.remove("hidden");
  setInterval(updateTime, 1000);
});
