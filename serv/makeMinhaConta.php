
<?php

  $email = $_POST["email"];
  //$email = "adriller_gf@hotmail.com";


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



  $sql = "SELECT * FROM compras  WHERE clienteEmail = '" .$email. "'";
  $result = $conn->query($sql);

  $page = '<br><br><br><br>
  <div class="w3-ontainer w3-padding-32 w3-hide-small"></div>

  <div id=\'containerConta\' class="w3-light-gray w3-container ">
    <div class="w3-container w3-white minhaConta">
      <label class="titleConta w3-margin-left">Minha Conta</label>
      <div class="w3-center w3-container ContaHist w3-margin">
        Historico de Pedidos';





  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
          $page .= '<div class="contentHist w3-container w3-border ">
          Data: '.$row["dataCadastro"].'<br>
          Codigo:'.$row["compraID"].'<br><br>
          Itens comprados:<br>';

      $sql2 = "SELECT produtos.foto as foto, produtos.descricao as descricao, itensComprados.qtd as qtd, produtos.preco as preco FROM itensComprados JOIN compras ON itensComprados.compraID = compras.compraID  JOIN produtos ON itensComprados.produtoID = produtos.produtoID WHERE compras.compraID = " .$row["compraID"]. "";
      $result2 = $conn->query($sql2);
      if ($result2->num_rows > 0) {
        while($row2 = $result2->fetch_assoc()) {
           $page.='<div class="histItem w3-container w3-row">
                <div class="cartProdImg w3-container w3-col">
                    <img class = "cartImg w3-image" src = "img/'.$row2["foto"].'" alt = "Ração"/>
                </div>

              <div class="cartDescr w3-col w3-container">'.$row2["descricao"].'</div>
                <div class="cartQtd w3-container w3-col">'.$row2["qtd"].' </div>
                <div class="cartPreco w3-container w3-col">R$'.$row2["preco"].' </div>
            </div>';
        }
      }
         $page .=  '</div>';
    }

    $page .= '</div>

      </div>

    </div>';
    echo $page;
  } else {
      echo "<p id='alert'>Erro: Nao foi possivel caregar</p>".$conn->error;
  }
  $conn->close();



?>
