<?php
    $host = "bwgrj0fsjdvfwlnjothb-mysql.services.clever-cloud.com";
    $user = "ulgam32m6go9rhbi";
    $clave = "F9qvRp6R8erwly4Z85Q1";
    $bd = "bwgrj0fsjdvfwlnjothb";
    $conexion = mysqli_connect($host,$user,$clave,$bd);
    if (mysqli_connect_errno()){
        echo "No se pudo conectar a la base de datos";
        exit();
    }
    mysqli_select_db($conexion,$bd) or die("No se encuentra la base de datos");
    mysqli_set_charset($conexion,"utf8");