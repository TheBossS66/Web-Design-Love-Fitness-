function formValidator()
{
var nm=document.forms["form1"]["name"].value;
var em = document.forms["form1"]["email"].value;
var atpos = em.indexOf("@");
var dotpos = em.lastIndexOf(".");
var mn = document.forms["form1"]["mob"].value;
var mobNumLen = document.forms["form1"]["mob"].value.length; 
if(nm == "" || nm == null)
{
alert( "Name Field must not be empty" );
document.form1.name.focus() ;
return false;
} 
if(em == null || nm=="")
{
alert("Email field must not be empty");
document.form1.email.focus();
return false;
} 
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=em.length)
{
alert("Enter proper e-mail address");
document.form1.email.focus();
return false;
}

if(mn == "" || mn == null || isNaN(mn) ||
mn.length < 10 || mn.length >10 )
{
alert( "Mobile Number must be in the format ##### and of minimum 10 digits" );
document.form1.mob.focus() ;
return false;
} 
	return( alert( "Your form is submitted" ));

}
