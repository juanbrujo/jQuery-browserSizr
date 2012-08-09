jQuery browserSizr
=============

**Dando vida al tiempo / Giving life to time**

With **jQuery browserSizr** you’ll have more control over CSS styles when there is a significant change in browser size. It has 4 of the most common screens width:

 + smartphones (310px or less)
 + less than 1024px (from 311px to 1023px)
 + greater than 1024px (from 1024px to 1279px – including 1024px)
 + greater than 1280px (from 1280px and higher – including 1280px)
 
Specifically, **browserSizr** detects the current width of your browser or it’s resize and injects a specific class when it is in the range you’ve activated. Through CSS and a bit of specificity, you can define what happens when the browser is in each resolution:

	#container {
   		width: 960px; /* normal width */
   		font-size: 14px;
	}
   		#container.lower1024 {
      		width: 740px; /* width for less than 1024px */
      		font-size: 12px; /* smaller font-size */
   		}
   		#container.over1280 {
      		width: 1200px; /* width for over 1280px */
      		font-size: 16px; /* bigger font-size */
   		}
 
More info and demos: http://www.csslab.cl/2009/07/22/jquery-browsersizr/

Configuration:
-------

Include the jQuery library and this plugin:

	<script src="js/jquery-1.6.1.min.js"></script>
	<script src="js/jquery.timelinr-0.9.js"></script>

Inicialize-it with the default parameters:

	$(function(){
   		$().timelinr();
	});

Or configure it as preferred:

	$(function(){
		$().timelinr({
			orientation: 'horizontal',
			// value: horizontal | vertical, default to horizontal
			containerDiv: '#timeline',
			// value: any HTML tag or #id, default to #timeline
			datesDiv: '#dates',
			// value: any HTML tag or #id, default to #dates
			datesSelectedClass: 'selected',
			// value: any class, default to selected
			datesSpeed: 'normal',
			// value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to normal
			issuesDiv : '#issues',
			// value: any HTML tag or #id, default to #issues
			issuesSelectedClass: 'selected',
			// value: any class, default to selected
			issuesSpeed: 'fast',
			// value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to fast
			issuesTransparency: 0.2,
			// value: integer between 0 and 1 (recommended), default to 0.2
			issuesTransparencySpeed: 500,
			// value: integer between 100 and 1000 (recommended), default to 500 (normal)
			prevButton: '#prev',
			// value: any HTML tag or #id, default to #prev
			nextButton: '#next',
			// value: any HTML tag or #id, default to #next
			arrowKeys: 'false',
			// value: true/false, default to false
			startAt: 1,
			// value: integer, default to 1 (first)
			autoPlay: 'false',
			// value: true | false, default to false
			autoPlayDirection: 'forward',
			// value: forward | backward, default to forward
			autoPlayPause: 2000
			// value: integer (1000 = 1 seg), default to 2000 (2segs)< });
	});

**HTML** markup must be as follows:

	<div id="timeline">
	   <ul id="dates">
	      <li><a href="#">date1</a></li>
	      <li><a href="#">date2</a></li>
	   </ul>
	   <ul id="issues">
	      <li id="date1">
	         <p>Lorem ipsum.</p>
	      </li>
	      <li id="date2">
	         <p>Lorem ipsum.</p>
	      </li>
	   </ul>
	   <a href="#" id="next">+</a> <!-- optional -->
	   <a href="#" id="prev">-</a> <!-- optional -->
	</div>

Example: http://www.csslab.cl/ejemplos/browserSizr/