fetch("index.json")
  .then((response) => response.json())
  .then((data) => {
    //local storage
    localStorage.setItem("indexData", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("indexData"));

document.getElementById("headingg").innerHTML = data.welcome.heading;
document.getElementById("subHeading").innerHTML = data.welcome.subHeading;

document.getElementById("heading1").innerHTML = data.ecosystems.heading1;
document.getElementById("heading2").innerHTML = data.ecosystems.heading2;
document.getElementById("description").innerHTML = data.ecosystems.description;
document.getElementById("heading3").innerHTML = data.ecosystems.heading3;
document.getElementById("conservation").innerHTML = data.ecosystems.conservation;

document.getElementById("heading4").innerHTML = data.birds.heading4;
document.getElementById("heading5").innerHTML = data.birds.heading5;
document.getElementById("description1").innerHTML = data.birds.description1;
document.getElementById("heading6").innerHTML = data.birds.heading6;
document.getElementById("description2").innerHTML = data.birds.description2;

document.getElementById("heading7").innerHTML = data.marine.heading7;
document.getElementById("heading8").innerHTML = data.marine.heading8;
document.getElementById("description3").innerHTML = data.marine.description3;
document.getElementById("heading9").innerHTML = data.marine.heading9;
document.getElementById("description4").innerHTML = data.marine.description4;

document.getElementById("title1").innerHTML = data.parks[0].title;
document.getElementById("title2").innerHTML = data.parks[1].title;
document.getElementById("title3").innerHTML = data.parks[2].title;
document.getElementById("title4").innerHTML = data.parks[3].title;
document.getElementById("title5").innerHTML = data.parks[4].title;
document.getElementById("title6").innerHTML = data.parks[5].title;

document.getElementById("title7").innerHTML = data.wildlife_tours[0].title;
document.getElementById("time1").innerHTML = data.wildlife_tours[0].time;
document.getElementById("description5").innerHTML = data.wildlife_tours[0].description5;

document.getElementById("title8").innerHTML = data.wildlife_tours[1].title;
document.getElementById("time2").innerHTML = data.wildlife_tours[1].time;
document.getElementById("description6").innerHTML = data.wildlife_tours[1].description5;

document.getElementById("title9").innerHTML = data.wildlife_tours[2].title;
document.getElementById("time3").innerHTML = data.wildlife_tours[2].time;
document.getElementById("description7").innerHTML = data.wildlife_tours[2].description5;

// document.addEventListener('DOMContentLoaded', function () {
//   const subscribeForm = document.getElementById("subscribeForm");

//   subscribeForm.addEventListener('submit', function (event) {
//       event.preventDefault();

//       const emailInput = document.getElementById('email').value;

//       let subscribedEmails = localStorage.getItem('subscribedEmails');
//       if (!subscribedEmails) {
//           subscribedEmails = [];
//       } else {
//           subscribedEmails = JSON.parse(subscribedEmails);
//       }

//       subscribedEmails.push(emailInput);
//       localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));

//       alert("Thank you for subscribing to our newsletter!");

//       // Clear the input field after subscribing
//       document.getElementById('email').value = "";
//   });

document.addEventListener('DOMContentLoaded', function () {
  const subscribeForm = document.getElementById("subscribeForm");

  subscribeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('email').value;

    let subscribedEmails = localStorage.getItem('subscribedEmails');
    if (!subscribedEmails) {
      subscribedEmails = [];
    } else {
      subscribedEmails = JSON.parse(subscribedEmails);
    }

    subscribedEmails.push(emailInput);
    localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));

    alert("Thank you for subscribing to our newsletter!");

    // Print subscribed emails line by line to the console
    console.log("Subscribed Emails:");
    for (const email of subscribedEmails) {
      console.log(email);
    }

    // Clear the input field after subscribing
    document.getElementById('email').value = "";
  });
});




