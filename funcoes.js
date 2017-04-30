var inicio = 0;

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
                        '<img class = "cao-image" src = "img/' + x[i].getElementsByTagName("FOTO")[0].childNodes[0].nodeValue + '" alt = "Ração"/>\n' +
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
    var path = "ajax/descr-prod.html" + " #" + "descr-bg";
    $( "#success" ).load( "/" + path, function( response, status, xhr ) {
      if ( status == "error" ) {
        var msg = "Sorry but there was an error: ";
        $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
      }
    });
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
  var prod= "";
  var x = xmlDoc.getElementsByTagName("PRODUTO");
  for (i = 0; i <x.length; i++) {
    if(x[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue.toUpperCase() == nome.toUpperCase()){
        prod += "<div class=\"drecr-img\"><img class = \"cao-image\" src = \"img/" +
        x[i].getElementsByTagName("FOTO")[0].childNodes[0].nodeValue +
        "\" alt = \"Ração\"/> </div><div class=\"descr-item\"><h1>" +
        x[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue +
        "<br></h1><h3>Tipo: " +
        x[i].getElementsByTagName("TIPO")[0].childNodes[0].nodeValue +
        "</h3><h3>Preço: R$" +
        x[i].getElementsByTagName("PRECO")[0].childNodes[0].nodeValue +
        "</h3><a id=\"btnDesc\" href=\"#\">Comprar</a></div><div class=\"descr-item2\"><h2>Descrição</h2><p>" +
        x[i].getElementsByTagName("DESCRICAO")[0].childNodes[0].nodeValue +
        "</p></div><div class=\"relIA\"><h2>Quem viu esse, tambem comprou:</h2><div class=\"row-recomend\"><div class=\"prod-recomend\"><img class = \"image-recomend\"src = \"img/guarda.jpg\" alt = \"Pote para ração\"/><div class=\"recomend-container\"><p class = \"descricao\">Guarda chuva PET edition<br><span class = \"descricao\">Variedades</span><br><span class = \"preco\">R$ 49,80</span><p></div><div class=\"cao-container2\"><p class = \"ver\">Ver<br></p></div></div><div class=\"prod-recomend\"><img class = \"image-recomend\"src = \"img/bocasorriso.jpg\" alt = \"Pote para ração\"/><div class=\"recomend-container\"><p class = \"descricao\">Boca-Sorriso<br><span class = \"descricao\">Variedades</span><br><span class = \"preco\">R$ 19,80</span><p></div><div class=\"cao-container2\"><p class = \"ver\">Ver<br></p></div></div><div class=\"prod-recomend\"><img class = \"image-recomend\"src = \"img/areia.jpg\" alt = \"Pote para ração\"/><div class=\"recomend-container\"><p class = \"descricao\">Areia Higienica<br><span class = \"descricao\">Outros</span><br><span class = \"preco\">R$ 29,80</span><p></div><div class=\"cao-container2\"><p class = \"ver\">Ver<br></p></div></div><div class=\"prod-recomend\"><img class = \"image-recomend\"src = \"img/vaso.jpg\" alt = \"Pote para ração\"/><div class=\"recomend-container\"><p class = \"descricao\">vaso sanitario para gatos<br><span class = \"descricao\">Variedades</span><br><span class = \"preco\">R$ 179,80</span><p></div><div class=\"cao-container2\"><p class = \"ver\">Ver<br></p> </div></div></div></div>" + "<script> window.onload = loadProd(" + nome + ");</script>";

    }

  }
  document.getElementById("descprodContainer").innerHTML = prod;
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
  var prod= '<a href="#prev" onclick=\'loadMaisVendidos("prev")\'><img class = "arrow" src = "../img/back.png" alt = "Seta apontando para antes"/></a>';
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
    prod += '\n<a href="#prod" onclick=\'loadPageDesc("' + x[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue + '")\'>' +
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
            '</a>\n' ;

  }
  prod += '<a href="#next" onclick=\'loadMaisVendidos("next")\'><img class = "arrow" src = "../img/next.png" alt = "Seta apontando para antes"/></a>';
  document.getElementById("selection").innerHTML = prod;
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
