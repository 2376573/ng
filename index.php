<!doctype html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/ng.js?<?=rand()?>"></script>
    <div class="container">
        <div class="">
            <!--만들기 버튼-->
            <button class="btn btn-primary form-control" onclick="start()">
                만들기
            </button> 
        </div>
        <div class="row">
            <!--메시지 띄우는 곳-->
            <div  class="col-6 text-center bg-light msg">
                메시지
            </div>
            <!--타이머(count와 timer 모두) 띄우는 곳-->
            <div class="col-6 text-center bg-danger timerDiv">
                타이머
            </div>
        </div>
        <!--테이블이 생성되는 곳-->
        <div id="numberDiv">

        </div>
    </div>
    <!-- 게임이 종료되면 나오는 기록 및 축하 메시지 -->
    <div class="modal fade" id="finish" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">축하합니다.</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    축하합니다. <span id = "clearTime" class="text-bg-primary"></span>만큼 걸리셨습니다.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
