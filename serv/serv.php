
<?php
$nome = test_input($_POST["nome"]);
$email = test_input($_POST["email"]);
$telefone = test_input($_POST["telefone"]);
$senha = test_input($_POST["senha"]);
$sexo = test_input($_POST["sexo"]);
$foto = test_input($_POST["foto"]);
$admin = 0;

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

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

$sql = "INSERT INTO clientes (nome, email, telefone, senha, sexo, foto, eAdmin)
VALUES ('" .$nome. "', '" .$email. "', '" .$telefone. "', '" .$senha. "', '" .$sexo. "', '" .$foto. "', '" .$admin. "')";

if ($conn->query($sql) === TRUE) {
  echo "Cadastrado com Sucesso!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();



?>
