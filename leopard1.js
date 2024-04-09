fetch("leopard.json")
  .then((response) => response.json())
  .then((data) => {
    //local storage
    localStorage.setItem("leopardData", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("leopardData"));

document.getElementById("main_heading").innerHTML = data.main.main_heading;

document.getElementById("leopard_head").innerHTML = data.leopard.leopard_head;
document.getElementById("sub_sec_head").innerHTML = data.leopard.sub_sec_head;

document.getElementById("sub_head").innerHTML = data.yala.sub_head;
document.getElementById("sec_head").innerHTML = data.yala.sec_head;
document.getElementById("detail1").innerHTML = data.yala.detail1;
document.getElementById("sec_head2").innerHTML = data.yala.sec_head2;
document.getElementById("detail2").innerHTML = data.yala.detail2;

document.getElementById("sub_head1").innerHTML = data.hortonplain.sub_head1;
document.getElementById("sec_head3").innerHTML = data.hortonplain.sec_head3;
document.getElementById("detail3").innerHTML = data.hortonplain.detail3;
document.getElementById("sec_head4").innerHTML = data.hortonplain.sec_head4;
document.getElementById("detail4").innerHTML = data.hortonplain.detail4;

document.getElementById("sub_head2").innerHTML = data.wilpattu.sub_head2;
document.getElementById("sec_head5").innerHTML = data.wilpattu.sec_head5;
document.getElementById("detail5").innerHTML = data.wilpattu.detail5;
document.getElementById("sec_head6").innerHTML = data.wilpattu.sec_head6;
document.getElementById("detail6").innerHTML = data.wilpattu.detail6;

document.getElementById("sec_heading").innerHTML = data.threat.sec_heading;
document.getElementById("title").innerHTML = data.threat.title;
document.getElementById("detail7").innerHTML = data.threat.detail7;
document.getElementById("detail8").innerHTML = data.threat.detail8;

document.getElementById("title1").innerHTML = data.threat.title1;
document.getElementById("detail9").innerHTML = data.threat.detail9;
document.getElementById("detail10").innerHTML = data.threat.detail10;