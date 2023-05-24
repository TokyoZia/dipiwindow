<?php
$servername = "localhost";
$username = "host1859362";
$password = "OG3Lxjbzy8";
$dbname = "host1859362";

// создание соединения
$conn = mysqli_connect($servername, $username, $password, $dbname);

// проверка соединения
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connection successful";

// закрытие соединения
mysqli_close($conn);
?>