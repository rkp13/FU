$(document).ready(function(){
	for(i=0;i<tmp.length;i++){  
		var video = document.createElement('video');  
  		video.src = tmp[i];
  		video.autoPlay = true;
	}
});