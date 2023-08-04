const formData = {
  dogName: "Byron",
  dogBreed: "Poodle",
};

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  });

function submitData(name, email) {
  const user = {
    name: name,
    email: email,
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((newUser) => {
      console.log(newUser);
      appendUser(newUser);
    })
    .catch((err) => {
      console.error(err);
      appendError(err.message);
    });
}

function appendUser(newUser) {
  const b = document.querySelector("body");
  const addUser = document.createElement("div");
  addUser.innerHTML = `<h1>ID: ${newUser.id}</h1>
      <h1>Name ${newUser.name}</h1>
      <h1>Email ${newUser.email}</h1>`;

  addUser.setAttribute("id", `user-${newUser.id}`);

  b.appendChild(addUser);
}

function appendError(errorMessage) {
  const b = document.querySelector("body");
  const errorP = document.createElement("p");
  errorP.innerHTML = errorMessage;
  b.appendChild(errorP);
}

submitData("Spencer", "email.com");
