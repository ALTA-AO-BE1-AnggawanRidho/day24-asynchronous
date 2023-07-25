// Problem 3 - Lottery


function lottery(num) {
    // your code here
    console.log("undian lotre dimulai...");
    console.log("sedang mengundi nomor anda...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const winningNumber = Math.floor(Math.random() * 1000) + 1;
            if (num === winningNumber) {
                resolve("selamat anda mendapatkan hadiah utama berupa mobil");
            } else {
                reject("maaf anda kurang beruntung");
            }
        }, 10000);
    });
};
   
   
lottery(5)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("undian lotre telah berakhir…"))