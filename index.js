const gridDisplay = document.querySelector(".grid")
const splash = document.getElementById("splash")
const boom = document.getElementById("boom")
const width = 10;
let square = [];
let squares = []
let counter = 0;
let score = 0;
let randomBoolean = () => Math.random() >= 0.5;
const reload = () => {
    location.reload()
}
const createBoard = () => {
    let counter = 0;
    for (let i = 0; i < width; i++) {
        square = document.createElement("div");
        square.setAttribute("id", "a" + counter++);
        square.innerHTML = 0;
        gridDisplay.appendChild(square)
        squares.push(square)
    } counter = 0;
    for (let i = 0; i < width; i++) {
        square = document.createElement("div");
        square.setAttribute("id", "b" + counter++);
        square.innerHTML = 0;
        gridDisplay.appendChild(square)
        squares.push(square)
    } counter = 0;
    for (let i = 0; i < width; i++) {
        square = document.createElement("div");
        square.setAttribute("id", "c" + counter++);
        square.innerHTML = 0;
        gridDisplay.appendChild(square)
        squares.push(square)
    } counter = 0;
    for (let i = 0; i < width; i++) {
        square = document.createElement("div");
        square.setAttribute("id", "d" + counter++);
        square.innerHTML = 0;
        gridDisplay.appendChild(square)
        squares.push(square)
    } counter = 0;
    for (let i = 0; i < width; i++) {
        square = document.createElement("div");
        square.setAttribute("id", "e" + counter++);
        square.innerHTML = 0;
        gridDisplay.appendChild(square)
        squares.push(square)
    } counter = 0;
    for (let i = 0; i < width; i++) {
        square = document.createElement("div");
        square.setAttribute("id", "f" + counter++);
        square.innerHTML = 0;
        gridDisplay.appendChild(square)
        squares.push(square)
    } counter = 0;
    for (let i = 0; i < width; i++) {
        square = document.createElement("div");
        square.setAttribute("id", "g" + counter++);
        square.innerHTML = 0;
        gridDisplay.appendChild(square)
        squares.push(square)
    } counter = 0;
    for (let i = 0; i < width; i++) {
        square = document.createElement("div");
        square.setAttribute("id", "h" + counter++);
        square.innerHTML = 0;
        gridDisplay.appendChild(square)
        squares.push(square)
    } counter = 0;
    for (let i = 0; i < width; i++) {
        square = document.createElement("div");
        square.setAttribute("id", "i" + counter++);
        square.innerHTML = 0;
        gridDisplay.appendChild(square)
        squares.push(square)
    } counter = 0;
    for (let i = 0; i < width; i++) {
        square = document.createElement("div");
        square.setAttribute("id", "j" + counter++);
        square.innerHTML = 0;
        gridDisplay.appendChild(square)
        squares.push(square)
    } counter = 0;

}
createBoard()
const ship1 = () => {
    let randomNumber = Math.floor(Math.random() * squares.length)
    let direction = randomBoolean()
    if (direction == true) {
        if (squares[randomNumber].innerHTML == 0) {
            if (squares[randomNumber].id[1] == 0 || squares[randomNumber].id[1] == 1 || squares[randomNumber].id[1] == 2 || squares[randomNumber].id[1] == 3 || squares[randomNumber].id[1] == 4 || squares[randomNumber].id[1] == 5) {
                squares[randomNumber].setAttribute("id", "used")
                squares[randomNumber].className = " carrier"
                squares[randomNumber + 1].setAttribute("id", "used")
                squares[randomNumber + 1].className = " carrier"
                squares[randomNumber + 2].setAttribute("id", "used")
                squares[randomNumber + 2].className = " carrier"
                squares[randomNumber + 3].setAttribute("id", "used")
                squares[randomNumber + 3].className = " carrier"
                squares[randomNumber + 4].setAttribute("id", "used")
                squares[randomNumber + 4].className = " carrier"
                console.log(squares[randomNumber].className, "made")
            } else {
                ship1()
            }
        } else {
            ship1()
        }
    } else if (direction == false) {
        if (squares[randomNumber].innerHTML == 0) {
            if (squares[randomNumber].id[0] == "a" || squares[randomNumber].id[0] == "b" || squares[randomNumber].id[0] == "c" || squares[randomNumber].id[0] == "d" || squares[randomNumber].id[0] == "e" || squares[randomNumber].id[0] == "f") {
                squares[randomNumber].setAttribute("id", "used")
                squares[randomNumber + 10].setAttribute("id", "used")
                squares[randomNumber + 20].setAttribute("id", "used")
                squares[randomNumber + 30].setAttribute("id", "used")
                squares[randomNumber + 40].setAttribute("id", "used")
                squares[randomNumber].className = " carrier"
                squares[randomNumber + 10].className = " carrier"
                squares[randomNumber + 20].className = " carrier"
                squares[randomNumber + 30].className = " carrier"
                squares[randomNumber + 40].className = " carrier"
                console.log(squares[randomNumber].className, "made")
            } else {
                ship1()
            }
        } else {
            ship1()
        }
    }
};
ship1();
const ship2 = () => {
    let randomNumber = Math.floor(Math.random() * squares.length);
    let direction = randomBoolean()
    if (direction == true) {
        if (squares[randomNumber].innerHTML == 0 && squares[randomNumber].id[1] != 7 && squares[randomNumber].id[1] != 8 && squares[randomNumber].id[1] != 9) {
            if (squares[randomNumber].id != "used" && squares[randomNumber + 1].id != "used" && squares[randomNumber + 2].id != "used" && squares[randomNumber + 3].id != "used") {
                squares[randomNumber].setAttribute("id", "used")
                squares[randomNumber + 1].setAttribute("id", "used")
                squares[randomNumber + 2].setAttribute("id", "used")
                squares[randomNumber + 3].setAttribute("id", "used")
                squares[randomNumber].className = " battleship"
                squares[randomNumber + 1].className = " battleship"
                squares[randomNumber + 2].className = " battleship"
                squares[randomNumber + 3].className = " battleship"
                console.log(squares[randomNumber].className, "made")
            } else {
                console.log("couldnt place here")
                ship2()
            }
        } else {
            console.log("already used")
            ship2()
        }
    } else if (direction == false) {
        if (squares[randomNumber].innerHTML == 0 && squares[randomNumber].id[0] != "h" && squares[randomNumber].id[0] != "i" && squares[randomNumber].id[0] != "j") {
            if (squares[randomNumber].id != "used" && squares[randomNumber + 10].id != "used" && squares[randomNumber + 20].id != "used" && squares[randomNumber + 30].id != "used") {
                squares[randomNumber].setAttribute("id", "used")
                squares[randomNumber + 10].setAttribute("id", "used")
                squares[randomNumber + 20].setAttribute("id", "used")
                squares[randomNumber + 30].setAttribute("id", "used")
                squares[randomNumber].className = " battleship"
                squares[randomNumber + 10].className = " battleship"
                squares[randomNumber + 20].className = " battleship"
                squares[randomNumber + 30].className = " battleship"
                console.log(squares[randomNumber].className, "made")
            } else {
                console.log("couldnt place here")
                ship2()
            }
        } else {
            console.log("already used")
            ship2()
        }
    }
};
ship2();
const ship3_2 = () => {
    let randomNumber = Math.floor(Math.random() * squares.length);
    let direction = randomBoolean()
    if (direction == true) {
        if (squares[randomNumber].innerHTML == 0 && squares[randomNumber].id[1] != 8 && squares[randomNumber].id[1] != 9) {
            if (squares[randomNumber].id != "used" && squares[randomNumber + 1].id != "used" && squares[randomNumber + 2].id != "used") {
                squares[randomNumber].setAttribute("id", "used")
                squares[randomNumber + 1].setAttribute("id", "used")
                squares[randomNumber + 2].setAttribute("id", "used")
                squares[randomNumber].className = " cruiser"
                squares[randomNumber + 1].className = " cruiser"
                squares[randomNumber + 2].className = " cruiser"
                console.log(squares[randomNumber].className, "made")
            } else {
                console.log("couldnt place here")
                ship3_2()
            }
        } else {
            console.log("already used")
            ship3_2()
        }
    } else if (direction == false) {
        if (squares[randomNumber].innerHTML == 0 && squares[randomNumber].id[0] != "i" && squares[randomNumber].id[0] != "j") {
            if (squares[randomNumber].id != "used" && squares[randomNumber + 10].id != "used" && squares[randomNumber + 20].id != "used") {
                squares[randomNumber].setAttribute("id", "used")
                squares[randomNumber + 10].setAttribute("id", "used")
                squares[randomNumber + 20].setAttribute("id", "used")
                squares[randomNumber].className = " cruiser"
                squares[randomNumber + 10].className = " cruiser"
                squares[randomNumber + 20].className = " cruiser"
                console.log(squares[randomNumber].className, "made")
            } else {
                console.log("couldnt place here")
                ship3_2()
            }
        } else {
            console.log("already used")
            ship3_2()
        }
    }
};
ship3_2()

