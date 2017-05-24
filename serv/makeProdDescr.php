
<?php

  $id = $_POST["id"];
  //$id = 1;


  $servername = "fdb17.biz.nf";
  $username = "2344925_valedospets";
  $password = "Adriller123@";
  $dbname = "2344925_valedospets";
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }



  $sql = "SELECT * FROM produtos  WHERE produtoID = " .$id. "";
  $result = $conn->query($sql);

  $page = '<div id="descr-bg">'.
      '<div class="w3-ontainer w3-padding-32 w3-hide-small"></div>'.
      '<br><br><br><br><br>'.
      '<div class=" produtoHeader w3-cell-row ">'.
       '<div class="w3-container w3-cell w3-center w3-mobile w3-margin-bottom">'.
            '<img class = "cao-image" src = " img/';


  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      $page = $page. $row["foto"];
      $page = $page. '"alt = "Ração"/>'.
        '</div>'.
          '<div class="w3-cell descHeader w3-center w3-black w3-padding w3-mobile">'.
            '<br>'.
              '<h1>'.
                $row["nome"].
              '<br></h1>'.
            '<h3>Tipo: '.
              $row["tipo"].
            '</h3>'.
            '<h3>Para: '.
              $row["animal"].
            '</h3>'.
            '<h3>Preço: R$'.
              $row["preco"].
            '</h3><br><br>'.
            '<a id="btnDesc"  class="w3-hover-white w3-teal" href="#" onclick=\'Comprar(' .$row["produtoID"].',"'. $row["foto"].'"'. ',"'. $row["descricao"].'",'. $row["preco"].')\'>Comprar</a><br>'.
            '</div>'.
            '</div>'.
            '<div class="w3-container descr-item2 w3-light-gray">'.
                '<h2>Descrição</h2>'.
                '<p>'.
                   $row["descricao"].
                 ' </p>' .
                '</div>'.
                '<div class="w3-container  w3-center relIA w3-black">'.
                '<h2>Quem viu esse, tambem comprou:</h2>'.
                '    <div class="w3-row">'.
                '        <div class="w3-col prodRec w3-hover-teal">'.
                '            <img class = " w3-image image-recomend" src = " img/guarda.jpg" alt = "Pote para ração"/>'.
                '            <div class="w3-container recomend-container w3-center w3-white ">'.
                '                Guarda chuva PET edition<br>Variedades<br>R$ 49,80'.
                '            </div>'.
                '            <div class="w3-container cao-container2 w3-center">'.
                '                <p class = "ver">Ver<br></p>'.
                '            </div>'.
                '        </div>'.
                '        <div class="w3-col prodRec w3-hover-teal">'.
                '            <img class = " w3-image image-recomend" src = " img/bocasorriso.jpg" alt = "Pote para ração"/>'.
                '            <div class="w3-container recomend-container w3-center w3-white ">'.
                '                Guarda chuva PET edition<br>Variedades<br>R$ 49,80'.
                '            </div>'.
                '            <div class="w3-container cao-container2 w3-center">'.
                '                <p class = "ver">Ver<br></p>'.
                '            </div>'.
                '        </div>'.
                '        <div class="w3-col prodRec w3-hover-teal">'.
                '            <img class = " w3-image image-recomend" src = " img/areia.jpg" alt = "Pote para ração"/>'.
                '            <div class="w3-container recomend-container w3-center w3-white ">'.
                '                Guarda chuva PET edition<br>Variedades<br>R$ 49,80'.
                '            </div>'.
                '            <div class="w3-container cao-container2 w3-center">'.
                '                <p class = "ver">Ver<br></p>'.
                '            </div>'.
                '        </div>'.
        '                <div class="w3-col prodRec w3-hover-teal">'.
        '                    <img class = " w3-image image-recomend" src = " img/vaso.jpg" alt = "Pote para ração"/>'.
        '                    <div class="w3-container recomend-container w3-center w3-white ">'.
        '                        Guarda chuva PET edition<br>Variedades<br>R$ 49,80'.
        '                    </div>'.
        '                    <div class="w3-container cao-container2 w3-center">'.
        '                       <p class = "ver">Ver<br></p>'.
        '                    </div>'.
        '                </div>'.
        '                </div>'.
        '            </div>'.
        '    </div>';

    }

    echo $page;
  } else {
      echo "<p id='alert'>Erro: Nao foi possivel caregar</p>".$conn->error;
  }
  $conn->close();



?>
