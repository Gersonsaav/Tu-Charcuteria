<?php
include("../config/conexion.php");

if (isset($_POST)) {
    if (!empty($_POST)) {
        $cliente = $_POST['cliente'];
        $cicliente = $_POST['cicliente'];
        $telefono = $_POST['telefono'];
        $compra = $_POST['compra'];
        $query = mysqli_query($conexion, "INSERT INTO pedidos(CLIENTE, CICLIENTE, TELEFONO, PEDIDO, STATUS) VALUES ('$cliente', '$cicliente', '$telefono', '$compra', '1')");
        $last_id = $conexion->insert_id;

        if ($query) {
        $redirec = "Location: ../bye.php?id=$last_id&cliente=$cliente&ci=$cicliente";
            header($redirec);
        }

            }
        }

?>