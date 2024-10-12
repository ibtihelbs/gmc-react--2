const form = document.querySelector("form");
const addTaskIn = document.querySelector("#add");
const center = document.querySelector(".center");
const tasksWrap = document.querySelector("#tasks-wrap");
let tasksArr = [];
const displayTasks = () => {
  const display = tasksArr
    .map((v) => {
      const { task, done } = v;
      return `<div class="single-task flex between">
              <div class="flex">
                <form class="checked">
                  <input type="checkbox" ${
                    done ? "checked" : ""
                  } class="state" />
                </form>
                <p ${done ? "class='lined'" : ""} >${task} </p>
              </div>
              <button class="delete">
                <img src="./images/icon-cross.svg" alt="icon-cross" />
              </button>
            </div>`;
    })
    .join("");
  tasksWrap.innerHTML = display;
  handleCompleted();
};
const handleCompleted = () => {
  const checkbox = document.querySelectorAll(".state");
  checkbox.forEach((v, i) => {
    console.log(v);
    v.addEventListener("change", (e) => {
      tasksArr[i].done = e.target.checked;
      displayTasks();
    });
  });
};
form.addEventListener("submit", function (e) {
  e.preventDefault();
  tasksArr = [...tasksArr, { done: false, task: addTaskIn.value }];
  displayTasks();
  addTaskIn.value = "";
});
