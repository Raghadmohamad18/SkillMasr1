import { db, auth } from "./firebase.js";

const form = document.getElementById("coachForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const sport = document.getElementById("sport").value;
    const governorate = document.getElementById("governorate").value;
    const area = document.getElementById("area").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const price = document.getElementById("price").value;
    const about = document.getElementById("about").value;

    console.log(fullName);
    console.log(email);
    console.log(sport);
    console.log(governorate);
    console.log(area);
    console.log(phone);
    console.log(password);
    console.log(price);
    console.log(about);
});