// main.js
const messages = {
    greetings: [
        "In the grand scheme of things,",
        "Remember this truth:",
        "As Marcus Aurelius once reflected,",
        "Consider this wisdom:",
        "With calm reflection,"
    ],
    mainDialogue: [
        "focus on what you can control, let go of what you cannot",
        "every obstacle is an opportunity for growth",
        "your strength lies in how you respond to challenges",
        "true happiness comes from within, not external circumstances",
        "discipline and patience are your greatest allies"
    ],
    closingPhrases: [
        "Face this day with courage.",
        "Accept what comes with grace.",
        "Stand firm in your principles.",
        "Choose wisdom over comfort.",
        "Embrace the present moment."
    ]
};

function generateMessage() {
    const greeting = messages.greetings[Math.floor(Math.random() * messages.greetings.length)];
    const main = messages.mainDialogue[Math.floor(Math.random() * messages.mainDialogue.length)];
    const closing = messages.closingPhrases[Math.floor(Math.random() * messages.closingPhrases.length)];
    return `${greeting} ${main}. ${closing}`;
}

function typeMessage(message, element) {
    element.textContent = '';
    let index = 0;
    
    if (window.typeInterval) clearInterval(window.typeInterval);
    
    window.typeInterval = setInterval(() => {
        if (index < message.length) {
            element.textContent += message[index];
            index++;
        } else {
            clearInterval(window.typeInterval);
        }
    }, 50);
}

document.getElementById('generate').addEventListener('click', () => {
    const messageDisplay = document.getElementById('message-display');
    const newMessage = generateMessage();
    typeMessage(newMessage, messageDisplay);
});

// adds visible focus states entById('generate').addEventListener('keydown', (event) => {
    // when user presses Enter or Space, generate a new message
    // and display it

document.getElementById('generate').addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        const messageDisplay = document.getElementById('message-display');
        const newMessage = generateMessage();
        typeMessage(newMessage, messageDisplay);
    }
});