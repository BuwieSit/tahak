<?php
session_start();

if (isset($_SESSION['username']) && isset($_SESSION['seed'])) {
    echo json_encode([
        'id' => $_SESSION['user_id'],
        'username' => $_SESSION['username'],
        'seed' => $_SESSION['seed'],
        'email' => $_SESSION['email'],
        'profile' => $_SESSION['profile']
    ]);
} else {
    echo json_encode(['error' => 'not_logged_in']);
}
?>
