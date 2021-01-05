window.sr = new ScrollReveal()

sr.reveal('.navbar', {
    delay: 800
});
sr.reveal('.baba', {
    delay: 800
});
sr.reveal('.container', {
    distance: "60px"
});
sr.reveal('.btn', {
    delay: 900,
    opacity: 0,
    origin: "top",
    distance: "60px"

});

//--------------------------------------------------------------------------------------



let btnAll = document.querySelector('#all');
let btnPackaging = document.querySelector('#packaging');
let btnMockup = document.querySelector('#mockup');
let btnTypography = document.querySelector('#typography');
let btnPhotography = document.querySelector('#photography');
let items = document.querySelectorAll('.portfolio-item');

btnAll.addEventListener('click', function () {

    for (let i = 0; i < items.length; i++) {
        let id = items[i].getAttribute('id')

        if (id != "") {
            items[i].parentElement.style.display = "block"
        }
    }
});

btnPackaging.addEventListener('click', function () {
    for (let i = 0; i < items.length; i++) {
        let id = items[i].getAttribute('id')

        if (id != "2") {
            items[i].parentElement.style.display = "none"
        } else {
            items[i].parentElement.style.display = "block"
        }

    }
});

btnMockup.addEventListener('click', function () {
    for (let i = 0; i < items.length; i++) {
        let id = items[i].getAttribute('id')
        if (id != "3") {
            items[i].parentElement.style.display = "none"
        } else {
            items[i].parentElement.style.display = "block"
        }

    }
});

btnTypography.addEventListener('click', function () {
    for (let i = 0; i < items.length; i++) {
        let id = items[i].getAttribute('id')
        if (id != "4") {
            items[i].parentElement.style.display = "none"
        } else {
            items[i].parentElement.style.display = "block"
        }

    }
});

btnPhotography.addEventListener('click', function () {
    for (let i = 0; i < items.length; i++) {
        let id = items[i].getAttribute('id')
        if (id != "1") {
            items[i].parentElement.style.display = "none"
        } else {
            items[i].parentElement.style.display = "block"
        }

    }
});



//-----------------------
let nav = document.querySelector(".nava");
let blanks = document.querySelectorAll(".blank");
let logo = document.getElementById("darklogo");
let header = document.getElementById("header");


// -----------------------------------------Header ----------------------------------------
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        logo.setAttribute("src", "img/indir.3..png");
        nav.style.transition = 'all 0.5s ease-in-out';
        nav.style.padding = ('15px 0px');
        nav.style.background = "white";
        nav.style.boxShadow = "0 2px 8px 3px rgba(0, 0, 0, 0.05)";
        blanks.forEach(i => {
            i.style.color = "black";
        });
    } else {
        logo.setAttribute("src", "img/indir.png");
        nav.style.transition = 'all 0.5s ease-in-out';
        nav.style.padding = ('20px 0px');
        nav.style.background = "none";
        nav.style.boxShadow = "none";
        blanks.forEach(i => {
            i.style.color = "white";
        })
    }
}

const form = document.forms[0];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const { firstname, lastname, email, comments } = this.elements;
    console.log(firstname.value, lastname.value, email.value, comments.value);
});
