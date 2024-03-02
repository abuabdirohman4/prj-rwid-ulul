function kerjakanTugas(matakuliah) {
    console.log(`Mulai mengerjakan tugas ${matakuliah} ...`)
    selesai();
}

function selesai() {
    console.log('Selesai mengerjakan tugas!');
}

kerjakanTugas("Pemrograman Web");



function ucapkanSalam(waktu) {
    return function (nama) {
        console.loqg(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

let selamatMalam = ucapkanSalam('Malam');

console.log(selamatMalam('Abu'));