const modalAlla = [
  {
    id: 1,
    alla_img: (src = " CARD_IMG/card_alla1.jpg"),
    card_number_alla: "1 / 8",
    card_part_alla: "Фрагмент с репетиции балета 'Пиковая дама' (Роль Лизы)",
  },
  {
    id: 2,
    alla_img: (src = "CARD_IMG/card_alla2.jpg"),
    card_number_alla: "2 / 8",
    card_part_alla:
      "Сцена из номера 'Полет Тальони', хореография Леонида Якобсона ",
  },
  {
    id: 3,
    alla_img: (src = "CARD_IMG/card_alla3.jpg"),
    card_number_alla: "3 / 8",
    card_part_alla: "Лебединое озеро в роли 'Одетты-Одиллии'",
  },
  {
    id: 4,
    alla_img: (src = "CARD_IMG/card_alla4.webp"),
    card_number_alla: "4 / 8",
    card_part_alla: "Сцена из балета 'Жизель' в роли Жизели",
  },
  {
    id: 5,
    alla_img: (src = "CARD_IMG/card_alla5.jpg"),
    card_number_alla: "5 / 8",
    card_part_alla: "Репетиционный момент",
  },
  {
    id: 6,
    alla_img: (src = "CARD_IMG/card_alla6.jpg"),
    card_number_alla: "6 / 8",
    card_part_alla: "Балет 'Щелкунчик' в роли Маши",
  },
  {
    id: 7,
    alla_img: (src = "CARD_IMG/card_alla7.jpg"),
    card_number_alla: "7 / 8",
    card_part_alla: "Балет 'Жизель' в роли Жизели",
  },
  {
    id: 8,
    alla_img: (src = "CARD_IMG/card_alla8.jpg"),
    card_number_alla: "8 / 8",
    card_part_alla: "Балет 'Дон Кихот' в роли Китри",
  },
];

const alla_img = document.getElementById("alla_img");
const card_number_alla = document.getElementById("card_number_alla");
const card_part_alla = document.getElementById("card_part_alla");

const btnLeftAlla = document.querySelector(".btn-left-alla");
const btnRightAlla = document.querySelector(".btn-right-alla");

let collectionAlla = 0;

window.addEventListener("DOMContentLoaded", function () {
  showCardAlla();
});

function showCardAlla() {
  const currentAlla = modalAlla[collectionAlla];
  alla_img.src = currentAlla.alla_img;
  card_number_alla.textContent = currentAlla.card_number_alla;
  card_part_alla.textContent = currentAlla.card_part_alla;
}

btnRightAlla.addEventListener("click", function () {
  collectionAlla++;
  if (collectionAlla > modalAlla.length - 1) {
    collectionAlla = 0;
  }
  showCardAlla();
});
btnLeftAlla.addEventListener("click", function () {
  collectionAlla--;
  if (collectionAlla < 0) {
    collectionAlla = modalAlla.length - 1;
  }
  showCardAlla();
});

const modalSveta = [
  {
    id: 1,
    sveta_img: (src = "CARD_IMG/card_sveta1.jpg"),
    card_number_sveta: "1 / 5",
    card_part_sveta: "asdjksdhjkhs",
  },
  {
    id: 2,
    sveta_img: (src = "CARD_IMG/card_sveta2.jpg"),
    card_number_sveta: "2 / 5",
    card_part_sveta: "asdjjshakhs",
  },
  {
    id: 3,
    sveta_img: (src = "CARD_IMG/card_sveta3.jpg"),
    card_number_sveta: "3 / 5",
    card_part_sveta: "",
  },
  {
    id: 4,
    sveta_img: (src = "CARD_IMG/card_sveta4.jpg"),
    card_number_sveta: "4 / 5",
    card_part_sveta: "",
  },
  {
    id: 5,
    sveta_img: (src = "CARD_IMG/card_sveta5.jpg"),
    card_number_sveta: "5 / 5",
    card_part_sveta: "",
  },
];

const sveta_img = document.getElementById("sveta_img");
const card_number_sveta = document.getElementById("card_number_sveta");
const card_part_sveta = document.getElementById("card_part_sveta");

const btnLeftSveta = document.querySelector(".btn-left-sveta");
const btnRightSveta = document.querySelector(".btn-right-sveta");

