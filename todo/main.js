const FEATURES = {
  login: true,
  register: false,
  products: false,
};

function inProgress(name) {
  const progress = document.createElement("div");
  progress.innerHTML = `
    <div class="card">
        <div class="card-body">
            <p>
                Trabajo en proceso ${name}
            </p>
        </div<
    </div>
`;
  return progress;
}

function login() {
  const loginElement = document.createElement("form");
  loginElement.innerHTML = `
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    `;
  return loginElement;
}

// Todo LIST
// Tiene que tener un INPUT
// Tiene que tener un boton
// Y tiene que mostrar una lista de tareas
// La tarea
// Cada tarea deberia tener un boton
// Que al presionarlo elemine la tarea

window.onload = () => {
  const inputElement = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const buttonElement = document.getElementById("addTask");
  // Los eventos
  buttonElement.addEventListener("click", (event) => {
    // Agregarle un hijo a taskList
    let taskElement = document.createElement("li");
    taskElement.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between"
    );

    // Vamos a crear un P que sea el que contenga el inputElement.value
    let taskP = document.createElement("p");
    taskP.innerHTML = inputElement.value;
    taskElement.appendChild(taskP);

    // crear un boton que 'elimine' la tarea
    let taskDoneButton = document.createElement("button");
    taskDoneButton.innerHTML = "Done";
    taskDoneButton.classList.add("btn", "btn-danger");
    // Agregamos el escuchador de eventos
    taskDoneButton.addEventListener("click", () => {
      // Aca iría la logica de borrar
      taskP.classList.add("text-decoration-line-through");
      taskDoneButton.remove();
    });

    taskElement.appendChild(taskDoneButton);

    taskList.appendChild(taskElement);
  });
};

// window.onkeydown = (event) => {
//   console.log(event.key);
//   if (event.key == "Control") {
//     alert("No puedes darle a control");
//   }
// };
