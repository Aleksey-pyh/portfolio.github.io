
<$php
ini_set('display_errors','On');
error_reporting('E_ALL');
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);

$name = urldecode($name);
$email = urldecode($email);
$message = urldecode($message);

$name = trim($name);
$email = trim($email);
$message = trim($message);

echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $message;

mail("alexey.pyh@yandex.ru", "Заявка с сайта", "Имя:".$name.". E-mail: ".$email "Текст письма:".$message,"From: example2@mail.ru \r\n");
if (mail("alexey.pyh@yandex.ru", "Заявка с сайта", "Имя:".$name.". E-mail: ".$email "Текст письма:".$message,"From: example2@mail.ru \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>