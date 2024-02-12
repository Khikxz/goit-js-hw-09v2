const first = document.querySelector('[name = "delay"]');
const steps = document.querySelector('[name = "step"]');
const amount = document.querySelector('[name = "amount"]');
const button = document.querySelector('button');

var firstInput, stepsInput, amountInput;

function createPromise(position, delay) {
  return new Promise((resolve, reject) =>{
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });  
};

first.addEventListener("input", () => {
    firstInput = Number(first.value);
});

steps.addEventListener("input", () => {
    stepsInput = Number(steps.value);
});

amount.addEventListener("input", () => {
    amountInput = Number(amount.value);
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  for (let position = 1, delay = firstInput; position <= amountInput; position++, delay += stepsInput) {
    setTimeout(() => {
      createPromise(position, delay)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise then ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise then ${position} in ${delay}ms`);
      });
    }, delay, position, delay);
  }
});
