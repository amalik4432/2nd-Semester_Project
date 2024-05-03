let introText =
  'Welcome To Home Automation Project, Click on the button to set command';
speak(introText);

// Function to convert text to speech
function speak(text) {
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  window.speechSynthesis.speak(utterance);
}

// Define command-to-URL mappings
const websiteCommands = {
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

// Function to process voice commands
function processVoiceCommand(command) {
  command = command.toLowerCase();
  speak('You said: ' + command);

  // Check if the command exists in the mappings
  if (websiteCommands.hasOwnProperty(command)) {
    window.open(websiteCommands[command], '_blank');
  } else {
    speak("Sorry, I couldn't understand that command.");
  }
}

// Initialize SpeechRecognition object
const recognition = new window.webkitSpeechRecognition(); // For Chrome
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;

let isListening = false;

// Function to toggle voice recognition
function toggleVoiceRecognition() {
  if (!isListening) {
    recognition.start();
    console.log('Listening for commands...');
    isListening = true;
  } else {
    recognition.stop();
    console.log('Voice recognition stopped.');
    isListening = false;
  }
}

// Event listener for speech recognition results
recognition.onresult = function (event) {
  const result = event.results[0][0].transcript;
  processVoiceCommand(result);
};

// Event listener for speech recognition errors
recognition.onerror = function (event) {
  console.error('Speech recognition error occurred: ' + event.error);
  speak('Sorry, there was an error in recognizing your command.');
};
