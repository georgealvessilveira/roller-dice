const firebaseConfig = {
    apiKey: "AIzaSyA8XEBJEGz0JwtfHJjYBssZ-cOEP9XWzLE",
    authDomain: "dice-roller-b8029.firebaseapp.com",
    databaseURL: "https://dice-roller-b8029.firebaseio.com",
    projectId: "dice-roller-b8029",
    storageBucket: "dice-roller-b8029.appspot.com",
    messagingSenderId: "723325779614",
    appId: "1:723325779614:web:8ab5d3bc63f27e9a12c58f",
    measurementId: "G-MNW90SGD6Y"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.TwitterAuthProvider();
const auth = firebase.auth();
auth.languageCode = 'pt';

const httpRequest = new XMLHttpRequest();

document.getElementById("autenticacao").addEventListener('click', e => {
    auth.signInWithPopup(provider).then(result => {
        console.log(result.user);
        //httpRequest.open('POST', '');
        //httpRequest.send(``);
    }).catch(error => {
        console.log(error.message);
    });
});