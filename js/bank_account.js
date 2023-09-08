// Deklarasi saldo dengan nilai awal 0
let saldo = 0;
let namaPengguna = "";
let saldoElement = document.getElementById("saldo");

// Fungsi untuk menyimpan nama pengguna
function simpanNamaPengguna() {
    namaPengguna = prompt("Masukkan nama pengguna:");
    if (namaPengguna.trim() !== "") {
        alert(`Nama pengguna berhasil disimpan: ${namaPengguna}`);
    } else {
        alert("Masukkan nama pengguna yang valid.");
    }
}

// Fungsi untuk menampilkan saldo saat ini
function tampilkanSaldo() {
    saldoElement.textContent = `Halo, ${namaPengguna}! Saldo Anda saat ini adalah: ${saldo} Rupiah`;
}

// Fungsi untuk menambah saldo
function tambahSaldo() {
    const tambahan = parseFloat(prompt("Masukkan jumlah saldo yang ingin ditambahkan:"));
    if (!isNaN(tambahan) && tambahan > 0) {
        saldo += tambahan;
        tampilkanSaldo();
    } else {
        alert("Masukkan jumlah saldo yang valid.");
    }
}

// Fungsi untuk mengurangi saldo
function kurangiSaldo() {
    const pengurangan = parseFloat(prompt("Masukkan jumlah saldo yang ingin dikurangi:"));
    if (!isNaN(pengurangan) && pengurangan > 0 && pengurangan <= saldo) {
        saldo -= pengurangan;
        tampilkanSaldo();
    } else {
        alert("Masukkan jumlah saldo yang valid dan tidak melebihi saldo saat ini.");
    }
}