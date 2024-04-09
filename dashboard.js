document.addEventListener("DOMContentLoaded", function () {
  const editButtons = document.querySelectorAll(".editButtons");

  editButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.classList.contains("editButtons")) {
        const dataKey = this.value;
        const data = localStorage.getItem(dataKey);
        if (data) {
          localStorage.setItem("currentData", data);
          localStorage.setItem("dataKey", dataKey);
          window.open("edit.html", "popup", "width=750,height=650");
        } else {
          alert("No data found.");
        }
      }
    });
  });

  const dataKey = localStorage.getItem("dataKey");
  const currentContent = localStorage.getItem(dataKey);
  const textarea = document.getElementById("editt");
  //   textarea.value = currentContent;
});

document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("editt");
  const saveButton = document.getElementById("save");

  const savedData = localStorage.getItem("currentData");
  if (savedData) {
    textarea.value = savedData;
  }

  const editButtonValue = localStorage.getItem("editButtonValue");

  if (editButtonValue) {
    textarea.value = localStorage.getItem(editButtonValue);
  }

  saveButton.addEventListener("click", function () {
    const newData = textarea.value;

    const editButtonValue = localStorage.getItem("editButtonValue");

    localStorage.setItem(editButtonValue, newData);
    localStorage.setItem(localStorage.getItem("dataKey"), newData);

    alert("Your Changes saved!");
  });
});

function createList(array) {
  let code = '';
  for (let i = 0; i < array.length; i++) {
    code += `<li>${array[i]}</li>`;
  }
  return code;
}

if (localStorage.getItem('subscribedEmails')) {
  const storedData = localStorage.getItem('subscribedEmails');
  const subscribedEmails = JSON.parse(storedData);
  document.getElementById("output_list").innerHTML = createList(subscribedEmails);
}