<script>
var firstNumber = prompt(‘Enter first number:’,0);
var secondNumber = prompt(‘Enter second number’,0);
var result = 0;
if (secondNumber == 0)
{
    alert(‘ERROR Message: Cannot divide by zero.’);
}
else
{
    result = firstNumber/secondNumber;
    alert(“Result: “ + result);
}
</script>