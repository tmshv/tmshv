document.addEventListener('DOMContentLoaded', function(){
	if (window.devicePixelRatio > 1) {
		qs('img').forEach(function(img){
			var lowres = img.src;
			var highres = lowres.replace(/\.(png|jpg)$/, '@2x.$1');
			img.src = highres;
		});
	}
});

function qs(selector){
	var nodes = document.querySelectorAll(selector);
	return [].slice.call(nodes);
}