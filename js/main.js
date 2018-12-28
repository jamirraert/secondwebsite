let menuBtn = document.querySelector('.menu-btn'),
	mainMenu = document.querySelector('.main-menu'),
	darkOverlay = document.querySelector('.dark-overlay'),
	branding = document.querySelector('.branding'),
	innerNav = document.querySelector('.inner-nav'),
	img = document.querySelector('.img'),
	navbar = document.querySelector('.navbar'),
	ul = document.querySelector('.list-item'),
	li = ul.querySelectorAll('li.list-group'),
	innerContent = document.querySelector('.inner-content'),
	aboutBtn = document.getElementById('about-btn'),
	aboutMain = document.querySelector('.about-main'),
	closeAbout = document.querySelector('.closeBtns'),
	goalsBtn = document.getElementById('goals-btn'),
	goalMain = document.querySelector('.goal-main'),
	removeGoal = document.querySelector('.removeBtn'),
	showMenu = false,
	fadeMenu = false;

	menuBtn.addEventListener('click', runEvents);
	aboutBtn.addEventListener('click', showAbout);
	closeAbout.addEventListener('click', aboutClose);
	goalsBtn.addEventListener('click', showGoals);
	removeGoal.addEventListener('click', goalClose);

	function runEvents(){
		if(!showMenu){
			menuBtn.classList.add('close');
			mainMenu.classList.add('show');
			darkOverlay.classList.add('show');
			branding.classList.add('show');
			innerNav.classList.add('show');
			img.classList.add('show');
			navbar.classList.add('show');
			ul.classList.add('show');
			li.forEach(item => item.classList.add('show'));

			showMenu = true;
		}else{
			menuBtn.classList.remove('close');
			mainMenu.classList.remove('show');
			darkOverlay.classList.remove('show');
			branding.classList.remove('show');
			innerNav.classList.remove('show');
			img.classList.remove('show');
			navbar.classList.remove('show');
			ul.classList.remove('show');
			li.forEach(item => item.classList.remove('show'));
			showMenu = false;
		}
	}
	function showAbout(){
		aboutMain.style.visibility = 'visible';
		aboutMain.style.transform = 'rotate(360deg)';
		aboutMain.style.transition = '4s';
	}
	function aboutClose(){
		aboutMain.style.visibility = 'hidden';
		aboutMain.style.transition = '2s';
		aboutMain.style.transform = 'rotate(-540deg)';
	}
	function showGoals(){
		goalMain.style.visibility = 'visible';
		goalMain.style.transform = 'rotate(360deg)';
		goalMain.style.transition = '4s';
	}
	function goalClose(){
		goalMain.style.visibility = 'hidden';
		goalMain.style.transition = '2s';
		goalMain.style.transform = 'rotate(-540deg)';
	}



