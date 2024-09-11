/* memasukan fungsi logika perhitungan luas segitiga */
function luas() {
    const panjangAlas = parseFloat(document.getElementById('panjang-alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(panjangAlas) || isNaN(tinggi)) {
        alert('Harap masukkan semua nilai dengan benar.');
        return;
    }

    const luas = 0.5 * panjangAlas * tinggi;

    document.getElementById('result').textContent = `L = 1/2 x a x t = ${luas}`;
}


    /* memasukan fungsi logika perhitungan keliling segitiga */
function keliling() {
    const sisiA = parseFloat(document.getElementById('sisi-a').value);
    const sisiB = parseFloat(document.getElementById('sisi-b').value);
    const sisiC = parseFloat(document.getElementById('sisi-c').value);

    if ( isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
        alert('Harap masukkan semua nilai dengan benar.');
        return;
    }

    const keliling = sisiA + sisiB + sisiC;

    document.getElementById('hasil').textContent = `K = s + s + s = ${keliling}`;
}

/* memasukan fungsi hapus atau reset perhitungan */
function resetluas() {
    document.getElementById('panjang-alas').innerHTML = '';
    document.getElementById('tinggi').innerHTML = '';
    document.getElementById('result').innerHTML = '';
}
