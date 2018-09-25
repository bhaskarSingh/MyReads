import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBR0kgm8rMfSRXT2Y98J5Q2Ay5TyCCpBV8",
    authDomain: "myreads-5c737.firebaseapp.com",
    databaseURL: "https://myreads-5c737.firebaseio.com",
    projectId: "myreads-5c737",
    storageBucket: "",
    messagingSenderId: "290256350638"
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

// Add a second document with a generated ID.
// db.collection("users").add({
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});

export function signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

// Signs-out of Friendly Chat.
export function signOut() {
    // Sign out of Firebase.
    firebase.auth().signOut();
}



// Returns the signed-in user's profile Pic URL.
export function getProfilePicUrl() {
    return firebase.auth().currentUser.photoURL;
}

// Returns the signed-in user's display name.
function getUserName() {
    return firebase.auth().currentUser.displayName;
}

// Returns true if a user is signed-in.
export function isUserSignedIn() {
    return !!firebase.auth().currentUser;
}