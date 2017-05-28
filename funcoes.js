var inicio = 0;
var bgImgIndex = 0;
var usuarioLogado;
var carrinho = '{"produtos":[]}';
var precototal = 0;
var horario = -1;
var petID = -1;
var goToAgendamento = -1;
var goToMinhaConta = -1;

function refreshNav(){
    $(".navLoja a").on("click", function(){
       $(".navLoja").find(".active").removeClass("active");
       $(this).addClass("active");
    });
}

function loadProdPage(name, idName, tipo, animal){
    var path = name + " #" + idName;
    $( "#success" ).load( "/" + path, function( response, status, xhr ) {
      if ( status == "error" ) {
        var msg = "Sorry but there was an error: ";
        $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
      }
    });
    loadDoc(tipo, animal);
}

function loadDoc(tipo, animal) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this, tipo, animal);
    }
  };
  xhttp.open("GET", "produtos.xml", true);
  xhttp.send();
}

function myFunction(xml, tipo, animal) {
  var i;
  var xmlDoc = xml.responseXML;
  var prod= "";
  prod+= '  <br><br><br><br><br><div class="w3-ontainer w3-padding-32 w3-hide-small"></div><button class="w3-button w3-teal w3-xlarge w3-hide-large  w3-black" id="openNav" onclick="w3_open()">&#9776;</button><div class="w3-sidebar w3-bar-block w3-collapse w3-card-2 w3-animate-left w3-light-gray" style="width:250px;display:none;" id="mySidebar" onclick="w3_close()"><button class="w3-bar-item w3-button w3-large w3-hide-large" onclick="w3_close()">Close &times;</button><a href="#" class="w3-bar-item w3-button w3-hover-teal" onclick="loadDoc(\'COMIDA\', \'' + animal.toUpperCase() + '\')">Alimentos</a><a href="#" class="w3-bar-item w3-button w3-hover-teal" onclick="loadDoc(\'CASA\', \'' + animal.toUpperCase() + '\')">Casinha</a><a href="#" class="w3-bar-item w3-button w3-hover-teal" onclick="loadDoc(\'SAUDE\', \'' + animal.toUpperCase() + '\')">Saude e Higiene</a><a href="#" class="w3-bar-item w3-button w3-hover-teal" onclick="loadDoc(\'OUTRO\',  \'' + animal.toUpperCase() + '\')">Outros</a></div>';
  prod+='<div class="w3-main" id="prodContainer">';
  var show = false, show2 = false;
  var x = xmlDoc.getElementsByTagName("PRODUTO");
  var y = xmlDoc.getElementsByTagName("PARA");
  for (i = 0; i <x.length; i++) {
    show1 = false; show2 = false;
    for(j = 0 ; j < y[i].getElementsByTagName("ANIMAL").length ; j++){
        if(y[i].getElementsByTagName("ANIMAL")[j].childNodes[0].nodeValue.toUpperCase() == animal){
            show1 = true;
        }
    }
    if(x[i].getElementsByTagName("TIPO")[0].childNodes[0].nodeValue.toUpperCase() == tipo){
        show2 = true;
    }
    if(show1 & show2){
        prod += '\n<a href="#prod" onclick=\'loadPageDesc("' + x[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue + '")\'>' +
                    '<div class = "cao-produto">\n' +
                        '<img class = "w3-image cao-image" src = "img/' + x[i].getElementsByTagName("FOTO")[0].childNodes[0].nodeValue + '" alt = "Ração"/>\n' +
                            '<div class="cao-container">\n' +
                                '<p class = "descricao">' + x[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue +
                                    '<br><span class = "descricao">'  + x[i].getElementsByTagName("TIPO")[0].childNodes[0].nodeValue + '</span><br><span class = "preco">R$' + x[i].getElementsByTagName("PRECO")[0].childNodes[0].nodeValue +'</span>' +
                                '</p>\n' +
                            '</div>\n' +
                    '</div>' +
                '</a>\n' ;
    }

  }
  prod+= '</div>'
  document.getElementById("success").innerHTML = prod;
  w3_open();
  hideMenuEffect();
}


function loadPage(name, idName){
    var path = name + " #" + idName;
    $( "#success" ).load( "/" + path, function( response, status, xhr ) {
      if ( status == "error" ) {
        var msg = "Sorry but there was an error: ";
        $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
      }
    });
}

function loadPageDesc(nomeProduto){
    /*var path = "ajax/descr-prod.html" + " #" + "descr-bg";
    $( "#success" ).load( "/" + path, function( response, status, xhr ) {
      if ( status == "error" ) {
        var msg = "Sorry but there was an error: ";
        $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
      }
    });*/
    loadProd(nomeProduto);
}



function loadProd(nome) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          myFunctionP(this, nome);
        }
      };
      xhttp.open("GET", "produtos.xml", true);
      xhttp.send();
    }

