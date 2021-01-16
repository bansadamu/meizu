<?php
    include('../interface/library/conn.php');

    $phone=$_REQUEST['phone'];
    // $password=$_REQUEST['password'];

    $sql="select * from users where phone='$phone'";

    $result=$mysqli->query($sql);

    $mysqli->close();

    if($result->num_rows>0){

        $row=$result->fetch_assoc();
        
        setcookie('username',$row['username'],time()+3600*24,'/');
        setcookie('isLogined','true',time()+3600*24,'/');
        
        echo '<script>alert("登录成功");</script>';
        echo '<script>location.href="../src/html/index1.html"</script>';
    
    }else{
        echo '<script>alert("手机号错误，登录失败");</script>';
        echo '<script>location.href="../src/html/login.html"</script>';
    }

?>