const button = document.getElementById('btnMulai');
const subuh = document.getElementById('subuh');
const dzuhur = document.getElementById('dzuhur');
const ashar = document.getElementById('ashar');
const maghrib = document.getElementById('maghrib');
const isya = document.getElementById('isya');

const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
// console.log(date);
const getJadwalSholat = async (kota, date) => {
    try {
        const config ={
            headers: {
                'Accept': 'application/json'
            },
        }

        const res = await axios.get(`https://api.myquran.com/v2/sholat/jadwal/${kota}/${date}`, config);
        console.log(res.data.data.jadwal);
        subuh.innerHTML = res.data.data.jadwal.subuh;
        dzuhur.innerHTML = res.data.data.jadwal.dzuhur;
        ashar.innerHTML = res.data.data.jadwal.ashar;
        maghrib.innerHTML = res.data.data.jadwal.maghrib;
        isya.innerHTML = res.data.data.jadwal.isya;
    } catch (error) {
        return 'Gagal mengambil data';
    }
}
button.addEventListener('click', () => {
    getJadwalSholat('1612', date);
})
