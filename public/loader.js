(function () {
    const SCRIPT_ID = 'retell-voice-widget-script';
    if (document.getElementById(SCRIPT_ID)) return;

    const container = document.createElement('div');
    container.id = 'retell-voice-widget-container';
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.width = '300px';
    container.style.height = '400px';
    container.style.zIndex = '999999';
    container.style.pointerEvents = 'none'; // Allow clicking through empty space

    const iframe = document.createElement('iframe');
    // Replace this with your actual Vercel/Netlify URL after deployment
    const widgetUrl = window.RETELL_WIDGET_URL || 'http://localhost:3000/widget';

    iframe.src = widgetUrl;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.background = 'transparent';
    iframe.style.pointerEvents = 'auto'; // Re-enable pointer events for the iframe content
    iframe.allow = "microphone";

    container.appendChild(iframe);
    document.body.appendChild(container);

    // Handle resizing or other messages if needed
    window.addEventListener('message', (event) => {
        // Implement communication logic here if necessary
    });
})();
