function kirim() {
    let inp_nama = document.getElementById("username").value;
    let inp_pass = document.getElementById("password").value;
    let inp_form = document.getElementById("form").value;


    if ( inp_nama == "admin" && inp_pass == "integrity") {
        form.setAttribute("action","dashboard.html");
        alert("Login Berhasil");
    }else{
    alert("Login Gagal");
    }
}
