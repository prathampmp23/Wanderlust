const tabBox = document.querySelector(".tabs-box");
allTabs = document.querySelectorAll(".tab");
arrowIcon = document.querySelectorAll(".icons i");

let isDragging = false;

const handleIcon = () => {
  let scrollVal = Math.round(tabBox.scrollLeft);
  let maxScrollableWidth = tabBox.scrollWidth - tabBox.clientWidth;
  console.log(maxScrollableWidth, scrollVal);
  arrowIcon[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
  arrowIcon[1].parentElement.style.display =
    maxScrollableWidth > scrollVal ? "flex" : "none";
};

arrowIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    // if clicked iconis left , reduce 350 from tabsbox scrollleft else add
    tabBox.scrollLeft += icon.id === "left" ? -350 : 350;
    setTimeout(() => handleIcon(), 50);
  });
});

allTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabBox.querySelector(".active").classList.remove("active");
    tab.classList.add("active");
  });
});

const dragging = (event) => {
  if (!isDragging) return;
  tabBox.classList.add("dragging");
  tabBox.scrollLeft -= event.movementX;
};

const dragStop = () => {
  isDragging = false;
  tabBox.classList.remove("dragging");
};

tabBox.addEventListener("mousedown", () => (isDragging = true));
tabBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
