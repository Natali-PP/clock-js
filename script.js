const segundero = document.querySelector('.segundero');
const minutero = document.querySelector('.minutero');
const horario = document.querySelector('.hora');

function setDate(){
    const tiempo = new Date();
    const segundos = tiempo.getSeconds();
    const segundosGrados = ((segundos/60)*360) + 90;
    segundero.style.transform = `rotate(${segundosGrados}deg)`

    const minutos = tiempo.getMinutes();
    const minutosGrados = ((minutos/60)*360 )+ 90;
    minutero.style.transform = `rotate(${minutosGrados}deg)`

    const hora = tiempo.getHours();
    const horaGrados = ((hora/60)*360) + 90;
    horario.style.transform = `rotate(${horaGrados}deg)`
};

setInterval( setDate, 1000);

setDate();