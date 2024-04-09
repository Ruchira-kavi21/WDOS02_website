fetch("wilpattu.json")
  .then((response) => response.json())
  .then((data) => {
    //local storage
    localStorage.setItem("wilpattuData", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("wilpattuData"));

document.getElementById("main_head").innerHTML = data.intro_sec.main_head;
document.getElementById("intro_head").innerHTML = data.intro_sec.intro_head;
document.getElementById("intro").innerHTML = data.intro_sec.intro;

document.getElementById("middle_sec_head").innerHTML = data.middle_sec.middle_sec_head;
document.getElementById("para_I").innerHTML = data.middle_sec.para_I;