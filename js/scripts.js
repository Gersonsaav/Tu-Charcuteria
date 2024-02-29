$(document).ready(function () {
    let productos = [];
    let items = {
        id: 0
    }
    mostrar();
    $('.navbar-nav .nav-link[category="all"]').addClass('active');

    $('.nav-link').click(function () {
        let productos = $(this).attr('category');

        $('.nav-link').removeClass('active');
        $(this).addClass('active');

        $('.productos').css('transform', 'scale(0)');

        function ocultar() {
            $('.productos').hide();
        }
        setTimeout(ocultar, 1);

        function mostrar() {
            $('.productos[category="' + productos + '"]').show();
            $('.productos[category="' + productos + '"]').css('transform', 'scale(1)');
        }
        setTimeout(mostrar, 1);
    });

    $('.nav-link[category="all"]').click(function () {
        function mostrarTodo() {
            $('.productos').show();
            $('.productos').css('transform', 'scale(1)');
        }
        setTimeout(mostrarTodo, 1);
    });

    $('.agregar').click( function(e){
        e.preventDefault();
        const id = $(this).data('id');
        items = {
            id: id
        }
        
        asd = localStorage.getItem('productos');
        if (asd == null) {
        productos.push(items);
        localStorage.setItem('productos', JSON.stringify(productos));
        mostrar();
        return;
        }
        n = asd.search(id);
        if (n=="-1"){
        productos.push(items);
        localStorage.setItem('productos', JSON.stringify(productos));
        mostrar();
        return;
        }
        alert("ESTE ARTICULO YA SE ENCUENTRA EN EL CARRITO");

    })
    $('#btnCarrito').click(function(e){
    
str1 = localStorage.getItem('productos');
if (str1==null){
alert("DEBE INGRESAR POR LO MINIMO UN PRODUCTO PARA PODER AVANZAR A ESTA SECCION");
return;
}
        $('#btnCarrito').attr('href','carrito.php');
        
    })
    $('#btnVaciar').click(function(){
        localStorage.removeItem("productos");
        $('#tblCarrito').html('');
        $('#total_pagar').text('0.00');
        location.replace('index.php');
    })
    //categoria
    $('#abrirCategoria').click(function(){
        $('#categorias').modal('show');
    })
    //productos
    $('#abrirProducto').click(function () {
        $('#productos').modal('show');
    })
    $('.eliminar').click(function(e){
        e.preventDefault();
        if (confirm('Esta seguro de eliminar?')) {
            this.submit();
        }
    })
});

function mostrar(){
    if (localStorage.getItem("productos") != null) {
        let array = JSON.parse(localStorage.getItem('productos'));
        if (array) {
            $('#carrito').text(array.length);
        }
    }
}

        function sumarCantidad(event){
        var res = document.getElementById(event + 'cantidad').innerText;
        var dat = document.getElementById(event + 'precio-real').innerText;
        if (res<9 && res>=1){var dat1=dat;var tipo="kg";res++;cuentas(event,dat1,res);return;}
        if (res==9){res="1";var dat1=dat;var tipo="kg";cuentas(event,dat1,res);return;}
        if (res=="900"){var dat1=dat;var tipo="kg";res=1;cuentas(event,dat1,res);return;}
        if (res<900 && res>100){res=(Number(res)+100);var dat1=dat/1000;var tipo="g";cuentas(event,dat1,res);return;}
        alert(res);
        }
        
        function restarCantidad(event){
        var res = document.getElementById(event + 'cantidad').innerText;
        var dat = document.getElementById(event + 'precio-real').innerText;
        if (res<10 && res>1){var dat1=dat;res--;var tipo="g";cuentas(event,dat1,res);return;}
        if (res==1){res="900";var dat1=dat/1000;var tipo="g";cuentas(event,dat1,res);return;}
        if (res<=900 && res>100){var dat1=dat/1000;res=res-100;var tipo="g";cuentas(event,dat1,res);return;}
        var dat1=dat;res=1;var tipo="kg";cuentas(event,dat1,res);return;
        }
        
    function cuentas(event,dat1,res,tipo) {
        document.getElementById(event + 'cantidad').innerText=res;
        var multidat0 = (dat1 * res);
        document.getElementById(event + 'precio-neto').innerText = (multidat0);
        sumartotal();
        }
         
$(document).ready(function () {
  var trigger = $(".hamburger"),
    overlay = $(".overlay"),
    isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {
    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass("is-open");
      trigger.addClass("is-closed");
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass("is-closed");
      trigger.addClass("is-open");
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function () {
    $("#wrapper").toggleClass("toggled");
  });
});

        function eliminaritem(id) {
            jsShowWindowLoad();
let productos = [];
str = localStorage.getItem('productos');
ttt = ('{"id":' + id + '},')
 n = str.search(ttt);
if (n=="-1"){ttt = (',{"id":' + id + '}')
}
n = str.search(ttt);
if (n=="-1"){
localStorage.removeItem("productos");
location.replace('index.php');
return;
}

let daa = str.split('[').join('');
let daa1 = daa.split(']').join('');
let daa2 = daa1.split(ttt).join('');
armar = ("[" + daa2 + "]");
localStorage.setItem('productos', armar);

        mostrarCarrito();
}
function sumartotal() {
    var total = 0;
    asd = document.getElementsByClassName('precio-neto');
    for(var i=0; i< asd.length;i++){
    var item = asd[i];
    var precio = (document.getElementsByClassName('precio-neto')[i].innerText);
    total +=Number(precio);
    }
    var dol = (total/36.6);
    let num = (dol);
    document.getElementsByClassName('total_pagar')[0].innerText=("Bs " + total + "  ||  $ " +num.toPrecision(5));
    }       
