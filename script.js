let liamBucks = 0;
let clickValue = 1;
let playerName = "Player";
let upgrades = { clickUpgrade: false, skinUpgrade: false };
let cheatModeActive = false;

function earnLiamBucks() {
    liamBucks += clickValue;
    document.getElementById("liamBucksCount").innerText = liamBucks;
}

function buyClickUpgrade() {
    if (liamBucks >= 25] && !upgrades.clickUpgrade) {
        liamBucks -= 50;
        clickValue *= 2;
        upgrades.clickUpgrade = true;
        document.getElementById("liamBucksCount").innerText = liamBucks;
        alert("Click upgrade purchased!");
    } else {
        alert("Not enough Liam Bucks or already purchased!");
    }
}

function buyClickSkin() {
    if (liamBucks >= 100 && !upgrades.skinUpgrade) {
        liamBucks -= 100;
        upgrades.skinUpgrade = true;
        document.getElementById("liamBucksCount").innerText = liamBucks;
        alert("Skin upgrade purchased!");
    } else {
        alert("Not enough Liam Bucks or already purchased!");
    }
}

function changeName() {
    playerName = document.getElementById("playerName").value || "Player";
    document.getElementById("greeting").innerText = "Welcome, " + playerName + "!";
    checkCheatAccess();
}

function checkCheatAccess() {
    if (playerName.toLowerCase() === "robbie") {
        cheatModeActive = true;
        document.getElementById("cheatBoard").style.display = "block";
    } else {
        cheatModeActive = false;
        document.getElementById("cheatBoard").style.display = "none";
    }
}

function giveMoreMoney() {
    if (cheatModeActive) {
        liamBucks += 1000;
        document.getElementById("liamBucksCount").innerText = liamBucks;
        alert("1000 Liam Bucks added!");
    }
}

function unlockAllUpgrades() {
    if (cheatModeActive) {
        upgrades.clickUpgrade = true;
        upgrades.skinUpgrade = true;
        clickValue = 2;
        liamBucks -= 150;  // Charge the user for unlocking all upgrades
        document.getElementById("liamBucksCount").innerText = liamBucks;
        alert("All upgrades unlocked!");
    }
}