let collectionSveta = 0;
window.addEventListener("DOMContentLoaded", function () {
  showCardSveta();
});

function showCardSveta() {
  const currentSveta = modalSveta[collectionSveta];
  sveta_img.src = currentSveta.sveta_img;
  card_number_sveta.textContent = currentSveta.card_number_sveta;
  card_part_sveta.textContent = currentSveta.card_part_sveta;
}

btnRightSveta.addEventListener("click", function () {
  collectionSveta++;
  if (collectionSveta > modalSveta.length - 1) {
    collectionSveta = 0;
  }
  showCardSveta();
});
btnLeftSveta.addEventListener("click", function () {
  collectionSveta--;
  if (collectionSveta < 0) {
    collectionSveta = modalSveta.length - 1;
  }
  showCardSveta();
});

const modalElena = [
  {
    id: 1,
    elena_img: (src = "CARD_IMG/card_elena0.jpg"),
    card_number_elena: "1 / 7",
    card_part_elena: "Балет 'Спящая красавица' в роли принцессы Авроры",
  },
  {
    id: 2,
    elena_img: (src = "CARD_IMG/card_elena1.jpg"),
    card_number_elena: "2 / 7",
    card_part_elena: "В роли Китри из 1-го акта балета 'Дон Кихот'",
  },
  {
    id: 3,
    elena_img: (src = "CARD_IMG/card_elena2.jpg"),
    card_number_elena: "3 / 7",
    card_part_elena: "Балет 'Щелкунчик' в роли Маши",
  },
  {
    id: 4,
    elena_img: (src = "CARD_IMG/card_elena3.jpg"),
    card_number_elena: "4 / 7",
    card_part_elena:
      "Сцена из балета 'Спящая красавица' Адажио Авроры и 4-ки кавалеров",
  },
  {
    id: 5,
    elena_img: (src = "CARD_IMG/card_elena4.webp"),
    card_number_elena: "5 / 7",
    card_part_elena: " Па де де из балета 'Лебединое озеро' в образе 'Одиллии'",
  },
  {
    id: 6,
    elena_img: (src = "CARD_IMG/card_elena5.jpg"),
    card_number_elena: "6 / 7",
    card_part_elena:
      "'Па-де-катр' из спектакля Вне времени хореография Леонида Якобсона",
  },
  {
    id: 7,
    elena_img: (src = "CARD_IMG/card_elena7.jpg"),
    card_number_elena: "7 / 7",
    card_part_elena: "Балет 'Спящая красавица' в роли принцессы Авроры",
  },
];

const elena_img = document.getElementById("elena_img");
const card_number_elena = document.getElementById("card_number_elena");
const card_part_elena = document.getElementById("card_part_elena");

let collectionElena = 0;

window.addEventListener("DOMContentLoaded", function () {
  showCardElena();
});

function showCardElena() {
  const currentElena = modalElena[collectionElena];
  elena_img.src = currentElena.elena_img;
  card_number_elena.textContent = currentElena.card_number_elena;
  card_part_elena.textContent = currentElena.card_part_elena;
}

const btnRightElena = document.querySelector(".btn-right-elena");
const btnLeftElena = document.querySelector(".btn-left-elena");

btnRightElena.addEventListener("click", function () {
  collectionElena++;
  if (collectionElena > modalElena.length - 1) {
    collectionElena = 0;
  }
  showCardElena();
});
btnLeftElena.addEventListener("click", function () {
  collectionElena--;
  if (collectionElena < 0) {
    collectionElena = modalElena.length - 1;
  }
  showCardElena();
});

const modalStepan = [
  {
    id: 1,
    stepan_img: "CARD_IMG/card_stepan1.jpg",
    card_number_stepan: "1 / 6",
    card_part_stepan: "",
  },
  {
    id: 2,
    stepan_img: "CARD_IMG/card_stepan2.jpg",
    card_number_stepan: "2 / 6",
    card_part_stepan: "",
  },
  {
    id: 3,
    stepan_img: "CARD_IMG/card_stepan3.png",
    card_number_stepan: "3 / 6",
    card_part_stepan: "",
  },
  {
    id: 4,
    stepan_img: "CARD_IMG/card_stepan4.jpg",
    card_number_stepan: "4 / 6",
    card_part_stepan: "",
  },
  {
    id: 5,
    stepan_img: "CARD_IMG/card_stepan5.jpg",
    card_number_stepan: "5 / 6",
    card_part_stepan: "",
  },
  {
    id: 6,
    stepan_img: "CARD_IMG/card_stepan6.jpg",
    card_number_stepan: "6 / 6",
    card_part_stepan: "",
  },
];

