/**
 * Add an event listener to the document and run the main screen with user log-in
 * Some script taken and modified from the 'Sunshine Guessing Game' https://aleksandrac-cipp2sunshi-wtkxcr43660.ws-eu72.gitpod.io/ 
 * by Aleksandra Haniok, and from 'Tetris' https://github.com/CatalinStefan/Tetris by Stefan Catalin.
 */
 document.addEventListener('DOMContentLoaded', function () {
    runMainScreen();
});

/**
 * Set up of game variables to vary display/hide
 */
let mainLoginScreen = document.getElementById("login-screen");
let getInstructions = document.getElementById("instructions-icon");
let errorMessage = document.getElementById("error-message");
let gameScreen = document.getElementById("game-screen");
let wrongScreen = document.getElementById("wrong-screen");


/**
* Show the main screen with user log-in and instruction icon
*/
function runMainScreen() {
    errorMessage.style.display = "none";
    mainLoginScreen.style.display = "block";
    gameScreen.style.display = "none";
    wrongScreen.style.display = "none";
    document.getElementById("user-icon").style.display = "none";
    document.getElementById("username").innerText = "";
    document.getElementById("user").focus(); //focus on input element with cursor ready for username input
}

/**
 * Show and close modal with game instructions
 */
getInstructions.addEventListener("click", showInstructions);

function showInstructions() {
    let modal = document.getElementById("myModal");
    modal.classList.add("show-modal");
    document.body.classList.add('greyout-background'); //grey out the background picture when modal pops-up.
}

function closeInstructions() {
    let modal = document.getElementById("myModal");
    modal.classList.remove("show-modal");
    document.body.classList.remove('greyout-background');
}

/**
 * Verification of the user name input on the log-in screen
 */
document.getElementById("user-log").addEventListener("click", checkUsername);

function checkUsername() {
    let username = document.getElementById("user").value.trim();

    if (username.length >= 1 && username.length <= 12) {
        gameScreen.style.display = "block";
        mainLoginScreen.style.display = "none";
        wrongScreen.style.display = "none";
        document.getElementById("user-icon").style.display = "block";
        document.getElementById("username").innerText = username;
    } else {
        errorMessage.style.display = "block";
        document.getElementById("user").focus();
        document.getElementById("user").value = "";
    }
}
checkUsername();

/**
 * Input of username using by pressing enter key
 */
document.getElementById("user").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkUsername();
    }
});

/**
 * Data displayed on the game screen.
*/

// Create the canvas.
const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
// Scale the canvas. 
context.scale(20, 20);

// If a player has filled a row we want to remove it and give them a score 
function arenaSweep() {
    let rowCount = 1;
        outer: for (let y = arena.length -1; y > 0; --y) {
            for (let x = 0; x < arena[y].length; ++x) {
                if (arena[y][x] === 0) {
                continue outer;
            }
        }
 
        const row = arena.splice(y, 1)[0].fill(0);
             arena.unshift(row);
             ++y;
 
             player.score += rowCount * 10;
             rowCount *= 2;
        }
}

// Create the collision function.
function collide(arena, player) {
    const m = player.matrix;
    const o = player.pos;
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 &&
                (arena[y + o.y] &&
                arena[y + o.y][x + o.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}
 
// Create the arena to play within.  
function createMatrix(w, h) {
    const matrix = [];
    while (h--) {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

//Create the tetromino shapes.
function createPiece(type) {
    if (type === 'I') {
        return [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ];
    } else if (type === 'L') {
        return [
            [0, 2, 0],
            [0, 2, 0],
            [0, 2, 2],
        ];
    } else if (type === 'J') {
        return [
            [0, 3, 0],
            [0, 3, 0],
            [3, 3, 0],
        ];
    } else if (type === 'O') {
        return [
            [4, 4],
            [4, 4],
        ];
    } else if (type === 'Z') {
        return [
            [5, 5, 0],
            [0, 5, 5],
            [0, 0, 0],
        ];
    } else if (type === 'S') {
        return [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0],
        ];
    } else if (type === 'T') {
        return [
            [0, 7, 0],
            [7, 7, 7],
            [0, 0, 0],
        ];
    }
}
 
// position where the piece will be initially placed.
function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = colors[value];
                context.fillRect(x + offset.x,
                                y + offset.y,
                                1, 1);
            }
        });
    });
};
 
