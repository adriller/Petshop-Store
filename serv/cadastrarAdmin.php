<?php

$nome = $_POST["nome"];
$email = $_POST["email"];
$telefone = $_POST["telefone"];
$genero = $_POST["sexo"];
$foto = $_POST["foto"];
$senha = $_POST["senha"];

$servername = "localhost";
$username = "2344925_valedospets";
$password = "Adriller123@";
$dbname = "2344925_valedospets";

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO clientes (nome, email, telefone, senha, sexo, foto, eAdmin)
  VALUES('".$nome."', '".$email."', '".$telefone."', '".$senha."', '".$genero."', '".$foto."', 1)";

if ($conn->query($sql) === TRUE) {
  echo "Cadastrado com Sucesso!";
} else {
  echo "<span id='textinho' style='color:red'>Error: " . $sql . "<br>" . $conn->error. "</span>";
}
$conn->close();

?>