const stepan_img = document.getElementById("stepan_img");
const card_number_stepan = document.getElementById("card_number_stepan");
const card_part_stepan = document.getElementById("card_part_stepan");

let collectionStepan = 0;
window.addEventListener("DOMContentLoaded", function () {
  showCardStepan();
});

function showCardStepan() {
  const currentStepan = modalStepan[collectionStepan];
  stepan_img.src = currentStepan.stepan_img;
  card_number_stepan.textContent = currentStepan.card_number_stepan;
  card_part_stepan.textContent = currentStepan.card_part_stepan;
}
const btnRightStepan = document.querySelector(".btn-right-stepan");
const btnLeftStepan = document.querySelector(".btn-left-stepan");

btnRightStepan.addEventListener("click", function () {
  collectionStepan++;
  if (collectionStepan > modalStepan.length - 1) {
    collectionStepan = 0;
  }
  showCardStepan();
});
btnLeftStepan.addEventListener("click", function () {
  collectionStepan--;
  if (collectionStepan < 0) {
    collectionStepan = modalStepan.length;
  }
  showCardStepan();
});

const modalDenis = [
  {
    id: 1,
    denis_img: "CARD_IMG/card_denis1.jpg",
    card_number_denis: "1 /7",
    card_part_denis: "В роли 'Эспада' балет 'Дон Кихот'",
  },
  {
    id: 2,
    denis_img: "CARD_IMG/card_denis2.jpg",
    card_number_denis: "2 /7",
    card_part_denis: "",
  },
  {
    id: 3,
    denis_img: "CARD_IMG/card_denis3.webp",
    card_number_denis: "3 /7",
    card_part_denis: "",
  },
  {
    id: 4,
    denis_img: "CARD_IMG/card_denis4.jpg",
    card_number_denis: "4 /7",
    card_part_denis: "",
  },
  {
    id: 5,
    denis_img: "CARD_IMG/card_denis5.jpg",
    card_number_denis: "5 /7",
    card_part_denis: "",
  },
  {
    id: 6,
    denis_img: "CARD_IMG/card_denis6.jpg",
    card_number_denis: "6 /7",
    card_part_denis: "",
  },
  {
    id: 7,
    denis_img: "CARD_IMG/card_denis7.jpg",
    card_number_denis: "7 /7",
    card_part_denis: "",
  },
]

const denis_img = document.getElementById("denis_img");
const card_number_denis = document.getElementById("card_number_denis");
const card_part_denis = document.getElementById("card_part_denis");

window.addEventListener("DOMContentLoaded", function() {
  showCardDenis()
})

let collectionDenis = 0;

function showCardDenis () {
  const currentDenis = modalDenis[collectionDenis]
  denis_img.src = currentDenis.denis_img
  card_number_denis.textContent = currentDenis.card_number_denis
  card_part_denis.textContent = currentDenis.card_part_denis
}

const btnRightDenis = document.querySelector(".btn-right-denis");
const btnLeftDenis = document.querySelector(".btn-left-denis");

btnRightDenis.addEventListener("click", function() {
  collectionDenis++;
  if(collectionDenis > modalDenis.length - 1) {
    collectionDenis = 0;
  }
  showCardDenis()
})
btnLeftDenis.addEventListener("click", function() {
  collectionDenis--;
  if(collectionDenis < 0) {
    collectionDenis = modalDenis.length - 1
  }
  showCardDenis()
})

