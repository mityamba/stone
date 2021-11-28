var organs = ['heart', 'brain', 'kidneys', 'bladder', 'spleen', 'intestine', 'lungs', 'stomach', 'liver'];

level = 0;
var levels = ['level0', 'level1', 'level2', 'level3', 'level4', 'level5', 'level6', 'level7', 'level8', 'level9'];

function cardTop(param) {
    if (param == 0) {
        document.getElementById('actionDiv').style.display = 'none';
    } else {
        document.getElementById('actionDiv').style.display = 'table';
    }
}

function startTop(param) {
    if (param == 0) {
        document.getElementById('startDiv').style.display = 'none';
    } else {
        document.getElementById('startDiv').style.display = 'table';
    }
}

function descTop(param) {
    if (param == 'q') {
        document.getElementById('descDiv').style.display = 'none';
    } else {
        document.getElementById('descDiv').style.display = 'table';
        document.getElementById('descTitle').innerHTML = descEffect[param][0];
        document.getElementById('descText').innerHTML = descEffect[param][1];
    }
}

function left(param) {
    let r;
    if (window.innerWidth > 720) {
        r = '0px';
    } else {
        r = '0px';
    }
    if (param == 0) {
        document.getElementById('iconDiv').style.left = '-150px';
        document.getElementById('back').style.right = 'calc(100% + 48px)';
        document.getElementById('person').style.left = '-80px';
        document.getElementById('listDiv').style.right = r;
    } else {
        document.getElementById('iconDiv').style.left = '0px';
        document.getElementById('back').style.right = '24px';
        document.getElementById('person').style.left = '0px';
        document.getElementById('listDiv').style.right = '-300px';
        organs.forEach(function(item){
            show(item, 0);
        });
        show('poly', 0);
        show('body', 1);
        show('body-gray', 0);
    }
}

function checkLevel() {
    let id = levels[level];
    document.getElementById(id).style.background = '#63948C';
    if (level > 5) {
        document.getElementById('startDiv').style.display = 'table';
        document.getElementById('actionDiv').style.display = 'none';
        document.getElementById('startDivDivDiv').innerHTML = 'Жив!';
        document.getElementById('startDivDivDiv').style.borderRadius = '12px';
        document.getElementById('startDivDivDiv').style.textAlign = 'center';
        document.getElementById('startDivDivDiv').style.backgroundColor = '#63948C';
        document.getElementById('startDivDivDiv').style.color = 'white';
        document.getElementById('startDivDivDiv').style.width = '100px';
        document.getElementById('startDivDivDivDiv').style.display = 'none';
    }
}

checkLevel();

function nextLevel() {
    left(1);
    setTimeout(function() {
        level = level + 1;
        checkLevel();
        cardTop(1);
        console.log(level);
    }, 600);
}

function show(id, param) {
    let obj = document.getElementById(id);
    if (param == 0) {
        obj.style.fillOpacity = 0;
    }
    if (param == 1) {
        obj.style.fillOpacity = 1;
    }
    if (param == 2) {
        obj.style.fillOpacity = 0.75;
    }
}

function showCheck(b, s, oper, ball, act) {
    setTimeout(function() {
        show('poly', 2);
        show('body', 0);
        show('body-gray', 1);
    }, 1200);
    let sick = document.getElementById('sick');
    let status = document.getElementById('status');
    let down = document.getElementById('down');
    let up = document.getElementById('up');
    let h = document.getElementById('h');
    let health = document.getElementById('health');
    let xp = Number(h.innerHTML);
    let color;
    let k;
    let ballShow;

    sick.innerHTML = act;
    status.style.bottom = b;

    if (oper == 0) {
        k = 1 + (level / 10);
        h.innerHTML = xp - Math.round(ball * k);
        if (h.innerHTML < 0) {
            h.innerHTML = 0;
        }
        color = '#C24332';
        down.style.top = 'calc(100% + 100px)';
        setTimeout(function() {
            down.style.opacity = '0';
        }, 500);
        setTimeout(function() {
            down.style.top = '-700px';
        }, 1000);
        setTimeout(function() {
            down.style.opacity = '0.5';
        }, 1500);
    } else {
        k = 1 - (level / 10);
        h.innerHTML = xp + Math.round(ball * k);
        if (h.innerHTML > 100) {
            h.innerHTML = 100;
        }
        color = '#63948C';
        up.style.bottom = 'calc(100% + 100px)';
        setTimeout(function() {
            up.style.opacity = '0';
        }, 500);
        setTimeout(function() {
            up.style.bottom = '-700px';
        }, 1000);
        setTimeout(function() {
            up.style.opacity = '0.5';
        }, 1500);
        if (h.innerHTML >= 100) {
            h.innerHTML = 100;
        }
    }
    ballShow = Math.round(ball * k);
    status.innerHTML = s + ', ' + ballShow + '%';
    sick.style.color = color;
    status.style.backgroundColor = color;
    health.style.width = h.innerHTML + '%';
    checkHealth();
    setTimeout(function() {
        status.style.bottom = '-100px';
    }, 2000);
}

