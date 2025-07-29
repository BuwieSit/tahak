<?php

    try {
        $conn = mysqli_connect('localhost', 'root', '', 'tahak_db');
    }
    catch (mysqli_sql_exception) {
            echo 'Connection Error: ' . mysqli_connect_error();
  
    }



?>