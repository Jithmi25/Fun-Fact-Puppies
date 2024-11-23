let slide = document.querySelectorAll('.slide');
var current = 0;

function cls(){
    for(let i = 0; i < slide.length; i++){
          slide[i].style.display = 'none';
    }
}

function next(){
    cls();
    if(current === slide.length-1) current = -1;
    current++;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function(){
        x+=0.1;
        slide[current].style.opacity = x;
        if(x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);

}

function prev(){
    cls();
    if(current === 0) current = slide.length;
    current--;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function(){
        x+=0.1;
        slide[current].style.opacity = x;
        if(x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);

}

function start(){
    cls();
    slide[current].style.display = 'block';
}
start();
const facts1 = [
    "Puppies are born without teeth and grow them at 3 weeks old.",
    "Puppies are born unable to hear and develop hearing by day 10.",
    'Most puppies are born with their eyes closed and only open them after 10-14 days.',
    "Puppies grow twice as fast as adult dogs.",
    "Puppies experience rapid growth, often doubling their weight within the first week of life.",
    "Puppies' sense of smell is 10,000 times better than humans.",
    "A puppy's sense of smell is 10,000 times stronger than a human's!",
    "Dalmatian puppies are born completely white.",
     "Puppies spend 15-20 hours a day sleeping during their first weeks.", 
];

const factDisplay1 = document.getElementById('fact-display1');
const generateButton1 = document.getElementById('generate-fact1');

generateButton1.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts1.length);
    factDisplay1.textContent = facts1[randomIndex];
});

const facts2 = [
    "The word “puppy” comes from the French word poupée, meaning “doll” or “toy.”",
    "Puppies can recognize their mother's smell just days after birth.",
    "Puppies often wag their tails to show excitement",
     "uppies experience rapid growth, often doubling their weight within the first week of life.",
    "Puppies use their tails to communicate with their littermates.",
     "Puppies dream about chasing their tails every night.",
    "In ancient times, puppies were gifted as symbols of loyalty.",
];

const factDisplay2 = document.getElementById('fact-display2');
const generateButton2 = document.getElementById('generate-fact2');

generateButton2.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts2.length);
    factDisplay2.textContent = facts2[randomIndex];
});


