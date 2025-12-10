<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab_2</title>
</head>
<body>
<?php
$num1 = 99; 
$num2 = 1;  
$sum = $num1 + $num2;
echo "Сумма чисел $num1 и $num2 равна $sum. <br>";

if ($sum % 2 == 0) {
    echo "Сумма является четной";
} else {
    echo "Сумма является нечётной";
}
?>
</body>
</html>