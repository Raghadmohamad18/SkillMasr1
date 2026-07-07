import { db, auth } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const form = document.getElementById("coachForm");
form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
  let category = document.getElementById("category").value;
const otherCategory = document.getElementById("otherCategory").value;
if(category=="Other"){
    category=otherCategory;
}
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
    try {
      if(fullName==""){
          alert("Enter name");
          return;
          }
          
          if(password.length<6){
          alert("Password must be at least 6 characters");
          return;
          }
          
          if(phone.length!=11){
          alert("Phone must be 11 digits");
          return;
          }
          
          if(price<=0){
          alert("Invalid price");
          return;
          }
    await addDoc(collection(db, "coaches"), {
        fullName,
        email,
        sport,
        category,
        governorate,
        area,
        phone,
        price,
        about
    });

    alert("تم حفظ البيانات بنجاح ✅");
window.location.href = "index.html";

} catch (error) {
    alert(error.message);
}
  await signInWithEmailAndPassword(
auth,
email,
password
);

localStorage.setItem("loggedIn","true");

window.location="index.html";
});