function myFunctionP(xml, nome) {
  var i;
  var xmlDoc = xml.responseXML;
  var prod= '<div id="descr-bg">'+
      '<div class="w3-ontainer w3-padding-32 w3-hide-small"></div>'+
      '<br><br><br><br><br>'+
      '<div class=" produtoHeader w3-cell-row ">'+
       '<div class="w3-container w3-cell w3-center w3-mobile w3-margin-bottom">'+
            '<img class = "cao-image" src = "../img/';
  var x = xmlDoc.getElementsByTagName("PRODUTO");
  for (i = 0; i <x.length; i++) {
    if(x[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue.toUpperCase() == nome.toUpperCase()){
        prod+= x[i].getElementsByTagName("FOTO")[0].childNodes[0].nodeValue;
        prod+= '"alt = "Ração"/>'+
        '</div>'+
          '<div class="w3-cell descHeader w3-center w3-black w3-padding w3-mobile">'+
            '<br>'+
              '<h1>'+
                x[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue +
                '<br></h1>'+
            '<h3>Tipo: '+
              x[i].getElementsByTagName("TIPO")[0].childNodes[0].nodeValue +
            '</h3>'+
            '<h3>Preço: R$'+
            x[i].getElementsByTagName("PRECO")[0].childNodes[0].nodeValue +
            '</h3><br><br>'+
            '<a id="btnDesc"  class="w3-hover-white w3-teal" href="#">Comprar</a>'+
            '</div>'+
            '</div>'+
            '<div class="w3-container descr-item2 w3-light-gray">'+
                '<h2>Descrição</h2>'+
                '<p>'+
        x[i].getElementsByTagName("DESCRICAO")[0].childNodes[0].nodeValue +
        ' </p>' +
        '</div>'+
        '<div class="w3-container  w3-center relIA w3-black">'+
        '<h2>Quem viu esse, tambem comprou:</h2>'+
        '    <div class="w3-row">'+
        '        <div class="w3-col prodRec w3-hover-teal">'+
        '            <img class = " w3-image image-recomend" src = "../img/guarda.jpg" alt = "Pote para ração"/>'+
        '            <div class="w3-container recomend-container w3-center w3-white ">'+
        '                Guarda chuva PET edition<br>Variedades<br>R$ 49,80'+
        '            </div>'+
        '            <div class="w3-container cao-container2 w3-center">'+
        '                <p class = "ver">Ver<br></p>'+
        '            </div>'+
        '        </div>'+
        '        <div class="w3-col prodRec w3-hover-teal">'+
        '            <img class = " w3-image image-recomend" src = "../img/bocasorriso.jpg" alt = "Pote para ração"/>'+
        '            <div class="w3-container recomend-container w3-center w3-white ">'+
        '                Guarda chuva PET edition<br>Variedades<br>R$ 49,80'+
        '            </div>'+
        '            <div class="w3-container cao-container2 w3-center">'+
        '                <p class = "ver">Ver<br></p>'+
        '            </div>'+
        '        </div>'+
        '        <div class="w3-col prodRec w3-hover-teal">'+
        '            <img class = " w3-image image-recomend" src = "../img/areia.jpg" alt = "Pote para ração"/>'+
        '            <div class="w3-container recomend-container w3-center w3-white ">'+
        '                Guarda chuva PET edition<br>Variedades<br>R$ 49,80'+
        '            </div>'+
        '            <div class="w3-container cao-container2 w3-center">'+
        '                <p class = "ver">Ver<br></p>'+
        '            </div>'+
        '        </div>'+
'                <div class="w3-col prodRec w3-hover-teal">'+
'                    <img class = " w3-image image-recomend" src = "../img/vaso.jpg" alt = "Pote para ração"/>'+
'                    <div class="w3-container recomend-container w3-center w3-white ">'+
'                        Guarda chuva PET edition<br>Variedades<br>R$ 49,80'+
'                    </div>'+
'                    <div class="w3-container cao-container2 w3-center">'+
'                       <p class = "ver">Ver<br></p>'+
'                    </div>'+
'                </div>'+
'                </div>'+
'            </div>'+
'    </div>'
    }

  }
  document.getElementById("success").innerHTML = prod;
  return prod;
}

function loadMaisVendidos(prevOrNext) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunctionVendidos(this, prevOrNext);
    }
  };
  xhttp.open("GET", "maisvendidos.xml", true);
  xhttp.send();
}

