document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = this.username.value;
    const password = this.password.value;
  
    // Simulated login check (replace with real backend later)
    if (username === "admin" && password === "1234") {
      document.getElementById('loginResponse').style.color = "green";
      document.getElementById('loginResponse').textContent = "Login successful!";
      // Redirect to dashboard or home page
      // window.location.href = "dashboard.html";
    } else {
      document.getElementById('loginResponse').style.color= "black";
      document.getElementById('loginResponse').textContent = "Invalid credentials.";
    }
  });
  