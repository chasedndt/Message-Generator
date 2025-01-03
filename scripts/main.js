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

document.getElementById('generate').addEventListener('click', () => {
    const messageDisplay = document.getElementById('message-display');
    messageDisplay.style.opacity = '0';
    
    setTimeout(() => {
        messageDisplay.textContent = generateMessage();
        messageDisplay.style.opacity = '1';
    }, 300);
});
