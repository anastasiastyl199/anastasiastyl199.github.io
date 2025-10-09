console.log('JavaScript is working!');

ballArray[prompt('Select the oddball [0-8]', 3)] = 1.2;

const ballArray = [1, 1, 1, 1, 1, 1, 1, 1, 1];
const ballList = document.getElementById("ball-list");
const weighing1Span = document.getElementById("weighing1");
const weighing2Span = document.getElementById("weighing2");

const oddballIndex = ballArray.findIndex(weight => weight > 1);

ballArray.forEach((weight, index) => {
  const ball = document.createElement("div");
  ball.className = "ball";
  ball.textContent = index;

  if (index === oddballIndex) {
    ball.classList.add("oddball");
  }

  ballList.appendChild(ball);
});

function weigh(groupA, groupB) {
  const sumA = groupA.reduce((acc, i) => acc + ballArray[i], 0);
  const sumB = groupB.reduce((acc, i) => acc + ballArray[i], 0);

  if (sumA > sumB) return "left";
  if (sumA < sumB) return "right";
  return "equal";
}

function findOddball() {
  const firstResult = weigh([0, 1, 2], [3, 4, 5]);
  weighing1Span.textContent = `Weighing 1: [0,1,2] vs [3,4,5] → ${firstResult}`;

  let foundIndex;

  if (firstResult === "equal") {
    const secondResult = weigh([6], [7]);
    weighing2Span.textContent = `Weighing 2: [6] vs [7] → ${secondResult}`;

    if (secondResult === "left") foundIndex = 6;
    else if (secondResult === "right") foundIndex = 7;
    else foundIndex = 8;
  } else if (firstResult === "left") {
    const secondResult = weigh([0], [1]);
    weighing2Span.textContent = `Weighing 2: [0] vs [1] → ${secondResult}`;

    if (secondResult === "left") foundIndex = 0;
    else if (secondResult === "right") foundIndex = 1;
    else foundIndex = 2;
  } else {
    const secondResult = weigh([3], [4]);
    weighing2Span.textContent = `Weighing 2: [3] vs [4] → ${secondResult}`;

    if (secondResult === "left") foundIndex = 3;
    else if (secondResult === "right") foundIndex = 4;
    else foundIndex = 5;
  }

  const balls = document.querySelectorAll(".ball");
  balls[foundIndex].classList.add("found");

  console.log(`Oddball found: Ball ${foundIndex}`);
}

findOddball();
