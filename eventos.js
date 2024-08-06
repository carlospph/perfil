let iconUser = document.querySelector('#iconUser');

let modalPerfil = document.querySelector('.modalPerfil');

iconUser.style.backgroundColor = '#f2f2f2';

iconUser.addEventListener('mouseover', ()=>{
    modalPerfil.classList.add('show');
})

iconUser.addEventListener('mouseout', ()=>{
    modalPerfil.classList.remove('show');
})