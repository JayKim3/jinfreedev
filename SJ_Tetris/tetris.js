const startBtn = document.getElementById("tetris-start-button");
const tetrisBgScreen = document.getElementById("tetrisBgScreen");
const Tetris = document.getElementById('tetris');
const nextTetris = document.getElementById('next-table');
const scoreShow = document.getElementById('scoreShow');
const leftInfo = document.getElementById('leftInfo');

let score = parseInt(document.getElementById('score').textContent, 10);
let blockNum = parseInt(document.getElementById('blocknum').textContent, 10);
let lineNum = parseInt(document.getElementById('linenum').textContent, 10);
let TetrisData = [];
let nextTetrisData = [];
let currentBlock = [];
let nextBlock; // 다음 블록
let movestart; // setInterval 담을   변수
let stopDown = false;

let currentTop = [0, 3];

const ActiveBlock = block => (block > 0 && block < 10);
const InvalidBlock = block => (block === undefined || block >= 10);

const Blocks = [
    {
        name: 'I',
        numCode: 1,
        color: 'red',
        shapeIndex: 0,
        shape: [
            [
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0]
            ],
            [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0]
            ],
            [
                [0, 0, 1, 0],
                [0, 0, 1, 0],
                [0, 0, 1, 0],
                [0, 0, 1, 0]
            ]
        ]
    },
    {
        name: 'J',
        numCode: 2,
        color: 'blue',
        shapeIndex: 0,
        shape: [
            [
                [0, 0, 0],
                [1, 1, 1],
                [0, 0, 1]
            ],
            [
                [0, 1, 0],
                [0, 1, 0],
                [1, 1, 0]
            ],
            [
                [1, 0, 0],
                [1, 1, 1],
                [0, 0, 0]
            ],
            [
                [0, 1, 1],
                [0, 1, 0],
                [0, 1, 0]
            ]
        ]
    },
    {
        name: 'L',
        numCode: 3,
        color: 'orange',
        shapeIndex: 0,
        shape: [
            [
                [0, 0, 0],
                [1, 1, 1],
                [1, 0, 0]
            ],
            [
                [1, 1, 0],
                [0, 1, 0],
                [0, 1, 0]
            ],
            [
                [0, 0, 1],
                [1, 1, 1],
                [0, 0, 0]
            ],
            [
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 1]
            ]
        ],

    },
    {
        name: 'O',
        numCode: 4,
        color: 'yellow',
        shapeIndex: 0,
        shape: [
            [
                [0, 0, 0],
                [0, 1, 1],
                [0, 1, 1],
            ]
        ]
    },
    {
        name: 'S',
        numCode: 5,
        color: 'green',
        shapeIndex: 0,
        shape: [
            [
                [0, 0, 0],
                [0, 1, 1],
                [1, 1, 0]
            ],
            [
                [1, 0, 0],
                [1, 1, 0],
                [0, 1, 0]
            ],
            [
                [0, 1, 1],
                [1, 1, 0],
                [0, 0, 0]
            ],
            [
                [0, 1, 0],
                [0, 1, 1],
                [0, 0, 1]
            ]
        ]
    },
    {
        name: 'T',
        numCode: 6,
        color: 'violet',
        shapeIndex: 0,
        shape: [
            [
                [0, 0, 0],
                [0, 1, 0],
                [1, 1, 1]
            ],
            [
                [1, 0, 0],
                [1, 1, 0],
                [1, 0, 0]
            ],
            [
                [1, 1, 1],
                [0, 1, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 1],
                [0, 1, 1],
                [0, 0, 1]
            ]
        ],
    },
    {
        name: 'Z',
        numCode: 7,
        color: 'black',
        shapeIndex: 0,
        shape: [
            [
                [0, 0, 0],
                [1, 1, 0],
                [0, 1, 1]
            ],
            [
                [0, 1, 0],
                [1, 1, 0],
                [1, 0, 0]
            ],
            [
                [1, 1, 0],
                [0, 1, 1],
                [0, 0, 0]
            ],
            [
                [0, 0, 1],
                [0, 1, 1],
                [0, 1, 0]
            ]
        ]
    }
]
const colors = ['red', 'blue', 'orange', 'yellow', 'green', 'violet', 'black'];


function Init() {
    const fragment = document.createDocumentFragment();
    const nextfragment = document.createDocumentFragment();
    [...Array(20).keys()].forEach((col, i) => {
        const tr = document.createElement('tr');
        fragment.appendChild(tr);
        [...Array(10).keys()].forEach((row, j) => {
            const td = document.createElement('td');
            tr.appendChild(td);
        })
        const column = Array(10).fill(0);
        TetrisData.push(column);
    });
    Tetris.appendChild(fragment);

    [...Array(5).keys()].forEach((col, i) => {
        const nexttr = document.createElement('tr');
        nextfragment.appendChild(nexttr);
        [...Array(6).keys()].forEach((row, j) => {
            const nexttd = document.createElement('td');
            nexttr.appendChild(nexttd);
        })
        const nextcolumn = Array(5).fill(0);
        nextTetrisData.push(nextcolumn);
    })
    nextTetris.appendChild(nextfragment);
}

