// let toplam=0;

// for(let i=0; i<=10; i++){
//     toplam+=i;
    
// }
// console.log(toplam);

let sayilar=[1,4,5,8,4,3,12,5,3,5];

let toplam=0;
// for(let i=0;i<sayilar.length;i++){
//     // console.log(sayilar[i]);
//     toplam+=sayilar[i];
// }

// for(let i in sayilar){
// toplam+=sayilar[i];
// }

for(let sayi of sayilar){
   // console.log(sayi);
   toplam+=sayi;
}
console.log(toplam);

let user={
    "name":"Arif Ozden",
    "username":"arifozden",
    "password":"12345",
    "email":"arifozden1@gmail.com"
};

for(let u in user){
    console.log(u);
    console.log(user[u]);
}