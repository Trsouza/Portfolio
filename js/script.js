
function closeMenu() {
    $('.close-menu').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        $('.navbar-toggler').click(); // FAZ UM CLIQUE NO BOTAO QUE CHAMA O MENU PARA OCULTAR O MENU
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