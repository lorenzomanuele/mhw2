function apriTendina1(event){
    const tendina1 = document.querySelector('#scomparsa1');
    tendina1.classList.remove('hidden');
    chiudiTendina2();
    document.querySelector('#eventi').removeEventListener('click', apriTendina1);
    document.querySelector('#eventi').addEventListener('click', chiudiTendina1);
    event.stopPropagation();
}

function chiudiTendina1(){
    const tendina1 = document.querySelector('#scomparsa1');
    tendina1.classList.add('hidden');
    document.querySelector('#eventi').removeEventListener('click', chiudiTendina1);
    document.querySelector('#eventi').addEventListener('click', apriTendina1);
}

function apriTendina2(event){
    const tendina2 = document.querySelector('#scomparsa2');
    tendina2.classList.remove('hidden');
    chiudiTendina1();
    document.querySelector('#localita').removeEventListener('click', apriTendina2);
    document.querySelector('#localita').addEventListener('click', chiudiTendina2);
    event.stopPropagation();
}

function chiudiTendina2(){
    const tendina2 = document.querySelector('#scomparsa2');
    tendina2.classList.add('hidden');
    document.querySelector('#localita').removeEventListener('click', chiudiTendina2);
    document.querySelector('#localita').addEventListener('click', apriTendina2);
}

document.querySelector('#eventi').addEventListener('click', apriTendina1);

document.querySelector('#localita').addEventListener('click', apriTendina2);

function ingrandisci(event){
    const item = event.target;
    item.classList.add('ingrandimento');
    item.addEventListener('mouseout', rimpicciolisci);
    event.stopPropagation();
}

function rimpicciolisci(event){
    const item = event.target;
    item.classList.remove('ingrandimento');
    item.addEventListener('mouseover', ingrandisci);
    event.stopPropagation();
}

document.querySelector("#first-container1").addEventListener('mouseover', ingrandisci);
document.querySelector("#second-container1").addEventListener('mouseover', ingrandisci);

document.querySelector(".container1").addEventListener('mouseover');


function dettagliVoucher(event){
    const voucher = event.currentTarget;
    voucher.getAttribute("data-info");
}

document.querySelector('.voucher-covid').addEventListener('click', dettagliVoucher);