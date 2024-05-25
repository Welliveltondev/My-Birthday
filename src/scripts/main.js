const dataDoEvento = new Date("May 30, 2024 00:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaTempo = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaDoEvento = timeStampDoEvento - timeStampAtual;

    const diasAteOEvento = Math.floor(distanciaDoEvento / (1000 * 60 * 60 * 24));
    const horasAteOEvento =  Math.floor((distanciaDoEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteOEvento = Math.floor((diasAteOEvento % (1000 * 60 *60)) / (1000 * 60));
    const segundosAteOEvento = Math.floor((diasAteOEvento % (1000 * 60) / 1000));

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaDoEvento < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = `ja começou`;
    }
}, 1000);