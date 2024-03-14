// change background color of the second container(projects) when scrolled down
function updateProjectSectionClass() {
    var element = document.getElementById('project-section');
    var position = element.getBoundingClientRect();
    var moonImage = document.getElementById('moon-icon');

    var isInView = position.top < window.innerHeight - 198 && position.bottom >= 0;

    if (moonImage.src.includes('images/moon.png') || moonImage.src.includes('moonWhite.png')) {
        element.classList.toggle('changeColor', isInView);
        element.classList.remove('dark-mode-project-container');
    } else {
        element.classList.toggle('dark-mode-project-container', isInView);
        element.classList.remove('changeColor');
    }
}

// change navbar color based on position
function updateNavbarColor() {
    var navbar = document.querySelector('.navbar');
    var isInDarkMode = document.body.classList.contains('dark-mode');
    var projectSection = document.querySelector('.second-container');
    var projectTop = projectSection.offsetTop;
    var scrollPosition = window.scrollY + navbar.offsetHeight;
    var buttonText = document.querySelectorAll('.navbar-button');
    var moonImage = document.getElementById('moon-icon');

    // Adjust default navbar color based on dark mode
    if (isInDarkMode) {
        navbar.style.backgroundColor = '#121212'; // Dark mode
        moonImage.src = 'images/bright-moon.png';
    } else {
        navbar.style.backgroundColor = 'white'; // Light mode 
    }

    if (scrollPosition >= projectTop && scrollPosition <= projectTop + projectSection.offsetHeight) {
        navbar.style.backgroundColor = isInDarkMode ? '#222222' : '#8c8c73';
        buttonText.forEach(function(button) {
            button.classList.add('navbar-button-white-text');
        });
        if (!isInDarkMode) {
            moonImage.src = 'images/moonWhite.png';
        }

    } else {
        buttonText.forEach(function(button) {
            button.classList.remove('navbar-button-white-text');
        });
        if (!isInDarkMode) { // Revert moon icon if not in dark mode
            moonImage.src = 'images/moon.png';
        }
    }
}

document.addEventListener('scroll', updateNavbarColor);

// scroll 
window.addEventListener('scroll', function() {
updateProjectSectionClass();
});

// onlick changes body background and all needed text colors
function darkmode() {
    // change moon image to bright moon image
    var moonImage = document.getElementById('moon-icon');
    if (moonImage.src.includes('images/moon.png')) {
        moonImage.src = 'images/bright-moon.png';
    } else {
        moonImage.src = 'images/moon.png';
    }

    // change button text color
    var buttonText = document.querySelectorAll('.navbar-button');
    buttonText.forEach(function(button) {
        button.classList.toggle('dark-mode-text');
    });
    var mainButtonText = document.querySelector('.navbar-button-main');
    mainButtonText.classList.toggle('dark-mode-text');

    // change body color
    var body = document.body;
    body.classList.toggle('dark-mode');

    // change all text color 
    var firstDesc = document.querySelector('.first-container-description');
    firstDesc.classList.toggle('dark-mode-text');

    // change school paper color 
    var paper = document.querySelector('.school-inner');
    paper.classList.toggle('dark-mode-school');

    // change skills text color
    var skillsDesc = document.querySelectorAll('.skills-container-desc');
    skillsDesc.forEach(function(element) {
        element.classList.toggle('dark-mode-text');
    }); 

    var skillsTitle = document.querySelectorAll('.skills-title');
    var skillsOne = document.querySelectorAll('.skills-single-container');  
    var skillsTwo = document.querySelectorAll('.skills-single-container-desc');
    var skillsThree = document.querySelectorAll('.skills-single-container-end');

    skillsTitle.forEach(function(element) {
        element.classList.toggle('dark-mode-text');
    }); 
    skillsOne.forEach(function(element) {
        element.classList.toggle('dark-mode-text');
    });
    skillsTwo.forEach(function(element) {
        element.classList.toggle('dark-mode-text');
    });
    skillsThree.forEach(function(element) {
        element.classList.toggle('dark-mode-text');
    });

    // change project container background color
    var projectBackground = document.querySelector('.second-container')
    projectBackground.classList.toggle('dark-mode-project-container')

    // change project title color
    var projectContainerTitle = document.querySelector('.second-container-title')
    projectContainerTitle.classList.toggle('dark-mode-project-title')

    // change education title color
    var projectContainerTitle = document.querySelector('.third-container-title')
    projectContainerTitle.classList.toggle('dark-mode-project-title')

    updateNavbarColor();
}

updateNavbarColor();

// onclick scrolls down the to target div @ project section
function scrollToProjects() {
    document.getElementById('project-section').scrollIntoView({
        behavior: 'smooth'
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry/target/classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.skills-container');
hiddenElements.forEach((el) => observer.observe(el));


