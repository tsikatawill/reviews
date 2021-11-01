const reviews = [
  {
    id: 1,
    name: "Pilolo K. Ejuma",
    job: "CEO, Search & Resc. Corp.",
    img: "https://picsum.photos/id/1010/200",
    info: "Great service. I couldn't have asked to be served better. I totally recommend their services to anyone in need. They really do a great job",
  },
  {
    id: 2,
    name: "Fiifi Jonas",
    job: "CEO, Abusua Constructions",
    img: "https://picsum.photos/id/1012/200",
    info: "Wow! I am just mind blown about how customer focused their service render is. They really do a great job. Definitely request their services when in need.",
  },
  {
    id: 3,
    name: "Anna Debrah",
    job: "COO, Willman Tech",
    img: "https://picsum.photos/id/1011/200",
    info: "On point, on point, on point. Their accuracy in service delivery is just on point. They gave me exactly what I asked for, as if it were their own vision. I totally recommend their services to anyone in need.",
  },
  {
    id: 4,
    name: "Kweku Kweku",
    job: "Web Developer",
    img: "https://picsum.photos/id/1025/200",
    info: "I don't have much to say. Just get their services. You won't regret it.",
  },
];

const personImg = document.querySelector("#person-img");
const pName = document.querySelector(".name");
const position = document.querySelector(".position");
const info = document.querySelector(".info");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const randBtn = document.querySelector(".random");

reviews.forEach((review) => {
  pName.innerText = review.name;
  position.innerText = review.job;
  info.innerText = review.info;
});

let currentItem = 0;
let lastItem = reviews.length - 1;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

const showPerson = (person) => {
  const item = reviews[person];
  pName.innerText = item.name;
  position.innerText = item.job;
  info.innerText = item.info;
  personImg.src = item.img;
};

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > lastItem) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = lastItem;
  }
  showPerson(currentItem);
});

randBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
