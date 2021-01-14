import './library/jquery.js';


$(function(){

    

    // 单个框  改变总价
    (function(){
        $('.cart-merchant-body .mz-checkbox').on('click',function(){  
            
        change1()
              
    })    
    function change1(){
        if($('.cart-merchant-body .mz-checkbox').prop('checked')){
            var price= $('.cart-product>.cart-col-price>.cart-product-price').text()*$('.mz-adder-num input').val()
              
              } else{   
                  
                 price = 0 
         };
         $('.cart-footer-total').text(price);
        
    }
    // change3   input框数值改变
    function change3(){
         $('.mz-adder-num>input').on('change',function(){
            console.log( $('.mz-adder-num>input').val()*$('.cart-product>.cart-col-price>.cart-product-price').text());
        $('.cart-col-total>.cart-product-price').text($('.mz-adder-num>input').val()*$('.cart-product>.cart-col-price>.cart-product-price').text());
        change1()
        
             
    })
    }
    change3()
       

    // change2()   - + 改变val()
    function change2(){
        $('.mz-adder-subtract').on('click',function(){
            $('.mz-adder-num>input').val(parseInt($('.mz-adder-num>input').val())-1);  
            change1() 
            change3()                 
            })
    
        $('.mz-adder-add').on('click',function(){
            $('.mz-adder-num>input').val(parseInt($('.mz-adder-num>input').val())+1);
            change1() 
            change3()                   
            })                    
        };
        change2();
    })();
   
    // 复选框联动
    (function(){
        let other=$('.mz-checkbox').not($('.check-all'));
       
        $('.check-all').on('click',function(){

        $('.mz-checkbox').prop('checked', $('.check-all').prop('checked'));
                
        })
        
        other.on('click',function(){   

    let isAllCheck = Array.from(other).every(el=> $(el).prop('checked'));

    isAllCheck?$('.check-all').prop('checked',true):$('.check-all').prop('checked',false)
        })

    })();
        

    function _abc(){
        let other=$('.iconright').not($('.rightall'));
 $('.rightall').on('click', function () {
     $(this).toggleClass('checked');
     if($(this).hasClass('checked')){
         !other.has('checked') || other.addClass('checked');
     }else{
         other.has('checked') && other.removeClass('checked');
     }
 });
 other.on('click', function () {
     $(this).toggleClass('checked');
     let isAllCheck = Array.from(other).every(el=> $(el).hasClass('checked'));
     isAllCheck?$('.rightall').addClass('checked'):$('.rightall').removeClass('checked')
 })

    }
      
 
    

})