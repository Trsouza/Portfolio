function closeMenu() {
	$('.close-menu').click(function () {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1000);
		$('.navbar-toggler').click();
		return false;
	});
}


function goTop() {
	$(window).scroll(function () {
		nScrollPosition = $(window).scrollTop();
		if (nScrollPosition >= 10) {
			$(".go-top").css("display", "block");
		} else {
			$(".go-top").css("display", "none");
		}
	});
}

function typeWriter(element) {
	const text = element.innerHTML.split('');
	element.innerHTML = '';
	text.forEach((letter, i) => {
		setTimeout(() => element.innerHTML += letter, 90 * i)
	});
}

const title = document.querySelector('.tat');
typeWriter(title);