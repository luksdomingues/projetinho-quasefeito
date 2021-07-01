var btn = document.querySelector('.show-div');
var footer = document.querySelector('.footer');

btn.addEventListener('click', function() {
    if (footer.style.display === 'block') {
        footer.style.display = 'none';
    } else {
        footer.style.display = 'block';
    }
})