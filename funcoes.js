function refreshNav(){
    $(".nav a").on("click", function(){
       $(".nav").find(".active").removeClass("active");
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
  document.getElementById("prodContainer").innerHTML = prod;
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
