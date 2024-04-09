fetch("animal.json")
  .then((response) => response.json())
  .then((data) => {
    //local storage
    localStorage.setItem("animalData", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("animalData"));
// console.log("ss")
document.getElementById("main_heading").innerHTML = data.animal_intro.main_heading;
document.getElementById("about1").innerHTML = data.animal_intro.about1;

document.getElementById("elephant_head").innerHTML = data.animals[0].elephant_head;
document.getElementById("elephant_detail").innerHTML = data.animals[0].elephant_detail;

document.getElementById("leopard_head").innerHTML = data.animals[1].leopard_head;
document.getElementById("leopard_detail").innerHTML = data.animals[1].leopard_detail;

document.getElementById("bear_head").innerHTML = data.animals[2].bear_head;
document.getElementById("bear_detail").innerHTML = data.animals[2].bear_detail;

document.getElementById("monkey_head").innerHTML = data.animals[3].monkey_head;
document.getElementById("monkey_detail").innerHTML = data.animals[3].monkey_detail;

document.getElementById("deer_head").innerHTML = data.animals[4].deer_head;
document.getElementById("deer_detail").innerHTML = data.animals[4].deer_detail;

document.getElementById("Junglefowl_head").innerHTML = data.animals[5].Junglefowl_head;
document.getElementById("Junglefowl_detail").innerHTML = data.animals[5].Junglefowl_detail;

document.getElementById("owl_head").innerHTML = data.animals[6].owl_head;
document.getElementById("owl_detail").innerHTML = data.animals[6].owl_detail;

document.getElementById("blue_whale_head").innerHTML = data.animals[7].blue_whale_head;
document.getElementById("blue_whale_detail").innerHTML = data.animals[7].blue_whale_detail;

document.getElementById("sea_turtle_head").innerHTML = data.animals[8].sea_turtle_head;
document.getElementById("sea_turtle_detail").innerHTML = data.animals[8].sea_turtle_detail;

document.getElementById("title1").innerHTML = data.parks[0].title;
document.getElementById("title2").innerHTML = data.parks[1].title;
document.getElementById("title3").innerHTML = data.parks[2].title;
document.getElementById("title4").innerHTML = data.parks[3].title;
document.getElementById("title5").innerHTML = data.parks[4].title;
document.getElementById("title6").innerHTML = data.parks[5].title;