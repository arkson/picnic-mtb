const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
})();

const elements = document.querySelectorAll('body, article, p, a, blockquote, .about-description');

if (theme !== 'light') {
    elements.forEach((element) => {
        element.classList.add('dark');
    });
} else {
    elements.forEach((element) => {
        element.classList.remove('dark');
    });
}

window.localStorage.setItem('theme', theme);

const handleToggleClick = () => {
    const elements = document.querySelectorAll('body, article, p, a, blockquote, .about-description');
    elements.forEach((element) => {
        element.classList.toggle('dark');
    });

    const isDark = elements[0].classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

document.getElementById('themeToggle').addEventListener('click', handleToggleClick);