function myFunctionVendidos(xml, prevOrNext) {
  var i, count = 4;
  var xmlDoc = xml.responseXML;
  var prod = ' <div class="w3-row w3-center" id = "selection"> <div class="w3-container w3-col seta" ><a href="#prev" onclick=\'loadMaisVendidos("prev")\'><img class = "w3-image imgSeta" src = "img/back.png" alt = "Seta apontando para antes"/></a></div>';
  var x = xmlDoc.getElementsByTagName("PRODUTO");
  if(prevOrNext.toUpperCase() == "PREV"){
      inicio -= 8;
  }

  if(inicio > x.length){
    inicio = inicio % x.length;
  }
  else if (inicio < 0){
    inicio = x.length + inicio;
  }
  for (i = inicio, j = 0; j < count; j++, i++, inicio++) {
    if(i >= x.length){
      i = i % x.length;
    }
    else if(i < 0){
      i = x.length - i;
    }

    prod+= '  <div class = " w3-container w3-col ';
    if(prevOrNext.toUpperCase() == "NEXT") prod+= 'w3-animate-left'; else prod+= 'w3-animate-right';
    prod+= ' w3-card-4 w3-white  prodMaisVendido">'+
      '<img class = "w3-image imagemMaisVendido" src = "img/' + x[i].getElementsByTagName("FOTO")[0].childNodes[0].nodeValue + '" alt = "Ração"/>'+
        '<div class="w3-container w3-black  contDescr">' +
          x[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue +
          '<br><b>R$' + x[i].getElementsByTagName("PRECO")[0].childNodes[0].nodeValue + ' </b>'+
        '</div>'+
    '</div>';

    /*prod += '\n<a href="#prod" onclick=\'loadPageDesc("' + x[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue + '")\'>' +
                '<div class = "produto ';
                if(prevOrNext.toUpperCase() == "NEXT") prod+= 'w3-animate-left'; else prod+= 'w3-animate-right';
                prod+= '  ">\n' +
                    '<img class = "image" src = "img/' + x[i].getElementsByTagName("FOTO")[0].childNodes[0].nodeValue + '" alt = "Ração"/>\n' +
                        '<div class="container">\n' +
                            '<p class = "descricao">' + x[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue +
                                '<br><span class = "descricao">'  + x[i].getElementsByTagName("TIPO")[0].childNodes[0].nodeValue + '</span><br><span class = "preco">R$' + x[i].getElementsByTagName("PRECO")[0].childNodes[0].nodeValue +'</span>' +
                            '</p>\n' +
                        '</div>\n' +
                '</div>' +
            '</a>\n' ;*/

  }
  //prod += '<a href="#next" onclick=\'loadMaisVendidos("next")\'><img class = "arrow" src = "../img/next.png" alt = "Seta apontando para antes"/></a>';
  prod+= '<div class="w3-container w3-col  w3-image seta"><a href="#next" onclick=\'loadMaisVendidos("next")\'><img class = "w3-image imgSeta" src = "img/next.png" alt = "Seta apontando para antes"/></a></div></div>';
  document.getElementById("loadMaisVendidos").innerHTML = prod;
  setMobileImgSize();
}

function loadMainPage(){
    var path = "ajax/petShop.html" + " #" + "petShop";
    $( "#success" ).load( "/" + path, function( response, status, xhr ) {
      if ( status == "error" ) {
        var msg = "Sorry but there was an error: ";
        $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
      }
    });
  loadMaisVendidos("next");
  plusDivs(1);
}

function w3_open() {
    if($(window).width() < 739){
      document.getElementById("prodContainer").style.marginLeft = "27%";
      document.getElementById("mySidebar").style.width = "25%";
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("openNav").style.display = 'none';
    }
  }
  function w3_close() {
    document.getElementById("prodContainer").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }
function showMenu2Mobile() {
  var x = document.getElementById("menu2Mobile");
  if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
  } else {
      x.className = x.className.replace(" w3-show", "");
  }
}

