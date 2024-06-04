const btn = document.getElementById('voiceButton');

class HomeAutomation {
  constructor() {
    this.introText = `Welcome To Home Automation Project,
       I am LAZAREV Home Automation System,
        How can I help you?`;
    this.websiteCommands = {
      'open youtube': 'https://youtube.com',
      'open google': 'https://google.com',
      'open facebook': 'https://facebook.com',
      'open amazon': 'https://amazon.com',
      'open twitter': 'https://twitter.com',
      'open instagram': 'https://instagram.com',
      'open wikipedia': 'https://wikipedia.org',
      'open reddit': 'https://reddit.com',
      'open linkedin': 'https://linkedin.com',
      'open netflix': 'https://netflix.com',
      'open github': 'https://github.com',
      'open ebay': 'https://ebay.com',
      'open stack overflow': 'https://stackoverflow.com',
      'open twitch': 'https://twitch.tv',
      'open spotify': 'https://spotify.com',
      'open cnn': 'https://cnn.com',
      'open bbc': 'https://bbc.com',
      'open the new york times': 'https://nytimes.com',
      'open the guardian': 'https://theguardian.com',
      'open fox news': 'https://foxnews.com',
      'open cnbc': 'https://cnbc.com',
      'open bloomberg': 'https://bloomberg.com',
      'open reuters': 'https://reuters.com',
      'open espn': 'https://espn.com',
      'open nhl': 'https://nhl.com',
      'open nfl': 'https://nfl.com',
      'open nba': 'https://nba.com',
      'open mlb': 'https://mlb.com',
      'open imdb': 'https://imdb.com',
      'open rotten tomatoes': 'https://rottentomatoes.com',
      'open metacritic': 'https://metacritic.com',
      'open yelp': 'https://yelp.com',
      'open tripadvisor': 'https://tripadvisor.com',
      'open booking.com': 'https://booking.com',
      'open expedia': 'https://expedia.com',
      'open airbnb': 'https://airbnb.com',
      'open zillow': 'https://zillow.com',
      'open realtor.com': 'https://realtor.com',
      'open craigslist': 'https://craigslist.org',
      'open walmart': 'https://walmart.com',
      'open target': 'https://target.com',
      'open best buy': 'https://bestbuy.com',
      "open macy's": 'https://macys.com',
      'open home depot': 'https://homedepot.com',
      "open lowe's": 'https://lowes.com',
      'open ikea': 'https://ikea.com',
      'open costco': 'https://costco.com',
      "open sam's club": 'https://samsclub.com',
      'open petsmart': 'https://petsmart.com',
      'open petco': 'https://petco.com',
      'open chewy': 'https://chewy.com',
      'open wayfair': 'https://wayfair.com',
      'open overstock': 'https://overstock.com',
      'open etsy': 'https://etsy.com',
      'open alibaba': 'https://alibaba.com',
      'open aliexpress': 'https://aliexpress.com',
      'open taobao': 'https://taobao.com',
      'open jd.com': 'https://jd.com',
    };
    this.recognition = new window.webkitSpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.isListening = false;
  }

  toggleVoiceRecognition = () => {
    if (this.isListening) {
      this.stopVoiceRecognition();
    } else {
      this.startVoiceRecognition();
    }
  };

  startVoiceRecognition = () => {
    this.recognition.start();
    console.log('Listening for commands...');
    this.isListening = true;
  };

  stopVoiceRecognition = () => {
    this.recognition.stop();
    console.log('Voice recognition stopped.');
    this.isListening = false;
  };

  handleRockPaperScissors = () => {
    window.open('../StonePaperScissors/index.html', '_blank');
  };

  handleTicTacToe = () => {
    window.open('../TicTacToe/index.html', '_blank');
  };

  handleCurrencyConverter = () => {
    window.open('../CurrencyConverter/index.html', '_blank');
  };

  expenseTracer = () => {
    window.open('../expense/index.html', '_blank');
  };

  processVoiceCommand = (command) => {
    command = command.toLowerCase();
    this.speak(`You said: ${command}`);

    // Check if the command includes a delay
    const delayMatch = command.match(/after (\d+) seconds/);
    let delay = 0;
    if (delayMatch) {
      delay = parseInt(delayMatch[1], 10) * 1000; // Convert to milliseconds
      command = command.replace(delayMatch[0], '').trim(); // Remove the delay part from the command
    }

    // Check for home automation commands
    if (command === 'turn lights off') {
      this.speak('Turning lights off...');
      // Add code here to turn off the lights
    } else if (command.startsWith('set room temperature to')) {
      const temperatureMatch = command.match(/set room temperature to (\d+)/);
      if (temperatureMatch) {
        const temperature = parseInt(temperatureMatch[1], 10); // Extract temperature value
        this.speak(`Setting room temperature to ${temperature}...`);
      }
    } else if (command === 'play rock paper scissors') {
      this.handleRockPaperScissors();
    } else if (command === 'play box game') {
      this.handleTicTacToe();
    } else if (command === 'currency converter') {
      this.handleCurrencyConverter();
    } else if (command === 'expense tracker') {
      this.expenseTracer();
    } else if (this.websiteCommands.hasOwnProperty(command)) {
      setTimeout(() => {
        window.open(this.websiteCommands[command], '_blank');
      }, delay);
    } else {
      this.speak("Sorry, I couldn't understand that command.");
    }
  };

  speak = (text) => {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    window.speechSynthesis.speak(utterance);
  };

  initialize = () => {
    this.speak(this.introText);

    this.recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      this.processVoiceCommand(result);
    };

    this.recognition.onerror = (event) => {
      console.error(`Speech recognition error occurred: ${event.error}`);
      this.speak('Sorry, there was an error in recognizing your command.');
    };
  };
}

const homeAutomation = new HomeAutomation();
homeAutomation.initialize();

btn.addEventListener('click', () => {
  homeAutomation.toggleVoiceRecognition();
});

btn.addEventListener('click', () => {
  if (homeAutomation.isListening) {
    btn.style.backgroundColor = 'green';
    btn.textContent = 'SPEAK NOW';
  } else {
    btn.style.backgroundColor = '';
    btn.textContent = 'GO';
  }
});
