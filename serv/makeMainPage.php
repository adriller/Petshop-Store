
<?php
echo '<div id="petShop" >
    <div class = "cat w3-container">

      <div class="w3-content w3-display-container slides">
        <img class="mySlides" src="img/bg6.jpg" >
        <img class="mySlides" src="img/bg5.jpg" >
        <img class="mySlides" src="img/bg8.jpg" >
        <img class="mySlides" src="img/bg4.jpg" >
        <img class="mySlides" src="img/bg9.jpg" >
        <img class="mySlides" src="img/bg10.jpg" >

        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
      </div>

    </div>


    <div id = "maisvendidos" class="w3-center w3-container">
        <h3 class = "titulo"><span>MAIS BUSCADOS</span></h3>

<div id="loadMaisVendidos">


  <div class="w3-row w3-center" id = "selection">
  <div class="w3-container w3-col seta " >
    <a href="#prev" class="aSeta" onclick=\'loadMaisVendidos("prev")\'>
      <span class="spanSeta"><img class = "w3-image imgSeta " src = " img/back.png" alt = "Seta apontando para antes"/></span>
    </a>
  </div>

  <div class = " w3-container w3-col w3-animate-right w3-card-4 w3-white  prodMaisVendido">
    <a href="#produto" onclick="loadPageDesc(\'Royal Canin\')">
        <img class = "w3-image imagemMaisVendido" src = " img/racao.jpg" alt = "Ração"/>
          <div class="w3-display-container w3-black w3-hover-teal contDescr">
          bolinha com bigode<br>
          Variedades<br>
          <b>R$ 1,80</b>
          </div>

    </a>
  </div>

<div class = "w3-container w3-col w3-animate-right w3-card-4 w3-white  prodMaisVendido">
    <a href="#produto" onclick="loadPageDesc(\'casinha grande\')">
      <img class = "w3-image imagemMaisVendido"src = " img/casa-aquario.jpg" alt = "Ração de gato"/>
        <div class="w3-container">
          bolinha com bigode<br>
          Variedades<br>
          <b>R$ 1,80</b>
        </div>

  </a>
</div>

<div class = "w3-container w3-col w3-animate-right w3-card-4 w3-white  prodMaisVendido">
  <img class = "w3-image imagemMaisVEendido"src = " img/pote.jpg" alt = "Pote para ração"/>
  <div class="w3-container">
  bolinha com bigode<br>
  Variedades<br>
  <b>R$ 1,80</b>
  </div>
</div>

<div class = "w3-container w3-col  w3-animate-right w3-card-4 w3-white  prodMaisVendido">
  <img class = "w3-image imagemMaisVendido"src = " img/bigode.jpg" alt = "Sache para cães"/>
  <div class="w3-container">
  bolinha com bigode<br>
  Variedades<br>
  <b>R$ 1,80</b>
  </div>
</div>

<div class="w3-container w3-col  w3-image seta">
  <a href="#next" onclick=\'loadMaisVendidos("next")\'>
    <img class = "w3-image imgSeta" src = " img/next.png" alt = "Seta apontando para antes"/>
  </a>
</div>
</div>
  </div>

    <div id = "linedivider"></div>

    <div class="w3-center w3-container " id="centerGrid">
    <div class=" w3-container w3-center w3-row-padding gridCentral" id = "grid">
        <div class = "w3-hover-teal w3-black w3-half w3-display-container w3-mobile w3-card-4 w3-teal  w3-margin-bottom dest1">
            <a class="destaques">
              <img id = "imggrid1" class="w3-image" src = " img/rabbitpng.png" alt = "Gato mostrando a patinha"/>
              <div class="w3-display-topmiddle displayMiddle">Ofertas</div>
            </a>
        </div>

        <div class = "w3-half w3-center ">
            <div class = "w3-card-4   w3-display-container w3-mobile w3-hover-teal w3-black">
                <a class=""><img class = "imggrid2 w3-image" src = " img/birdpng.png" alt = "Três passaros"/>
                  <div class="w3-display-topmiddle displayMiddle">Novidades</div></a>
            </div>

            <div class = "w3-card-4 w3-hover-teal w3-black w3-display-container w3-mobile w3-teal w3-margin-top">
                <a class=""><img class = "imggrid2 w3-image" src = " img/fishpng.png" alt = "Cachorro comendo"/>
                <div class="w3-display-topmiddle displayMiddle2">Recomendados</div></a>
            </div>
        </div>

    </div>
    </div>

      <h1 id="ClientsPets">Ultimos PETs cadastrados:</h1>
    <section class= "w3-row w3-center" id = "selection2">


        <div class = "w3-col produto2">
            <img class = "image2 w3-image" src = " img/meme2.jpg" alt = "Ração"/>
            <div class="container w3-teal">
                Abigail
            </div>
        </div>

            <div class = "produto2 w3-col">
            <img class = "image2" src = " img/meme10.jpg" alt = "Ração"/>
            <div class="container w3-teal">
                Abelardo
            </div>
        </div>

            <div class = "produto2 w3-col">
            <img class = "image2" src = " img/meme4.jpg" alt = "Ração"/>
            <div class="container w3-teal">
                Onix
            </div>
        </div>

            <div class = "produto2 w3-col">
            <img class = "image2" src = " img/meme5.jpg" alt = "Ração"/>
            <div class="container w3-teal">
                Floquinho
            </div>
        </div>

        <div class = "produto2 w3-col">
            <img class = "image2"src = " img/meme6.jpg" alt = "Ração de gato"/>
            <div class="container w3-teal">
                Bugao
            </div>
        </div>

        <div class = "produto2 w3-col">
            <img class = "image2"src = " img/meme7.jpg" alt = "Pote para ração"/>
            <div class="container w3-teal">
                K-9
            </div>
        </div>

        <div class = "produto2 w3-col">
            <img class = "image2"src = " img/meme8.jpg" alt = "Sache para cães"/>
            <div class="container w3-teal">
                Toto
            </div>
        </div>


    </section>
        <div class="w3-container w3-center  w3-margin-bottom">
          <h3>Quer seu pet aqui?</h3>
          <a id="btnMain" class="w3-hover-teal" href="#cadpet" onclick="cadastrarPET()">Cadastre</a>
        </div>

    <footer>
        <p>Trabalho de WEB</p>

        <p>Adriller, Matheus, Rita, Allan, Hikaro</p>


    </footer>
    </div>
</div>';

  ?>
