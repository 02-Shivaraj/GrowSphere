let LightOrDark = 0;

function toggleTheme() {
    // Toggle the value of LightOrDark
    LightOrDark = LightOrDark === 0 ? 1 : 0;

    // Apply the theme based on LightOrDark value
    if (LightOrDark === 1) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    // Save the state in localStorage to persist across sessions
    localStorage.setItem('LightOrDark', LightOrDark);
}

// Apply the saved theme on page load
(function applySavedTheme() {
    const savedState = localStorage.getItem('LightOrDark');
    if (savedState !== null) {
        LightOrDark = parseInt(savedState, 10);
        if (LightOrDark === 1) {
            document.body.classList.add('dark-mode');
        }
    }
})();