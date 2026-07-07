import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
const coaches = await getDocs(collection(db, "coaches"));

console.log(coaches);
