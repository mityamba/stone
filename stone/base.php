<? date_default_timezone_set('Asia/Yakutsk');

define('HOST_CONNECT', 'localhost');
define('LOGIN_CONNECT', '***');
define('PASSW_CONNECT', '***');
define('DB_CONNECT', '***'); 

function f_db_connect() {
   if ($db = @mysql_connect(HOST_CONNECT, LOGIN_CONNECT, PASSW_CONNECT)) {
       mysql_select_db(DB_CONNECT);
       return $db;
   }
   else {
       $err = '<p align="center" class="error">Не удалось установить соединение с базой данных.</p>';
       exit($err);
   }
}

function f_db_close() {
    mysql_close($db);
} ?>
