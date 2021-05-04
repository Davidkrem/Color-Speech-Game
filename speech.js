import { handleResult } from './handlers.js';
import { colorsByLength, isDark } from './colors.js';

const colorsElement = document.querySelector('.colors');

function displayColors(colors) {
        return colors
                .map(
                        (color) =>
                                `<span class="color ${color} " ${color} ${
                                        isDark(color) ? 'dark' : ''
                                }" style="background: ${color};">${color}</span>`
                )
                .join('');
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
        // Check for broswer support
        if (!('SpeechRecognition' in window)) {
                console.log('Sorry your browswer does not support speech recognition');
                return;
        }
        console.log('starting...');
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.onresult = handleResult;
        recognition.start();
}
start();
colorsElement.innerHTML = displayColors(colorsByLength);
