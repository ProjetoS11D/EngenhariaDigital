// Tabela de usuários simulada
const users = [
    { username: "admin", password: "1234" },
    { username: "jsc", password: "engenharia" },
    { username: "teste", password: "teste123" }
];

function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const message = document.getElementById("message");

    const userFound = users.find(user =>
        user.username === usernameInput &&
        user.password === passwordInput
    );

    if (userFound) {
        message.style.color = "green";
        message.innerText = "Login realizado com sucesso";
        alert("Bem-vindo, " + userFound.username);
    } else {
        message.style.color = "red";
        message.innerText = "Usuário ou senha inválidos";
    }
}
