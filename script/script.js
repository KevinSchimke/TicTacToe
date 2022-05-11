let fields = [];
let gameover = false;
let timeoutGameover = 1000;
let currentPlayer = 'cross';
let drawCount = 0;

function matchfield(ID) {
    if (!fields[ID] && !gameover) {
        if (currentPlayer == 'cross') {
            currentPlayer = 'circle';
            document.getElementById('player_1').classList.remove('player_inactive');
            document.getElementById('player_2').classList.add('player_inactive');
        } else {
            currentPlayer = 'cross';
            document.getElementById('player_2').classList.remove('player_inactive');
            document.getElementById('player_1').classList.add('player_inactive');
        }
        fields[ID] = currentPlayer;
        draw();
        checkWinner();
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle_' + i).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross_' + i).classList.remove('d-none');
        }
    }
    drawCount++;
}

function checkWinner() {
    let winner;
    if (drawCount == 9){
        winner = true;
    }
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line_0').style.transform = 'scale(1)'
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line_1').style.transform = 'scale(1)'
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line_2').style.transform = 'scale(1)'
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line_3').style.transform = 'rotate(90deg) scale(1)'
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line_4').style.transform = 'rotate(90deg) scale(1)'
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line_5').style.transform = 'rotate(90deg) scale(1)'
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line_6').style.transform = 'rotate(45deg) scale(1)'
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line_7').style.transform = 'rotate(-45deg) scale(1)'
    }
    // if (!!winner) {
    //     gameover = true;
    //     setTimeout(function() {
    //         document.getElementById('game_over').classList.remove('d-none');
    //         document.getElementById('restart').classList.remove('d-none');
    //     }, timeoutGameover);
    // }
}

function restart() {
    gameover = false;
    drawCount = 0;
    fields = [];
    document.getElementById('game_over').classList.add('d-none');
    document.getElementById('restart').classList.add('d-none');
    for (let index = 0; index < 8; index++) {
        document.getElementById('line_'+index).style.transform = 'scale(0)'
    }
    for (let index = 0; index < 9; index++) {
        document.getElementById('circle_'+index).classList.add('d-none');
        document.getElementById('cross_'+index).classList.add('d-none');
    }
}