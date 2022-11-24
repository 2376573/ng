const countSec = 10; // 시작 할 때 카운트를 지정하는 변수
let flag = 1; // 바로 클릭하지 못하도록 하는 변수
let timer;
let count;
function start(){
    clearTimeout(timer); // 그 전에 실행했던 timer가 남아있을 시 초기화 시킴
    clearInterval(count); // 그 전에 실행했던 count가 남아있을 시 초기화 시킴
    //표그리기
    let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    a.sort(function (){
        return Math.random()-0.5
    }); //랜덤 값 생성
    let table = "<table class='table-bordered table'><tr>";
    for(let i = 0; i < a.length;i++){
            if(i%4 == 0) table +="</tr><tr>";
            table += "<td class='my-fs-10 fw-bold p-5 text-center w-25'><span class='number'>"+a[i]+"</span></td>";
    }
    table += "</tr></table>"; // 테이블 제작
    $('#numberDiv').html(table); // numberDiv 클래스에 테이블 삽입

    //카운트 다운 시작
    countDown(countSec);
}
function countDown(sec){
    $(".timerDiv").html(sec); //timerDiv 클래스에 카운트가 나타나도록 설정
    count = setInterval(function (){
        $(".timerDiv").html(--sec); //sec를 1초마다 하나씩 뺌
        if(sec == -1){ // 화면에 0초까지 보이게 하고 -1초가 된 즉시 게임시작
            clearInterval(count);
            $(".timerDiv").html("게임 시작!");
            gameStart();
        }
    }, 1000)
}
function gameStart(){
    let num = 1;
    timerStart(); //타이머 시작
    $(".number").css("opacity","0"); // 모든 number 클래스(숫자가 담겨있음)를 안보이게 만듬

    $("td").on("click", function (){
        if(flag && !$(this).hasClass('checked')){ // flag가 1이고 클릭한 td에 checked가 없다면
            flag = 0; // flag 초기화
            let now = $(this).text(); // 현재 클릭한 td의 숫자
            $(this).find(".number").css("opacity","1"); // 클릭한 td안에 number 클래스를 보이게 함
            if(now == num){ // 클릭한 숫자가 정답이라면
                $(".msg").html("정답!"); // 정답을 띄우고
                $(this).addClass("checked"); // 클릭한 곳에 checked 클래스 추가
                $(this).addClass("bg-primary"); // 배경색을 파랗게 함
                flag = 1; // flag를 다시 1로 변경
                num++; // 다음 숫자 지정
                if(num == 17){ // 숫자를 16까지 다 맞추면 끝남
                    finish();
                }
            }else{ // 클릭한 숫자가 오답이라면
                $(".msg").html("오답!!!"); // 오답을 띄우고
                hide(this); // 다시 감춤
            }
        }
    });
}
function hide(t){
    setTimeout(function (){
        $(t).find(".number").css("opacity","0"); // 클릭한 td안에 number클래스를 다시 안보이게 함
        $(".msg").html(""); // 메시지 초기화
        flag = 1; // flag를 다시 활성화
    },1000); // 1초 후 실행 되도록 함(1초 동안 오답 글자를 띄우고 클릭을 못하게 하기 위함)
}
function timerStart(){
    let m = 0, s = 0;
    clearTimeout(timer); // 기존에 타이머 변수가 활성화 되어 있었으면 멈추기
    timer = setInterval(function (){
        let html = "<span>" + makeTwo(m) + ":" + makeTwo(s) + "</span>";
        $(".timerDiv").html(html); // timerDiv에 (분 : 초) 추가
        if(s++ == 60){ // 60초가 되면 m++을 해줌
            s = 0;
            m++;
        }
    }, 1000); // 타이머 변수 실행
}

function makeTwo(num){
    if(num < 10) num = "0"+num;
    return num;
} // 분이나 초가 한자리 수 일 경우 앞에 0을 추가함 (ex 01

function finish(){
    let time = $(".timerDiv").text();
    clearInterval(timer); // 타이머 멈춤
    $('#clearTime').text(time); // clearTime에 기록을 띄움
    $('#finish').modal('show'); // modal이 띄워지게함
}