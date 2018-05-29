//diy function -- mudar extensao do arquivo

<!DOCTYPE html>
<html>
<body>

<script>
function printMessage() {
  // Add code here
  var stringToPrint = 'Hello world'
  console.log('will I get executed how many times?');
  return stringToPrint //it returns a string
  console.log('hi')//the function stops working after the return statement so this code would never run

}
  document.write(printMessage());

  var myString = printMessage()
  console.log(myString);

//it will run two times because we are calling it twice
</script>

</body>
</html>
