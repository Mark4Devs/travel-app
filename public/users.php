<?php 

header("Access-Control-Allow-Origin: *"); 
$host = "eu-cdbr-west-02.cleardb.net"; 
$user = "b8342cddce8f53"; 
$password = "dd22fad0"; 
$dbname = "heroku_14124cbc8023421"; 
$id = '';

 
$con = mysqli_connect($host, $user, $password,$dbname);
 
$method = $_SERVER['REQUEST_METHOD'];
 
 
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

switch ($method) {
    case 'GET':
    $sql = "select * from users"; 
    break;
    case 'POST':
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $
   
    $sql = "insert into users (FirstName, email, pass) values ('$name', '$email', '$password')"; 
    break;
}


// run SQL statement
$result = mysqli_query($con,$sql);
 
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}

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
?>