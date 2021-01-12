// import './library/jquery';
$.ajax({
    type: "get",
    url: "../../interface/getData.php",
    dataType: "json",
    success: function (res) {
        let temp = '';
        res.forEach((elm,i)=>{
            let picture = JSON.parse(elm.picture);
            temp += `<li class="other-img">
            <a href="./product1.html?id=${elm.id}"><img class="lazy" data-original="${picture[0].src}" alt=""></a>
            <div>
              <p>${elm.title}</p>
              <p>博物馆级健康光 RG0 舒适低蓝光 磁吸随贴安装</p>
              <p>￥${elm.price}</p>
            </div>
          </li>`;
        });
        $('.product-list>._project').append(temp);
    }
});