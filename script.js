const bulb1 = document.querySelector("#lightbulb1");
const bulb2 = document.querySelector("#lightbulb2");
const bulb3 = document.querySelector("#lightbulb3");
const h3 = document.querySelector(".subtitle");
let count = 0; 

const updateCounter = () => {
    h3.innerHTML = `You've clicked the lights ${count} times`;
};

const toggleBulb = (bulb) => {
    bulb.classList.toggle("active");
};

bulb1.addEventListener("click", function() {
    count++;
    updateCounter();
    toggleBulb(this);
});

bulb2.addEventListener("click", function() {
    count++;
    updateCounter();
    toggleBulb(this);
});

bulb3.addEventListener("click", function() {
    count++;
    updateCounter();
    toggleBulb(this);
});