const modalAndrey = [
  {
    id: 1,
    andrey_img: "CARD_IMG/card_andrey1.jpg",
    card_number_andrey: "1 / 8",
    card_part_andrey: "",
  },
  {
    id: 2,
    andrey_img: "CARD_IMG/card_andrey2.jpg",
    card_number_andrey: "2 / 8",
    card_part_andrey: "",
  },
  {
    id: 3,
    andrey_img: "CARD_IMG/card_andrey3.webp",
    card_number_andrey: "3 / 8",
    card_part_andrey: "",
  },
  {
    id: 4,
    andrey_img: "CARD_IMG/card_andrey4.jpg",
    card_number_andrey: "4 / 8",
    card_part_andrey: "",
  },
  {
    id: 5,
    andrey_img: "CARD_IMG/card_andrey5.jpg",
    card_number_andrey: "5 / 8",
    card_part_andrey: "",
  },
  {
    id: 6,
    andrey_img: "CARD_IMG/card_andrey6.png",
    card_number_andrey: "6 / 8",
    card_part_andrey: "",
  },
  {
    id: 7,
    andrey_img: "CARD_IMG/card_andrey7.jpg",
    card_number_andrey: "7 / 8",
    card_part_andrey: "",
  },
  {
    id: 8,
    andrey_img: "CARD_IMG/card_andrey8.jpg",
    card_number_andrey: "8 / 8",
    card_part_andrey: "",
  },
]

const andrey_img = document.getElementById("andrey_img");
const card_number_andrey = document.getElementById("card_number_andrey");
const card_part_andrey = document.getElementById("card_part_andrey");

window.addEventListener("DOMContentLoaded", function(){
  showCardAndrey()
})

let collectionAndrey = 0;

function showCardAndrey () {
  const currentAndrey = modalAndrey[collectionAndrey]
  andrey_img.src = currentAndrey.andrey_img
  card_number_andrey.textContent = currentAndrey.card_number_andrey
  card_part_andrey.textContent = currentAndrey.card_part_andrey
}

const btnRightAndrey = document.querySelector(".btn-right-andrey");
const btnLeftAndrey = document.querySelector(".btn-left-andrey");

btnRightAndrey.addEventListener("click", function() {
  collectionAndrey++;
  if(collectionAndrey > modalAndrey.length - 1) {
    collectionAndrey = 0;
  }
  showCardAndrey()
})
btnLeftAndrey.addEventListener("click", function(){
  collectionAndrey--;
  if(collectionAndrey < 0) {
    collectionAndrey = modalAndrey.length - 1
  }
  showCardAndrey()
})

const modalAnna = [
  {
    id: 1,
    anna_img: "CARD_IMG/card_anna1.jpg",
    card_number_anna: "1 / 8",
    card_part_anna: "В роли Маши из балета 'Щелкунчик'"
  },
  {
    id: 2,
    anna_img: "CARD_IMG/card_anna2.jpg",
    card_number_anna: "2 / 8",
    card_part_anna: ""
  },
  {
    id: 3,
    anna_img: "CARD_IMG/card_anna3.jpg",
    card_number_anna: "3 / 8",
    card_part_anna: ""
  },
  {
    id: 4,
    anna_img: "CARD_IMG/card_anna4.jpg",
    card_number_anna: "4 / 8",
    card_part_anna: ""
  },
  {
    id: 5,
    anna_img: "CARD_IMG/card_anna5.jpg",
    card_number_anna: "5 / 8",
    card_part_anna: ""
  },
  {
    id: 6,
    anna_img: "CARD_IMG/card_anna6.jpg",
    card_number_anna: "6 / 8",
    card_part_anna: ""
  },
  {
    id: 7,
    anna_img: "CARD_IMG/card_anna7.jpg",
    card_number_anna: "7 / 8",
    card_part_anna: ""
  },
  {
    id: 8,
    anna_img: "CARD_IMG/card_anna8.jpg",
    card_number_anna: "8 / 8",
    card_part_anna: ""
  },
]
const anna_img = document.getElementById("anna_img");
const card_number_anna = document.getElementById("card_number_anna");
const card_part_anna = document.getElementById("card_part_anna");

window.addEventListener("DOMContentLoaded", function(){
  showCardAnna()
})

let collectionAnna = 0;

function showCardAnna () {
  const currentAnna = modalAnna[collectionAnna]
  anna_img.src = currentAnna.anna_img
  card_number_anna.textContent = currentAnna.card_number_anna
  card_part_anna.textContent = currentAnna.card_part_anna
}

const btnRightAnna = document.querySelector(".btn-right-anna");
const btnLeftAnna = document.querySelector(".btn-left-anna");

btnRightAnna.addEventListener("click", function(){
  collectionAnna++;
  if(collectionAnna > modalAnna.length - 1) {
    collectionAnna = 0;
  }
  showCardAnna()
})
btnLeftAnna.addEventListener("click", function(){
  collectionAnna--;
  if(collectionAnna < 0) {
    collectionAnna = modalAnna.length - 1;
  }
  showCardAnna()
})