function createBlock() { // 블록 생성
    if (Array.isArray(currentBlock)) {
        currentBlock = Blocks[Math.floor(Math.random() * Blocks.length)];
    } else {
        currentBlock = nextBlock;
    }


    // currentBlock.shapeIndex = 0;
    let GameOver = false;
    currentTop = [-1, 3];
    console.log(blockNum);
    blockNum += 1;
    document.getElementById('blocknum').textContent = String(blockNum);
    currentBlock.shape[0].slice(1).forEach((col, i) => {
        col.forEach((row, j) => {
            if (row && TetrisData[i][j + 3]) {
                GameOver = true;
            }
        });
    });
    removeOneline();
    createNextBlock();
    currentBlock.shape[0].slice(1).forEach((col, i) => {
        col.forEach((row, j) => {
            if (row) {
                TetrisData[i][j + 3] = currentBlock.numCode;
            }
        })
    })
    if (GameOver) {
        clearInterval(movestart);
        draw();
        alert(`총 점수 : ` + score);
        location.href = "index.html";
    } else {
        draw();
        drawNext();
    }
}

function createNextBlock() {
    if (nextBlock) {
        nextTetrisData.forEach((col, i) => {
            nextTetrisData.forEach((row, j) => {
                nextTetrisData[i][j] = 0;
            })
        })
    }

    nextBlock = Blocks[Math.floor(Math.random() * Blocks.length)];
    nextBlock.shape[0].slice(1).forEach((col, i) => {
        col.forEach((row, j) => {
            if (row) {
                nextTetrisData[i + 2][j + 1] = nextBlock.numCode;
            }
        })
    })
}

function drawNext() {
    nextTetrisData.forEach((col, i) => {
        col.forEach((row, j) => {
            if (row > 0) {
                nextTetris.children[i].children[j].className = colors[nextTetrisData[i][j] - 1];
            } else {
                nextTetris.children[i].children[j].className = "";
            }
        })
    })
}

function draw() {
    TetrisData.forEach((col, i) => {
        col.forEach((row, j) => {
            if (row > 0) {
                Tetris.children[i].children[j].className = TetrisData[i][j] >= 10 ? colors[TetrisData[i][j] / 10 - 1] : colors[TetrisData[i][j] - 1];
            } else {
                Tetris.children[i].children[j].className = "";
            }
        })
    })
}

