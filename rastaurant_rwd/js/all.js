$(document).ready(function() {

	$('.toggle').on('click',  function(e){
		e.preventDefault();
		$('body').toggleClass('menu-show');         /* 展開選單 */
		$('.wrap .header .link .toggle').toggleClass('open');/* 漢寶選單變X */
	});

	/* 購物車商品愛心 */
	$('.heart').hover(function(){
		$(this).find('i').attr('class','fas fa-heart');/* 實心愛心 */
	},function(){
		$(this).find('i').attr('class','far fa-heart');/* 空心愛心 */
	});

	// $(window).scroll(function() {
	// 	if ($(this).scrollTop() > 50)  {          /* 要滑動到選單的距離 */
	// 		$('.link').addClass('linkfixed');   /* 幫選單加上固定效果 */
	// 	} else {
	// 		$('.link').removeClass('linkfixed'); /* 移除選單固定效果 */
	// 	}
	// });
	
});


