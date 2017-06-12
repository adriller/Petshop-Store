<?php

$vendaid = $_POST["vendaid"];
$email = $_POST["email"];

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

$data = date("Y-m-d");

$sql = "INSERT INTO compras (clienteEmail, dataCadastro) VALUES ('".$email."', '".$data."');";

if ($conn->query($sql) === TRUE) {
  echo "Cadastrado com Sucesso!";
} else {
  echo "<p id='alert'>Erro: Nao foi posivel conectar ao BD</p>";
}
$conn->close();

?>
