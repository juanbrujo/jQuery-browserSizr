/*
 *  jQuery browserSizr - v0.9
 *  Your flexible fixed layout.
 *
 *  https://github.com/juanbrujo/jQuery-browserSizr
 *  Demo: http://www.csslab.cl/2009/07/22/jquery-browsersizr/
 *
 *  Author: Jorge Epuñan |  @csslab
 *  License: MIT
 *  ©2009 CSSLab.cl
 */
var resizeTimer = null;

jQuery.fn.browserSizr = function(options){
	// default plugin settings
	settings = jQuery.extend({
		containerDiv: "#container",		// value: any HTML tag of #id, default to #container
		debug: "off", 					// value: on | off, default to "off"
		smartphones: "off", 			// value: on | off, default to "off"
		lower1024: "on",				// value: on | off, default to "on"
		over1024: "on",					// value: on | off, default to "on"
		over1280: "off"					// value: on | off, default to "off"
	}, options);

	// do you want to debug the browser width?
	var debug = settings.debug;

	$(function(){
		// let's draw the debug window
		if(debug === "on") {
			$("body").append("<div id='debug' style='position:absolute;right:1em;top:1em;background:rgba(0,0,0,0.7);box-shadow:#000 0 0 0.5em;border: 2px solid rgba(255,255,255,0.7);padding:0.5em;border-radius:1em;color:#fff;text-align:center;'><small style='font-size:0.7em;'>The current browser width is:</small><br /><big id='currentWidth' style='font-size:2em;text-shadow:#000 0 0 0.2em'></big><br /><small style='font-size:0.7em;'>The current container class is:</small><br /><big id='currentClass' style='font-size:1.6em;text-shadow:#000 0 0 0.2em'></big></div>");
		}
	});

	$(window).bind("resize load", function() {
		// get browser width
		var browserWidth = $("body").width();

		// search for the layout's container to inject the class'es
		var containerDiv = settings.containerDiv;
		
		// get de current class of the container an insert it to the debug window
		var containerClass = $(settings.containerDiv).attr("class");
		
		// filling the debug window with the current browser's width
		if(settings.debug === "on") {
			$("#debug #currentWidth").text(browserWidth+"px");
			if(containerClass === "") {
				$("#debug #currentClass").text("-");
			} else {
				$("#debug #currentClass").text(containerClass);
			}
		}

		// if statements for each resolution
		if(settings.lower1024 === "on"){
			if(browserWidth > 311 && browserWidth < 1023) {
				$(containerDiv).removeClass();
				if (resizeTimer) {
					clearTimeout(resizeTimer);
				}
				resizeTimer = setTimeout(lower1024, 10);
			}
		} else if(settings.lower1024 === "off") {
			if(browserWidth < 1023 && browserWidth > 311) {
				$(containerDiv).removeClass();
			}
		}
		if(settings.smartphones === "on"){
			if(browserWidth < 310) {
				if (resizeTimer) {
					clearTimeout(resizeTimer);
				}
				resizeTimer = setTimeout(smartphones, 10);
			}
		}
		if(settings.over1024 === "on"){	
			if(browserWidth > 1024 && browserWidth < 1279 || browserWidth === 1024) {
				if (resizeTimer) {
					clearTimeout(resizeTimer);
				}
				resizeTimer = setTimeout(over1024, 10);
			}
		} else if(settings.over1024 === "off") {
			if(browserWidth > 1024 && browserWidth < 1279 || browserWidth === 1024) {
				$(containerDiv).removeClass();
			}
		}
		if(settings.over1280 === "on"){	
			if(browserWidth > 1280 || browserWidth === 1280) {
				if (resizeTimer) {
					clearTimeout(resizeTimer);
				}
				resizeTimer = setTimeout(over1280, 10);
			}
		}

		function lower1024() {
			$(containerDiv).removeClass().addClass("lower1024");
		}
		function smartphones() {
			$(containerDiv).removeClass().addClass("smartphones");
		}
		function over1024() {
			$(containerDiv).removeClass().addClass("over1024");
		}
		function over1280() {
			$(containerDiv).removeClass().addClass("over1280");
		}

	});
	
};