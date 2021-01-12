// import './library/jquery';
$.ajax({
    type: "get",
    url: "../../interface/getData.php",
    dataType: "json",
    success: function (res) {
        console.log(res);
    }
});