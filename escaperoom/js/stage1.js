const stage1bg = document.getElementById('stage1bg');
let mainFlag = true;
let stage1Flag = true; // stage1 메인화면에 대한 확인 여부
let axpiecespace = false;
let axkeypieceExist = false; // 도끼가 인벤토리에 존재하는지 확인 여부
let axclicked = false;
let keypiece1 = false;
let axuse = false; // 인벤토리에서 도끼를 클릭하였을 때 확인 여부
let opendesk = false; // 책상을 열수있는 확인 여부
let cardExist = false; // 인벤토리에 카드 존재하는지 확인 여부
let safeclick = false; // 금고에서 Back Btn 기능을 위한 여부
let keypiece2 = false; // 2번째 열쇠조각이 인벤토리에 있는지 확인 여부
let escapeFlag = false;


let firstpw = document.getElementById('firstpw');
let secondpw = document.getElementById('secondpw');
let thirdpw = document.getElementById('thirdpw');
let fourthpw = document.getElementById('fourthpw');
let firstflag = false;
let secondflag = false;
let thirdflag = false;
let fourthflag = false;

let timer;

// 방탈출 게임 시작 -> 초기 화면
function init() {
    stage1bg.classList.add('stage1-explain1');
    stage1bg.classList.add('fade-in');
    stage1bg.addEventListener('click', function () {
        if (mainFlag) {
            stage1bg.classList.remove('stage1-explain1');
            stage1bg.classList.remove('fade-in');
            stage1bg.classList.add('stage1-explain2');
            stage1bg.classList.add('fade-out');
            setTimeout(() => {
                stage1bg.classList.remove('stage1-explain2');
                stage1bg.classList.remove('fade-out');
            }, 1000);
            mainFlag = false;
        }
    });
    document.getElementById('explain').innerHTML = "모든 단서들을 종합하여 " + "<br />" + " 오른쪽 방문을 열어보자";
}

// 1번 인벤토리에 클릭에 대한 함수

function inventory1() {
    // offsetX -> 1020 1090, offsetY -> 125 200
    stage1bg.addEventListener('click', function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        if (x >= 1020 && x <= 1090 && y >= 125 && y <= 200) {
            if (axclicked && !keypiece1) {
                stage1bg.classList.remove('axkeypieceClick');
                stage1bg.classList.add('axclick');
                axuse = true;
                axclicked = false;
            }
            else if (keypiece1) {
                stage1bg.classList.remove('keypiece2add');
                stage1bg.classList.add('keypiece1closeup');
                keypiece2 = true;
            }
        }
    })
    breakDesk();
}

// 2번 인벤토리에 클릭에 대한 함수

function inventory2() {
    stage1bg.addEventListener('click', function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        if (x >= 1020 && x <= 1090 && y >= 220 && y <= 300 && cardExist) {
            stage1bg.classList.remove('cardclick');
            stage1bg.classList.add('cardcloseup');
        }
    });
}

// 3번 인벤토리에 클릭에 대한 함수

function inventory3() {
    stage1bg.addEventListener('click', function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        if (x >= 1020 && x <= 1090 && y >= 315 && y <= 395 && keypiece2) {
            stage1bg.classList.remove('keypiece1closeup');
            stage1bg.classList.add('secondkey');
            escapeFlag = true;
            safeclick = false;
        }
    });
    escape();
}

// 도끼와 열쇠조각 공간을 클릭하였을때 클로즈업 되는 함수

function axkeypieceSpace() {
    stage1bg.addEventListener('click', function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        if (x >= 160 && x <= 230 && y >= 270 && y <= 355) {
            stage1bg.classList.remove('stage1-bg');
            stage1bg.classList.add('axkeypiece-bg');
            axpiecespace = true;
        }
    })
    axkeypieceClick();
    back();
}


// 뒤로가기 버튼을 눌렀을 때 어떤 이미지를 보여줄지 나타내는 함수