function jsRemoveWindowLoad() {
    // eliminamos el div que bloquea pantalla
    $("#WindowLoad").remove();
 
}

function jsShowWindowLoad(){
    var mensaje = "Eliminando ITEM porfavor espere...";
    //eliminamos si existe un div ya bloqueando

    //centrar imagen gif
    height = 20;//El div del titulo, para que se vea mas arriba (H)
    var ancho = 0;
    var alto = 0;
 
    //obtenemos el ancho y alto de la ventana de nuestro navegador, compatible con todos los navegadores
    if (window.innerWidth == undefined) ancho = window.screen.width;
    else ancho = window.innerWidth;
    if (window.innerHeight == undefined) alto = window.screen.height;
    else alto = window.innerHeight;
 
    //operación necesaria para centrar el div que muestra el mensaje
    var heightdivsito = alto/2-25 - parseInt(height)/2-25;//Se utiliza en el margen superior, para centrar
 
   //imagen que aparece mientras nuestro div es mostrado y da apariencia de cargando
    imgCentro = "<div style='text-align:center;height:" + alto + "px;'><div  style='color:#000;margin-top:" + heightdivsito + "px; font-size:20px;font-weight:bold'><img width=100 height=100 src='img/loading-25.gif'></div></div>";
 
        //creamos el div que bloquea grande------------------------------------------
        div = document.createElement("div");
        div.id = "WindowLoad"
        div.style.width = ancho + "px";
        div.style.height = alto + "px";
        $("body").append(div);
 
        //creamos un input text para que el foco se plasme en este y el usuario no pueda escribir en nada de atras
        input = document.createElement("input");
        input.id = "focusInput";
        input.type = "text"
 
        //asignamos el div que bloquea
        $("#WindowLoad").append(input);
 
        //asignamos el foco y ocultamos el input text
        $("#focusInput").focus();
        $("#focusInput").hide();
 
        //centramos el div del texto
        $("#WindowLoad").html(imgCentro);
}
$(document).ready(function () {
  $("form")
    .find(".btn1")
    .on("click", function () {
asd = (document.getElementsByClassName('user1')[0].value);
if (!asd == "") {enviar();return;}
      $(this).parent().css({
        height: "350px",
        transform: "translateY(-50px)"
      });
      $(this).siblings(".form-group1").css({
        top: "15%"
      });
      $(this).siblings(".links1").css({
        top: "1%"
      });
    });

  /*-------- focus in ---------*/
  $(".pwd1").on("focusin", function () {
    $(this).siblings(".user1").css({
      "z-index": "1",
      background: "rgba(0,0,0,.1)"
    });
    $(this).css({
      "z-index": "2",
      background: "#fff"
    });
  });

  $(".user1").on("focusin", function () {
    $(this).siblings(".pwd1").css({
      "z-index": "1",
      background: "rgba(0,0,0,.1)"
    });
    $(this).css({
      "z-index": "2",
      background: "#fff"
    });
  });

  /*----------- focus out ---------*/
  $(".pwd1").on("focusout", function () {
    $(this).siblings(".user1").css({
      "z-index": "1",
      background: "rgba(0,0,0,.1)"
    });
    $(this).css({
      "z-index": "2",
      background: "#fff"
    });
  });

  $(".user1").on("focusout", function () {
    $(this).siblings(".pwd1").css({
      "z-index": "1",
      background: "rgba(0,0,0,.1)"
    });
    $(this).css({
      "z-index": "2",
      background: "#fff"
    });
  });
});

$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});

//submit en javascript

    $('.envio').click(function(e){
        e.preventDefault();
        if (document.datauser.cliente.value==""){document.getElementById('cliente').focus();return;}
                if (document.datauser.cicliente.value==""){document.getElementById('cicliente').focus();return;}
                        if (document.datauser.telefono.value==""){document.getElementById('telefono').focus();return;}
        if (confirm('Esta seguro de enviar?')) {
            jsShowWindowLoad();

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
                            var pedido= "";
                            const res = JSON.parse(response);
                            let html = '';
                            
                            res.datos.forEach(element => {
                            pedido = (element.id + "," + document.getElementById(element.id + 'cantidad').innerText + ":" + pedido);

                            });
                            document.datauser.compra.value = pedido;
                            document.datauser.submit();
                        },
                        error: function(error) {
                            console.log(error);
                        }
                    });
                }
            }


//event.preventDefault();
//document.pedido.submit()
        }
    })
function ultimopaso() {
const valores = window.location.search;
if (valores == ""){return;}
//Creamos la instancia
const urlParams = new URLSearchParams(valores);
//Accedemos a los valores
id = urlParams.get('id');
client = urlParams.get('cliente');
ci = urlParams.get('ci');
if (id==""){return;}
if (client==""){return;}
if (ci==""){return;}
localStorage.removeItem("productos");
document.getElementById('id').innerText = ("Nro Pedido : " +id);
document.getElementById('nombre').innerText = ("Estimado   :  " +client);
document.getElementById('ci').innerText = ("Cedula     :  " +ci);
}
function whatsapp() {
    var wsp = ("_Pedido%C2%A0:_%C2%A0_*"+id+"*_%0A_Cliente%C2%A0:_%C2%A0_*"+client+"*_%0A_Cedula%C2%A0:_%C2%A0_*"+ci+"*_%0A&type=phone_number&app_absent=1");
window.open("https://api.whatsapp.com/send/?phone=%2B584249499666&text="+wsp);
location.href="index.php";
}