function removeOneline() {
    const rowsFull = [];
    TetrisData.forEach((col, i) => {
        let count = 0;
        col.forEach((row, j) => {
            if (row > 0) {
                count++;
            }
        });
        if (count === 10) {
            score += 100;
            lineNum += 1;
            rowsFull.push(i);
        }
    });


    TetrisData = TetrisData.filter((row, i) => !rowsFull.includes(i));
    for (let i = 0; i < rowsFull.length; i++) {
        console.log(rowsFull.length);
        TetrisData.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    document.getElementById('linenum').textContent = String(lineNum);
    document.getElementById('score').textContent = String(score);
}

function move() {
    const nextTop = [currentTop[0] + 1, currentTop[1]];
    const activeBlocks = [];
    let canGoDown = true;
    let currentBlockShape = currentBlock.shape[currentBlock.shapeIndex];
    // console.log("currentBlockShape:" + currentBlockShape);

    for (let i = currentTop[0]; i < currentTop[0] + currentBlockShape.length; i++) {
        if (i < 0 || i >= 20) continue;
        for (let j = currentTop[1]; j < currentTop[1] + currentBlockShape.length; j++) {
            // console.log(i, j);
            if (ActiveBlock(TetrisData[i][j])) {
                activeBlocks.push([i, j]); // 마지막에는 가장 나중에 i,j가 찍히구나
                if (InvalidBlock(TetrisData[i + 1] && TetrisData[i + 1][j])) {
                    canGoDown = false;
                }
            }
        }
    }


    if (!canGoDown) {
        activeBlocks.forEach((blocks) => {
            TetrisData[blocks[0]][blocks[1]] *= 10;
        });
        createBlock();
        return false;
    }
    if (canGoDown) {
        for (let i = TetrisData.length - 1; i >= 0; i--) {
            TetrisData[i].forEach(function (row, j) {
                if (row < 10 && TetrisData[i + 1] && TetrisData[i + 1][j] < 10) {
                    TetrisData[i + 1][j] = row;
                    TetrisData[i][j] = 0;
                }
            });
        }
        currentTop = nextTop;
        draw();
        return true;
    }
}

function gameStart() {
    tetrisBgScreen.style.display = "none";
    Tetris.classList.remove('hide');
    scoreShow.classList.remove('hide');
    leftInfo.classList.remove('hide');
    Init();
    realTime();
    createBlock();
    draw();
    drawNext();
    movestart = setInterval(move, 200);
}

startBtn.addEventListener("click", gameStart);

let m = 0;
let s = 0;

function realTime() {
    let date = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = date.getDay();
    s += 1;

    if (s > 59) {
        m += 1;
        s = 0;
    }

    if (s < 10) {
        document.getElementById('time').innerHTML = days[d] + " " + m + ":0" + s;
    }
    else {
        document.getElementById('time').innerHTML = days[d] + " " + m + ":" + s;
    }

    setTimeout(function () { realTime() }, 1000);
}




window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowLeft': { // 왼쪽 클릭
            let leftmove = true;
            const nextTop = [currentTop[0], currentTop[1] - 1];
            let currentBlockShape = currentBlock.shape[currentBlock.shapeIndex];

            // console.log(currentBlockShape); // 각 도형의 길이 일자 : 4 , 나머지 : 3 

            for (let i = currentTop[0]; i < currentTop[0] + currentBlockShape.length; i++) {
                for (let j = currentTop[1]; j < currentTop[1] + currentBlockShape.length; j++) {
                    // if (!TetrisData[i] || !TetrisData[i][j]) continue;
                    if (ActiveBlock(TetrisData[i][j]) && InvalidBlock(TetrisData[i][j - 1])) {
                        console.log(TetrisData[i][j]); // 이 부분 이해 안되네
                        leftmove = false;
                    }
                }
            }

            if (leftmove) {
                TetrisData.forEach((col, i) => {
                    for (j = 0; j < col.length; j++) {
                        const row = col[j];
                        if (TetrisData[i][j - 1] === 0 && row < 10) {
                            TetrisData[i][j - 1] = row;
                            TetrisData[i][j] = 0;
                        }
                    }
                })
                currentTop = nextTop;
                draw();
            }
            break;
        }


        case 'ArrowRight': { // 오른쪽 클릭
            let rightmove = true;
            const nextTop = [currentTop[0], currentTop[1] + 1];
            let currentBlockShape = currentBlock.shape[currentBlock.shapeIndex];

            for (let i = currentTop[0]; i < currentTop[0] + currentBlockShape.length; i++) {
                for (let j = currentTop[1]; j < currentTop[1] + currentBlockShape.length; j++) {
                    // if (!TetrisData[i] || !TetrisData[i][j]) continue;
                    if (ActiveBlock(TetrisData[i][j]) && InvalidBlock(TetrisData[i][j + 1])) {
                        rightmove = false;
                    }
                }
            }

            if (rightmove) {

                TetrisData.forEach((col, i) => {
                    // console.log(col.length);
                    for (var j = col.length - 1; j >= 0; j--) {
                        const row = col[j];
                        if (TetrisData[i][j + 1] === 0 && row < 10) {
                            TetrisData[i][j + 1] = row;
                            TetrisData[i][j] = 0;
                        }
                    }
                });
                currentTop = nextTop;
                draw();
            }
            break;
        }

        case 'ArrowDown': { // 아래쪽 클릭
            move();
            break;
        }
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.code) {
        case 'ArrowUp': { // 방향 전환 
            let turn = true;
            let currentBlockShape = currentBlock.shape[currentBlock.shapeIndex];
            const nextShapeIndex = currentBlock.shapeIndex + 1 === currentBlock.shape.length ? 0 : currentBlock.shapeIndex + 1;
            // console.log(nextShapeIndex); 같은 모양일시 0 , 다른 모양일 시 그 모양의 인덱스 반환
            const nextBlockShape = currentBlock.shape[nextShapeIndex];
            for (let i = currentTop[0]; i < currentTop[0] + currentBlockShape.length; i++) {
                for (let j = currentTop[1]; j < currentTop[1] + currentBlockShape.length; j++) {
                    if (nextBlockShape[i - currentTop[0]][j - currentTop[1]] > 0 && InvalidBlock(TetrisData[i][j])) {
                        turn = false;
                    }
                }
            }

            if (turn) {
                while (currentTop[0] < 0) {
                    tick();
                }
                for (let i = currentTop[0]; i < currentTop[0] + currentBlockShape.length; i++) {
                    for (let j = currentTop[1]; j < currentTop[1] + currentBlockShape.length; j++) {
                        let nextBlockCell = nextBlockShape[i - currentTop[0]][j - currentTop[1]];
                        if (nextBlockCell > 0) {
                            TetrisData[i][j] = currentBlock.numCode;
                        } else if (nextBlockCell === 0) {
                            TetrisData[i][j] = 0;
                        }
                    }
                }
                currentBlock.shapeIndex = nextShapeIndex;
            }
            draw();
            break;
        }
        case 'Space': { // 일자로 떨구기
            while (move()) { }
            break;
        }
    }

})