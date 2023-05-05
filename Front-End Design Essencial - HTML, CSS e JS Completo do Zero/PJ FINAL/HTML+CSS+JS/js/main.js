//Declarando Variáveis
var btnContact = document.querySelector('.pj-btn-contact');
var toggleModal = document.querySelectorAll('.pj-toggle-modal');
var toggleMenu = document.querySelectorAll('.pj-toggle-menu');
var menuMobile = document.querySelector('.pj-menu-mob');
var btnMenuMobIcon = document.querySelector('.pj-btn-menu-mob ion-icon');

//Page Preloader
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.pj-preloader');
    pagePreloder.classList.add('pj-fade-out');

    setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.pj-contact-info');
    boxContact.classList.toggle('pj-is-open');
    this.classList.toggle('pj-change-icon');
});

//Abrindo e Fechando o Menu Mobile
for (var m = 0; m < toggleMenu.length; m++) {
    toggleMenu[m].addEventListener('click', function () {
        var overlay = document.querySelector('.pj-menu-overlay');
        overlay.classList.toggle('pj-is-open');
        menuMobile.classList.toggle('pj-menu-is-closed');
        menuMobile.classList.toggle('pj-menu-is-open');

        var icon = btnMenuMobIcon.getAttribute('name');

        if (icon === 'menu') {
            btnMenuMobIcon.setAttribute('name', 'close');
        } else {
            btnMenuMobIcon.setAttribute('name', 'menu');
        }

    });
}



//Abrindo e Fechando o Modal de Orcamento
for (var i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        var modalOrcamento = document.querySelector('#pj-modal-orcamento');
        var overlay = document.querySelector('.pj-overlay');
        overlay.classList.toggle('pj-is-open');
        modalOrcamento.classList.toggle('pj-is-open');
        modalOrcamento.classList.toggle('pj-slide-top-in');
    });
}


// Animando Elementos da Topbar
var triggerTopbar = document.querySelector('.pj-trigger-topbar');
var topbar = document.querySelector('.pj-topbar');
var logo = document.querySelector('.pj-logo');
var waypoint = new Waypoint({
    element: triggerTopbar,
    handler: function () {
        topbar.classList.toggle('pj-topbar-bg');
        logo.classList.toggle('pj-logo-shorten');
        logo.classList.toggle('pj-logo-big');
    },
    offset: '50px'
});
