var reduce = function (key, values)
{
    var sum = 0;
    //For loop in the table Values to add all the 1's
    for (var i = 0;i<values.length;i++)
    {
        sum += parseInt(values[i]);
    }
    document.write('('+key+','+sum+')');
}