function closeMenu2Mobile() {
  var x = document.getElementById("menu2Mobile");
  if (x.className.indexOf("w3-show") > -1) {
      x.className = x.className.replace(" w3-show", "");
  }
}

function hideMenuEffect(){
  var x = document.getElementById("mySidebar");
  if ( $(window).width() > 739 && x.className.indexOf("w3-animate-left") > -1) {
    x.className = x.className.replace("w3-animate-left", "");
  }
  else {
    x.className += "w3-animate-left";
  }
}

function setMobileImgSize(){
  if ( $(window).width() < 739) {
    $(".prodMaisVendido").height(90);
  }
  else{

  }
}

function initDivs(){
  plusDivs(1);
  setTimeout(initDivs, 8000);
}

function plusDivs(n){
  bgImgIndex += n;

  changebg();


}

function changebg(){

  /*$(".cat").css("background-image", "url(img/bg" + bgImgIndex + ".jpg)");*/

  var x = document.getElementsByClassName("mySlides");

  if(bgImgIndex >= x.length)
    bgImgIndex = 0;
  if(bgImgIndex < 0)
    bgImgIndex = x.length-1;

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[bgImgIndex].style.display = "block";

}

/*Database*/

  function regClient(){
    var foto = $('#fotoUser')[0].files[0].name;
    //alert(foto);
    var sendData = $("#register").serialize() + "&foto=" + foto;
    //alert($("#register").serialize());
    //alert(sendData);
      $.post( "serv/serv.php", sendData )
          .done(function(data){
            document.getElementById("confReg").innerHTML = data + ' <button onclick="document.getElementById(\'id02\').style.display=\'none\'" type="button" class="w3-button w3-green">Ok</button>';
          });
  }

  function regProd(){
    var foto = $('#fotoProd')[0].files[0].name;
    //alert(foto);
    var sendData = $("#registerProd").serialize() + "&foto=" + foto;
    //alert($("#register").serialize());
    alert(sendData);
      $.post( "serv/cadProd.php", sendData )
          .done(function(data){
            if(data.search("Erro") < 0 ){
                document.getElementById('id05').style.display='none';
              }else{
                document.getElementById("confRegP").innerHTML = data;
                $("#alert").fadeOut(3000);
              }
          });
  }

$(document).ready(function (e) {
  $("#registerProd").on('submit',(function(e) {
    e.preventDefault();
    $.ajax({
    url: "serv/upload.php", // Url to which the request is send
    type: "POST",             // Type of request to be send, called as method
    data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
    contentType: false,       // The content type used when sending data to the server.
    cache: false,             // To unable request pages to be cached
    processData:false,        // To send DOMDocument or non processed data file it is set to false
    success: function(data)   // A function to be called if request succeeds
    {
    document.getElementById("confRegP").innerHTML = data;
    }
    });
  }));
});