function back() {
    stage1bg.addEventListener('click', function (e) {
        let x = e.offsetX;
        let y = e.offsetY;

        const backbtncheck = (x >= 130 && x <= 190 && y >= 520 && y <= 585);

        if (backbtncheck && !axkeypieceExist) {
            // axkeypiecespace 에서의 back btn
            stage1bg.classList.remove('axkeypiece-bg');
            stage1bg.classList.add('stage1-bg');
            axpiecespace = false;
        }
        else if (backbtncheck && axpiecespace && !cardExist) {
            // card 에서의 back btn

            stage1bg.classList.remove('card');
            stage1bg.classList.add('breakdesk');
        }
        else if (backbtncheck && cardExist && !safeclick) {
            // cardcloseup에서의 back btn
            stage1bg.classList.remove('cardcloseup');
            stage1bg.classList.add('cardclick');
        } else if (backbtncheck && safeclick) {
            // safecloseup 에서의 back btn
            stage1bg.classList.remove('safecloseup');
            stage1bg.classList.add('cardclick');
            safeclick = false;
            numInitialization();
        }
    })
}



// 도끼와 열쇠조각을 클릭하였을 때

function axkeypieceClick() {
    stage1bg.addEventListener('click', function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        if (x >= 430 && x <= 715 && y >= 125 && y <= 500 && axpiecespace) {
            stage1bg.classList.remove('axkeypiece-bg')
            stage1bg.classList.add('axkeypieceClick');
            axclicked = true;
            axkeypieceExist = true;
        }
    })
}

// 도끼가 클릭되어있는 상태에서 서랍을 눌렀을 때 나타나는 함수

function breakDesk() {
    stage1bg.addEventListener('click', function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        if (x >= 560 && x <= 650 && y >= 370 && y <= 420 && axuse && !opendesk) {
            stage1bg.classList.remove('axclick');
            stage1bg.classList.add('breakdesk');
            opendesk = true;
            axuse = false;
            openDesk();
        }
    })
}


// 서랍 클릭시 나타나는 함수

function openDesk() {
    stage1bg.addEventListener('click', function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        if (x >= 560 && x <= 650 && y >= 370 && y <= 420 && opendesk && !axuse) {
            stage1bg.classList.remove('breakdesk');
            stage1bg.classList.add('card');
        }
    })
    back();
    cardClick();
}

// 서랍 안에 있는 카드를 눌렀을 때 나타나는 함수

function cardClick() {
    stage1bg.addEventListener('click', function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        if (x >= 630 && x <= 770 && y >= 405 && y <= 510 && opendesk) {
            stage1bg.classList.remove('card');
            stage1bg.classList.add('cardclick');
            cardExist = true;
        }
    })
    safeClick();
}


// 카드를 획득 후 -> 금고를 클릭하였을 때 나타나는 함수

function safeClick() {
    stage1bg.addEventListener('click', function (e) {
        let x = e.offsetX;
        let y = e.offsetY;

        if (x >= 335 && x <= 450 && y >= 430 && y <= 490 && cardExist) {
            stage1bg.classList.remove('cardclick');
            stage1bg.classList.add('safecloseup');
            safeclick = true;
        }
    })
    back();
    safenumberClick();
}

