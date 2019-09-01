function getSliderVal() 
{
    var x = document.getElementById("myRange").value;
    document.getElementById("dispSliderVal").innerHTML = "User judgement: " + x +"%";
}