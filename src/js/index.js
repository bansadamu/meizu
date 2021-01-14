// import './library/jquery.js';
$.ajax({
    type: "get",
    url: "../../interface/getData.php",
    dataType: "json",
    success: function (res) {
        let temp = '';
        res.forEach((elm,i)=>{
            let picture = JSON.parse(elm.picture);
            temp += `<li class="other-img">
            <a href="./product1.html?id=${elm.id}" target="_blank"><img class="lazy" data-original="${picture[0].src}" alt=""></a>
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

$(function(){

  // 计时器 判断带 active 类名li 做颜色切换
  (function(){
    var count = null;
    setInterval(function(){
    count = $('.carousel-indicators>li').filter(".active").attr("data-slide-to");
    // console.log(count);
    //  console.log($('#logo-img').attr("src")) 
    if(count==0||count==2||count==6){
      $('._logo-l a').css("color","white");
      $('#logo-img').attr("src","../img/meizu2.png")
    }else if(count==4){
      $('._logo-l a').css("color","#1B88EC");   
    } else
     {
      $('._logo-l a').css("color","black");
      $('#logo-img').attr("src","../img/meizu3.png")
    }
    },500)
  })()
  

   

})