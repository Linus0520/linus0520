window.addEventListener('load', onLoad);
function onLoad(){
	var overlay = document.querySelector('#overlay');
	setTimeout(function(){
		document.querySelector('body').removeChild(overlay);
	},800);
};