$(document).ready(function (e) {
  $("#registerPet").on('submit',(function(e) {
    e.preventDefault();
    $.ajax({
    url: "serv/upload.php", // Url to which the request is send
    type: "POST",             // Type of request to be send, called as method
    data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
    contentType: false,       // The content type used when sending data to the server.
    cache: false,             // To unable request pages to be cached
    processData:false,        // To send DOMDocument or non processed data file it is set to false
    success: function(data)   // A function to be called if request succeeds
    {
    document.getElementById("confRegPet").innerHTML = data;
    }
    });
  }));
});

$(document).ready(function (e) {
  $("#registerServ").on('submit',(function(e) {
    e.preventDefault();
    $.ajax({
    url: "serv/upload.php", // Url to which the request is send
    type: "POST",             // Type of request to be send, called as method
    data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
    contentType: false,       // The content type used when sending data to the server.
    cache: false,             // To unable request pages to be cached
    processData:false,        // To send DOMDocument or non processed data file it is set to false
    success: function(data)   // A function to be called if request succeeds
    {
    document.getElementById("confRegS").innerHTML = data;
    }
    });
  }));
});


  function regServ(){
    var foto = $('#fotoServ')[0].files[0].name;
    //alert(foto);
    var sendData = $("#registerServ").serialize() + "&foto=" + foto;
    //alert($("#register").serialize());
    //alert(sendData);
      $.post( "serv/cadServ.php", sendData )
          .done(function(data){
              if(data.search("Erro") < 0 ){
                document.getElementById('id06').style.display='none';
              }else{
                document.getElementById("confRegS").innerHTML = data;
                $("#alert").fadeOut(3000);
              }
          });
  }

  function regPet(){
    var foto = $('#fotoPet')[0].files[0].name;
    //alert(foto);
    var sendData = $("#registerPet").serialize() + "&foto=" + foto + "&donoEmail=" + usuarioLogado.UserEmail;
    //alert($("#register").serialize());
    //alert(sendData);
      $.post( "serv/cadPet.php", sendData )
          .done(function(data){

          notify(data);
          document.getElementById('id03').style.display='none';

          if(goToAgendamento == 1){
            setTimeout(function(){
                loadAgendamento();
            }, 2000);

            goToAgendamento = -1;
          }
          if(goToMinhaConta == 1){
            setTimeout(function(){
                loadMinhaConta();
            }, 2000);
            goToMinhaConta = -1;
          }
          });
  }

  function logIn(){
    var sendData = $("#formLogIn").serialize();
    //alert($("#register").serialize());
      $.post( "serv/logIn.php", sendData )
          .done(function(data){
          if(data.search("Erro") < 0 ){
            usuarioLogado = JSON.parse(data);
            loadheader();
            document.getElementById('id01').style.display='none';
          }else{
            document.getElementById("confRegLogIn").innerHTML = data;
            $("#alert").fadeOut(3000);
          }
          });

  }

  function loadheader(){
      $.post( "serv/makeHeaderMenu.php", "admin=" + usuarioLogado.UserAdmin + "&nome=" + usuarioLogado.UserName )
          .done(function(data){
           document.getElementById("headerMenu").innerHTML = data;
          });
  }
  function loadMain(){
      $.post( "serv/makeMainPage.php" )
          .done(function(data){
           document.getElementById("success").innerHTML = data;
          });
      loadMaisVendidos("next");
      plusDivs(1);
  }
  function loadSobreNos(){
      $.post( "serv/makeSobreNos.php" )
          .done(function(data){
           document.getElementById("success").innerHTML = data;
          });
  }

  function loadShop(animal, tipo){
    //alert("loadShop");
    $.post( "serv/makeLoja.php",  "animal=" + animal + "&tipo=" + tipo)
          .done(function(data){
           document.getElementById("success").innerHTML = data;
          });
  w3_open();
  hideMenuEffect();
  }

  function loadProdDescription(id){
      $.post( "serv/makeProdDescr.php", "id=" + id )
          .done(function(data){
           document.getElementById("success").innerHTML = data;
          });
  }

  function notify(message){
    document.getElementById('id04').style.display='block';
    document.getElementById("notification").innerHTML = message;
  }

  function cadastrarPET(){
    if(usuarioLogado == null){
      notify("Voce deve efetuar login antes");
    }else{
      document.getElementById('id03').style.display='block';
    }
  }

  function Comprar(id, foto, desc, preco){
    if(usuarioLogado == null){
      notify("Voce deve efetuar login antes");
    }else{
      notify("Produto adicionado ao carrinho!");
      var obj = JSON.parse(carrinho);
      obj["produtos"].push({"produtoID":id, "foto":foto, "desc":desc, "preco":preco});
      carrinho = JSON.stringify(obj);

    }
  }

  function loadCarrinho(){
    var compras = JSON.parse(carrinho);
    var i;
    var page = '<div id="cartPage" class="w3-center w3-light-gray">'+
      '<br><br><br><br><br>'+
      '<div class="w3-ontainer w3-padding-32 w3-hide-small"></div>'+
      '<div class="w3-center w3-container ">'+
      '<h2 class="KartHead">Carrinho</h2>'+
      '</div>'+
            '<div class="w3-container cartContent w3-center w3-white">'+
                '<div class="cartContentHeader w3-black w3-row">'+
                  '<div class = "descKart w3-col	">Item</div>'+
                  '<div class = "descKart w3-col	">Descricao</div>'+
                  '<div class = "descKart w3-col	">Quantidade</div>'+
                  '<div class = "descKart w3-col	">Preco</div>'+
                '</div>';
        for(i = 0 ; i < compras.produtos.length ; i++){
          page += '<div class="cartItem w3-container w3-row">'+
                    '<div class="cartProdImg w3-container w3-col">'+
                        '<img class = "cartImg w3-image" src = "img/'+ compras.produtos[i].foto +'" alt = "Ração"/>'+
                    '</div>'+

                  '<div class="cartDescr w3-col w3-container">'+ compras.produtos[i].desc +'</div>'+
                    '<div  class="cartQtd w3-container w3-col"><input onclick="updatePreco()"  type=\'number\' min="0" id=\'qtd'+ compras.produtos[i].produtoID + '\' name=\'mynumber\' value=\'1\' /> </div>'+
                    '<div class="cartPreco w3-container w3-col">R$'+ compras.produtos[i].preco +'</div>'+
                    /*'<div class="cartX w3-container w3-col "><span class="w3-hover-black Xis"><a href="#" onclick="removerDoCarrinho('+ compras.produtos[i].produtoID +')">X</a></span></div>'+*/
                '</div>';
          precototal += parseFloat(compras.produtos[i].preco);
        }


               page += '<div class="cartSumPrice w3-black"><span class="w3-right totalPrice" id="precoTotal">Total: R$ '+ precototal +'</span></div>'+
            '</div>'+
      '<div class="w3-container w3-row">'+
        '<div class="w3-container w3-half w3-center w3-white contPay w3-border">'+
          '<h2 class="KartHead2 w3-teal">Pagamento</h2>'+
          'Numero do Cartão:<br>'+
          '<input type=text class="payIn" pattern="[0-9]{13,16}"><br>'+
          'Senha:<br>'+
          '<input type="password" class="payIn"><br>'+

          '<img class = "cartImg" src = "img/Logos-Cart%C3%B5es-de-Cr%C3%A9dito-com-Logo-Pagseguro.jpg" alt = "Ração"/>'+
        '</div>'+

        '<div class="w3-container w3-half w3-center w3-white contPay w3-border">'+
          '<h2 class="KartHead2 w3-teal">Endereco</h2>'+
          'Endereco:<br>'+
          '<input type=text class="payIn"><br>'+
          'CEP:<br>'+
          '<input type=text class="payIn" pattern="[0-9]{13,16}"><br>'+
          'Telefone:<br>'+
          '<input type=text class="payIn" pattern="[0-9]{13,16}"><br>'+
          '<div class="w3-container fimKart">'+
                '<a href="#" onclick="realizarVenda()"><span id="FinPay" class="w3-black w3-hover-teal">Finalizar</span></a>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
    document.getElementById("success").innerHTML = page;
    updatePreco();
  }

  function realizarVenda(){
    var i;
    var vendaID;
    var compras = JSON.parse(carrinho);
     $.post( "serv/pegarVendaID.php")
          .done(function(data){
           vendaID =  data;
          });
    vendaID = vendaID.substring(285);
    //alert(vendaID);
    $.post( "serv/cadastrarVenda.php", "vendaid=" + vendaID + "&email=" + usuarioLogado.UserEmail)
          .done(function(data){
            //alert(data);
          });
    //alert("length=" + compras.produtos.length);
     for(i = 0 ; i < compras.produtos.length ; i++){
       var qtd= document.getElementById("qtd" + compras.produtos[i].produtoID).value;
       //alert(qtd);
        $.post( "serv/cadastrarVendaProdutos.php", "vendaid=" + vendaID + "&produtoid=" + compras.produtos[i].produtoID + "&qtd=" + qtd)
          .done(function(data){
            //alert(data);
          });
     }
    notify("Venda realizada com Sucesso!<br>Numero do pedido: " + vendaID + "<br>Voce pode acessar seus pedidos na aba Meus Dados");
    carrinho = '{"produtos":[]}';
  }

