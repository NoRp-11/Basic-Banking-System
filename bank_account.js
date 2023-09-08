// Deklarasi variabel saldo dengan nilai awal 0


let saldo = 1000;

document.getElementById('saldo').textContent = saldo;

const updateSaldo = (saldo) => {
    document.getElementById('saldo').textContent = saldo;
}

// Fungsi untuk menambah saldo
const tambahSaldo = () => {
    let input = prompt ("Masukan Jumlah Saldo Yang Ingin Ditambahkan");
    saldo = saldo + parseInt(input);
    updateSaldo(saldo)
}

// Fungsi untuk mengurangi saldo
const kurangiSaldo = () => {
    let input = prompt ("Masukan Jumlah Saldo Yang Ingin Dikurangi");
    if(saldo < input) {
        window.alert('Saldo Anda Kurang')
    } else {
        saldo = saldo - parseInt(input);
        updateSaldo(saldo)
    }
}

