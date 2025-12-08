<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab_4</title>
</head>
<body>
<?php
$users = [
    [
        "name" => "Иван",
        "age" => 55,
        "city" => "Москва"
    ],
    [
        "name" => "Анна",
        "age" => 22,
        "city" => "Санкт-Петербург"
    ],
    [
        "name" => "Евгений",
        "age" => 42,
        "city" => "Казань"
    ],
];

foreach ($users as $user) {
    echo "<ul>";
    echo "<li>Имя: " . $user['name'] . "</li>";
    echo "<li>Возраст: " . $user['age'] . "</li>";
    echo "<li>Город: " . $user['city'] . "</li>";
    echo "</ul>";
}
?>
</body>
</html>