
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "admin123") {
        window.location.href = "admin.html";
    } else {
        alert("Login gagal. Username atau password salah.");
    }
});
