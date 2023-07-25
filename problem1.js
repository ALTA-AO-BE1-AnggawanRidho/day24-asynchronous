// Problem 1 - Let’s have some snack

function jajanBoba(uang, callback) {
    // your code here
    const hargaBoba = 5000;
    const waktuBoba = 5000;

    if (uang < hargaBoba) {
        console.log(`Maaf uang kamu belum cukup untuk membeli boba`);
        console.log(`Sisa uang kamu sebesar Rp. ${uang}`);
    } else {
        console.log(`Kamu jajan boba dengan harga Rp. ${hargaBoba}`);
        setTimeout(() => {
            const sisaUang = uang - hargaBoba;
            console.log(`Sisa uang kamu Rp. ${sisaUang}`);
            callback(sisaUang);
        }, waktuBoba);
    }
}


function jajanSeblak(uang) {
    // your code here
    const hargaSeblak = 8000;
    const waktuSeblak = 9000;

    if (uang < hargaSeblak) {
        console.log(`Maaf uang kamu belum cukup untuk membeli seblak`);
        console.log(`Sisa uang kamu sebesar Rp. ${uang}`);
    } else {
        console.log(`Kamu jajan seblak dengan harga Rp. ${hargaSeblak}`);
        setTimeout(() => {
            const sisaUang = uang - hargaSeblak;
            console.log(`Sisa uang kamu sebesar Rp. ${sisaUang}`);
        }, waktuSeblak);
    }
}


jajanBoba(20000, jajanSeblak)
// jajanBoba(10000, jajanSeblak)