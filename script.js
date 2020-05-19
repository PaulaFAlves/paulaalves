const aboutMe = document.getElementById('aboutme');
const skills = document.getElementById('skills');
const experience = document.getElementById('experience');
const education = document.getElementById('education');
const portfolio = document.getElementById('portfolio');
const content = document.getElementById('content');

aboutme.addEventListener('click', () => {
	content.style.padding = '25%';
	content.style.textAlign = 'center';
	content.innerHTML = 'Enthusiastic and talented Software Developer, eager to learn and be part of something special. I love challenges, not afraid of anything at all. I consider myself a team player, open to give and receive feedbacks, improve with it, and help others to improve as well.';
})
skills.addEventListener('click', () => {
	content.style.padding = '22%';
	content.style.textAlign = 'left';
	content.innerHTML = 'Front end developing - HTML, CSS, Javascript<br/>Frameworks - React, React Native<br/>Back end developing - NodeJS, Python (Django and Pandas)<br/>API Rest, web services, JSON<br/>SAP ABAP developing<br/>Code versioning tools - Git<br/>Agile work methodology<br/>English proficiency';
})
experience.addEventListener('click', () => {
	content.style.padding = '10%';
	content.style.textAlign = 'left';
	content.innerHTML = 'FH - Curitiba/PR<br/>SAP Developer<br/>December/2019 - Current<br/>I am responsible for developing systems in ABAP (Advanced Business Application Programming), a high-level programming language developed by the software company SAP, and making corrections to meet the needs of users. The activities that I perform involve program development, debugging and unit testing.';
	content.innerHTML += 'Baden Torrefação de Cafés Especiais - Porto Alegre/RS<br/>Administrative Assistent<br/>April/2016 - August/2019<br/>As a small company, I ended up taking on all the bureaucratic part. I do the commercial, talk and negotiate with customers. When the sale is made, I issue invoices and bills. I also do the collection part, low payment slips, checking payments via card and cash. I am also responsible for finance, I do bank reconciliation, accounts payable, investment analysis. In addition, I give training in the theoretical part of the barista course, where I talk about coffee history, production, market.';
})
education.addEventListener('click', () => {
	content.style.padding = '25%';
	content.style.textAlign = 'center';
	content.innerHTML = 'FAEL<br/>System Analysis and Development - Technologist<br/>2017/2020';
})
portfolio.addEventListener('click', () => {
	content.style.textAlign = 'center';
	content.innerHTML = 'HTML, CSS, Javascript<br/>Login Page<br/>Photographer Website<br/>ReactJS<br/>To Do List';
})
document.querySelector(".main").reset();