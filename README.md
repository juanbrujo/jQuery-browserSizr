jQuery browserSizr
=============

![jQuery browserSizr](http://www.csslab.cl/wp-content/uploads/2009/07/logo_browsersizr.png)

**Your flexible fixed layout**

[More info and demos](http://www.csslab.cl/2009/07/22/jquery-browsersizr/)

With **jQuery browserSizr** you’ll have more control over CSS styles when there is a significant change in browser size. It has 4 of the most common screens width:

 + smartphones (310px or less)
 + less than 1024px (from 311px to 1023px)
 + greater than 1024px (from 1024px to 1279px – including 1024px)
 + greater than 1280px (from 1280px and higher – including 1280px)
 
Specifically, **browserSizr** detects the current width of your browser or it’s resize and injects a specific class when it is in the range you’ve activated. Through CSS and a bit of specificity, you can define what happens when the browser is in each resolution:

```css
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
``` 

Configuration:
-------

Include the jQuery library and this plugin:

```html
<script src="js/jquery-1.6.1.min.js"></script>
<script src="js/jquery.browserSizr.js"></script>
```

Inicialize-it with the default parameters:

```javascript
$(function(){
	$().browserSizr();
});
```

Or configure it as preferred:

```javascript
$().browserSizr({
   containerDiv: '#container', //containerDiv - value: any HTML tag or #id, default to #container
   debug: 'off', //debug-  value: on | off, default to 'off'
   smartphones: 'off', //smartphones - value: on | off, default to 'off'
   lower1024: 'on', //lower1024 - value: on | off, default to 'on'
   over1024: 'on', //over1024 - value: on | off, default to 'on'
   over1280: 'off' //over1280 - value: on | off, default to 'off'
});
```

[Example](http://www.csslab.cl/ejemplos/browserSizr/)
