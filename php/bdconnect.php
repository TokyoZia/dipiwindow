<?php
$servername = "localhost";
$username = "host1859362";
$password = "OG3Lxjbzy8";
$dbname = "host1859362";
// Создание соединения с базой данных MS SQL Server
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Получение данных из формы HTML
$name = $_POST['name'];
$phone = $_POST['phone'];
$adress = $_POST['adress'];
$comment = $_POST['comment'];

// Подготовка данных к записи в базу данных
$name = mssql_real_escape_string($name);
$phone = mssql_real_escape_string($phone);
$adress = mssql_real_escape_string($adress);
$comment= mssql_real_escape_string($comment);
$col1= mssql_real_escape_string($col1);
$col2= mssql_real_escape_string($col2);
$col3= mssql_real_escape_string($col3);
$col4= mssql_real_escape_string($col4);
$col5= mssql_real_escape_string($col5);
$col6= mssql_real_escape_string($col6);
$col7= mssql_real_escape_string($col7);
$col8= mssql_real_escape_string($col8);
$totalPrice= mssql_real_escape_string($totalPrice);

// Создание запроса SQL для вставки данных в таблицу
$sql = "INSERT INTO orders (customer_name, customer_phone, comment, adress, Hawaiian_Pizza, Milk_shake, Lomi-Semon, Haupia, Poke, Tea, Loko-Moko, Poi, total_price ) VALUES ('$name', '$phone', '$comment', $adress', '$col1', '$col2', '$col3','$col4','$col5','$col6','$col7', '$col8', '$totalPrice')";

// Выполнение запроса SQL
$result = mssql_query($sql);

// Проверка результата выполнения запроса и вывод сообщения об ошибке при необходимости
if (!$result) {
  die('Ошибка: ' . mssql_get_last_message());
}

// Закрытие соединения с базой данных
mssql_close($conn);

?>