function loadMinhaConta(){
  $.post( "serv/makeMinhaConta.php", "email=" + usuarioLogado.UserEmail)
          .done(function(data){
            document.getElementById("success").innerHTML = data;
          });
}

function updatePreco(){
  var i;
  precototal = 0;
  var compras = JSON.parse(carrinho);
  for(i = 0 ; i < compras.produtos.length ; i++){
    var qtd = document.getElementById("qtd" + compras.produtos[i].produtoID).value;
    var preco = compras.produtos[i].preco;
    precototal += qtd * preco;
  }
  document.getElementById("precoTotal").innerHTML = "Total: R$ " + precototal;
}

function loadAgendamento(){
   $.post( "serv/makeAgendamento.php", "email="+ usuarioLogado.UserEmail)
          .done(function(data){
            document.getElementById("success").innerHTML = data;
          });
}

function mostrarHorarios(){
  var dataS = document.getElementById("servData").value;
  var servico = $("#formEscolherServico").serialize();
  if(dataS == "" || servico == "servico="){
    notify("Selecione uma data e um servico");
  }
  else{
    $.post( "serv/pegarHorarios.php", "data=" + dataS)
          .done(function(data){
            document.getElementById("horariosServ").innerHTML = data;
          });
  }
}
function selectHorario(hora){
  $( "#horario" + horario ).removeClass( "w3-gray" );
  $( "#horario" + horario ).addClass( "w3-green" );
  horario = hora;
  $( "#horario" + hora ).removeClass( "w3-green" );
  $( "#horario" + hora ).addClass( "w3-gray" );
}

