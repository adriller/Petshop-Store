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


  $sql = "SELECT * FROM compras ORDER BY compraID LIMIT 1";
  $result = $conn->query($sql);

  $lastID = -1;


  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $lastID = $row["compraID"];
    echo $lastID;
  } else {
      echo "<p id='alert'>Erro: Nao foi posivel conectar ao BD</p>";
  }
  $conn->close();

?>