const modalAnastasia = [
  {
    id: 1,
    anastasia_img: "CARD_IMG/card_anastasia1.jpg",
    card_number_anastasia: "1 / 7",
    card_part_anastasia: "", 
  },
  {
    id: 2,
    anastasia_img: "CARD_IMG/card_anastasia2.jpg",
    card_number_anastasia: "2 / 7",
    card_part_anastasia: "", 
  },
  {
    id: 3,
    anastasia_img: "CARD_IMG/card_anastasia3.jpg",
    card_number_anastasia: "3 / 7",
    card_part_anastasia: "", 
  },
  {
    id: 4,
    anastasia_img: "CARD_IMG/card_anastasia4.jpg",
    card_number_anastasia: "4 / 7",
    card_part_anastasia: "", 
  },
  {
    id: 5,
    anastasia_img: "CARD_IMG/card_anastasia5.jpg",
    card_number_anastasia: "5 / 7",
    card_part_anastasia: "", 
  },
  {
    id: 6,
    anastasia_img: "CARD_IMG/card_anastasia6.jpg",
    card_number_anastasia: "6 / 7",
    card_part_anastasia: "", 
  },
  {
    id: 7,
    anastasia_img: "CARD_IMG/card_anastasia7.jpg",
    card_number_anastasia: "7 / 7",
    card_part_anastasia: "", 
  },
]
const anastasia_img = document.getElementById("anastasia_img");
const card_number_anastasia = document.getElementById("card_number_anastasia");
const card_part_anastasia = document.getElementById("card_part_anastasia");

window.addEventListener("DOMContentLoaded", function(){
  showCardAnastasia()
})
let collectionAnastasia = 0;

function showCardAnastasia () {
  const currentAnastasia = modalAnastasia[collectionAnastasia]
  anastasia_img.src = currentAnastasia.anastasia_img
  card_number_anastasia.textContent = currentAnastasia.card_number_anastasia
  card_part_anastasia.textContent = currentAnastasia.card_part_anastasia
}

const btnRightAnastasia = document.querySelector(".btn-right-anastasia");
const btnLeftAnastasia = document.querySelector(".btn-left-anastasia");

btnRightAnastasia.addEventListener("click", function(){
  collectionAnastasia++;
  if(collectionAnastasia > modalAnastasia.length - 1){
    collectionAnastasia = 0;
  }
  showCardAnastasia()
})
btnLeftAnastasia.addEventListener("click", function(){
  collectionAnastasia--;
  if(collectionAnastasia < 0) {
    collectionAnastasia = modalAnastasia.length - 1;
  }
  showCardAnastasia()
})

const modalMaria = [
  {
    id: 1,
    maria_img: "CARD_IMG/card_maria1.jpg",
    card_number_maria: "1 / 5",
    card_part_maria: "",
  },
  {
    id: 2,
    maria_img: "CARD_IMG/card_maria2.jpg",
    card_number_maria: "2 / 5",
    card_part_maria: "",
  },
  {
    id: 3,
    maria_img: "CARD_IMG/card_maria3.jpg",
    card_number_maria: "3 / 5",
    card_part_maria: "",
  },
  {
    id: 4,
    maria_img: "CARD_IMG/card_maria4.jpg",
    card_number_maria: "4 / 5",
    card_part_maria: "",
  },
  {
    id: 5,
    maria_img: "CARD_IMG/card_maria5.jpg",
    card_number_maria: "5 / 5",
    card_part_maria: "",
  },
]

const maria_img = document.getElementById("maria_img");
const card_number_maria = document.getElementById("card_number_maria");
const card_part_maria = document.getElementById("card_part_maria");

window.addEventListener("DOMContentLoaded", function(){
  showCardMaria()
});

let collectionMaria = 0;

function showCardMaria () {
  const currentMaria = modalMaria[collectionMaria]
  maria_img.src = currentMaria.maria_img
  card_number_maria.textContent = currentMaria.card_number_maria
  card_part_maria.textContent = currentMaria.card_part_maria
} 

const btnRightMaria = document.querySelector(".btn-right-maria");
const btnLeftMaria = document.querySelector(".btn-left-maria");

