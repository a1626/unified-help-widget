'use strict';

function changeTab(idx) {
  const noOfTabs = 2;
  let tab;
  let tabButton;
  for (var i = noOfTabs; i >= 0; i--) {
    tab = document.getElementById(`tab${i}`);
    tabButton = document.getElementById(`tabBotton${i}`);

    i === idx ? (
      tab.style.display = "flex",
      tabButton.classList.add("active")
    ) : (
      tab.style.display = "none",
      tabButton.classList.remove("active")
    );
  }
}