const ship3 = () => {
    let randomNumber = Math.floor(Math.random() * squares.length);
    let direction = randomBoolean()
    if (direction == true) {
        if (squares[randomNumber].innerHTML == 0 && squares[randomNumber].id[1] != 8 && squares[randomNumber].id[1] != 9) {
            if (squares[randomNumber].id != "used" && squares[randomNumber + 1].id != "used" && squares[randomNumber + 2].id != "used") {
                squares[randomNumber].setAttribute("id", "used")
                squares[randomNumber + 1].setAttribute("id", "used")
                squares[randomNumber + 2].setAttribute("id", "used")
                squares[randomNumber].className = " submarine"
                squares[randomNumber + 1].className = " submarine"
                squares[randomNumber + 2].className = " submarine"
                console.log(squares[randomNumber].className, "made")
            } else {
                console.log("couldnt place here")
                ship3()
            }
        } else {
            console.log("already used")
            ship3()
        }
    } else if (direction == false) {
        if (squares[randomNumber].innerHTML == 0 && squares[randomNumber].id[0] != "i" && squares[randomNumber].id[0] != "j") {
            if (squares[randomNumber].id != "used" && squares[randomNumber + 10].id != "used" && squares[randomNumber + 20].id != "used") {
                squares[randomNumber].setAttribute("id", "used")
                squares[randomNumber + 10].setAttribute("id", "used")
                squares[randomNumber + 20].setAttribute("id", "used")
                squares[randomNumber].className = " submarine"
                squares[randomNumber + 10].className = " submarine"
                squares[randomNumber + 20].className = " submarine"
                console.log(squares[randomNumber].className, "made")
            } else {
                console.log("couldnt place here")
                ship3()
            }
        } else {
            console.log("already used")
            ship3()
        }
    }
};

