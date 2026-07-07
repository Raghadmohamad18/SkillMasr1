import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const snapshot = await getDocs(collection(db, "coaches"));

snapshot.forEach((doc) => {
    console.log(doc.data());
});
