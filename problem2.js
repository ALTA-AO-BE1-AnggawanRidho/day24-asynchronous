// Problem 2 - Let’s buy some apparel

const clothes = {
    item: "Baju",
    price: 15000,
    time: 3000,
};


const pants = {
    item: "Celana",
    price: 25000,
    time: 7000,
};


const hat = {
    item: "Topi",
    price: 22000,
    time: 2000,
};


const shoes = {
    item: "Sepatu",
    price: 46000,
    time: 10000,
};

function buyApparel(money, objItem, callback) {
    // your code here
    console.log(`saya membawa uang sebesar Rp. ${money}`);
    console.log(`saya ingin membeli ${objItem.item}`);
    console.log(`dengan harga Rp. ${objItem.price}`);
    console.log(`dan waktu yang dibutuhkan adalah ${objItem.time/1000} detik \n`);
    setTimeout(() => {
        const sisaUang = money - objItem.price;
        console.log(`sisa kembaliannya adalah Rp. ${sisaUang}`);
        callback(sisaUang)
    }, objItem.time);
}

buyApparel(150000, clothes, (money) => {
    buyApparel(money, pants, (money) => {
        buyApparel(money, hat, (money) => {
            buyApparel(money, shoes, () => {});
        });
    });
});