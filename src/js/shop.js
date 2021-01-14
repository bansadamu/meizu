import './library/jquery.js';
import { cookie } from './library/cookie.js';

let shop = cookie.get('shop');
if (shop) {
    shop = JSON.parse(shop); // 有cookie数据才需要转换

    let idList = shop.map(elm => elm.id).join(); // 获得所有id

    $.ajax({
        type: "get",
        url: "../../interface/getItems.php",
        data: {
            idList
        },
        dataType: "json",
        success: function (res) {
            let temp = '';
            res.forEach((elm, i) => {
                let picture = JSON.parse(elm.picture);

                // 让ajax获得的数据结果id与cookie中的id  一一对应
                // 索引不同

                // 从购物车的cookie数据中去选择当前遍历的数据
                let arr = shop.filter(val => val.id == elm.id);

                temp += ` <table class="cart-merchant-body s${elm.id}">
                <tr class="cart-product ">
                    <td class="cart-col-select">
                        <input type="checkbox" class="mz-checkbox">
                        <a href="#"><img src="${picture[0].src}" alt=""></a>
                        <a href="#" class="cart-product-info">
                            <p class="cart-product-item-name">
                                ${elm.title}
                            </p>
                            <p class="cart-product-desc">十单元 8699起</p>
                        </a>
                    </td>
                    <td class="cart-col-price">
                        <span class="cart-product-price">
                            ${parseFloat(elm.price).toFixed(2)}
                        </span>
                    </td>
                    <td class="cart-col-number">
                        <div class="mz-adder">
                            <button class="mz-adder-subtract"></button>
                            <div class="mz-adder-num">
                                <input type="number" value="${arr[0].num}" max="${elm.num}" min="1">
                            </div>
                            <button class="mz-adder-add"></button>
                        </div>
                    </td>
                    <td class="cart-col-total" style="color: red;text-align: center;">
                        <span class="cart-product-price">
                        ${(elm.price*arr[0].num).toFixed(2)}
                        </span>
                    </td>
                    <td class="cart-col-ctrl"><a style="color: #8c8c8c;" href="#" data-id="${elm.id}" class="del">删除</a></td>
                </tr>
            </table>`;
              

            // $('.cart-product-price').text((elm.price*arr[0].num).toFixed(2));
            });

            $('.cart-merchant').append(temp).find('.del').on('click',function(){
                let shop2 = shop.filter(el => el.id != $(this).attr('data-id')); // 获得id不匹配的元素
                cookie.set('shop', JSON.stringify(shop2), 1); // 将不匹配的元素从新写进cookie
                location.reload();
            });

           



        }
    });


}