function selectPet(id){
  $( "#pet" + petID ).removeClass( "w3-grayscale-max" );
  petID = id;
  $( "#pet" + id ).addClass( "w3-grayscale-max" );
}

function agendar(){
  var dataS = document.getElementById("servData").value;
  var servico = $("#formEscolherServico").serialize();
  if(horario == -1 || petID == -1){
    notify("Selecione um pet e um horario disponivel")
  }
  else{
    $.post( "serv/agendar.php", servico + "&data=" + dataS + "&horario=" + horario + "&petID=" + petID + "&email=" + usuarioLogado.UserEmail)
          .done(function(data){
            notify(data);
            mostrarHorarios();
            $( "#pet" + petID ).removeClass( "w3-grayscale-max" );
            petID = -1;
            horario = -1;

          });
  }
}

function loadVendas(){
  $.post( "serv/makeVendas.php")
          .done(function(data){
            document.getElementById("success").innerHTML = data;
          });
}

function cadastrarNovoPET(){
  cadastrarPET();
  goToAgendamento = 1;
}

function cadastrarContaPET(){
  cadastrarPET();
  goToMinhaConta = 1;
}

function getfolder(e) {
    var files = e.target.files;
    var path = files[0].webkitRelativePath;
    var Folder = path.split("/");
    alert(Folder[0]);
}
