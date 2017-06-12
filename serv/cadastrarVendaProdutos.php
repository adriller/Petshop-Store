<?php

$vendaid = $_POST["vendaid"];
$produtoid = $_POST["produtoid"];
$qtd = $_POST["qtd"];

$servername = "localhost";
$username = "2344925_valedospets";
$password = "Adriller123@";
$dbname = "2344925_valedospets";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO itensComprados (compraID, produtoID, qtd) VALUES (".$vendaid.", ".$produtoid.", ".$qtd.");";

if ($conn->query($sql) === TRUE) {
  echo "Cadastrado com Sucesso!";
} else {
  echo "<p id='alert'>Erro: Nao foi posivel conectar ao BD</p>".$sql;
}
$conn->close();

?>
