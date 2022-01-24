/*
B1: Ve ban co bang js
B2: 
*/
const CELLS = 10;
const COLUMNS = 10;
let arr = [];
let player = 1;
let isGameOver = false;
let isWin = false;

function drawGameBoard() {
    let html = '';
    for (let i = 0; i < CELLS; i++) {
        html += '<tr>';
        arr[i] = []
        for (let j = 0; j < COLUMNS; j++) {
            arr[i][j] = '*'
            html += '<td id="cell-' + i + '-' + j + '" onclick="play(' + i + ', ' + j + ')">';
            html += '</td>';
        }
        html += '</tr>';
    }
    document.getElementById('game-board').innerHTML = html
}

function play(x, y) {
    if (!isGameOver) {
        if (arr[x][y] == '*') {
            if (player == 1) {
                document.getElementById('cell-' + x + '-' + y).innerHTML = "X";
                arr[x][y] = "X";
                checkWin(x, y);
                if (!isGameOver) {
                    player = 2;
                }

            } else {
                document.getElementById('cell-' + x + '-' + y).innerHTML = "O";
                arr[x][y] = "0";
                checkWin(x, y)
                if (!isGameOver) {
                    player = 1;
                }

            }

        }
    }
}

function checkWin(x, y) {
    // check win theo chieu ngang o dang danh
    let cell = document.getElementById('cell-' + x + '-' + y);
    let i = 1;
    var count = 1;
    while (y - i >= 0 && arr[x][y - i] == cell.innerHTML) {
        count++;
        i++;
    }

    let j = 1;
    while (y + j < COLUMNS && arr[x][y + j] == cell.innerHTML) {
        count++;
        j++;
    }

    gameOver(count);
    // check win theo chieu doc o dang danh

    var count2 = 1;
    let m = 1;
    while (x - m >= 0 && arr[x - m][y] == cell.innerHTML) {
        count2++;
        m++;
    }

    let n = 1;
    while (x - n >= 0 && x + n < CELLS && arr[x + n][y] == cell.innerHTML) {
        count2++;
        n++;
    }
    gameOver(count2);

    // check win theo cheo trai o dang danh
    var count3 = 1;
    let h = 1;
    while (x - h >= 0 && y - h >= 0 && arr[x - h][y - h] == cell.innerHTML) {
        count3++;
        h++;
    }

    let k = 1;
    while (x + k < CELLS && y + k < COLUMNS && arr[x + k][y + k] == cell.innerHTML) {
        count3++;
        k++;
    }
    gameOver(count3);

    // check win theo cheo phai o dang danh
    var count4 = 1
    let g = 1;
    while (x + g < CELLS && y - g >= 0 && arr[x + g][y - g] == cell.innerHTML) {
        count4++;
        g++;
    }

    let l = 1;
    while (x - l >= 0 && y + l < COLUMNS && arr[x - l][y + l] == cell.innerHTML) {
        count4++;
        l++;
    }

    gameOver(count4);
}

function gameOver(count) {
    if (count == 5) {
        isGameOver = true;
        alert('game over, player ' + player + ' win');
        player = (player == 1) ? 1 : 2;

    }
}

function start() {
    alert(player + ' la nguoi di truoc')
    isGameOver = false;
    drawGameBoard();

}

function reset() {
    isGameOver = false;
    arr = [];
    drawGameBoard();
}