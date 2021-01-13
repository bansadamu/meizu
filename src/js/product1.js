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
    
        $('.add-car').on('click',function(){
            addItem(res.id, res.price, $('#_num').val());
        });

    }
   
});


function addItem(id, price, num){
    let shop = cookie.get('shop'); // 获得cookie数据
    let product = {
        id,
        price,
        num
    };

    if (shop) { // 判断购物车是否有添加过数据
        shop = JSON.parse(shop); //将JSON字符串转回数组

        // 判断购物车中是否存在该商品
        if (shop.some(elm => elm.id == id)) {
            // 修改数量
            shop.forEach(el => {
                el.id == id ? el.num = num : null;
            });
        } else {
            shop.push(product);
        }

    } else {
        shop = []; // 初始没有数据 初始化一个空数组
        shop.push(product); // 将第一个商品添加进数组
    }


    cookie.set('shop', JSON.stringify(shop), 1);    





}