ship3();
const ship4 = () => {
    let direction = randomBoolean()
    let randomNumber = Math.floor(Math.random() * squares.length);
    if (direction == true) {
        if (squares[randomNumber].id != "used" && squares[randomNumber + 1].id != "used") {
            if (squares[randomNumber].id[1] != 9) {
                squares[randomNumber].setAttribute("id", "used")
                squares[randomNumber + 1].setAttribute("id", "used")
                squares[randomNumber].className = " destroyer"
                squares[randomNumber + 1].className = " destroyer"
                console.log(squares[randomNumber].className, "made")
            } else {
                console.log("couldnt place here")
                ship4()
            }
        } else {
            console.log("already used")
            ship4()
        }
    } else if (direction == false) {
        if (squares[randomNumber].id != "used" && squares[randomNumber + 10].id != "used") {
            if (squares[randomNumber].id[0] != "j") {
                squares[randomNumber].setAttribute("id", "used")
                squares[randomNumber + 10].setAttribute("id", "used")
                squares[randomNumber].className = " destroyer"
                squares[randomNumber + 10].className = " destroyer"
                console.log(squares[randomNumber].className, "made")
            } else {
                console.log("couldnt place here")
                ship4()
            }
        } else {
            console.log("already used")
            ship4()
        }
    }
};
ship4();
hideText = () => {
    for (i = 0; i < squares.length; i++) {
        squares[i].innerHTML = ""
    }
}
hideText()
battleshipCounter = 0;
cruiserCounter = 0;
destroyerCounter = 0;
carrierCounter = 0;
submarineCounter = 0;

