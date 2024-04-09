fetch("department.json")
  .then((response) => response.json())
  .then((data) => {
    //local storage
    localStorage.setItem("departmentData", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("departmentData"));

document.getElementById("heading").innerHTML = data.main_heading.heading;
document.getElementById("introduction").innerHTML = data.intro.introduction;

