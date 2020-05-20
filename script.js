const aboutMe = document.getElementById('aboutme');
const skills = document.getElementById('skills');
const experience = document.getElementById('experience');
const education = document.getElementById('education');
const portfolio = document.getElementById('portfolio');
const content = document.getElementById('content');

aboutme.addEventListener('click', () => {
	content.style.padding = '22%';
	content.style.textAlign = 'right';
	content.style.fontSize = '20px';
	content.style.color = '#FFFAFA';
	content.innerHTML = 'Enthusiastic and talented Software Developer, eager to learn and be part of something special. I love challenges, not afraid of anything at all. I consider myself a team player, open to give and receive feedbacks, improve with it, and help others to improve as well.';
})
skills.addEventListener('click', () => {
	content.style.color = '#FFFAFA';
	content.style.padding = '20%';
	content.style.fontSize = '20px';
	content.style.textAlign = 'left';
	content.innerHTML = '> Front End developing - HTML, CSS, Javascript</><br/>> Frameworks - React, React Native<br/>> Back End Developing - NodeJS, Python (Django)<br/>> API Rest, web services, JSON<br/>> SAP ABAP developing<br/>> Code versioning tools - Git<br/>> Agile work methodology<br/>> English proficiency';
})
experience.addEventListener('click', () => {
	content.style.padding = '10%';
	content.style.color = '#FFFAFA';
	content.style.textAlign = 'justify';
	content.style.fontSize = '15px';
	content.innerHTML = '<h2 style="color: #FFD700">FH - Curitiba/PR<br/>SAP Developer</h2>December/2019 - Current<br/>I am responsible for developing systems in ABAP (Advanced Business Application Programming), a high-level programming language developed by the software company SAP, and making corrections to meet the needs of users. The activities that I perform involve program development, debugging and unit testing.';
	content.innerHTML += '<br/><h2 style="color: #FFD700; margin-top: 20px">Baden Torrefação de Cafés Especiais - Porto Alegre/RS<br/>Administrative Assistent</h2>April/2016 - August/2019<br/>As a small company, I ended up taking on all the bureaucratic part. I do the commercial, talk and negotiate with customers. When the sale is made, I issue invoices and bills. I also do the collection part, low payment slips, checking payments via card and cash. I am also responsible for finance, I do bank reconciliation, accounts payable, investment analysis. In addition, I give training in the theoretical part of the barista course, where I talk about coffee history, production, market.';
})
education.addEventListener('click', () => {
	content.style.color = '#FFFAFA';
	content.style.padding = '12%';
	content.style.textAlign = 'right';
	content.style.fontSize = '15px';
	content.innerHTML = '<h2 style="color: #FFD700">Instruct - Campinas/SP</h2>Instruct Academy Program<br/>September - November/2019<br/>In this program, I received training aimed at people entering the IT area, including the "Welcome to the Django" course, where Python knowledge is applied to web development through the use of the Django framework, integration course and continuous delivery, infrastructure course like code, code versioning and use of containers / docker.<br/>';
	content.innerHTML += '<h2 style="color: #FFD700; margin-top: 20px">FAEL<br/>System Analysis and Development - Technologist</h2>2017/2020<br/>Undergraduate Program';
})
portfolio.addEventListener('click', () => {
	content.style.color = '#FFFAFA';
	content.style.textAlign = 'center';
	content.style.padding = '25%';
	content.style.fontSize = '15px';
	content.innerHTML = 'HTML, CSS, Javascript<br/><h2><a href="#" style="text-decoration:none; color:#FFD700";>Photographer Website</a></h2><br/>ReactJS<br/><h2><a href="https://paulafalves.github.io/todo_list/" style="text-decoration:none; color:#FFD700">To Do List</a></h2>';
})

const htmlAnimation01 = document.querySelector('.html-animation-01');
const string01 = htmlAnimation01.textContent;
const splitString01 = string01.split('');
htmlAnimation01.textContent = '';


for (i = 0; i < splitString01.length; i++){
	htmlAnimation01.innerHTML += "<span>" + splitString01[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
	const span = htmlAnimation01.querySelectorAll('span')[char];
	span.classList.add('fade');
	char++;
	if (char === splitString01.length) {
		complete();
		return;
	}
}

function complete() {
	clearInterval(timer);
	timer = null;
}

// const htmlAnimation02 = document.querySelector('.html-animation-02');
// const string02 = htmlAnimation02.textContent;
// const splitString02 = string02.split('');
// htmlAnimation02.textContent = '';

// for (i = 0; i < splitString02.length; i++){
// 	htmlAnimation02.innerHTML += "<span>" + splitString02[i] + "</span>";
// }


// let timer2 = setInterval(onTick2, 50);
// function onTick2() {
// 	const span2 = htmlAnimation02.querySelectorAll('span')[char];
// 	span2.classList.add('fade');
// 	char++;
// 	if (char === splitString02.length) {
// 		complete();
// 		return;
// 	}
// }











