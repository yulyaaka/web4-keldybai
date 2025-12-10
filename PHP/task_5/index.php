<!DOCTYPE html>
<html>
<head>
    <title>Lab_5</title>
</head>
<body>
<form action="" method="post">
    <input type="number" name="num1" placeholder="Первое число" required>
    <select name="operation" required>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
    </select>
    <input type="number" name="num2" placeholder="Второе число" required>
    <button type="submit">Вычислить</button>
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $num1 = $_POST["num1"];
    $num2 = $_POST["num2"];
    $operation = $_POST["operation"];
    $result = "";
    switch ($operation) {
        case 'add':
            $result = $num1 + $num2;
            break;
        case 'subtract':
            $result = $num1 - $num2;
            break;
        case 'multiply':
            $result = $num1 * $num2;
            break;
        case 'divide':
            if ($num2 == 0) {
                $result = "На ноль делить нельзя";
            } else {
                $result = $num1 / $num2;
            }
            break;
    }
    echo "<h3>Результат: " . htmlspecialchars($result) . "</h3>";
}
?>
</body>
</html>