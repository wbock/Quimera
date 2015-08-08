/*
 * Insert product images into gallery and load individual preview carouseli
 */


/// <reference path="../typings/jquery/jquery.d.ts"/>

jQuery(document).ready(function () {
        $(".nav a, .navbar-header a").click(function(event) {
                // check if window is small enough so dropdown is created
               jQuery(".navbar-collapse").removeClass("in").addClass("collapse");
        });
});

$(function () {
	
	// Load gallery xml file
	$.ajax({
        url: './gallery.xml',
        success: function (xml) {
			loadItems(xml, 'solution');
			loadItems(xml, 'product');
		}
	});
});

function loadItems(xml, itemType) {
	// Loop through individual items
	$(xml).find(itemType).each(function () {
		// Get item values
		var name = $(this).find('name').text();
		var id = $(this).attr('id');
		var description = $(this).find('description').text();
		var thumbnail = $(this).find('thumbnail').text();
		var versions = $(this).find('version');				
		
		// Add divs for individual items
		var newDiv;
		if(itemType == 'product') {
			newDiv = '<div class="col-xs-6 col-sm-4 col-md-3 galleryElement"><a id="' + id + '"></a></div>';
		} else {
			newDiv = '<div class="col-xs-12 col-sm-6 col-md-4 galleryElement"><a id="' + id + '"></a></div>';
		}
		
		$('#'+itemType+'Gallery').append(newDiv);
		
		// Set attributes of image container
		var img = $('#' + id);
		img.attr({
			'data-toggle': 'modal',
			'data-target': '#mItem'
		});
		
		// Add item thumbnails
		img.append('<img src="' + thumbnail + '" />');
		
		/*
		 * Code for popup dialog
		 */
		img.click(function () {
			$('#itemTypeTitle').html(name);
			$('#itemTypeDescription').html(description);
			var indicators = $('#itemTypeCarIndicators');
			var carouselImages = $('#itemTypeImages');
	
			indicators.html('');
			carouselImages.html('');
	
			// Hide controls if there is only one image
			if (versions.length > 1) {
				$('#leftControl').show();
				$('#rightControl').show();
			} else {
				$('#leftControl').hide();
				$('#rightControl').hide();
			}
	
			var firstItem = true;
			versions.each(function (index) {
	
				var color = $(this).find('color').text();
				var image = $(this).find('image').text();
	
				if (firstItem) {
					// Set first carousel item to be active
					indicators.append('<li data-target="#myCarousel" data-slide-to="' + index + '" class="active"></li>');
					carouselImages.append('<div id="item' + index + '" class="item active"></div>');
				} else {
					// Additional carousel items
					indicators.append('<li data-target="#myCarousel" data-slide-to="' + index + '"></li>');
					carouselImages.append('<div id="item' + index + '" class="item"></div>');
				}
				
				// Add text and pictures
				$('#item' + index).append('<img class="'+itemType+'Image" src="' + image + '"/>');
				$('#item' + index).append('<div class="carousel-caption"><h4>Estilo: ' + color + '</h4></div>');
				
				// Set flag after configuring first item
				firstItem = false;
			});
		});
	});
};

