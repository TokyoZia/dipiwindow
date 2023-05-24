<?php

// Создание соединения с базой данных MS SQL Server
$conn = mssql_connect('DESKTOP-59TO41P', 'root', '2003maksimA');

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

// Создание запроса SQL для вставки данных в таблицу
$sql = "INSERT INTO messages (customer_name, customer_phone, message) VALUES ('$name', '$email', '$message')";

// Выполнение запроса SQL
$result = mssql_query($sql);

// Проверка результата выполнения запроса и вывод сообщения об ошибке при необходимости
if (!$result) {
  die('Ошибка: ' . mssql_get_last_message());
}

// Закрытие соединения с базой данных
mssql_close($conn);

?>
