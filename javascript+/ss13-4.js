<script>
var age = parseInt(prompt(“Enter age”, “Age”))
status = ((typeof(age) == “number” && (age >= 18)) ?“eligible”
: “not eligible”;
document.write(‘You are ‘ + age + ‘ years old, so you are ‘
 +status + ‘ to vote.’);
</script>