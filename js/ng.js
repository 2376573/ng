const countSec = 10;
let flag = 1;
let timer;
let count;
function start(){
    clearTimeout(timer);
    clearInterval(count);
    //표그리기
    let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    a.sort(function (){
        return Math.random()-0.5
    });
    let table = "<table class='table-bordered table'><tr>";
    for(let i = 0; i < a.length;i++){
            if(i%4 == 0) table +="</tr><tr>";
            table += "<td class='my-fs-10 fw-bold p-5 text-center w-25'><span class='number'>"+a[i]+"</span></td>";
    }
    table += "</tr></table>";
    $('#numberDiv').html(table);

    //카운트 다운 시작
    countDown(countSec);
}
function countDown(sec){
    $(".timerDiv").html(sec);
    count = setInterval(function (){
        $(".timerDiv").html(--sec);
        if(sec == -1){
            clearInterval(count);
            $(".timerDiv").html("게임 시작!");
            gameStart();
        }
    }, 1000)
}
function gameStart(){
    let num = 1;
    timerStart();
    $(".number").css("opacity","0");

    $("td").on("click", function (){
        if(flag && !$(this).hasClass('checked')){
            flag = 0;
            let now = $(this).text();
            $(this).find(".number").css("opacity","1");
            if(now == num){
                $(".msg").html("정답!");
                $(this).addClass("checked");
                $(this).addClass("bg-primary");
                flag = 1;
                num++;
                if(num == 17){
                    finish();
                    //$('.msg').html("clear!");
                }
            }else{
                $(".msg").html("오답!!!");
                hide(this);
            }
        }
    });
}
function hide(t){
    setTimeout(function (){
        $(t).find(".number").css("opacity","0");
        $(".msg").html("");
        flag = 1;
    },1000);
}
function timerStart(){
    let m = 0, s = 0;
    clearTimeout(timer);
    timer = setInterval(function (){
        let html = "<span>" + makeTwo(m) + ":" + makeTwo(s) + "</span>";
        $(".timerDiv").html(html);
        if(s++ == 60){
            s = 0;
            m++;
        }
    }, 1000);
}

function makeTwo(num){
    if(num < 10) num = "0"+num;
    return num;
}

function finish(){
    let time = $(".timerDiv").text();
    clearInterval(timer);
    $('#clearTime').text(time);
    $('#finish').modal('show');

}