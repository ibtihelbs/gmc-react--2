const form = document.querySelector("form");
const addTaskIn = document.querySelector("#add");
const center = document.querySelector(".center");
const tasksWrap = document.querySelector("#tasks-wrap");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const tasks = `<div class="single-task flex between">
              <div class="flex">
                <form class="checked">
                  <input type="checkbox" class="state" />
                </form>
                <p>${addTaskIn.value} </p>
              </div>
              <button class="delete">
                <img src="./images/icon-cross.svg" alt="icon-cross" />
              </button>
            </div>`;
  console.log(typeof tasks);
  tasksWrap.innerHTML += tasks;
  addTaskIn.value = "";
});
