<?php require_once "config/conexion.php";
require_once "config/config.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Carrito de Compras</title>
    <!-- Favicon-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Bootstrap icons-->
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" /> -->
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="assets/css/styles.css" rel="stylesheet" />
    <link href="assets/css/estilos.css" rel="stylesheet" />
</head>
<body></body>
 <div id="wrapper">
   <div class="overlay"></div>
    
        <!-- Sidebar -->
    <nav class="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
     <ul class="nav sidebar-nav">
       <div class="sidebar-header">
       <div class="sidebar-brand">
         <a href="admin">ADMINISTRADOR</a></div></div>
       <li><a href=# id="btnVaciar">Vaciar Carrito</a></li>
      <li><a href="javascript:history.back()">Volver</a></li>
      </ul>
  </nav><br>
              <div><center><th><font color=white><strong>INV. MIS DOS HIJOS S&L 27 C.A</strong></font></th><br><th><font size=1 color=white>RIF: 123456789</font></th></center>
                  	<span class="ir-arriba">Subir</span>
          <div id="page-content-wrapper">
            <button type="button" class="hamburger animated fadeInLeft is-closed" data-toggle="offcanvas">
                <span class="hamb-top"></span>
    			<span class="hamb-middle"></span>
				<span class="hamb-bottom"></span>
            </button>
    <!-- Header-->

    <section class="py-5">
        <div class="container px-4 px-lg-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="table-responsive">

  </div>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    
                                    <th><font color=white>Producto</font></th>
                                    <th><font color=white>Precio</font></th>
                                    <th><font size=3 color=white>Cantidad</font></th>
                                    <th><font color=white>Sub Total</font></th>
                                    <th> </th>
                                    
                                </tr>
                            </thead>
                            <div class=contar>
                                <div class=items>
                            <tbody id="tblCarrito">
                            

                            </tbody>
                            </div>
                            </div>
                        </table>
                    </div>
                </div>
                <div class="col-md-5 ms-auto">
                    <h4 align=center><font color=white>TOTAL    <span id="total_pagar" class="total_pagar"><font color=white>0.00</span></h4>
                    <h4 align=center><font size=2 color=yellow><span id="tasa_dia" class="tasa_dia"><font size=2 color=yellow>Tasa del dia 36.60 | BCV - 27/02/2024</span></h4>
                    <br><br>
                    <div class="d-grid gap-2">
                        
            <form action="admin/pedido.php" class="login1" method="post" name="datauser">
    <div class="form-group1">
  <td></td><input type="text" id=cliente class="user1" name="cliente" placeholder="Nombre y Apellido" required></input></td>
  <input type="text" id=cicliente class="pwd1" name="cicliente" placeholder="Nro Cedula" required></input>
  <input type="text" id=telefono class="pwd2" name="telefono" placeholder="Telefono" required></input>
  <input type="text" class="hidd" name="compra"></input>
  <input type="submit" class="enviarr envio" value="ENVIAR"></input>
    </div>
  <span class="links1">
      <center>
   <a align=center href="#">Introduzca sus datos para poder procesar SU pedido</a></center>
  </span>
       
  <input type="button" class="btn1" value="REGISTRAR PEDIDO">     
</form>

                    </div>
                </div>
            </div>

    </section>
    <br>
    <!-- Footer-->
    <footer class="py-5 bg-dark">
        <div class="container">
<p class="m-0 text-center text-white">&copy; <font size=2>2021, TU Charcuteria C.A &#9763;</font><br>
&#174; <font size=2> Powered by: <strong>Gerson Saavedra </strong>&#9775;</font><br>
<img src=img/no.gif with=20 height=20></img></p>
        </div>
        <br><br>
    </footer>
    <!-- Core theme JS-->
    <script src="assets/js/jquery-3.6.0.min.js"></script>
    <script src="assets/js/scripts.js"></script>
    <script>
        mostrarCarrito();
jsShowWindowLoad();
        function mostrarCarrito() {
            if (localStorage.getItem("productos") != null) {
                let array = JSON.parse(localStorage.getItem('productos'));
                if (array.length > 0) {
                    $.ajax({
                        url: 'ajax.php',
                        type: 'POST',
                        async: true,
                        data: {
                            action: 'buscar',
                            data: array
                        },
                        success: function(response) {
                            console.log(response);
                            const res = JSON.parse(response);
                            let html = '';
                            res.datos.forEach(element => {
                                html += `
                            <tr>
<td>${element.nombre}</td>
<td id="${element.id}precio-real">${element.precio}</td>
<td align=center><center><font size=4><i onclick="restarCantidad(${element.id})" class="fa-solid fa-circle-minus"></i>
<a id="${element.id}cantidad">1</a><i onclick="sumarCantidad(${element.id})" class="fa-solid fa-circle-plus sumar-cantidad"></i></font></center></td>
<td align=center id="${element.id}precio-neto" class="precio-neto">${element.precio}</td>
<td><font size=5 color=red><i onclick="eliminaritem(${element.id})" class="fa-solid fa-trash"></i></font></td>
                            </tr>
                            `;
                            });
                            var tot = Math.trunc(res.total * 100)/100;
                            var tota = Intl.NumberFormat().format(tot);
                            var dol = (res.total/36.6);
                            var dola = Intl.NumberFormat().format(dol);
                            $('#tblCarrito').html(html);
                            $('#total_pagar').text("Bs " + tota + ",00  ||  $ " +dola);
                            jsRemoveWindowLoad()
                        },
                        error: function(error) {
                            console.log(error);
                        }
                    });
                }
            }
        }
    </script>
    </body>
        
        </div>
</html>