// 금고에서 번호를 클릭하였을 때 그에 대한 함수
function safenumberClick() {
    const answer = "1225";
    stage1bg.addEventListener('click', function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        let one = (x >= 590 && x <= 650 && y >= 130 && y <= 195 && safeclick);
        let two = (x >= 690 && x <= 750 && y >= 130 && y <= 195 && safeclick);
        let three = (x >= 780 && x <= 840 && y >= 130 && y <= 195 && safeclick);
        let four = (x >= 590 && x <= 650 && y >= 225 && y <= 290 && safeclick);
        let five = (x >= 690 && x <= 750 && y >= 225 && y <= 290 && safeclick);
        let six = (x >= 780 && x <= 840 && y >= 225 && y <= 290 && safeclick);
        let seven = (x >= 590 && x <= 650 && y >= 315 && y <= 380 && safeclick);
        let eight = (x >= 690 && x <= 750 && y >= 315 && y <= 380 && safeclick);
        let nine = (x >= 780 && x <= 840 && y >= 315 && y <= 380 && safeclick);
        let zero = (x >= 690 && x <= 750 && y >= 405 && y <= 470 && safeclick);
        let ac = (x >= 595 && x <= 650 && y >= 405 && y <= 470 && safeclick);
        let del = (x >= 780 && x <= 840 && y >= 405 && y <= 470 && safeclick);
        // 숫자 1 -> offsetX : 590 , 650 / offsetY : 130, 195
        // 숫자 2 -> offsetX : 690 , 750 / offsetY : 130, 195
        // 숫자 3 -> offsetX : 780 , 840 / offsetY : 130, 195
        // 숫자 4 -> offsetX : 590 , 650 / offsetY : 225, 290
        // 숫자 5 -> offsetX : 690 , 750 / offsetY : 225, 290
        // 숫자 6 -> offsetX : 780 , 840 / offsetY : 225, 290
        // 숫자 7 -> offsetX : 590 , 650 / offsetY : 315, 380
        // 숫자 8 -> offsetX : 690 , 750 / offsetY : 315, 380
        // 숫자 9 -> offsetX : 780 , 840 / offsetY : 315, 380
        // 숫자 0 -> offsetX : 690 , 750 / offsetY : 405, 470
        // AC -> offsetX : 595 , 650 / offsetY : 405, 470
        // DEL -> offsetX : 780 , 840 / offsetY : 405, 470
        if (one) {
            if (!firstflag) {
                firstpw.innerHTML = "1";
                firstflag = true;
            }
            else if (firstflag && !secondflag) {
                secondpw.innerHTML = "1";
                secondflag = true;
            }
            else if (firstflag && secondflag && !thirdflag) {
                thirdpw.innerHTML = "1";
                thirdflag = true;
            }
            else if (firstflag && secondflag && thirdflag && !fourthflag) {
                fourthpw.innerHTML = "1";
                let input = firstpw.innerHTML + secondpw.innerHTML + thirdpw.innerHTML + fourthpw.innerHTML;
                if (input === answer) {
                    rightAnswer();
                    numInitialization();
                } else {
                    numInitialization();
                }
            }
        }
        else if (two) {
            if (!firstflag) {
                firstpw.innerHTML = "2";
                firstflag = true;
            }
            else if (firstflag && !secondflag) {
                secondpw.innerHTML = "2";
                secondflag = true;
            }
            else if (firstflag && secondflag && !thirdflag) {
                thirdpw.innerHTML = "2";
                thirdflag = true;
            }
            else if (firstflag && secondflag && thirdflag && !fourthflag) {
                fourthpw.innerHTML = "2";
                let input = firstpw.innerHTML + secondpw.innerHTML + thirdpw.innerHTML + fourthpw.innerHTML;
                if (input === answer) {
                    rightAnswer();
                    numInitialization();
                } else {
                    numInitialization();
                }
            }
        }
        else if (three) {
            if (!firstflag) {
                firstpw.innerHTML = "3";
                firstflag = true;
            }
            else if (firstflag && !secondflag) {
                secondpw.innerHTML = "3";
                secondflag = true;
            }
            else if (firstflag && secondflag && !thirdflag) {
                thirdpw.innerHTML = "3";
                thirdflag = true;
            }
            else if (firstflag && secondflag && thirdflag && !fourthflag) {
                fourthpw.innerHTML = "3";
                let input = firstpw.innerHTML + secondpw.innerHTML + thirdpw.innerHTML + fourthpw.innerHTML;
                if (input === answer) {
                    rightAnswer();
                    numInitialization();
                } else {
                    numInitialization();
                }
            }
        }
        else if (four) {
            if (!firstflag) {
                firstpw.innerHTML = "4";
                firstflag = true;
            }
            else if (firstflag && !secondflag) {
                secondpw.innerHTML = "4";
                secondflag = true;
            }
            else if (firstflag && secondflag && !thirdflag) {
                thirdpw.innerHTML = "4";
                thirdflag = true;
            }
            else if (firstflag && secondflag && thirdflag && !fourthflag) {
                fourthpw.innerHTML = "4";
                let input = firstpw.innerHTML + secondpw.innerHTML + thirdpw.innerHTML + fourthpw.innerHTML;
                if (input === answer) {
                    rightAnswer();
                    numInitialization();
                } else {
                    numInitialization();
                }
            }
        }
        else if (five) {
            if (!firstflag) {
                firstpw.innerHTML = "5";
                firstflag = true;
            }
            else if (firstflag && !secondflag) {
                secondpw.innerHTML = "5";
                secondflag = true;
            }
            else if (firstflag && secondflag && !thirdflag) {
                thirdpw.innerHTML = "5";
                thirdflag = true;
            }
            else if (firstflag && secondflag && thirdflag && !fourthflag) {
                fourthpw.innerHTML = "5";
                let input = firstpw.innerHTML + secondpw.innerHTML + thirdpw.innerHTML + fourthpw.innerHTML;
                if (input === answer) {
                    rightAnswer();
                    numInitialization();
                } else {
                    numInitialization();
                }
            }
        }
        else if (six) {
            if (!firstflag) {
                firstpw.innerHTML = "6";
                firstflag = true;
            }
            else if (firstflag && !secondflag) {
                secondpw.innerHTML = "6";
                secondflag = true;
            }
            else if (firstflag && secondflag && !thirdflag) {
                thirdpw.innerHTML = "6";
                thirdflag = true;
            }
            else if (firstflag && secondflag && thirdflag && !fourthflag) {
                fourthpw.innerHTML = "6";
                let input = firstpw.innerHTML + secondpw.innerHTML + thirdpw.innerHTML + fourthpw.innerHTML;
                if (input === answer) {
                    rightAnswer();
                    numInitialization();
                } else {
                    numInitialization();
                }
            }
        }
        else if (seven) {
            if (!firstflag) {
                firstpw.innerHTML = "7";
                firstflag = true;
            }
            else if (firstflag && !secondflag) {
                secondpw.innerHTML = "7";
                secondflag = true;
            }
            else if (firstflag && secondflag && !thirdflag) {
                thirdpw.innerHTML = "7";
                thirdflag = true;
            }
            else if (firstflag && secondflag && thirdflag && !fourthflag) {
                fourthpw.innerHTML = "7";
                let input = firstpw.innerHTML + secondpw.innerHTML + thirdpw.innerHTML + fourthpw.innerHTML;
                if (input === answer) {
                    rightAnswer();
                    numInitialization();
                } else {
                    numInitialization();
                }
            }
        }
        else if (eight) {
            if (!firstflag) {
                firstpw.innerHTML = "8";
                firstflag = true;
            }
            else if (firstflag && !secondflag) {
                secondpw.innerHTML = "8";
                secondflag = true;
            }
            else if (firstflag && secondflag && !thirdflag) {
                thirdpw.innerHTML = "8";
                thirdflag = true;
            }
            else if (firstflag && secondflag && thirdflag && !fourthflag) {
                fourthpw.innerHTML = "8";
                let input = firstpw.innerHTML + secondpw.innerHTML + thirdpw.innerHTML + fourthpw.innerHTML;
                if (input === answer) {
                    rightAnswer();
                    numInitialization();
                } else {
                    numInitialization();
                }
            }
        }
        else if (nine) {
            if (!firstflag) {
                firstpw.innerHTML = "9";
                firstflag = true;
            }
            else if (firstflag && !secondflag) {
                secondpw.innerHTML = "9";
                secondflag = true;
            }
            else if (firstflag && secondflag && !thirdflag) {
                thirdpw.innerHTML = "9";
                thirdflag = true;
            }
            else if (firstflag && secondflag && thirdflag && !fourthflag) {
                fourthpw.innerHTML = "9";
                let input = firstpw.innerHTML + secondpw.innerHTML + thirdpw.innerHTML + fourthpw.innerHTML;
                if (input === answer) {
                    rightAnswer();
                    numInitialization();
                } else {
                    numInitialization();
                }
            }
        }
        else if (zero) {
            if (!firstflag) {
                firstpw.innerHTML = "0";
                firstflag = true;
            }
            else if (firstflag && !secondflag) {
                secondpw.innerHTML = "0";
                secondflag = true;
            }
            else if (firstflag && secondflag && !thirdflag) {
                thirdpw.innerHTML = "0";
                thirdflag = true;
            }
            else if (firstflag && secondflag && thirdflag && !fourthflag) {
                fourthpw.innerHTML = "0";
                let input = firstpw.innerHTML + secondpw.innerHTML + thirdpw.innerHTML + fourthpw.innerHTML;
                if (input === answer) {
                    rightAnswer();
                    numInitialization();
                } else {
                    numInitialization();
                }
            }
        }
        else if (ac) {
            // console.log("ac : ");
        }
        else if (del) {
            firstflag = false;
            secondflag = false;
            thirdflag = false;
            fourthflag = false;
            firstpw.innerHTML = "";
            secondpw.innerHTML = "";
            thirdpw.innerHTML = "";
            fourthpw.innerHTML = "";
        }
        // 비밀번호 입력되는 창 offsetX : 300 , 500 / offsetY : 270, 385
    })
}

