const button = document.querySelector("input[type=submit]");

button.addEventListener("click", event => {
    event.preventDefault();

    const form = document.querySelector("form.caixa");
    const email = form.email.value;
    const password = form.password.value;

    console.log(form.email.value)
    console.log(form.password.value)

    const errors = 0;

    if(email.length == 0) {
        window.alert("Email invalido");
        errors++;
    }
    if(!email.includes("@")) {
        window.alert("Email precisa ter um @");
        errors++;
    }
    if(password.length < 8) {
        window.alert("A senha deve ter pelo menos 8 caracteres!");
        errors++;
    }
    if(errors == 0) window.location = "/home/index.html";
});