const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const team = document.querySelectorAll('.team_member');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.1)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=2')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=2')
   /* .staggerFrom(team, 1, {opacity: 0, ease: "power2.out"}, 0.1, '-=1');*/

    
    

    TL.play();
})


var toggled = true;
function toggle() {
    if(!toggled) {
        toggled = true;
        document.getElementById("competence").style.display = "none";
        document.getElementById("skills").style.display = "block";
        window.addEventListener('click', () => {
            TL
            .staggerFrom(team, 1, {opacity: 0, ease: "power2.out"}, 0.1, '-=1');
            TL.play();
        })
        return;
    }
    if(toggled) {
        toggled = false;
        document.getElementById("competence").style.display = "block";
        document.getElementById("skills").style.display = "none";
        return;
    }

}


function scrollToTop(){
    window.scrollTo(0, 0);
}


const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
    }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})
})
