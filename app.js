let balance = 1000;

function playGame(gameName) {

    // Free-play virtual points only
    const points = Math.floor(Math.random() * 100) + 10;

    balance += points;

    document.getElementById("balance").textContent = balance;

    addHistory(gameName, points);
}

function addHistory(gameName, points) {

    const historyList = document.getElementById("historyList");

    // Remove "No games played yet."
    if (historyList.innerHTML.includes("No games played yet.")) {
        historyList.innerHTML = "";
    }

    const item = document.createElement("p");

    item.textContent =
        gameName + " → +" + points + " virtual points";

    item.style.padding = "10px 0";
    item.style.borderBottom = "1px solid #334155";

    historyList.prepend(item);
}
