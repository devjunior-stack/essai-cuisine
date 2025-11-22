const USERS_KEY = "users_list";
const USER_KEY = "cf_user_pro";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");
    if(!form) return;

    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

        // email déjà utilisé ?
        if(users.some(u => u.email === email)){
            alert("❌ Cet email existe déjà !");
            return;
        }

        if(password.length < 8){
            alert("❌ Mot de passe minimum 8 caractères !");
            return;
        }

        const user = {name, email, password};
        users.push(user);

        localStorage.setItem(USERS_KEY, JSON.stringify(users));

        // connecter automatiquement
        localStorage.setItem(USER_KEY, JSON.stringify({
            name,
            email,
            logged:true
        }));

        alert("✅ Inscription réussie !");
        location.href = "index.html";
    });
});
