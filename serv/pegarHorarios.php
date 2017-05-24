<?php
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


  $sql = "SELECT pets.foto as foto, pets.nome as nome, agendamentos.nomeServico as servico, agendamentos.horario as horario FROM agendamentos INNER JOIN pets ON agendamentos.petID = pets.petID WHERE agendamentos.dataAgendamento = '".$data."'";
  $result = $conn->query($sql);

  $page = "";

  $horariosIndisponiveis = array(0, 1, 2, 3, 4, 5, 6, 7, 12, 13, 18, 19, 20, 21, 22, 23);


if ($result->num_rows > 0) {
     $page .= 'Indisponiveis:<br>';
    while($row = $result->fetch_assoc()) {
      array_push($horariosIndisponiveis, $row["horario"]);
       $page .='<div class="w3-container w3-red w3-margin">
        <div class=" w3-quarter">
          <img class="w3-image offCalend" src="img/'.$row["foto"].'" />
        </div>
        <div class="w3-threequarter">
          <span class="horarioBlock" >Nome: '.$row["nome"].' <br>Servico: '.$row["servico"].' <br> Horario: '.$row["horario"].'h</span>
        </div>
      </div>';
    }
  }
  $page .= 'Disponiveis:<br>';
  for ($x = 0; $x <= 18; $x++) {
    if(!in_array($x, $horariosIndisponiveis)){
      $page .='<a id="selection" href="#" onclick="selectHorario('.$x.');return false;"><div id="horario'.$x.'"  class="w3-container w3-green w3-margin">
        <div class=" w3-quarter">
          <img class="w3-image offCalend" src="img/patapng.png" />
        </div>
        <div class="w3-threequarter">
          <span class="horarioBlock" > <br> Disponivel<br> Horario: '.$x.'h</span>
        </div>
      </div></a>';
    }
  }

  echo $page;

  $conn->close();



?>
