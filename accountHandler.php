<?php
include './conn.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_POST['action'] === 'login') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if account exists
    $sql = "SELECT * FROM tahak_user WHERE username = ?";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)) {
        echo 'error';
        exit();
    }

    mysqli_stmt_bind_param($stmt, 's', $username);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if ($row = mysqli_fetch_assoc($result)) {
        if ($row['password'] === $password) {
            // Save username and seed points in session
            $_SESSION['username'] = $row['username'];
            $_SESSION['seed'] = $row['seed'];
            $_SESSION['profile'] = $row['profile'];
            $_SESSION['email'] = $row['email'];
            
            echo 'success';
            exit();
        } else {
            echo 'wrong_credentials';
                exit();
            }
        } else {
            echo 'no_account';
            exit();
        }
    }
?>
