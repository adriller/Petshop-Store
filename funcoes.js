var inicio = 0;
var bgImgIndex = 1;

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
  prod+= '  <br><br><br><br><br><div class="w3-ontainer w3-padding-32 w3-hide-small"></div><button class="w3-button w3-teal w3-xlarge w3-hide-large  w3-black" id="openNav" onclick="w3_open()">&#9776;</button><div class="w3-sidebar w3-bar-block w3-collapse w3-card-2 w3-animate-left w3-light-gray" style="width:250px;display:none;" id="mySidebar" onclick="w3_close()"><button class="w3-bar-item w3-button w3-large w3-hide-large" onclick="w3_close()">Close &times;</button><a href="#" class="w3-bar-item w3-button w3-hover-teal" onclick="loadDoc(\'COMIDA\', \'' + animal.toUpperCase() + '\')">Alimentos</a><a href="#" class="w3-bar-item w3-button w3-hover-teal" onclick="loadDoc(\'CASA\', \'' + animal.toUpperCase() + '\')">Casinha</a><a href="#" class="w3-bar-item w3-button w3-hover-teal" onclick="loadDoc(\'SAUDE\', \'' + animal.toUpperCase() + '\')">Saude e Higiene</a><a href="#" class="w3-bar-item w3-button w3-hover-teal" onclick="loadDoc(\'OUTRO\',  \'' + animal.toUpperCase() + '\')">Outros</a></div>'
  prod+='<div class="w3-main" id="prodContainer">';
  var show = false, show2 = false;;
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
    '<a href="#produto" onclick=\'loadPageDesc("' + x[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue + '")\'>' +
      '<img class = "w3-image imagemMaisVendido" src = "img/' + x[i].getElementsByTagName("FOTO")[0].childNodes[0].nodeValue + '" alt = "Ração"/>'+
        '<div class="w3-container w3-black  contDescr">' +
          x[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue +
          '<br><b>R$' + x[i].getElementsByTagName("PRECO")[0].childNodes[0].nodeValue + ' </b>'+
        '</div>'+
    '</a></div>';

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
}

function w3_open() {
    document.getElementById("prodContainer").style.marginLeft = "27%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
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

function changebg(){
  if( $(window).width() > 739){
    $(".cat").css("background-image", "url(img/bg" + bgImgIndex + ".jpg)");
    bgImgIndex++;
    if(bgImgIndex > 3)
      bgImgIndex = 1;

    setTimeout(changebg, 8000);
  }
  else{
  }
}
