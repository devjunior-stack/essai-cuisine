const ADMIN_USER = "admin"; const ADMIN_PASS = "123456";
function setAdminLogged() { localStorage.setItem("admin_logged", "yes"); }
function isAdminLogged() { return localStorage.getItem("admin_logged") === "yes"; }
function adminLogout() { localStorage.removeItem("admin_logged"); location.href = "admin-login.html"; }
function protectAdminPage() { if (!isAdminLogged()) location.href = "admin-login.html"; }
document.addEventListener("DOMContentLoaded", () => {
    const f = document.getElementById("adminLoginForm"); if (!f) return; f.addEventListener("submit", e => {
        e.preventDefault(); if (adminUser.value === ADMIN_USER && adminPass.value === ADMIN_PASS) { setAdminLogged(); alert("Connecté !"); location.href = "admin.html"; }
        else alert("Mauvais identifiants");
    });
});
