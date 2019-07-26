var arrayTruth = [
  "Who is your crush?",
  "If you had to kill anyone in the room except yourself, who would you kill?",
  "list 3 emmbarasing moments that happened in school",
  "Tell us an unpopular opinion of yours.",
  "Who would be in your zombie apocalypse group?",
  "Pinapples on pizza or no?",
  "cats or dogs?",
  "Clebrity crush?",
]

var arrayDare = [
  "Text your crush a cute selfie.",
  "Message a celebrity on instagram.",
  "Walk around barefoot for one minute.",
  "Show everyone a random photo from your album.",
  "Dance for 1 minute without music.",
  "Act like a cat for 1 minute.",
  "Act like a puppy for 1 minute.",
  "imitate a famous actor for 1 minute.",
  "Sing in the bathroom for 20 seconds.",
]

var truthButton = $('.truthbutton');
truthButton.on('click', showTruth);
var truthContainer = $('.truthcontainer');

function showTruth() {
  //choose a truth from array and then display
  truthContainer.text(arrayTruth[1]);
  truthContainer.append(arrayTruth[`<h2>${arrayTruth[3]}</h2>`]);
  truthContainer.append(`<img class = "jstruth" src="/Users/apple/Desktop/truth_dare_game/assets/image_1.jpg">`);
}

var dareButton = $('.darebutton');
dareButton.on('click', showDare);
var dareContainer = $('.darecontainer');

function showDare() {
  dareContainer.text(arrayDare[2]);
  dareContainer.append(arrayDare[`<h2>${arrayDare[2]}</h2>`]);

}


var submit = $('.submit');
var secretContainer = $('.secretcontainer');
var secretPasscode = $('.secretpasscode');
submit.on('click', checkCode);

function checkCode() {

  if (secretPasscode.val()==="tidbitandbuttercup"){

      secretContainer.text(`You have cracked the code!`);
      secretContainer.append(`<img class="jsimage" src="/Users/apple/Desktop/truth_dare_game/assets/image_3.jpg">`);
  }
  else{
    secretContainer.text(`WRONG!!`);
    secretContainer.append(`<img class = "jsimage" src = "/Users/apple/Desktop/truth_dare_game/assets/image_2.jpg">`);
  }

}
