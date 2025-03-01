function validateForm() {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const successMessage = document.getElementById('successMessage');
    
    // Validasi email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Email tidak valid!");
      return false;
    }
  
    // Validasi password minimal 8 karakter
    if (password.length < 8) {
      alert("Password harus terdiri dari minimal 8 karakter!");
      return false;
    }
  
    // Validasi konfirmasi password
    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok!");
      return false;
    }
  
    // Menampilkan pesan sukses
    successMessage.innerHTML = "Pendaftaran Berhasil!";
    return false; // Mencegah form terkirim (karena ini hanya simulasi)
  }
  