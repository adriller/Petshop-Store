<?php
$produtoID = $_POST["produtoid"];
$qtdVendida = $_POST["qtd"];

//$produtoID = 1;
//$qtdVendida = 2;

$servername = "localhost";
$username = "2344925_valedospets";
$password = "Adriller123@";
$dbname = "2344925_valedospets";


$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
  die("Erro de conexao: " . $conn->connect_error);
}

$sql = "SELECT qtdE from PRODUTOS where produtoID = " . $produtoID;

$qtdE = -1;

$result = $conn->query($sql);

if($result->num_rows > 0){
  $row = $result->fetch_assoc();
  $qtdE = $row["qtdE"];
}else{
  echo "Produto nao encontrado";
}

echo $qtdE;

if($qtdE < 0){
  $qtdE = 0;
}
else{
  $qtdE = $qtdE - $qtdVendida;
}

$sql = "UPDATE produtos SET qtdE = ".$qtdE." WHERE produtoID = " .$produtoID;

echo $sql;

if($conn->query($sql) == true){
  echo "Produto debitado do estoque!";
}
else{
  echo "Erro: " .$conn->error;
}

?>
