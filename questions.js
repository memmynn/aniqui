const questions_database = [//bu veritabanından sorular ve cevaplar questions array'e çekilip hazırlanacak
    {id: "elephant",
question: "sounds/elephant9.mp3",
choices: [],
answer: "photos/elephant.png",
}, {id: "lion",
question: "sounds/lion4.mp3",
choices: [],
answer: "photos/lion.png",
}, {id: "tiger",
question: "sounds/Tiger7.mp3",
choices: [],
answer: "photos/tiger.png",
}, {id: "wolf",
question: "sounds/mixkit-wolf-howling-1775.mp3",
choices: [],
answer: "photos/wolf.png",
}, {id: "hyena",
question: "sounds/hyena.mp3",
choices: [],
answer: "photos/hyena.png",
},{id: "brown bear",
question: "sounds/brown_bear.mp3",
choices: [],
answer: "photos/brown_bear.png",
},{id: "cobra",
question: "sounds/cobra.mp3",
choices: [],
answer: "photos/cobra.png",
},{id: "rhino",
question: "sounds/rhino.mp3",
choices: [],
answer: "photos/rhino.png",
},{id: "giraffe",
question: "sounds/giraffe.mp3",
choices: [],
answer: "photos/giraffe.png",
},{id: "zebra",
question: "sounds/zebra.mp3",
choices: [],
answer: "photos/zebra.png",
},{id: "alligator",
question: "sounds/alligator.mp3",
choices: [],
answer: "photos/alligator.png",
},{id: "deer",/////
question: "sounds/deer.mp3",
choices: [],
answer: "photos/deer.png",
},{id: "hare",/////
question: "sounds/hare.mp3",
choices: [],
answer: "photos/hare.png",
},{id: "chimpanzee",/////
question: "sounds/chimpanzee.mp3",
choices: [],
answer: "photos/chimpanzee.png",
},{id: "cougar",/////
question: "sounds/cougar.mp3",
choices: [],
answer: "photos/cougar.png",
},{id: "gorilla",/////
question: "sounds/gorilla.mp3",
choices: [],
answer: "photos/gorilla.png",
},{id: "antelope",
question: "sounds/antelope.mp3",
choices: [],
answer: "photos/antelope.png",
},{id: "boar",/////
question: "sounds/boar.mp3",
choices: [],
answer: "photos/boar.png",
},{id: "dolphin",/////
question: "sounds/dolphin.mp3",
choices: [],
answer: "photos/dolphin.png",
},{id: "fox",/////
question: "sounds/fox.mp3",
choices: [],
answer: "photos/fox.png",
},{id: "frog",/////
question: "sounds/frog.mp3",
choices: [],
answer: "photos/frog.png",
},{id: "python",/////
question: "sounds/python.mp3",
choices: [],
answer: "photos/python.png",
},{id: "roe",/////
question: "sounds/roe.mp3",
choices: [],
answer: "photos/roe.png",
},{id: "sea lion",/////
question: "sounds/sea lion.mp3",
choices: [],
answer: "photos/sea lion.png",
},{id: "whale",/////
question: "sounds/whale.mp3",
choices: [],
answer: "photos/whale.png",
},];

var questions;
function randomAr(array) {//array'in rastgele öğesinden özellik almak
  return array[Math.floor(Math.random() * array.length)];
};

function questionise() {
  questions = questions_database.slice();//veri tabanının kopyasını oluşturuyoruz
  questions.map(q => { 
    q.choices.push(q.answer);//kendisini yani doğru cevabı ekleme
    while (q.choices.length < 4){//3 adet cevap ekleyeceğiz answers array'e
      let randomAnswer = randomAr(questions).answer;//rastgele cevap aldık
      if (q.choices.indexOf(randomAnswer) === -1){//rastgele cevap, cevaplar içinde yoksa ekleyeceğiz
        q.choices.push(randomAnswer);
      };
    };
  }  );
};
questionise();
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

shuffle(questions); questions.map(element => shuffle(element.choices));

function replayFn() {
    window.location.href = window.location.href;
};
