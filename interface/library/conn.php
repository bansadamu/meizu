<?php
     header('content-type:text/html;charset=utf-8');

     $mysql_config=array(
         'host'=>'localhost:3306',
         'db_user'=>'root',
         'db_pass'=>'banji666',
         'db'=>'meizu.com'
     );
 
     $mysqli=@new mysqli($mysql_config['host'],$mysql_config['db_user'],$mysql_config['db_pass']);
 
     if($mysqli->connect_errno){
         die('连接错误'.$mysqli->connect_errno);
     };
 
     $mysqli->query('set names utf8');
 
     $select_db=$mysqli->select_db($mysql_config['db']);
 
     if(!$select_db){
         die('数据库选择错误'.$mysqli->error);
     };

?>