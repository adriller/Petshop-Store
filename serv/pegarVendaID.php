<?php

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


 /* $sql = "SELECT AUTO_INCREMENT as compraID
FROM  INFORMATION_SCHEMA.TABLES
WHERE TABLE_SCHEMA = '2344925_valedospets'
AND   TABLE_NAME   = 'compras'";*/

  $sql = "SELECT compraID FROM compras  ORDER BY compraID DESC";
  $result = $conn->query($sql);

  $lastID = -1;


  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $lastID = $row["compraID"] + 1;
    echo $lastID;
  } else {
      echo "<p id='alert'>Erro: Nao foi posivel conectar ao BD</p>";
  }
  $conn->close();

?>
