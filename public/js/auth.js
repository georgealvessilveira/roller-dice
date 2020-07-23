const provider = new firebase.auth.TwitterAuthProvider();
const auth = firebase.auth();
auth.languageCode = 'pt';

document.getElementById("auth").addEventListener('click', e => {
    auth.signInWithPopup(provider).then(result => {
        window.location.replace("dice_roller.html");
    }).catch(error => {
        console.log(error.message);
    });
});