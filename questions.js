var questions = [

    {
        question: "sounds/elephant9.mp3",
        choices: ["photos/images.jpg", "photos/wolf.jpg", "James Hetfield", "Lemmy Kilmister"],
        answer: "photos/images.jpg",
    }, {
        question: "sounds/lion4.mp3",
        choices: ["photos/lion.jpg", "Funk rock", "Black metal", "Alternative rock"],
        answer: "photos/lion.jpg",
    }, {
        question: "sounds/Tiger7.mp3",
        choices: ["photos/lion.jpg", "photos/tiger.jpg", "photos/images.jpg", "Iron Maiden"],
        answer: "photos/tiger.jpg",
    }, {
        question: "sounds/mixkit-wolf-howling-1775.mp3",
        choices: ["photos/tiger.jpg", "photos/wolf.jpg", "1980", "1978"],
        answer: "photos/wolf.jpg",
    }, {
        question: "Who played drums on the album 'Killers'?",
        choices: ["Nicko McBrain", "Clive Burr", "Doug Sampson", "Blaze Bayley"],
        answer: "Clive Burr",
    }, 

];
var total = questions.length; // total number of questions
//shuffle array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };

shuffle(questions);