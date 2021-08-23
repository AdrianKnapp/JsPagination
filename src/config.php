<?php
$dbuser = "root";
$dbpass = "";
$dsn = "mysql:dbname=pagination;host=localhost";

try {
  $pdo = new PDO($dsn, $dbuser, $dbpass);

} catch( PDOException $e) {
  echo "Deu erro" .$e->getMessage();
  exit;
}

?>