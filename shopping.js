// import './library/jquery.js';
$(function(){
    // console.log($('.mz-checkbox'));
    // $('._table').on('click',function(){
    //     cha();
    // });
    // function cha(){
        
    // }
    $('._table').on('change',function(ev){
        // console.log(ev.target);
        let x = ev.target;
        let z = $('.cart-product-price-1');
        let a = $(ev.target).attr("data-num");

        // console.log(x.val())
        console.log(x)
        console.log($(z[a]).text());
        console.log($(x).val())
        // console.log(a)




        let z1 = $('.cart-product-price');
        // console.log(z1)
        // console.log($(z[0]).text())


        //总价
        // let bb = $(z1[(a)]);
        // console.log(bb)
        // console.log($(z[(a*1)]).text());

        // 单价
        let aa = $(z[(a*1)]).text()*1;
        // console.log(aa);


        let cc = aa*($(x).val());
        // console.log(cc)
        // console.log($('#_num').val());
        // console.log($('.cart-product-price-1').text());



        let zj = aa*($('#_num').val());




        $($(z1[a])).text(cc)
        
        // alert(1)
    });
});