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
		//add chosen class to Story button
		$('.story-butt').addClass('chosen');
		$('.logo-butt').removeClass('chosen');
		$('.typo-butt').removeClass('chosen');
		$('.colour-butt').removeClass('chosen');
		//add chosen class to Story button 2
		$('.story-butt-2').addClass('chosen');
		$('.logo-butt-2').removeClass('chosen');
		$('.typo-butt-2').removeClass('chosen');
		$('.colour-butt-2').removeClass('chosen');
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
		//adds chosen class to logo button
		$('.story-butt').removeClass('chosen');
		$('.logo-butt').addClass('chosen');
		$('.typo-butt').removeClass('chosen');
		$('.colour-butt').removeClass('chosen');
		//add chosen class to logo button 2
		$('.story-butt-2').removeClass('chosen');
		$('.logo-butt-2').addClass('chosen');
		$('.typo-butt-2').removeClass('chosen');
		$('.colour-butt-2').removeClass('chosen');
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
		//adds chosen class to typo button
		$('.story-butt').removeClass('chosen');
		$('.logo-butt').removeClass('chosen');
		$('.typo-butt').addClass('chosen');
		$('.colour-butt').removeClass('chosen');
		//add chosen class to typo button 2
		$('.story-butt-2').removeClass('chosen');
		$('.logo-butt-2').removeClass('chosen');
		$('.typo-butt-2').addClass('chosen');
		$('.colour-butt-2').removeClass('chosen');
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
		//adds current class to colour
		$('#story').removeClass('current');
		$('#logo').removeClass('current');
		$('#typo').removeClass('current');
		$('#colour').addClass('current');
		//adds chosen class to colour button
		$('.story-butt').removeClass('chosen');
		$('.logo-butt').removeClass('chosen');
		$('.typo-butt').removeClass('chosen');
		$('.colour-butt').addClass('chosen');
		//add chosen class to colour button 2
		$('.story-butt-2').removeClass('chosen');
		$('.logo-butt-2').removeClass('chosen');
		$('.typo-butt-2').removeClass('chosen');
		$('.colour-butt-2').addClass('chosen');
	});

	//DESKTOP SIZED NAV BUTTON PRESSING
	$('.story-butt-2').click(function(event){
		event.preventDefault();
		//show story content, hide the rest
		$('#story').show();
		$('#logo').hide();
		$('#typo').hide();
		$('#colour').hide();
		//adds current class to Story
		$('#story').addClass('current');
		$('#logo').removeClass('current');
		$('#typo').removeClass('current');
		$('#colour').removeClass('current');
		//add chosen class to Story button
		$('.story-butt').addClass('chosen');
		$('.logo-butt').removeClass('chosen');
		$('.typo-butt').removeClass('chosen');
		$('.colour-butt').removeClass('chosen');
		//add chosen class to Story button 2
		$('.story-butt-2').addClass('chosen');
		$('.logo-butt-2').removeClass('chosen');
		$('.typo-butt-2').removeClass('chosen');
		$('.colour-butt-2').removeClass('chosen');
	});
	$('.logo-butt-2').click(function(event){
		event.preventDefault();
		//show logo content, hide the rest
		$('#story').hide();
		$('#logo').show();
		$('#typo').hide();
		$('#colour').hide();
		//adds current class to logo
		$('#story').removeClass('current');
		$('#logo').addClass('current');
		$('#typo').removeClass('current');
		$('#colour').removeClass('current');
		//adds chosen class to logo button
		$('.story-butt').removeClass('chosen');
		$('.logo-butt').addClass('chosen');
		$('.typo-butt').removeClass('chosen');
		$('.colour-butt').removeClass('chosen');
		//add chosen class to logo button 2
		$('.story-butt-2').removeClass('chosen');
		$('.logo-butt-2').addClass('chosen');
		$('.typo-butt-2').removeClass('chosen');
		$('.colour-butt-2').removeClass('chosen');

	});
	$('.typo-butt-2').click(function(event){
		event.preventDefault();
		//show typo content, hide the rest
		$('#story').hide();
		$('#logo').hide();
		$('#typo').show();
		$('#colour').hide();
		//adds current class to typo
		$('#story').removeClass('current');
		$('#logo').removeClass('current');
		$('#typo').addClass('current');
		$('#colour').removeClass('current');
		//adds chosen class to typo button
		$('.story-butt').removeClass('chosen');
		$('.logo-butt').removeClass('chosen');
		$('.typo-butt').addClass('chosen');
		$('.colour-butt').removeClass('chosen');
		//add chosen class to typo button 2
		$('.story-butt-2').removeClass('chosen');
		$('.logo-butt-2').removeClass('chosen');
		$('.typo-butt-2').addClass('chosen');
		$('.colour-butt-2').removeClass('chosen');
	});

	$('.colour-butt-2').click(function(event){
		event.preventDefault();
		//show colour content, hide the rest
		$('#story').hide();
		$('#logo').hide();
		$('#typo').hide();
		$('#colour').show();
		//adds current class to colour
		$('#story').removeClass('current');
		$('#logo').removeClass('current');
		$('#typo').removeClass('current');
		$('#colour').addClass('current');
		//adds chosen class to colour button
		$('.story-butt').removeClass('chosen');
		$('.logo-butt').removeClass('chosen');
		$('.typo-butt').removeClass('chosen');
		$('.colour-butt').addClass('chosen');
		//add chosen class to colour button 2
		$('.story-butt-2').removeClass('chosen');
		$('.logo-butt-2').removeClass('chosen');
		$('.typo-butt-2').removeClass('chosen');
		$('.colour-butt-2').addClass('chosen');
	});
	//Toggle displays the colour hexcode
	$('.blocks').click(function(event){
		event.preventDefault();
		$('.code').slideToggle('slow');
	});

	//Clicking on a print strip
	$('.print').click(function(event){
		event.preventDefault();
		//if print type has class varsity
		if($(this).hasClass('varsity')){
			//display the hidden image and hide the color strip
			$('.varsity-img').show('slow');
			$('.varsity').hide('slow');
			//if you click on image
			$('.varsity-img').click(function(event){
				//display the color strip and hide the image
				event.preventDefault();				
				$('.varsity').show('slow');
				$('.varsity-img').hide('slow');
			})
		//As above
		}else if($(this).hasClass('royal')){
			$('.royal-img').show('slow');
			$('.royal').hide('slow');
			$('.royal-img').click(function(event){
				event.preventDefault();				
				$('.royal').show('slow');
				$('.royal-img').hide('slow');
			})
		}else if($(this).hasClass('infrared')){
			$('.infrared-img').show('slow');
			$('.infrared').hide('slow');
			$('.infrared-img').click(function(event){
				event.preventDefault();				
				$('.infrared').show('slow');
				$('.infrared-img').hide('slow');
			})
		}else if($(this).hasClass('elephant')){
			$('.elephant-img').show('slow');
			$('.elephant').hide('slow');
			$('.elephant-img').click(function(event){
				event.preventDefault();				
				$('.elephant').show('slow');
				$('.elephant-img').hide('slow');
			})
		}else if($(this).hasClass('cement')){
			$('.cement-img').show('slow');
			$('.cement').hide('slow');
			$('.cement-img').click(function(event){
				event.preventDefault();				
				$('.cement').show('slow');
				$('.cement-img').hide('slow');
			})
		}else if($(this).hasClass('laser')){
			$('.laser-img').show('slow');
			$('.laser').hide('slow');
			$('.laser-img').click(function(event){
				event.preventDefault();				
				$('.laser').show('slow');
				$('.laser-img').hide('slow');
			})
		}
	});
});