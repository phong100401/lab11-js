<script>
var zipcodepattern = /^\d{5}$/;
var zipcode = zipcodepattern.exec(prompt('Enter ZIP Code:’));
if(zipcode != null)
{
    alert('alid ZIP Code.’);
    alert('Regular Expression Pattern: ‘ + zipcodepattern.source);
}
else
{
    alert('Invalid ZIP Code – Format xxxxx.');
}
</script>