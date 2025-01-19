const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

let isSpeaking = false; // Track if the bot is currently speaking
let isIntroductionComplete = false; // Track if the introduction is complete

function speak(text, callback) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    text_speak.onend = () => {
        isSpeaking = false; // Mark speaking as complete
        if (callback) callback(); // Call the callback after speaking
    };

    isSpeaking = true; // Mark speaking as in progress
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    const day = new Date();
    const hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        return "Good Morning Andi...";
    } else if (hour >= 12 && hour < 17) {
        return "Good Afternoon Andi...";
    } else {
        return "Good Evening Andi...";
    }
}

// Initialize Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

// Add click event to button
btn.addEventListener('click', () => {
    if (isIntroductionComplete) {
        content.textContent = "Listening...";
        recognition.start();
    } else {
        content.textContent = "Introducing...";
        speak("Hello, Nenu mee virtual Chatbot, naa name Chotaa. What can I do for you? " + wishMe(), () => {
            isIntroductionComplete = true; // Mark introduction as complete
            content.textContent = "Listening...";
            recognition.start(); // Start listening after the introduction
        });
    }
});

function takeCommand(message) {
    message = message.toLowerCase();

    // Check for variations of "hello"
    if (message.includes('hello')) {
        speak("Ha cheppandeee! How can I help you?");
    } 
    // Check for "how are you"
    else if (message.includes('how are you')) {
        speak("I am fine, Thank you for asking. What about you dear?");
    } 
    // Check for "I am doing great" or "I am fine"
    else if (message.includes('i am doing great') || message.includes('i am fine')) {
        speak("Ooh manchidhi, cheppandee! What can I open for you?");
    } 
    // Time and date
    else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak("The current time is " + time);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        speak("Today's date is " + date);
    } 
    // Calculator command
    else if (message.includes('calculator')) {
        window.open('Calculator:///');
        speak("Opening Calculator");
    } 
    // Handle search queries
    else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speak("Here is what I found about " + message);
    } 
    // Wikipedia search
    else if (message.includes('wikipedia')) {
        const query = message.replace('wikipedia', '').trim();
        window.open(`https://en.wikipedia.org/wiki/${query}`, "_blank");
        speak("Here is what I found on Wikipedia about " + query);
    } 
    // General Search (if no specific command matches)
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speak("Searching for " + message + " on Google");
    }
}
