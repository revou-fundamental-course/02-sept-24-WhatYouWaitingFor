function peringatan(){
    let panjangAlas = document.getElementById("panjang-alas").value;
    let tinggi = document.getElementById("tinggi").value;
    let result = parseInt(panjangAlas) + parseInt(tinggi);
    document.write('Hasilnya adalah ' + result)
}

