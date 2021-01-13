import './library/jquery.js';
import { cookie } from './library/cookie.js';

let id = location.search.split('=')[1];
console.log(id);

$.ajax({
    type: "get",
    url: "../../interface/getItem.php",
    data: {
        id: id
    },
    dataType: "json",
    success: function (res) {
        console.log(res);
        let picture = JSON.parse(res.picture);

    //   商品标题
     $('.property-hd>h1').text(res.title);
    //   价格
     $('.property-price-t').text(res.price); 
      // 轮播图片
    $('.carousel-inner img').eq(0).attr("src",picture[0].src);
    $('.carousel-inner img').eq(1).attr("src",picture[1].src);   
    $('.kucun').text(res.num);    
    $('.shop-detail').append(res.details);  
    


    }
   
});