// 금고 번호 초기화 함수

function numInitialization() {
    firstflag = false;
    secondflag = false;
    thirdflag = false;
    fourthflag = false;
    firstpw.innerHTML = "";
    secondpw.innerHTML = "";
    thirdpw.innerHTML = "";
    fourthpw.innerHTML = "";
}


// 금고 번호 맞추었을때 동작 함수

function rightAnswer() {
    safeclick = false;
    stage1bg.classList.remove('safecloseup');
    stage1bg.classList.add('firstkey');
    firstkeyClick();
}


// 첫번째 키 획득 후 동작하는 함수

function firstkeyClick() {
    stage1bg.addEventListener('click', function (e) {
        let x = e.offsetX;
        let y = e.offsetY;

        // offsetX : 600,700 offsetY : 300,390
        if (x >= 605 && x <= 707 && y >= 355 && y <= 475) {
            stage1bg.classList.remove('firstkey');
            stage1bg.classList.add('firstkeyclicked');
        }
    })
    keypiece2Space();
}


// 열쇠 2번째 조각 공간에 들어왔을 시 동작 함수

function keypiece2Space() {
    stage1bg.addEventListener('click', function (e) {
        let x = e.offsetX;
        let y = e.offsetY;

        // offsetX : 245,300 offsetY : 250,340
        if (x >= 245 && x <= 300 && y >= 250 && y <= 340) {
            stage1bg.classList.remove('firstkeyclicked');
            stage1bg.classList.add('keypiece2');
        }
    })
    keypiece2Click();
}

