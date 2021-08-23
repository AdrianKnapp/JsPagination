<?php
require '../config.php';

$countLines = "
    SELECT id
    FROM usuarios;
";
$countLines = $pdo->query($countLines);
$maxPages = ceil(($countLines->rowCount() / 5) - 1);

if(isset($_GET['p'])){
  $page = addslashes($_GET['p']); // pegar a paginação.
  $linesToQuery = 5 * $page; // Buscar a partir de qual linha.
  $query = "
    SELECT id
    FROM usuarios
    LIMIT 5 OFFSET $linesToQuery;
  ";
} else {
  $page = 0;
  $query = "
      SELECT id
      FROM usuarios
      LIMIT 5;
    ";
}

$query = $pdo->query($query);
if($query->rowCount() > 0){
  $numOfIds = $query->rowCount();
  $querySucefull = '';
}

$dataArray = array();
if(isset($querySucefull)){
  foreach($query->fetchAll() as $data):
    $id = $data['id'];
    array_push($dataArray, $id);
  endforeach;
  $arrayJson = array(
    'error'   => false,
    'numbers' => $dataArray,
    'maxPages' => $maxPages,
  );
} else {
  $arrayJson = array(
    'error'   => true
  );
}
echo json_encode($arrayJson);
// echo '{"error":true,"numbers":["1","2","3","4","5"],"maxPages":4}';
?>
