export async function quranAPI() {
        const daftarSurat = await fetch ("https://api.myquran.com/v2/quran/surat/semua");
        const dataAPI = await daftarSurat.json()
        console.log(dataAPI);
        
        dataAPI.data.for
}