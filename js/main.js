$(function(){

    var tab = $('.size__content-box > div'); 
	tab.hide().filter(':first').show();

    $('.size__nav-list a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('.size__nav-list a').removeClass('size__nav-item--active');
		$(this).addClass('size__nav-item--active');
		return false;
	}).filter(':first').click();

    $('.reviews__slider').slick({
        dots: true
      });


	

	$('.faq__acc .faq__acc-head').on('click', f_acc);
	
	function f_acc(){
		//скрываем все кроме того, что должны открыть
		  $('.faq__acc .faq__acc-body').not($(this).next()).slideUp(1000);
		  $('.faq__acc .faq__acc-head').not($(this).next()).removeClass('open');
		// открываем или скрываем блок под заголовком, по которому кликнули
			$(this).next().slideToggle(2000);
			$('.faq__acc .faq__acc-head').click($(this).toggleClass('open'));
	}

	$('.slick-prev, .slick-next').addClass('wow');

})