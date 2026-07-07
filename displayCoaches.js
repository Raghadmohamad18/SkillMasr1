import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const snapshot = await getDocs(collection(db, "coaches"));

snapshot.forEach((doc) => {

    const coach = doc.data();

    let container;

    if (coach.category === "Sports") {
        container = document.getElementById("sportsFirebase");
    }

    else if (coach.category === "Handmade") {
        container = document.getElementById("handmadeFirebase");
    }

    else if (coach.category === "Music") {
        container = document.getElementById("musicFirebase");
    }

    else if (coach.category === "Programming") {
        container = document.getElementById("programmingFirebase");
    }

    else {
        return;
    }

    container.innerHTML += `
        <div class="product">

            <h3>${coach.fullName}</h3>

            <h3>${coach.sport}</h3>

            <p>${coach.about}</p>

            <p class="price">
                ${coach.price} EGP / Session
            </p>

            <button onclick="order('${coach.fullName}')">
                Contact Coach
            </button>

        </div>
        container.innerHTML += `
<div class="product">

    <h3>${coach.fullName}</h3>
    <h3>${coach.sport}</h3>

    <p>${coach.about}</p>

    <p class="price">${coach.price} EGP / Session</p>

    <button onclick="order('${coach.fullName}')">Contact Coach</button>

    <button onclick="window.location.href='details.html?id=${doc.id}'">
        View Details
    </button>

</div>
`;
    `;
});
