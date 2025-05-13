let moon=document.querySelector('#moon');
    moon.onclick=()=>{
        document.body.classList.toggle('dark_theme');
        if(document.body.classList.contains('dark_theme')){
            moon.className="fas fa-sun";
        }
        else{
            moon.className="fas fa-moon";
        }
    }

    let searchIcon = document.getElementById('search-icon');
let searchBar = document.getElementById('search-bar');

// Show/hide search input
searchIcon.onclick = () => {
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'inline';
        searchBar.focus();
    } else {
        searchBar.style.display = 'none';
    }
};

// Keywords mapped to section IDs
const keywordToSection = {
    "home": "top",
    "about": "About",
    "skills": "Skills",
    "projects": "projects",
    "education": "Education",
    "contact": "contact"
};

// On user input, scroll to the matching section
searchBar.addEventListener('input', () => {
    let keyword = searchBar.value.toLowerCase();
    for (let key in keywordToSection) {
        if (keyword.includes(key)) {
            const section = document.getElementById(keywordToSection[key]);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                break;
            }
        }
    }
});