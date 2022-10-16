// 画像URL、十戒のメッセージ、犬種名、犬種の特徴の情報を持つオブジェクトの作成
class Commandment {
  constructor(url, message, breed, characteristic) {
    this.url = url;
    this.message = message;
    this.breed = breed;
    this.characteristic = characteristic;
  }
}

let commandments = [
  new Commandment(
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/27134558/Longhaired-Chihuahuas-sitting-side-by-side.jpg",
    "Press any button from 1~10. Learn important ideas for living with dogs.",
    "It is said that there are 700 to 800 breeds of dogs in the world today,",
    "Understand your dog's personality deeply and live happily!"
  ),
  new Commandment(
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/03/14150241/border-collie-agility-pole-jump.jpg",
    "My life is likely to last ten to fifteen years.Any separation from you will painful for me.Remember that before you buy me.",
    "BORDER-COLLIE (Herding Group)",
    "Sensitive and careful. They are responsible and intelligent. "
  ),
  new Commandment(
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11160348/Bernese-Mountain-Dog-laying-outdoors.jpg",
    "Give me time to understand what you want me.",
    "BERNESE MOUNTAIN DOG / (Working Group)",
    "In everyday life he is confident, careful, alert and also fearless. They are good natured and devoted to their owners and are gentle and confident with strangers. He is even and obedient."
  ),
  new Commandment(
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/02165956/Airedale-Terrier-standing-stacked-outdoors.jpg",
    "Please your trust in me-it's crucial to my well-being.",
    "AIREDALE TERRIER / (Terrier Group)",
    "His expression is sharp, his movements are agile, and his heart is always excited at any moment."
  ),
  new Commandment(
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/07143620/Longhaired-Dachshund-standing-outdoors.jpg",
    "Don't be angry at me for long and don't look me up as punishment.You have your work,your entertainment and your friends.I have only you.",
    "DACHSHUND / (Hound Group)",
    "Friendly by nature, calm, not fearful or aggressive.They are passionate, patient, have an excellent sense of smell, and hunt quickly."
  ),
  new Commandment(
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/26114711/Shiba-Inu-standing-in-profile-outdoors.jpg",
    "Talk to me sometimes.Even if I don't understand your words,I understand your voice when it's speaking to me.",
    "SHIBA / (Non-Sporting Group)",
    "Loyal, sensible and alert."
  ),
  new Commandment(
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/07200501/Basset-Hound-standing-in-the-garden.jpg",
    "Be aware that however you treat me, I'll never forget it.",
    "BASSET HOUND / (Hound Group)",
    "He is calm, not aggressive or timid. They are affectionate."
  ),
  new Commandment(
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/31182317/Pointer.4.jpg",
    "Remember before you hit me that I have teeth that could easily crush the bones of your hand but that I choose not to bite you.",
    "ENGLISH POINTER / (Sporting Group)",
    "It is aristocratic, agile and represents strength, endurance and speed."
  ),
  new Commandment(
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/05161950/Golden-Retriever-Slide-11.jpg",
    "Before you scold me for being uncooperative,obstinate or lazy.Ask yourself if something might be bothering me.Perhaps I'm not getting the right food,or I've been out in the sun too long or my heart is getting old and weak.",
    "GOLDEN RETRIEVER / (Sporting Group)",
    "Obedient, clever and with natural working ability. Kind, friendly and confident."
  ),
  new Commandment(
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/15110821/Borzoi-running-outdoors.jpg",
    "Take care of me when I get old : you,too,will grow old.",
    "BORZOI / (Hound Group)",
    "In everyday life, they have a quiet, balanced personality. When they see prey, they suddenly become excited. They have sharp vision and can see quite far. They are also very reactive."
  ),
  new Commandment(
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/25134717/Bichon-Frise-standing-on-a-stone-step-in-the-fall.jpg",
    'Go with me on difficult journeys. Never say, "I can\'t bear to watch it. "or" Let it happen in my absence." Everything is easier for me if you are there. Remember, I love you.',
    "BICHON FRISE / (Non-Sporting Group)",
    "He is not nervous or barking often and is very sociable with strangers and dogs. They are very adaptable and very friendly to their masters."
  ),
];

let defaultInfo = commandments[0];

// 外枠の作成
let target = document.getElementById("target");
let machineContainer = document.getElementById("machine-container");
machineContainer.classList.add("container", "machine-container");
let mainPanel = document.getElementById("main-panel");
mainPanel.classList.add("row");

// 左側の作成（各ブロックの枠の作成）
let leftPanel = document.getElementById("left-panel");
let imageArea = document.getElementById("image-area");
let messageArea = document.getElementById("message-area");

leftPanel.classList.add("col-md-6", "col-12", "d-flex", "row", "justify-content-around");
imageArea.classList.add(
  "col-8",
  "mt-3",
  "p-0",
  "d-flex",
  "flex-nowrap",
  "overflow-hiddens"
);
imageArea.setAttribute("data-index", "0");
messageArea.classList.add(
  "col-8",
  "m-2",
  "bg-light",
  "p-2",
  "d-flex",
  "align-items-center",
  "justify-content-around",
  "message-box",
  "flex-column"
);
let main = document.createElement("img");
let extra = document.createElement("img");
main.classList.add("main", "image-box", "expand-animation");
extra.classList.add("extra", "image-box", "deplete-animation");