parameter = [
    [1, 'beerIconImg', 'svg/icon/vine.svg', '72px', 'Урон', 0, 20, 'Алкоголь', '0,1,2', 'beerIcon', '', 1],
    [1, 'marIconImg', 'svg/icon/mar.svg', '72px', 'Урон', 0, 30, 'Наркотики', '0,1', 'marIcon', '', 2],
    [1, 'deathIconImg', 'svg/icon/death.svg', '72px', 'Урон', 0, 50, 'Отрава', '0,1,3,4,5,6,7,8', 'deathIcon', '', 0],
    [3, '', '', '72px', 'Подлечился', 1, 15, 'Лекарство', '0,1,3,4,5,6,7,8', 'pillIcon', 'pillIconUse', 5],
    [1, 'sigIconImg', 'svg/icon/sigar.svg', '72px', 'Урон', 0, 15, 'Курение', '6', 'sigIcon', '', 3],
    [1, 'tpyIconImg2', 'svg/icon/code.svg', '72px', 'Хакатон вреден', 0, 10, 'Перегрев', '0,1,3', 'tpyIcon2', '', 7],
    [1, 'tpyIconImg3', 'svg/icon/code.svg', '72px', 'Хакатон вреден', 0, 10, 'Перегрев', '0,1,3', 'tpyIcon3', '', 7],
    [1, '', '', '72px', 'Ура', 1, 15, 'Бег', '0', 'runIcon', '', 4],
    [2, '', '', '72px', 'Ура', 1, 10, 'Медосмотр', '0', 'medIcon', 'medIconUse', 6],
];

function ballChange(el) {
    if (parameter[el][0] > 0) {
        if (parameter[el][2] != '') {
            setTimeout(function() {
                document.getElementById(parameter[el][1]).src = parameter[el][2];
            }, 500);
        }
        setTimeout(function() {
            cardTop(0);
            showCheck(parameter[el][3], parameter[el][4], parameter[el][5], parameter[el][6], parameter[el][7]);
            setTimeout(function() {
                left(0);
                let organArray = parameter[el][8].split(',');
                organArray.forEach(function(item){
                    show(organs[item], 1);
                });
            }, 1500);
        }, 1500);

        parameter[el][0] = parameter[el][0] - 1;
        if (parameter[el][1] != '') {
            document.getElementById(parameter[el][9]).className = 'Use';
        } else {
            if (parameter[el][0] == 0) {
                document.getElementById(parameter[el][9]).className = 'iconUse';
            }
        }
        if (parameter[el][10] != '') {
            document.getElementById(parameter[el][10]).innerHTML = parameter[el][0];
        }
        sickList(el);
    }
}

function sickList(e) {
    var sickParent = document.getElementById("sickDivDiv");
    var sick = sickParent.getElementsByClassName("list");
    sick = Array.prototype.slice.call(sick);
    sick.forEach(function(elem) {

        let idSick = elem.title;
        let arraySick = linkEffect[idSick];
        arraySick.forEach(function(el) {
            if (el != parameter[e][11]) {
                elem.style.display = 'none';
            } else {
                elem.style.display = 'block';
            }
        });
    });
}

function checkHealth() {
    let healthXP = document.getElementById('health');
    let hXP = document.getElementById('h');
    let heartXP = document.getElementById('hh');
    if (hXP.innerHTML > 75) {
        healthXP.style.backgroundColor = '#63948C';
        document.getElementById('head').style.fillOpacity = '1';
        document.getElementById('head-angry').style.fillOpacity = '0';
    }
    if ((hXP.innerHTML <= 75) && (hXP.innerHTML > 30)) {
        healthXP.style.backgroundColor = 'orange';
        document.getElementById('head').style.fillOpacity = '1';
        document.getElementById('head-angry').style.fillOpacity = '0';
        heartXP.style.display = 'inline';
    }
    if (hXP.innerHTML <= 30) {
        healthXP.style.backgroundColor = '#C24332';
        document.getElementById('head').style.fillOpacity = '0';
        document.getElementById('head-angry').style.fillOpacity = '1';
        heartXP.style.display = 'none';
    }
    if (hXP.innerHTML <= 0) {
        document.getElementById('finish').style.display = 'table';
    }
    if (hXP.innerHTML == 100) {
        healthXP.style.borderRadius = '6px';
    } else {
        healthXP.style.borderRadius = '6px 0px 0px 6px';
    }
}
