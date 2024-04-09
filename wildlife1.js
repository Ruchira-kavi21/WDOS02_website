fetch("wildlife.json")
  .then((response) => response.json())
  .then((data) => {
    //local storage
    localStorage.setItem("wildlifeData", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("wildlifeData"));

document.getElementById("min_heading1").innerHTML = data.wildlife_sec[0].min_heading1;
document.getElementById("sub_heading1").innerHTML = data.wildlife_sec[0].sub_heading1;
document.getElementById("min_about1").innerHTML = data.wildlife_sec[0].min_about1;
document.getElementById("sub_heading2").innerHTML = data.wildlife_sec[0].sub_heading2;
document.getElementById("min_about2").innerHTML = data.wildlife_sec[0].min_about2;

document.getElementById("udawalawe_heading1").innerHTML = data.wildlife_sec[1].udawalawe_heading1;
document.getElementById("sub_heading3").innerHTML = data.wildlife_sec[1].sub_heading3;
document.getElementById("udawalawe_about").innerHTML = data.wildlife_sec[1].udawalawe_about;

document.getElementById("wasgamuwa_heading1").innerHTML = data.wildlife_sec[2].wasgamuwa_heading1;
document.getElementById("sub_heading4").innerHTML = data.wildlife_sec[2].sub_heading4;
document.getElementById("wasgamuwa_about").innerHTML = data.wildlife_sec[2].wasgamuwa_about;

document.getElementById("kumana_heading").innerHTML = data.wildlife_sec[3].kumana_heading;
document.getElementById("sub_heading5").innerHTML = data.wildlife_sec[3].sub_heading5;
document.getElementById("kumana_about").innerHTML = data.wildlife_sec[3].kumana_about;

document.getElementById("sinharaja_heading").innerHTML = data.wildlife_sec[4].sinharaja_heading;
document.getElementById("sub_heading6").innerHTML = data.wildlife_sec[4].sub_heading6;
document.getElementById("sinharaja_about").innerHTML = data.wildlife_sec[4].sinharaja_about;

document.getElementById("kaudulla_heading").innerHTML = data.wildlife_sec[5].kaudulla_heading;
document.getElementById("sub_heading7").innerHTML = data.wildlife_sec[5].sub_heading7;
document.getElementById("kaudulla_about").innerHTML = data.wildlife_sec[5].kaudulla_about;


