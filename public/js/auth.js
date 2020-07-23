const provider = new firebase.auth.TwitterAuthProvider();
const auth = firebase.auth();
auth.languageCode = 'pt';

document.getElementById("autenticacao").addEventListener('click', e => {
    auth.signInWithPopup(provider).then(result => {
        console.log(result.user);
    }).catch(error => {
        console.log(error.message);
    });
});