btnRightMaria.addEventListener("click", function(){
  collectionMaria++;
  if(collectionMaria > modalMaria.length - 1) {
    collectionMaria = 0;
  }
  showCardMaria()
})
btnLeftMaria.addEventListener("click", function(){
  collectionMaria--;
  if(collectionMaria < 0) {
    collectionMaria = modalMaria.length- 1
  };
  showCardMaria()
})

const modalKirill = [
  {
    id: 1,
    kirill_img: "CARD_IMG/card_kirill1.jpg",
    card_number_kirill: "1 /5",
    card_part_kirill: "",
  },
  {
    id: 2,
    kirill_img: "CARD_IMG/card_kirill2.jpg",
    card_number_kirill: "2 /5",
    card_part_kirill: "",
  },
  {
    id: 3,
    kirill_img: "CARD_IMG/card_kirill3.jpg",
    card_number_kirill: "3 /5",
    card_part_kirill: "",
  },
  {
    id: 4,
    kirill_img: "CARD_IMG/card_kirill4.jpg",
    card_number_kirill: "4 /5",
    card_part_kirill: "",
  },
  {
    id: 5,
    kirill_img: "CARD_IMG/card_kirill5.jpg",
    card_number_kirill: "5 /5",
    card_part_kirill: "",
  },

]

const kirill_img = document.getElementById("kirill_img");
const card_number_kirill = document.getElementById("card_number_kirill");
const card_part_kirill = document.getElementById("card_part_kirill");

window.addEventListener("DOMContentLoaded", function(){
  showCardKirill()
})

let collectionKirill = 0;

function showCardKirill (){
  const currentKirill = modalKirill[collectionKirill]
  kirill_img.src = currentKirill.kirill_img
  card_number_kirill.textContent = currentKirill.card_number_kirill
  card_part_kirill.textContent = currentKirill.card_part_kirill
}

const btnRightKirill = document.querySelector(".btn-right-kirill");
const btnLeftKirill = document.querySelector(".btn-left-kirill");

btnRightKirill.addEventListener("click", function(){
  collectionKirill++;
  if(collectionKirill > modalKirill.length - 1) {
    collectionKirill = 0;
  }
  showCardKirill()
})
btnLeftKirill.addEventListener("click", function(){
  collectionKirill--;
  if(collectionKirill < 0) {
    collectionKirill = modalKirill.length - 1
  }
  showCardKirill()
})

const modalSergey = [
  {
    id: 1,
    sergey_img: "CARD_IMG/card_sergey1.jpg",
    card_number_sergey: "1 / 5",
    card_part_sergey: "",
  },
  {
    id: 2,
    sergey_img: "CARD_IMG/card_sergey2.jpg",
    card_number_sergey: "2 / 5",
    card_part_sergey: "",
  },
  {
    id: 3,
    sergey_img: "CARD_IMG/card_sergey3.jpg",
    card_number_sergey: "3 / 5",
    card_part_sergey: "",
  },
  {
    id: 4,
    sergey_img: "CARD_IMG/card_sergey4.jpg",
    card_number_sergey: "4 / 5",
    card_part_sergey: "",
  },
  {
    id: 5,
    sergey_img: "CARD_IMG/card_sergey5.jpg",
    card_number_sergey: "5 / 5",
    card_part_sergey: "",
  },
]

const sergey_img = document.getElementById("sergey_img");
const card_number_sergey = document.getElementById("card_number_sergey");
const card_part_sergey = document.getElementById("card_part_sergey");

window.addEventListener("DOMContentLoaded", function(){
  showCardSergey()
});

let collectionSergey = 0;

function showCardSergey() {
  const currentSergey = modalSergey[collectionSergey]
  sergey_img.src = currentSergey.sergey_img
  card_number_sergey.textContent = currentSergey.card_number_sergey
  card_part_sergey.textContent = currentSergey.card_part_sergey
}

const btnRightSergey = document.querySelector(".btn-right-sergey");
const btnLeftSergey = document.querySelector(".btn-left-sergey");

btnRightSergey.addEventListener("click", function(){
  collectionSergey++;
  if(collectionSergey > modalSergey.length - 1) {
    collectionSergey = 0;
  }
  showCardSergey()
});

btnLeftSergey.addEventListener("click", function(){
  collectionSergey--;
  if(collectionSergey < 0) {
    collectionSergey = modalSergey.length - 1
  }
  showCardSergey()
})