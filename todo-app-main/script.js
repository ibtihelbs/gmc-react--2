const form = document.querySelector("form");
const addTaskIn = document.querySelector("#add");
const center = document.querySelector(".center");
const tasksWrap = document.querySelector("#tasks-wrap");
//filtring btns
const itemsLeft = document.querySelector(".items-left");
const all = document.querySelector(".all");
const active = document.querySelector(".active");
const completed = document.querySelector(".completed");
const clear = document.querySelector(".clear-completed");
let tasksArr = [];
const displayTasks = (arr) => {
  const display = arr
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
  itemsLeft.innerHTML = tasksArr.filter((el) => !el.done).length;

  handleCompleted();
  handleDeleted();
};
active.addEventListener("click", () => {
  displayTasks(tasksArr.filter((el) => !el.done));
});
completed.addEventListener("click", () => {
  displayTasks(tasksArr.filter((el) => el.done));
});
all.addEventListener("click", () => {
  displayTasks(tasksArr);
});
clear.addEventListener("click", () => {
  tasksArr = tasksArr.filter((v) => !v.done);
  displayTasks(tasksArr);
});
const handleCompleted = () => {
  const checkbox = document.querySelectorAll(".state");
  checkbox.forEach((v, i) => {
    v.addEventListener("change", (e) => {
      tasksArr[i].done = e.target.checked;
      displayTasks(tasksArr);
    });
  });
};
const handleDeleted = () => {
  const deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((v, i) => {
    v.addEventListener("click", (e) => {
      tasksArr.splice(i, 1);
      displayTasks(tasksArr);
    });
  });
};
form.addEventListener("submit", function (e) {
  e.preventDefault();
  tasksArr = [...tasksArr, { done: false, task: addTaskIn.value }];
  displayTasks(tasksArr);

  addTaskIn.value = "";
});
