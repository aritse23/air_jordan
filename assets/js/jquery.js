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

	});
	//Toggles Nav Menu button
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		//Toggles Nav List
		$('.nav-list').slideToggle('slow');
		$('.current').toggle('slow');
	});

	//Clicking on Story
	$('.story-butt').click(function(event){
		event.preventDefault();
		//closes list and changes burger icon
		$('.nav-list').slideToggle('slow');
		$('#nav-icon').toggleClass('open');
		//show story content, hide the rest
		$('#story').show('slow');
		$('#logo').hide('slow');
		$('#typo').hide('slow');
		$('#colour').hide('slow');
		//adds current class to Story
		$('#story').addClass('current');
		$('#logo').removeClass('current');
		$('#typo').removeClass('current');
		$('#colour').removeClass('current');
	});
	$('.logo-butt').click(function(event){
		event.preventDefault();
		//closes list and changes burger icon
		$('.nav-list').slideToggle('slow');
		$('#nav-icon').toggleClass('open');
		//show logo content, hide the rest
		$('#story').hide('slow');
		$('#logo').show('slow');
		$('#typo').hide('slow');
		$('#colour').hide('slow');
		//adds current class to logo
		$('#story').removeClass('current');
		$('#logo').addClass('current');
		$('#typo').removeClass('current');
		$('#colour').removeClass('current');
	});
	$('.typo-butt').click(function(event){
		event.preventDefault();
		//closes list and changes burger icon
		$('.nav-list').slideToggle('slow');
		$('#nav-icon').toggleClass('open');
		//show typo content, hide the rest
		$('#story').hide('slow');
		$('#logo').hide('slow');
		$('#typo').show('slow');
		$('#colour').hide('slow');
		//adds current class to typo
		$('#story').removeClass('current');
		$('#logo').removeClass('current');
		$('#typo').addClass('current');
		$('#colour').removeClass('current');
	});

	$('.colour-butt').click(function(event){
		event.preventDefault();
		//closes list and changes burger icon
		$('.nav-list').slideToggle('slow');
		$('#nav-icon').toggleClass('open');
		//show typo content, hide the rest
		$('#story').hide('slow');
		$('#logo').hide('slow');
		$('#typo').hide('slow');
		$('#colour').show('slow');
		//adds current class to typo
		$('#story').removeClass('current');
		$('#logo').removeClass('current');
		$('#typo').removeClass('current');
		$('#colour').addClass('current');
	});

	$('.blocks').click(function(event){
		event.preventDefault();
		$('.code').slideToggle('slow');
	})
});