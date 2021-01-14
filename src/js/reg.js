import './library/jquery.js';

$(function(){
    $('#username').on('input',function(){
        // console.log("输入中");
        $.ajax({
            type: "get",
            url: "../../interface/hasuser.php",
            data: {
                'username': $('#username').val()
            },
            // dataType: "json",
            success: function (res) {               
                res= JSON.parse(res);
                // console.log(res);                
                if($('#username').val()){
                    if(res.has){
                     
                        $('#_has').text(res.msg);
                    }else {
                        
                        $('#_has').text(res.msg);
                    }
                }else{
                    $('#_has').text(" ")            
                }                
            }
        });  
        console.log($('._agree').prop('checked'))
    });

    // 判断是否勾选注册
    $('#_reg>input').attr('disabled','disabled');

    $('._agree').on('click',function(){
        if($('._agree').prop('checked')){
            $('#_reg>input').removeAttr('disabled');    
            } else{    
            $('#_reg>input').attr('disabled','disabled');    
       };
    })

   
  

})