// =======================
// AUTHENTIFICATION SYSTÈME
// =======================

const USERS_KEY = "users_list";   // stockage de tous les comptes
const USER_KEY = "cf_user_pro";   // utilisateur connecté

// Charger tous les utilisateurs
function loadUsers(){
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}

// Enregistrer tous les utilisateurs
function saveUsers(users){
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Définir l'utilisateur connecté
function setCurrentUser(user){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

// Obtenir l'utilisateur connecté
function getCurrentUser(){
    return JSON.parse(localStorage.getItem(USER_KEY) || "null");
}

// Déconnexion
function logout(){
    localStorage.removeItem(USER_KEY);
    alert("✅ Déconnexion réussie !");
    location.href = "login.html";
}