// style the tetris canvas
function draw() {
    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.width, canvas.height);
     
    drawMatrix(arena, {x: 0, y: 0});
    drawMatrix(player.matrix, player.pos);
}
 
//
function merge(arena, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        });
    });
}

// Rotating the tetrominos.
function rotate(matrix, dir) {
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [   matrix[x][y],
                matrix[y][x],
            ] = [
                matrix[y][x],
                matrix[x][y],
            ];
        }
    }
 
    if (dir > 0) {
        matrix.forEach(row => row.reverse());
    } else {
        matrix.reverse();
    }
}

/* Dropping the tetrominos, moving the tetrominos, updating score if row is completed. */
function playerDrop() {
    player.pos.y++;
    if (collide(arena, player)) {
        player.pos.y--;
        merge(arena, player);
        playerReset();
        arenaSweep();
        updateScore();
    }
    dropCounter = 0;
}
 
function playerMove(offset) {
    player.pos.x += offset;
    if (collide(arena, player)) {
        player.pos.x -= offset;
    }
}
 
function playerReset() {
    player.matrix = createPiece('T');
    const pieces = 'TJLOSZI';
    player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) -
                   (player.matrix[0].length / 2 | 0);
    if (collide(arena, player)) {
        gameOver(); 
        
    }
}

// Rotating a piece.
function playerRotate(dir) {
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.matrix, dir);
    while (collide(arena, player)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length) {
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return;
        }
    }
}

/* Updating the level by score & updating speed of game by time. */
let dropCounter = 0;
let dropInterval = 1000;
let levelSize = 1000;
let levelSpeedIncrease = 10;
 
let lastTime = 0;
 
function update(time = 0) {
    const deltaTime = time - lastTime;
 
    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
         playerDrop();
    }
 
    lastTime = time;
 
    draw();
    requestAnimationFrame(update);
} 

// update the players score, update level increase. 
function updateScore() {
    if( player.score - levelSize * player.level >= levelSize ) {
        player.level++;
        dropInterval -= levelSpeedIncrease;
    }
    document.getElementById('score').innerText = 'Score: ' + player.score;
    document.getElementById('level').innerText = 'Level: ' + player.level;
}

// Keyboard bindings QUERTY Style. Controls the movement of tetrominos using EventListener.
 document.addEventListener('keydown', event => {
    // Arrow Left key 
    if (event.keyCode === 37) {
         playerMove(-1);
    // Arrow Right Key
     } else if (event.keyCode === 39) {
         playerMove(1);
    // Arrow Down key
     } else if (event.keyCode === 40) {
         playerDrop();
    // Arrow Up key
        } else if (event.keyCode === 38) {
         playerRotate(-1);
        }   
})
   
// Colours for each tetromino, they are random. 
const colors = [
    null,
    'purple',
    'yellow',
    'orange',
    'blue',
    'aqua',
    'green',
    'red',
];
 
// Create game arena.
 const arena = createMatrix(12, 20);
 
// Start player score at zero.
 const player = {
     pos: {x: 0, y: 0},
     matrix: null,
     score: 0,
     level: 0,
};
 
playerReset();
updateScore();
update(); // Run the update to continue to draw new pieces into play

/**
* Display screen when the game is over.
*/

// Open the game over screen. Display button with EventListener for user to try again.
function gameOver() {
    gameScreen.style.display = "none";
    wrongScreen.style.display = "block";

    document.getElementById("try-again").addEventListener("click", resetGame);
    }

// To restart the game.
function resetGame() {
    gameScreen.style.display = "block";
    wrongScreen.style.display = "none";
    arena.forEach(row => row.fill(0));
    player.score = 0;
    player.level = 0;
    dropInterval = 1000;
    updateScore();
}
