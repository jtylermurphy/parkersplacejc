//var menu = document.getElementById("menu");

// open/close the menu when the user clicks on the button
function toggleMenu(x) {
    var menu = document.getElementById(x)
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}

// close the menu when the user clicks outside of it
window.onclick = function (event) {
    var menu = document.getElementById('accommodations-menu');
    var dropdownWrapper = document.getElementById('dropdownwrapper');

    if (!dropdownWrapper.contains(event.target) && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
    }
}