const changeBackgroundColor = (e) => {
    info.style.visibility = "visible"
    if (e.target.id == "used") {
        boom.play()
        counter++;
        score++;
        e.target.id = "hit"
        e.target.style.backgroundColor = "red";
        e.target.innerHTML = "BOOM"
        e.target.style.color = "black"
        e.target.style.fontSize = "20px"
        attempts.innerHTML = "Attempts:" + score;
        if (e.target.className == " battleship") {
            console.log("battleship hit")
            battleshipCounter++
            if (battleshipCounter == 4) {
                for (i = 0; i < squares.length; i++) {
                    if (squares[i].className == " battleship") {
                        squares[i].innerHTML = "SUNK"
                        squares[i].style.backgroundColor = "dimgrey"
                    }
                }
                shipSunk.innerHTML = "Battleship Sunk!"
                tick2.innerHTML = "\u2713"
                setTimeout(function () {
                    shipSunk.innerHTML = ""
                }, 2000)
            }
        }
        if (e.target.className == " destroyer") {
            console.log("destroyer hit")
            destroyerCounter++
            console.log(destroyerCounter)
            if (destroyerCounter == 2) {
                for (i = 0; i < squares.length; i++) {
                    if (squares[i].className == " destroyer") {
                        squares[i].innerHTML = "SUNK"
                        squares[i].style.backgroundColor = "dimgrey"
                    }
                }
                console.log("destroyer sunk")
                shipSunk.innerHTML = "Destroyer Sunk!"
                tick5.innerHTML = "\u2713"
                setTimeout(function () {
                    shipSunk.innerHTML = ""
                }, 2000)
            }
        }
        if (e.target.className == " carrier") {
            console.log("carrier hit")
            carrierCounter++
            if (carrierCounter == 5) {
                for (i = 0; i < squares.length; i++) {
                    if (squares[i].className == " carrier") {
                        squares[i].innerHTML = "SUNK"
                        squares[i].style.backgroundColor = "dimgrey"
                    }
                }
                shipSunk.innerHTML = "Carrier Sunk!"
                tick1.innerHTML = "\u2713"
                setTimeout(function () {
                    shipSunk.innerHTML = ""
                }, 2000)
            }
        }
        if (e.target.className == " submarine") {
            console.log("submarine hit")
            submarineCounter++
            if (submarineCounter == 3) {
                for (i = 0; i < squares.length; i++) {
                    if (squares[i].className == " submarine") {
                        squares[i].innerHTML = "SUNK"
                        squares[i].style.backgroundColor = "dimgrey"
                    }
                }
                shipSunk.innerHTML = "Submarine Sunk!"
                tick4.innerHTML = "\u2713"
                setTimeout(function () {
                    shipSunk.innerHTML = ""
                }, 2000)

            }
        }
        if (e.target.className == " cruiser") {
            console.log("cruiser hit")
            cruiserCounter++
            if (cruiserCounter == 3) {
                for (i = 0; i < squares.length; i++) {
                    if (squares[i].className == " cruiser") {
                        squares[i].innerHTML = "SUNK"
                        squares[i].style.backgroundColor = "dimgrey"
                    }
                }
                shipSunk.innerHTML = "Cruiser Sunk!"
                tick3.innerHTML = "\u2713"
                setTimeout(function () {
                    shipSunk.innerHTML = ""
                }, 2000)
            }
        }
        if (counter == 17) {
            setTimeout(function () {
                gameOver.innerHTML = "All Ships Found!";
                newGame.style.visibility = "visible";
                gridDisplay.removeEventListener("click", changeBackgroundColor)
            }, 500)
        }
    } else if (e.target.innerHTML != "X" && e.target.innerHTML != "BOOM" && e.target.innerHTML != "SUNK") {
        score++
        splash.play()
        // e.target.style.backgroundImage = "url(waterExplosion.PNG)"
        e.target.innerHTML = "X"
        e.target.style.color = "black"
        e.target.style.fontSize = "50px"
        attempts.innerHTML = "Attempts: " + score;
    }
};

newGame.addEventListener("click", reload)
gridDisplay.addEventListener("click", changeBackgroundColor);