//Declarando Variáveis
var btnContact = document.querySelector(".pj-btn-contact");
var toggleModal = document.querySelectorAll(".pj-toggle-modal");

//Page Preloader
window.addEventListener("load", function () {
  var pagePreloder = document.querySelector(".pj-preloader");
  pagePreloder.classList.add("pj-fade-out");

  setTimeout(function () {
    pagePreloder.style.display = "none";
  }, 2000);
});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener("click", function () {
  var boxContact = document.querySelector(".pj-contact-info");
  boxContact.classList.toggle("pj-is-open");
  this.classList.toggle("pj-change-icon");
});

//Abrindo e Fechando o Modal de Orcamento

for (var i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener("click", function () {
    var overlay = document.querySelector(".pj-overlay");
    var modalOrcamento = document.querySelector("#pj-modal-orcamento");

    overlay.classList.toggle("pj-is-open");
    modalOrcamento.classList.toggle("pj-is-open");
    modalOrcamento.classList.toggle("pj-slide-top-in");
  });
}

//Animando Elementos on Scroll com Waypoints
var myScrollDown = document.querySelector(".pj-scroll-down");
var waypoint = new Waypoint({
  element: myScrollDown,
  handler: function () {
    myScrollDown.classList.toggle("pj-fade-out");
  },
  offset: "80%",
});

