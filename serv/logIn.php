
<?php
  $email = test_input($_POST["usrname"]);
  $senha = test_input($_POST["psw"]);

  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

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

  $sql = "SELECT * FROM clientes WHERE email = '" .$email. "' AND senha = '" .$senha. "'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo '{"UserName":"'.$row["nome"].'", "UserAdmin":'.$row["eAdmin"].', "UserEmail":"'.$email.'"}';

  } else {
      echo "<p id='alert'>Erro: Credenciais Invalidas</p>";
  }
  $conn->close();



?>