// 해당 공간에서 열쇠 2번째 조각을 클릭 시 동작 함수

function keypiece2Click() {
    stage1bg.addEventListener('click', function (e) {
        let x = e.offsetX;
        let y = e.offsetY;

        if (x >= 570 && x <= 615 && y >= 528 && y <= 590) {
            stage1bg.classList.remove('keypiece2');
            stage1bg.classList.add('keypiece2add');
            keypiece1 = true;
        }
    })
}


// 마지막 열쇠를 얻고 방문을 클릭 시 탈출하는 함수

function escape() {
    const escapeText = document.getElementById('complete');

    stage1bg.addEventListener('click', function (e) {
        let x = e.offsetX;
        let y = e.offsetY;

        // offsetX : 245,300 offsetY : 250,340
        if (x >= 850 && x <= 985 && y >= 150 && y <= 445 && escapeFlag) {
            stage1bg.classList.remove('secondkey');
            stage1bg.classList.add('escape');
            escapeText.innerHTML = "Escape Success"
            clearInterval(timer);
            document.getElementById('times').innerHTML = "Clear"

        }
    })
}

let m = 0;
let s = 0;

function Time() {
    s += 1;
    if (s > 59) {
        m += 1;
        s = 0;
    }
    if (s < 10) {
        document.getElementById('times').innerHTML = m + ":0" + s;
    }
    else {
        document.getElementById('times').innerHTML = m + ":" + s;
    }
    timer = setTimeout(function () { Time() }, 1000);
}


init();
Time();
axkeypieceSpace();
inventory1();
inventory2();
inventory3();
