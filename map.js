var map= function (key, value)
{
  //Split words one by one
  var my_words =value.split(" ");
  for (var i= 0;i<my_words.length;i++)
    {
        if(my_words[i] !=="")
            {
                document.write( '(' + my_words[i].toLowerCase()+','+1+ ')<br>');
            }
    }
}
