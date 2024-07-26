// script.js

document.querySelectorAll('.icon').forEach((icon) => {
    icon.addEventListener('click', () => {
        const appName = icon.getAttribute('data-app');
        switch (appName) {
            case 'settings':
                alert("Settings App is clicked.");
                break;
            case 'terminal':
                alert("Terminal App is clicked.");
                break;
            case 'angry-birds':
                alert("Angry Birds is clicked.");
                break;
            case 'subways-surfers':
                alert("Subway Surfers is clicked.");
                break;
            case 'chromium-browser':
                alert("Chromium Browser is clicked.");
                break;
            case 'xbox-cloud-gaming':
                alert("Xbox Cloud Gaming is clicked.");
                break;
            case 'rammerhead-browser':
                alert("RammerHead Browser is clicked.");
                break;
            default:
                console.error(`Unknown app: ${appName}`);
        }
    });
});
