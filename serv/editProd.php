
<?php

  $id = $_POST["produtoID"];
  $nome = $_POST["nome"];
  $descricao = $_POST["descricao"];
  $tipo = $_POST["tipo"];
  $preco = $_POST["preco"];
  $animal = $_POST["animal"];
  $qtdE = $_POST["qtdE"];
  $qtdV = $_POST["qtdV"];
  $foto = $_POST["foto"];

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

  $data = date("Y-m-d");



  $sql = "UPDATE produtos
  SET nome='" .$nome. "', descricao='" .$descricao. "', tipo='" .$tipo. "', animal='" .$animal. "', preco='" .$preco. "', dataCadastro='" .$data. "', qtdE='" .$qtdE. "', qtdV='" .$qtdV. "', foto='" .$foto. "'
  WHERE produtoID=" .$id;

  if ($conn->query($sql) === TRUE) {
    echo "Cadastrado com Sucesso!";
  } else {
      echo "<p id='alert'>Erro: Nao foi possivel cadastrar</p>" .$conn->error;
  }
  $conn->close();



?>
