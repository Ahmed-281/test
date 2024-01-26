let bx = document.querySelector(".box");
let btn = document.querySelector(".add");
let taskText = document.querySelector(".form-control");
let asd = document.querySelector(".tasks-box");
let tnum = document.querySelector(".tnum");
let tNUM_CAbtn = document.querySelector(".tNUM-CAbtn");
let ca = document.querySelector(".clearAll");
let test = [];
let i = 1;

btn.onclick = function () {
    if (test.includes("added")) {
        i++;
        let task = document.createElement("div");
        task.setAttribute("class", "rounded-1 mb-1 p-2 task");
        task.setAttribute("id","tasks")
        task.innerHTML = taskText.value;
        taskText.value=""
        asd.appendChild(task);
        tnum.innerHTML = `you have ${i} pending tasks`;
        if (tNUM_CAbtn.classList.contains("vis")) {
            tNUM_CAbtn.classList.toggle("vis");
            i=1
            tnum.innerHTML = `you have ${i} pending tasks`;
            taskText.value=""
        }
    } else {
        let task = document.createElement("div");
        task.setAttribute("class", "rounded-1 mb-1 p-2 task");
        task.setAttribute("id","tasks")
        task.innerHTML = taskText.value;
        asd.appendChild(task);
        tnum.innerHTML = `you have ${i} pending tasks`;
        tNUM_CAbtn.classList.remove("vis");
        test.push("added");
        taskText.value=""

    }
};

ca.onclick = function () {
    let tasks = document.querySelectorAll(".task");
    tasks.forEach((task) => {
        task.remove();
    });
    tNUM_CAbtn.classList.toggle("vis");
};
