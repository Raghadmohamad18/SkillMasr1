import { db } from "./firebase.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const form = document.getElementById("coachForm");
form.addEventListener("submit", async function (e) {
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
    try {
    await addDoc(collection(db, "coaches"), {
        fullName,
        email,
        sport,
        governorate,
        area,
        phone,
        price,
        about
    });

    alert("تم حفظ البيانات بنجاح ✅");

} catch (error) {
    alert(error.message);
}
});
