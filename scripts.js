
document.addEventListener('DOMContentLoaded', function() {
    let startTime = Date.now();
    let timeSpentElement = document.getElementById('timeSpent');

    function updateTimeSpent() {
        let currentTime = Date.now();
        let timeSpent = Math.floor((currentTime - startTime) / 1000); 
        timeSpentElement.textContent = `время, проведенное на сайте: ${timeSpent} секунд`;
    }
    setInterval(updateTimeSpent, 1000);
});

document.addEventListener('DOMContentLoaded', function() {

    function showAdPopup() {
        const popup = document.querySelector('.ad-popup');
        const overlay = document.querySelector('.ad-popup-overlay');
        popup.style.display = 'block';
        overlay.style.display = 'block';
    }

    function closeAdPopup() {
        const popup = document.querySelector('.ad-popup');
        const overlay = document.querySelector('.ad-popup-overlay');
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }

    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', closeAdPopup);

    showAdPopup();
});

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

var amountScrolled = 200;

$(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
     $('a.back-to-top').fadeIn('slow');
    } else {
     $('a.back-to-top').fadeOut('slow');
    }
   });
   
   $('a.back-to-top').click(function() {
    $('html, body').animate({
     scrollTop: 0
    }, 700);
    return false;
   });

   document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const firstNameInput = form.querySelector('input[name="first-name"]');
    const lastNameInput = form.querySelector('input[name="last-name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const submitButton = form.querySelector('.submit-button');

    function validateField(field, regex) {
        const value = field.value.trim();
        return regex.test(value);
    }

    function checkFormValidity() {
        const isFirstNameValid = validateField(firstNameInput, /^[A-Za-z\s]+$/);
        const isLastNameValid = validateField(lastNameInput, /^[A-Za-z\s]+$/);
        const isEmailValid = validateField(emailInput, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        const isPhoneValid = validateField(phoneInput, /^\+?[0-9\s-]+$/);

        if (isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    [firstNameInput, lastNameInput, emailInput, phoneInput].forEach(input => {
        input.addEventListener('input', checkFormValidity);
    });

    checkFormValidity();
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".flex-container").classList.toggle("open");
    });
});


   


   

