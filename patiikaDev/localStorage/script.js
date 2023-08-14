let sonuç =localStorage.getItem('kayıt') ? localStorage.getItem('kayıt') : 0 ;
//localstorage ile çağırdık

let sonuçDOM = document.querySelector('#sonuç');
let arttırDOM = document.querySelector('#arttır');
let azaltDOM = document.querySelector('#azalt');

sonuçDOM.innerHTML = sonuç

arttırDOM.addEventListener('click',clickEvent)
azaltDOM.addEventListener('click',clickEvent)


function clickEvent(){
    if(this.id == 'arttır'){
        sonuçDOM.innerHTML = ++sonuç ;
        sonuçDOM.style.color = 'blue' ;
        localStorage.setItem('kayıt', sonuç) // localstorage ile kaydettik

    }else{
        sonuçDOM.innerHTML = --sonuç
        sonuçDOM.style.color = 'red';
        localStorage.setItem('kayıt', sonuç) ;// localstorage ile kaydettik
    }
}