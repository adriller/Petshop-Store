
<?php
  $nome = $_POST["nome"];
  $descricao = $_POST["descricao"];
  $preco = $_POST["preco"];
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


  $sql = "INSERT INTO servicos (nome, descricao, preco, foto)
VALUES ('" .$nome. "', '" .$descricao. "', '" .$preco. "', '" .$foto. "')";

  if ($conn->query($sql) === TRUE) {
    echo "Cadastrado com Sucesso!";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }
  $conn->close();



?>
