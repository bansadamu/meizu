import './library/jquery.js';


$(function(){
    var total = 0;
    let x = null;
    let a = null;
    let z = null;
    let z1 = null;

    $('._table').on('change',function(ev){
        // console.log(ev.target)
         x = ev.target;        //  输入框
         a = $(ev.target).attr("data-num"); // 索引
         z = $('.cart-product-price-1');  // 选中 每个单价
       
         z1 = $('.cart-product-price');   // 一个种类总价(多个)
        
        $(z1[a]).text($(x).val()*$(z[a]).text()); // 计算单类总价
   
        // console.log(Array.from(z1))

        Array.from(z1).forEach(function(el){

          total +=  $(el).text()*1
        })

        console.log(total)
        $('.cart-footer-total').text(total)
    });






    // 单个框  改变总价
//     (function(){
//         $('.cart-merchant-body .mz-checkbox').on('click',function(){  
            
//         change1()
              
//     })    
//     function change1(){
//         if($('.cart-merchant-body .mz-checkbox').prop('checked')){
//             var price= $('.cart-product>.cart-col-price>.cart-product-price').text()*$('.mz-adder-num input').val()
              
//               } else{   
                  
//                  price = 0 
//          };
//          $('.cart-footer-total').text(price);
        
//     }
//     // change3   input框数值改变
//     function change3(){
//          $('.mz-adder-num>input').on('change',function(){
//             console.log( $('.mz-adder-num>input').val()*$('.cart-product>.cart-col-price>.cart-product-price').text());
//         $('.cart-col-total>.cart-product-price').text($('.mz-adder-num>input').val()*$('.cart-product>.cart-col-price>.cart-product-price').text());

// // 购物车商品总数

//     let count = $('.mz-adder-num>input').val();
//     $('.cart-footer-num').text(count);
           


//         change1()                     
//     })
//     }
//     change3()
       

//     // change2()   - + 改变val()
//     function change2(){
//         $('.mz-adder-subtract').on('click',function(){
//             $('.mz-adder-num>input').val(parseInt($('.mz-adder-num>input').val())-1);  
//             change1() 
//             change3()                 
//             })
    
//         $('.mz-adder-add').on('click',function(){
//             $('.mz-adder-num>input').val(parseInt($('.mz-adder-num>input').val())+1);
//             change1() 
//             change3()                   
//             })                    
//         };
//         change2();
//     })();
   
    // 复选框联动
    (function(){
        let other=$('.mz-checkbox').not($('.check-all'));
       
        $('.check-all').on('click',function(){

        $('.mz-checkbox').prop('checked', $(this).prop('checked'));
           $('.mz-btn').css('background-color','#008CFF')     
        })
        
        other.on('click',function(){   

    let isAllCheck = Array.from(other).every(el=> $(el).prop('checked'));
    $('.mz-btn').css('background-color','#008CFF') 
    isAllCheck?$('.check-all').prop('checked',true):$('.check-all').prop('checked',false);
    isAllCheck?$('.mz-btn').css('background-color','#008CFF'):$('.mz-btn').css('background-color','#DBDBDB');  

    let count = $('.mz-checkbox').not($('.check-all')).length;
            console.log(count);
         $('.cart-footer-num').text(count);

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