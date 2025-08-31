const button = document.getElementById('btnMulai');
const subuh = document.getElementById('subuh');
const dzuhur = document.getElementById('dzuhur');
const ashar = document.getElementById('ashar');
const maghrib = document.getElementById('maghrib');
const isya = document.getElementById('isya');
const lokasi = document.getElementById('lokasi');
const tanggal = document.getElementById('tanggal');

const today = new Date();
const date = today.toISOString().split("T")[0].replace(/-/g, "-");  // ouput 2025-08-31
// const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
// console.log(date);

// Jadwal Sholat Harian
const getJadwalSholat = async (kota, date) => {
    try {
        const config ={
            headers: {
                'Accept': 'application/json'
            },
        }

        const res = await axios.get(`https://api.myquran.com/v2/sholat/jadwal/${kota}/${date}`, config);
        // console.log(res.data);

        const { lokasi, jadwal } = res.data.data; // destructing 
        lokasi.innerHTML = lokasi;
        tanggal.innerHTML = jadwal.tanggal;
        subuh.innerHTML = jadwal.subuh;
        dzuhur.innerHTML = jadwal.dzuhur;
        ashar.innerHTML = jadwal.ashar;
        maghrib.innerHTML = jadwal.maghrib;
        isya.innerHTML = jadwal.isya;

    } catch (error) {
        lokasi.innerHTML = 'Gagal mengambil data';
        return 'Gagal mengambil data';
    }
}

getJadwalSholat('1612', date);
// Klik manual
// button.addEventListener('click', () => {
//     getJadwalSholat('1612', date);

// })


// Jawal Sholat bulanan
const getJadwalSholatBulanan = async (kota, tahun, bulan) => {
    try {
        const config = {
            heders: {
                'Accept' : 'application/json'
            },
        }
        const res = await axios.get(`https://api.myquran.com/v2/sholat/jadwal/${kota}/${tahun}/${bulan}`, config);
        const data = res.data.data;
        console.log(data.jadwal);

        // perulangan
        data.jadwal.forEach(item => {
    console.log("Tanggal:", item.tanggal);
    console.log("Subuh:", item.subuh);
    console.log("Dzuhur:", item.dzuhur);
    console.log("Ashar:", item.ashar);
    console.log("Maghrib:", item.maghrib);
    console.log("Isya:", item.isya);
    console.log("-----------");
});

    }

    catch {
        console.log('data gak ketemu')
    }
}

getJadwalSholatBulanan('1612', '2025', '08');





