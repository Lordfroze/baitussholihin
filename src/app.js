const button = document.getElementById('btnMulai');
const subuh = document.getElementById('subuh');
const dzuhur = document.getElementById('dzuhur');
const ashar = document.getElementById('ashar');
const maghrib = document.getElementById('maghrib');
const isya = document.getElementById('isya');
const lokasi = document.getElementById('lokasi');
const tanggal = document.getElementById('tanggal');
const keterangan = document.getElementById('keterangan');

const today = new Date();
const date = today.toISOString().split("T")[0].replace(/-/g, "-");  // ouput 2025-08-31
// const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
// console.log(date);

// Jadwal Sholat Harian
const getJadwalSholat = async (kota, date) => {
    try {
        const config = {
            headers: {
                'Accept': 'application/json'
            },
        }

        const res = await axios.get(`https://api.myquran.com/v2/sholat/jadwal/${kota}/${date}`, config);
        console.log(res.data);

        const {jadwal} = res.data.data; // destructing 
        tanggal.innerHTML = jadwal.tanggal;
        imsak.innerHTML = jadwal.imsak;
        subuh.innerHTML = jadwal.subuh;
        dzuhur.innerHTML = jadwal.dzuhur;
        ashar.innerHTML = jadwal.ashar;
        maghrib.innerHTML = jadwal.maghrib;
        isya.innerHTML = jadwal.isya;
        lokasi.innerHTML = res.data.data.lokasi;
        // keterangan.innerHTML = res.status;

    } catch (error) {
        console.error(error);
        keterangan.innerHTML = 'Gagal mengambil data';
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
            headers: {
                'Accept': 'application/json'
            },
        }
        const res = await axios.get(`https://api.myquran.com/v2/sholat/jadwal/${kota}/${tahun}/${bulan}`, config);
        const data = res.data.data;
        // console.log(data.jadwal);

        const tbody = document.getElementById('jadwalBulanan-body')
        tbody.innerHTML = "" // bersihkan
        // perulangan
        data.jadwal.forEach(i => {
            const row = `
        <tr>
            <td>${i.tanggal}</td>
            <td>${i.imsak}</td>
            <td>${i.subuh}</td>
            <td>${i.dzuhur}</td>
            <td>${i.ashar}</td>
            <td>${i.maghrib}</td>
            <td>${i.isya}</td>
        </tr>
    `;
            tbody.innerHTML += row;
        });

    }
    catch {
        console.log('Data bulanan gak ketemu')
    }
}

getJadwalSholatBulanan('1612', '2025', '08');





