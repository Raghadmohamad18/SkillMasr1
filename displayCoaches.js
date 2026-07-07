
import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const snapshot = await getDocs(collection(db, "coaches"));

console.log("عدد المدربين:", snapshot.size);

snapshot.docs.forEach((doc) => {
    const sportsContainer = document.getElementById("sportsFirebase");

snapshot.docs.forEach((doc) => {

    const coach = doc.data();

    if (coach.category === "Sports") {

        sportsContainer.innerHTML += `
            <div class="product">
                <h3>${coach.fullName}</h3>
                <h3>${coach.sport}</h3>

                <p>${coach.about}</p>

                <p class="price">
                    ${coach.price} EGP / Session
                </p>

                <button>Contact Coach</button>
            </div>
        `;

    }

});
});
