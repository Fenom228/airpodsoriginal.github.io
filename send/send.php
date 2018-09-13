<?php
header("Content-Type: text/html; charset=utf-8");

if(isset($_POST['phone'])) {
	
$email = "firsanov.deniska@ukr.net"; #Email, на него придут письма
$title = "Заказ AIRPODS"; #Заголовок письма
$phone = $_POST['phone'];
$text = "
Информация о покупателе:

Имя: ".$_POST['name']."
Телефон: ".$_POST['phone']."
IP-адрес посетителя: ".@$_SERVER['REMOTE_ADDR']."
Заявка пришла с сайта:" . $_SERVER['HTTP_REFERER'] ."
Время заказа: ".date("Y-m-d H:i:s");

if(mail($email, $title, $text)) {
	header('Location: good.html');
} else {
	echo "Ошибка. Возможно функция mail отключена. Обратитесь к хостинг-провайдеру или возьмите консультацию на сайте, где купили шаблон";
}
} else {
	echo "Ошибка";
}
?>