	// ! Preloader JS
// 	setTimeout(function () {
// 		$("#ctn-preloader").addClass("loaded");
// 		// Once the preloader has finished, the scroll appears
// 		$("body").removeClass("no-scroll-y");

// 		if ($("#ctn-preloader").hasClass("loaded")) {
// 			// It is so that once the preloader is gone the entire preloader section is removed
// 			$("#preloader")
// 				.delay(2000)
// 				.queue(function () {
// 					$(this).remove();
// 				});
// 		}
// 	}, 3000);
// });



$(function () {
	// ! Scroll to top
	$(".click_to_top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 1500);
		$(".link").removeClass("active");
	});

	// ! Scroll to Section and Add active class
	$(".link").on("click", function (e) {
		if ($(this).hash !== "") {
			e.preventDefault();
			let hash = this.hash;
			let menuPosition = $(hash).offset().top - 100;
			$("body, html").animate({ scrollTop: menuPosition }, 1500, function () {
				window.location.hash = menuPosition;
			});

			$(".link").removeClass("active");
			$(this).addClass("active");
		}
	});

	// ! Navigation bar style
	$(window).scroll(function () {
		let scrollValue = $(this).scrollTop();
		if (scrollValue >= 100) {
			$("#nav").addClass("fixed");
			$(".click_to_top").removeClass("hide");
			$(".click_to_top").addClass("show");
		} else {
			$("#nav").removeClass("fixed");
			$(".click_to_top").addClass("hide");
			$(".click_to_top").removeClass("show");
		}
	});

	// ! Add Slick Slider
	$(".comment_box_slide").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1000,
		centerMode: true,
		dots: true,
	});

	// ! Add Mixitup Filter and add workLinkActive class
	$(".work_link").click(function () {
		$(".work_link").removeClass("work_link_active");
		$(this).addClass("work_link_active");
	});

	let mixer = mixitup(".work_box_wrapper", {
		selectors: {
			target: ".work_box",
		},
		animation: {
			duration: 300,
		},
	});

	// ! Counter Up JS
	$(".counter").counterUp({
		delay: 10,
		time: 1000,
	});



// !Code and docs for Typed.js: https://github.com/mattboldt/typed.js

const a11yContent = document.querySelector(".typedjs-baseline");
a11yContent.style.display = "none";

var typed = new Typed("#typejs-words-1", {
	strings: ["high quality services", "Innovative Ideas", "Dedicated Support", "Honest Pricing"],
	typeSpeed: 50,
	backSpeed: 30,
	backDelay: 1000,
	// startDelay: 0,
	// shuffle: true,
	loop: true,
	loopCount: Infinity,
	showCursor: false,
	onReset: (a, b) => {
		console.log("Reset");
	},
});

// ! Count down JS
document.addEventListener("DOMContentLoaded", () => {
	// Unix timestamp (in seconds) to count down to
	// var twoDaysFromNow = new Date().getTime() / 1000 + 86400 * 1 + 1;
	var twoDaysFromNow = new Date().getTime() / 1000 + 15 * 1 + 1;

	// Set up FlipDown
	var flipdown = new FlipDown(twoDaysFromNow)

		// Start the countdown
		.start()

		// Do something when the countdown ends
		.ifEnded(() => {
			let offerDiv = document.querySelector(".offer_end_box");
			offerDiv.querySelector("p").textContent = "";
			offerDiv.querySelector(".flipdown").textContent = "offer has ended!";
			offerDiv.querySelector(".flipdown").classList.add("flipdown_offer_end");
			offerDiv.querySelector(".buttons").style.display = "none";
		});

	// Toggle theme
	var interval = setInterval(() => {
		let body = document.querySelector(".offer_end_box");
		body.classList.toggle("light-theme");
		body.querySelector("#flipdown").classList.toggle("flipdown__theme-dark");
		body.querySelector("#flipdown").classList.toggle("flipdown__theme-light");
	}, 5000);

	// var ver = document.getElementById("ver");
	// ver.innerHTML = flipdown.version;
});
