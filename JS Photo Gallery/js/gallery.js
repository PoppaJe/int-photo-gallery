function upDate(preview){
    console.log("Hovered " + preview.alt);
    const div = document.getElementById("image");
    div.innerHTML = preview.alt;
    div.style.backgroundImage = "url('" + preview.src + "')";
  
	}

function unDo(){
    const div = document.getElementById("image");
    div.style.backgroundImage = "url('')";
    div.innerHTML = "Hover over an image below to display here.";
		
	}