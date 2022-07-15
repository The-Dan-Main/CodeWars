/** this is a copyrighted exam */

function textAnalyzer(text) {
    if (typeof text !== 'string') {
      return "Cannot analyze text. Provided input is not valid. Please pass a string";
    }
    if (text.trim().length < 1) {
      return "Cannot analyze text. Your text must include at least one character";
    }
    let analyzedTextData = {};
    let shortestWord = '';
    let longestWord = '';
    let wordsArray = convertTextToWords(text);
    longestWord = findLongestWord(wordsArray);
    analyzedTextData.longestWord = longestWord;
    shortestWord = findShortestWord(wordsArray, longestWord);
    analyzedTextData.shortestWord = shortestWord;
    let vowelWords = [];
    vowelWords = findVowelWords(wordsArray);
    analyzedTextData.vowelWords = vowelWords;
    analyzedTextData.wordsList = wordsArray;
    analyzedTextData.totalWordsCount = wordsArray.length;
    return analyzedTextData;
  }
  
  function convertTextToWords(text) {
    let lowerCaseText = text.toLowerCase();
    let words = lowerCaseText.split(' ');
    return words;
  }
  // code provided for you
  function findLongestWord(words) {
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
      let currentWord = words[i];
      if (currentWord.length >= longestWord.length) {
        longestWord = currentWord;
      }
    }
    return longestWord;
  }
  
  function findShortestWord(words, longestWord) {
    let shortestWord = longestWord;
    for (let i = 0; i < words.length; i++) {
      let currentWord = words[i];
      if (currentWord.length < shortestWord.length) {
        shortestWord = currentWord;
      }
    }
    return shortestWord;
  }
  
  function findVowelWords(words) {
    let vowels = ['a', 'i', 'e', 'o', 'u'];
    let vowelWords = [];
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      for (let j = 0; j < vowels.length; j++) {
        let vowel = vowels[j];
        if (word.startsWith(vowel)) {
          vowelWords.push(word)
        }
      }
    }
    return vowelWords
  }
  // console.log(textAnalyzer("You are an awesome developer"));
  let example = "This is getting out of Hand!"
  console.log(textAnalyzer(example))