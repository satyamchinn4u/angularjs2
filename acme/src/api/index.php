<?php
if($_REQUEST['uname']=="admin@gmail.com" && $_REQUEST['password']="password"){
	echo json_encode(array("Success"=>1));
}else
{
	echo json_encode(array("Success"=>0));
}

?>