<?php 

header("Access-Control-Allow-Origin: *"); 
$host = "localhost:3308"; 
$user = "root"; 
$password = ""; 
$dbname = "travel_app_bd"; 
$id = '';
 
$con = mysqli_connect($host, $user, $password,$dbname);
 
$method = $_SERVER['REQUEST_METHOD'];      

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}



switch ($method) {
    case 'GET':
      //$sql = "SELECT name, password FROM users";
      $sql = "select * from comments";
    break;
    case 'POST':
      $comment = $_POST["comment"];
      $name = $_POST["name"];
      $date = $_POST["date"];
     
      $sql = "insert into comments (name, comment, date) values ('$name', '$comment', '$date')"; 
      break;
}

$result = mysqli_query($con,$sql);

if ($method == 'GET') {
  if (!$id) echo '[';
  for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
    echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
  }
  if (!$id) echo ']';
} elseif ($method == 'POST') {
  echo json_encode($result);
} else {
  echo mysqli_affected_rows($con);
}

$con->close();