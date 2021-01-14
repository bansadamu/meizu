<?php
    include('./library/conn.php');

    $username=$_REQUEST['username'];

    $sql="select * from users where username='$username'";

    $res=$mysqli->query($sql);

    $mysqli->close();

    if($res->num_rows>0){
        // echo '<script>alert("用户名已存在");</script>';
          echo '{"has":true,"msg":"用户名已存在"}';  
    }else{
        // echo '<script>alert("用户名可以使用");</script>';
        echo '{"has":false,"msg":"用户名可以使用"}'; 
    }


?>