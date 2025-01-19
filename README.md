The issue with the table of contents not working for the last three entries is likely due to the lack of anchor links for those sections. For the table of contents to work, each section must have an appropriate ID that matches the anchor in the table of contents.

To fix this, make sure that each section in the README has the correct `id` attribute for the table of contents links to point to. Here's the corrected version of your README with proper IDs for the last three sections:

```markdown
# **CHOTA-The-Chatbot**

It is a virtual assistant that can do anything for you.

## **Virtual Chatbot Project - Chota**

A voice-based virtual assistant chatbot that can respond to queries, open websites, perform searches, tell time and date, and much more. The chatbot interacts with users via voice, listens to their commands, and replies accordingly.

### **Features:**
- **Speech Recognition**: The bot listens for user input and converts speech to text.
- **Speech Synthesis**: The bot speaks responses using the Web Speech API.
- **Commands**: The bot can open websites like Google, YouTube, Facebook, perform searches, and provide the current time, date, and more.
- **Personalized Greetings**: The bot introduces itself with a personalized message.
- **Name Query**: The bot answers when asked about its name.
- **Universal Search**: Any query can be searched on Google.
- **Continuous Listening**: The bot listens to the user's voice commands continuously until no input is detected.

## **Table of Contents:**
- [Project Setup](#project-setup)
- [How It Works](#how-it-works)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
  - [Steps to Contribute](#steps-to-contribute)
  - [License](#license)

## **Project Setup**

### **1. Clone the Repository**
To get started, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/chatbot-project.git
cd chatbot-project
```

### **2. Requirements**
This project uses web-based speech synthesis and recognition. Make sure your browser supports the Web Speech API, which is available in most modern browsers like Google Chrome and Firefox.

## **How It Works**

1. **Speech Recognition**: The chatbot listens for your voice input using the SpeechRecognition API. When you speak, it converts your speech into text and processes it for commands.
2. **Speech Synthesis**: After processing the command, the bot will use the SpeechSynthesisUtterance API to speak back to the user.
3. **Command Processing**: The bot can respond to various commands such as opening websites (Google, YouTube, etc.), telling the time and date, and searching for specific queries on the internet.

### **Key Features:**
- **Voice Commands**: Type or speak commands such as "open Google", "what is the time", "who is Einstein", etc.
- **Time and Date**: The bot can tell you the current time and date.
- **Opening Websites**: You can ask the bot to open any website (e.g., "open YouTube").
- **Search Queries**: You can ask questions, and the bot will search for the answers on Google or Wikipedia.

## **Technologies Used**
- **HTML**: For structuring the chatbot interface.
- **CSS**: For styling the chatbot interface.
- **JavaScript**: For the core logic including speech synthesis and recognition.
- **Web Speech API**: This API is used for speech recognition and speech synthesis.

## **Installation**

### **1. Clone the Repository**
Clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/chatbot-project.git
cd chatbot-project
```

### **2. Open the Project in a Browser**
Since this is a frontend project, you don't need any backend setup. You can open the `index.html` file in a browser directly.

### **3. Dependencies**
This project uses the Web Speech API, which is built into modern browsers. There are no external dependencies to install. However, ensure you're using a supported browser like Chrome or Firefox.

## **Usage**

1. Open the `index.html` file in your browser.
2. Press the "Talk" button to start speaking or interacting with the chatbot.
3. The chatbot will respond based on the command or query you provide.
4. To stop the chatbot from continuously listening, simply remain silent for a few moments. It will automatically stop listening and wait for the next interaction.

### **Commands**
- **"Hello"**: The chatbot will greet you.
- **"How are you"**: The chatbot will respond with a friendly greeting.
- **"What is your name"**: The chatbot will say "My name is Chota."
- **"Open Google"**: The chatbot will open Google in a new tab.
- **"What is the time"**: The chatbot will tell you the current time.
- **"What is the date"**: The chatbot will provide today's date.
- **"Wikipedia [query]"**: The chatbot will search for the query on Wikipedia.
- **General search**: Ask the chatbot any question, and it will search for it on Google.

## **Contributing**

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. You can also open an issue for suggestions or bugs.

### **Steps to Contribute:**
1. Fork the repository.
2. Clone your forked repository.
3. Make your changes.
4. Commit and push the changes.
5. Submit a pull request for review.

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### **Key Changes:**
- Added anchor links in the Table of Contents that correspond to the section titles. For example, the link `[Contributing](#contributing)` matches the `## Contributing` section in the README.
  
Now, the table of contents will work as expected, and clicking the links will navigate to the appropriate sections in the document.
