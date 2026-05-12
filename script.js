const btnMessage = document.getElementById('btnMessage');
const message = document.getElementById('message');

btnMessage.addEventListener("click", function() {
    message.textContent = "bravo,tu as cliqué sur le bouton!!";
});