<SCRIPT>
var username = prompt(‘Enter Username:’);
var password = prompt(‘Enter Password:’);
if (username != “” && password != “”)
{
    if (username == “admin” && password == “admin123”)
    {
        alert(‘Login Successful’);
    }
else
    {
        alert (‘Login Failed’);
    }
}
</SCRIPT>