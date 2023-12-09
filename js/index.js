

var multipleItemDelaySlow = 800;
var multipleItemDelayFast = 50;

document.addEventListener("DOMContentLoaded", function () {

	handleScroll(); // Initial check when the page loads
	window.addEventListener("scroll", handleScroll);

});

function getDelay(element) {
	return element.closest('.hero') ? multipleItemDelaySlow : multipleItemDelayFast;
}

function handleScroll() {
	var elements = document.querySelectorAll('.fade-in-element');

	elements.forEach(function (element, index) {
		var positionFromTop = element.getBoundingClientRect().top;

		// If the element is in the viewport or above it, make it visible
		if (positionFromTop - window.innerHeight < 0) {
			// If the element is already above the viewport, make it visible without delay
			if (!element.classList.contains('visible')) {
				setTimeout(function () {
					element.classList.add('visible');
				}, index * getDelay(element));
			} else {
				element.classList.add('visible');
			}
		}
	});

	// Remove the scroll event listener after elements have faded in
	if (document.querySelectorAll('.fade-in-element:not(.visible)').length === 0) {
		window.removeEventListener("scroll", handleScroll);
	}
}

/* past the top tag */
document.addEventListener('DOMContentLoaded', function () {
	var header = document.querySelector('.layout > .content > .top > header');

	function handleScroll() {
		if (window.scrollY === 0) {
			// Add the 'top' class when at the top of the page

			header.classList.remove('past-top');
		} else {
			// Remove the 'top' class when scrolling down
			header.classList.add('past-top');
		}
	}

	// Add the scroll event listener
	window.addEventListener('scroll', handleScroll);

	// Initialize the state based on the initial scroll position
	handleScroll();
});

/* Scroll to top button */
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", function () {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrollToTopBtn.classList.add("show");
		scrollToTopBtn.classList.remove("hide");
	} else {
		scrollToTopBtn.classList.remove("show");
		// Delay the addition of the 'hide' class for a smooth fade-out effect
		scrollToTopBtn.classList.add("hide");
	}
});
function scrollToTop() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


/* SCROLL TO SECTION */
document.addEventListener('DOMContentLoaded', function () {
	var headers = document.querySelectorAll('h2.section-header');
	headers.forEach(function (header) {
		header.addEventListener('click', function () {
			// Find the nearest parent section
			var section = header.closest('section');

			// Scroll smoothly to the section
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
});


/* MENU TOGGLE */
const menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('change', function () {
	// Toggle the 'menu-open' class on the body
	document.body.classList.toggle('menu-open', menuToggle.checked);
});


/* CLOSE MENU ON CLICK */
document.getElementById('navigation').addEventListener('click', function (event) {
    // Check if the body has the class "menu-open"
    if (document.body.classList.contains('menu-open')) {
        // Check if the clicked element is a link tag
        if (event.target.tagName.toLowerCase() === 'a') {
            // Uncheck the element with id "menu-toggle"
            closeMenu();
        }
    }
});

/* CLOSE MENU ON RESIZE */
window.addEventListener('resize', function() {
	closeMenu();
});

function closeMenu(){
	document.getElementById('menu-toggle').checked = false;
    document.body.classList.remove('menu-open');
}


/* CURRENT YEAR FOR FOOTER */
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;