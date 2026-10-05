let balance = Number(
    localStorage.getItem("luckyPlayBalance")
) || 1000;


// Balance screen par dikhana
function updateBalance() {

    const balanceElement =
        document.getElementById("balance");

    if (balanceElement) {

        balanceElement.textContent =
            balance;

    }
}


// Virtual points add karna
function addPoints(points) {

    balance += points;

    localStorage.setItem(
        "luckyPlayBalance",
        balance
    );

    updateBalance();

}


// Home ke simple games
function playGame(gameName) {

    const points =
        Math.floor(Math.random() * 100) + 10;

    addPoints(points);

    addHistory(
        gameName,
        points
    );

}


// Game history
function addHistory(gameName, points) {

    const historyList =
        document.getElementById("historyList");


    if (!historyList) {
        return;
    }


    if (
        historyList.innerHTML.includes(
            "No games played yet."
        )
    ) {

        historyList.innerHTML = "";

    }


    const item =
        document.createElement("p");


    item.textContent =
        gameName +
        " → +" +
        points +
        " virtual points";


    item.style.padding =
        "10px 0";


    item.style.borderBottom =
        "1px solid #334155";


    historyList.prepend(item);

}


// Page load par balance show karo
updateBalance();
