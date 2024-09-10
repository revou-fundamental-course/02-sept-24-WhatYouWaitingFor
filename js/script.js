function peringatan(){
    let panjangAlas = document.getElementById("panjang-alas").value;
    let tinggi = document.getElementById("tinggi").value;
    let result = parseInt(panjangAlas) + parseInt(tinggi);
    document.write('Hasilnya adalah ' + result)
}

function keliling(){
    let sisiA = document.getElementById("sisi-a").value;
    let sisiB = document.getElementById("sisi-b").value;
    let sisiC = document.getElementById("sisi-c").value;
    let hasil = parseInt(sisiA) + parseInt(sisiB) + parseInt(sisiC);
    document.write('Hasilnya adalah ' + hasil)}

