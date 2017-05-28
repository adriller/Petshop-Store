<?php
  $petID = $_POST["petID"];
  $email = $_POST["email"];
  $servico = $_POST["servico"];
  $horario = $_POST["horario"];
  $data = $_POST["data"];

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


  $sql = "INSERT INTO agendamentos (petID, donoEmail, nomeServico, horario, dataAgendamento)
          VALUES (".$petID.", '".$email."', '".$servico."', ".$horario.", '".$data."');";

if ($conn->query($sql) === TRUE) {
    echo "Agendado com Sucesso!";
  }
  else{
    echo "falha no agendamento". $conn->error .$sql;
  }


  $conn->close();



?>
