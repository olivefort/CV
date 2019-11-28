
function hdp(){
	let posY = window.scrollY;
	let button = document.getElementById('arrow');

	if (posY > 500){
		button.style.display = 'block';
	}else{
		button.style.display = 'none';
	}
}