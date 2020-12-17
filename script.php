<?php
    $email = filter_input(INPUT_POST, 'email');

    if(!empty($email)) {
        $host = "sql303.epizy.com";
        $dbusername = "epiz_24708302";
        $dbpassword = "o1fM4ejP5R4fz";
        $dbname = "epiz_24708302_emails";
        
        $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);
        
        if(mysqli_connect_error()) {
            die('Connect Error('. mysqli_connect_errno() .') '. mysqli_connect_error());
        }
        else {
            $sql = "INSERT INTO email (email) values ('$email')";
            if ($conn->query($sql)) {
                echo "New email is inserted successfully!";
            }
            else {
                echo "Error: ". $sql ."
                ". $conn->error;
            }
            $conn->close();
        }
    }
    else {
        echo "Email should not be empty";
        die();
    }
?>