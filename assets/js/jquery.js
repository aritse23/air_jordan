$( document ).ready(function() {

	//Click CTA
	$('.jumpmanCTA').click(function(event){
		event.preventDefault();
		$('h1').animate({
			marginTop: '0',
			paddingTop: '1em',
			fontSize: '24px'
		});
		// $('hr').animate({
		// 	marginLeft: '10%',
		// 	width: '80%'
		// });
		$('h6').animate({
			fontSize: '10px'
		});
		$('.title').animate({
			width:'70%',
			right: '0'
		});
		$('.jumpmanCTA').hide('slow');
		$('.home').show('slow');
		$('#main').show().animate({
			top: '100px',
			bottom: '0'
		});

	})
	//Toggles Nav Menu button
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		//Toggles Nav List
		$('.nav-list').slideToggle('slow');
	});

	




});