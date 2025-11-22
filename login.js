const USERS_KEY = "users_list";
const USER_KEY = "cf_user_pro";

document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("loginForm");
    if(!form) return;

    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        const email = document.getElementById("emailLogin").value.trim();
        const password = document.getElementById("passwordLogin").value.trim();

        let users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
        let user = users.find(u => u.email === email && u.password === password);

        if(!user){
            alert("❌ Email ou mot de passe incorrect !");
            return;
        }

        localStorage.setItem(USER_KEY, JSON.stringify({
            name:user.name,
            email:user.email,
            logged:true
        }));

        alert("✅ Connexion réussie !");
        location.href = "index.html";
    });
});
