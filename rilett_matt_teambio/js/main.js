var image_tracker ='1';
function change () {
	var image = document.getElementsByTagName('me');
	image.src = 'pic1.jpg'
	alert(image.src);
	if(image_tracker=='1'){
		image.src ='pic2.jpg'
		image_tracker ='2'
	}else{
		image.src = 'pic1.jpg'
		image_tracker = '2'
	}
}