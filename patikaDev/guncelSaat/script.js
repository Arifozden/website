//isim bilgisi:

let isim=prompt("Lütfen isminizi giriniz:");
let myName=document.querySelector("#myName");
myName.innerHTML = ` ${isim}`;

function zaman(){

    const tarih=new Date;

    let saat = tarih.getHours();
    let dakika = tarih.getMinutes();
    let saniye = tarih.getSeconds();
    let gunn=tarih.getDay();
    let ay=tarih.getMonth();
    let yil=tarih.getFullYear();


    let gun =["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let gunName = gun[tarih.getDay()]

    let clock=document.querySelector("#myClock");
    clock.innerHTML = `${gunn}.${ay}.${yil} ${gunName} gunu ve su an saat= ${saat}:${dakika}:${saniye} `;
}

setInterval(zaman,1000);