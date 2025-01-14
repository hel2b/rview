$(function(){
    $('.a1,a2').hide();

    $('#q1Btn').click(function(){
        alert('click!');
        $('.a1').toggle();
    });
    $('.a1').click(function(){
        $(this).hide();
    })

    $('#q2Btn').click(function(){
        alert('click!');
        $('.a2').show();
    });
    $('.a2').click(function(){
        $(this).hide();
    })

    var num1=0;
    var num2=0;
    var result=0;

    $('#num1').change(function(){
//입력폼에 값이 변경되면 익명함수의 {} 내부의 명령어를 실행한다.
        num1=$('#num1').val();//val():입력폼에 있는 값을 얻는다.
        $('#result').val(parseInt(num1));
        //val(값):입력폼에 값을 설정한다.
    });


    $('#num2').change(function(){
        num1=$('#num1').val();
        num2=$('#num2').val();
        result=parseInt(num1)+parseInt(num2);
        //값을 정수형으로 바꾼다.
        $('#result').val(result);
        //val(값):입력폼에 값을 설정한다.
        //parseInt(num1)
    });
    
    function multi(){
        num1=$('#mnum1').val();
        num2=$('#mnum2').val();
        result=parseInt(num1)*parseInt(num2);
        //값을 정수형으로 바꾼다.
        $('#mresult').val(result);
    }

    $('#mnum1').change(function(){
        multi();
    });

    $('#mnum2').change(function(){
        multi();
    });

});