// 左側画像の作成
let image = document.createElement("img");
image.classList.add("default-image-box");
image.src = defaultInfo.url;

// 左側 押されたボタン番号の作成
let pressedBtn = document.createElement("div");
pressedBtn.classList.add("pressed-btn");
pressedBtn.innerHTML = "Press the button";
let message = document.createElement("h3");
message.innerHTML = defaultInfo.message;

imageArea.append(image);
messageArea.append(pressedBtn, message);

// 右側の作成（各ブロックの枠の作成）
let rightPanel = document.getElementById("right-panel");
let titleArea = document.getElementById("title-area");
let descriptionArea = document.getElementById("description-area");
let btnArea = document.getElementById("btn-area");

rightPanel.classList.add("col-md-6", "col-12", "d-flex", "row", "justify-content-around");
titleArea.classList.add("col-12", "mt-3", "p-0");
descriptionArea.classList.add("col-12", "mt-3", "p-0");
btnArea.classList.add(
  "col-12",
  "m-2",
  "p-0",
  "d-flex",
  "justify-content-center",
  "flex-wrap"
  );
  
  // 右側 タイトルと画像の作成
  let titleImg = document.createElement("img");
  titleImg.classList.add("img-fluid", "title-img");
  titleImg.src = "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/05/17144429/Toy-Poodle-standing-in-the-grass.jpg";
  let titleMessage = document.createElement("h2");
  titleMessage.classList.add("title-message");
  titleMessage.innerHTML = "The Ten Commandments of Dog Ownership";
  titleArea.append(titleImg, titleMessage);

// 右側 犬種名エリアの作成
let breed = document.getElementById("breed");
breed.classList.add("col-12", "breed");
let breedLabel = document.getElementById("breed-label");
let breedInput = document.getElementById("breed-input");
breedLabel.classList.add("text-white");
breedLabel.innerHTML = "breed";
breedInput.value = defaultInfo.breed;

// 右側 犬種の特徴エリアの作成
let characteristic = document.getElementById("characteristic");
characteristic.classList.add("col-12", "characteristic");
let characteristicLabel = document.getElementById("characteristic-label");
let characteristicInput = document.getElementById("characteristic-input");
characteristicLabel.classList.add("text-white");
characteristicLabel.innerHTML = "characteristic";
characteristicInput.value = defaultInfo.characteristic;

// ボタンの作成
createButtons();
createBtnC();
createBtnE();


// 関数エリア
// 押されたボタンによってスライドを決定する関数
function slideJump(currentIndex, nextIndex) {
  currentIndex = parseInt(currentIndex);
  let currentElement = commandments[currentIndex].url;
  let nextElement = commandments[nextIndex].url;
  animateMain(currentElement, nextElement, currentIndex, nextIndex);
  imageArea.setAttribute("data-index", nextIndex);
}

// スライドショーを実行する関数
function animateMain(currentElement, nextElement, currentIndex, nextIndex) {
  main.innerHTML = "";
  main.src = nextElement;
  main.classList.add("expand-animation");

  extra.innerHTML = "";
  extra.src = currentElement;
  extra.classList.add("deplete-animation");

  imageArea.innerHTML = "";
  if (currentIndex <= nextIndex) {
    imageArea.append(main);
    imageArea.append(extra);
  } else {
    imageArea.append(extra);
    imageArea.append(main);
  }
}

// 犬種、その犬種の特徴、犬の十戒を表示する関数
function setDogInfo(index) {
  let dogInfo = commandments[index];
  breedInput.value = dogInfo.breed;
  characteristicInput.value = dogInfo.characteristic;
  message.innerHTML = dogInfo.message;
  if (index == 0) {
    pressedBtn.innerHTML = "Press the button";
  } else {
    pressedBtn.innerHTML = index;
  }
}

// ボタン1~10を作成する関数
function createButtons() {
  for (let i = 1; i <= 10; i++) {
    let currentBtn = document.createElement("button");
    currentBtn.classList.add("btn", "btn-primary", "text-white", "col-3", "m-2");
    currentBtn.innerHTML = i.toString();
    btnArea.append(currentBtn);

    currentBtn.addEventListener("click", function() {
      setDogInfo(i);
      slideJump(imageArea.getAttribute("data-index"), i);
    })
  }
}

// ボタンCを作成する関数
function createBtnC() {
  let btnC = document.createElement("button");
  btnC.classList.add("btn", "btn-primary", "text-white", "col-3", "m-2");
  btnC.innerHTML = "C";
  btnArea.append(btnC);

  btnC.addEventListener("click", function () {
    let nextIndex = 0;
    setDogInfo(nextIndex);
    slideJump(imageArea.getAttribute("data-index"), nextIndex);
  });
}

// ボタンEを作成する関数
function createBtnE() {
  let btnE = document.createElement("button");
  btnE.classList.add("btn", "btn-primary", "text-white", "col-3", "m-2");
  btnE.innerHTML = "E";
  btnArea.append(btnE);

  btnE.addEventListener("click", function () {
    alert("Sorry! I didn't use this button this time!");
  }); 
}
