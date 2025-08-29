// first task
document
  .getElementById("call-emergency")
  .addEventListener("click", function () {
    const callSuccess = coinCount("National Emergency", "999");
    if (!callSuccess) return;
    const historyData = {
      name: "National Emergency",
      number: "999",
      date: new Date().toLocaleTimeString(),
    };
    callHistory.push(historyData);
    const historyBox = document.getElementById("history-box");

    const div = document.createElement("div");
    div.innerHTML = `<div
            class="flex justify-between items-center mt-3 bg-gray-50 p-4 rounded-sm"
          >
            <div id="call-history">
              <h1 class="font-bold">${historyData.name}</h1>
              <h5 class="text-gray-500">${historyData.number}</h5>
            </div>
            <div id="time">
              <h6>${historyData.date}</h6>
            </div>
          </div>`;

    historyBox.appendChild(div);
  });
document.getElementById("call-police").addEventListener("click", function () {
  const callSuccess = coinCount("National Emergency", "999");
  if (!callSuccess) return;
  const historyData = {
    name: "Police Helpline",
    number: "999",
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(historyData);
  const historyBox = document.getElementById("history-box");

  const div = document.createElement("div");
  div.innerHTML = `<div
            class="flex justify-between items-center mt-3 bg-gray-50 p-4 rounded-sm"
          >
            <div id="call-history">
              <h1 class="font-bold">${historyData.name}</h1>
              <h5 class="text-gray-500">${historyData.number}</h5>
            </div>
            <div id="time">
              <h6>${historyData.date}</h6>
            </div>
          </div> `;

  historyBox.appendChild(div);
});
document.getElementById("call-fire").addEventListener("click", function () {
  const callSuccess = coinCount("National Emergency", "999");
  if (!callSuccess) return;
  const historyData = {
    name: "Fire Service",
    number: "999",
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(historyData);

  const historyBox = document.getElementById("history-box");

  const div = document.createElement("div");
  div.innerHTML = `<div
            class="flex justify-between items-center mt-3 bg-gray-50 p-4 rounded-sm"
          >
            <div id="call-history">
              <h1 class="font-bold">${historyData.name}</h1>
              <h5 class="text-gray-500">${historyData.number}</h5>
            </div>
            <div id="time">
              <h6>${historyData.date}</h6>
            </div>
          </div> `;

  historyBox.appendChild(div);
});
document
  .getElementById("call-ambulance")
  .addEventListener("click", function () {
    const callSuccess = coinCount("National Emergency", "999");
    if (!callSuccess) return;
    const historyData = {
      name: "Ambulance Service",
      number: "1994-999999",
      date: new Date().toLocaleTimeString(),
    };
    callHistory.push(historyData);

    const historyBox = document.getElementById("history-box");

    const div = document.createElement("div");
    div.innerHTML = `<div
            class="flex justify-between items-center mt-3 bg-gray-50 p-4 rounded-sm"
          >
            <div id="call-history">
              <h1 class="font-bold">${historyData.name}</h1>
              <h5 class="text-gray-500">${historyData.number}</h5>
            </div>
            <div id="time">
              <h6>${historyData.date}</h6>
            </div>
          </div> `;

    historyBox.appendChild(div);
  });
document
  .getElementById("call-women-child")
  .addEventListener("click", function () {
    const callSuccess = coinCount("National Emergency", "999");
    if (!callSuccess) return;
    const historyData = {
      name: "Women & Child",
      number: "109",
      date: new Date().toLocaleTimeString(),
    };
    callHistory.push(historyData);

    const historyBox = document.getElementById("history-box");

    const div = document.createElement("div");
    div.innerHTML = `<div
            class="flex justify-between items-center mt-3 bg-gray-50 p-4 rounded-sm"
          >
            <div id="call-history">
              <h1 class="font-bold">${historyData.name}</h1>
              <h5 class="text-gray-500">${historyData.number}</h5>
            </div>
            <div id="time">
              <h6>${historyData.date}</h6>
            </div>
          </div> `;

    historyBox.appendChild(div);
  });
document
  .getElementById("call-anti-corruption")
  .addEventListener("click", function () {
    const callSuccess = coinCount("National Emergency", "999");
    if (!callSuccess) return;
    const historyData = {
      name: "Anti-Corruption",
      number: "106",
      date: new Date().toLocaleTimeString(),
    };
    callHistory.push(historyData);

    const historyBox = document.getElementById("history-box");

    const div = document.createElement("div");
    div.innerHTML = `<div
            class="flex justify-between items-center mt-3 bg-gray-50 p-4 rounded-sm"
          >
            <div id="call-history">
              <h1 class="font-bold">${historyData.name}</h1>
              <h5 class="text-gray-500">${historyData.number}</h5>
            </div>
            <div id="time">
              <h6>${historyData.date}</h6>
            </div>
          </div> `;

    historyBox.appendChild(div);
  });
document
  .getElementById("call-electricity")
  .addEventListener("click", function () {
    const callSuccess = coinCount("National Emergency", "999");
    if (!callSuccess) return;
    const historyData = {
      name: "Electricity Helpline",
      number: "16216",
      date: new Date().toLocaleTimeString(),
    };
    callHistory.push(historyData);

    const historyBox = document.getElementById("history-box");

    const div = document.createElement("div");
    div.innerHTML = `<div
            class="flex justify-between items-center mt-3 bg-gray-50 p-4 rounded-sm"
          >
            <div id="call-history">
              <h1 class="font-bold">${historyData.name}</h1>
              <h5 class="text-gray-500">${historyData.number}</h5>
            </div>
            <div id="time">
              <h6>${historyData.date}</h6>
            </div>
          </div> `;

    historyBox.appendChild(div);
  });
document.getElementById("call-brac").addEventListener("click", function () {
  const callSuccess = coinCount("National Emergency", "999");
  if (!callSuccess) return;
  const historyData = {
    name: "Brac",
    number: "16445",
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(historyData);

  const historyBox = document.getElementById("history-box");

  const div = document.createElement("div");
  div.innerHTML = `<div
            class="flex justify-between items-center mt-3 bg-gray-50 p-4 rounded-sm"
          >
            <div id="call-history">
              <h1 class="font-bold">${historyData.name}</h1>
              <h5 class="text-gray-500">${historyData.number}</h5>
            </div>
            <div id="time">
              <h6>${historyData.date}</h6>
            </div>
          </div> `;

  historyBox.appendChild(div);
});
document.getElementById("call-railway").addEventListener("click", function () {
  const callSuccess = coinCount("National Emergency", "999");
  if (!callSuccess) return;
  const historyData = {
    name: "Bangladesh Railway",
    number: "163",
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(historyData);

  const historyBox = document.getElementById("history-box");

  const div = document.createElement("div");
  div.innerHTML = `<div
            class="flex justify-between items-center mt-3 bg-gray-50 p-4 rounded-sm"
          >
            <div id="call-history">
              <h1 class="font-bold">${historyData.name}</h1>
              <h5 class="text-gray-500">${historyData.number}</h5>
            </div>
            <div id="time">
              <h6>${historyData.date}</h6>
            </div>
          </div> `;

  historyBox.appendChild(div);
});
// second task
let coins = 100;
function coinCount(service, number) {
  if (coins >= 20) {
    coins = coins - 20;
    document.getElementById("coins").innerText = coins;
    alert("Calling " + service + " at " + number + "\nCoins Left: " + coins);
    return true;
  } else {
    alert("Not Enough Coins To Make The Call!");
    return false;
  }
}

const callHistory = [];
// clear history
document.getElementById("clear-btn").addEventListener("click", function () {
  callHistory.length = 0;
  const historyBox = document.getElementById("history-box");
  historyBox.innerHTML = "";
});
// Heart count
let heartCount = 0;
document
  .getElementById("card-container")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-heart")) {
      heartCount++;
      document.getElementById("heart-count").innerText = heartCount;
    }
  });
// challenge part
let copyCount = 0;
document
  .getElementById("card-container")
  .addEventListener("click", function (e) {
    if (
      e.target.closest("button") &&
      e.target.closest("button").textContent.includes("Copy")
    ) {
      const button = e.target.closest("button");
      const card = button.closest(".card");
      const number = card.querySelector(".service-number").innerText;

      navigator.clipboard.writeText(number).then(() => {
        alert(`Number ${number} copied!`);
        copyCount++;

        document.getElementById("copy-count").innerText = copyCount;
      });
    }
  });
