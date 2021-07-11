var compteurImage= 1;
var totalimage= 5;

function slider(x){
 var image=document.getElementById('img');
compteurImage=compteurImage + x;
image.src="images/slide/Congo" + compteurImage + ".jpg";

if (compteurImage >=totalimage)
{
	compteurImage=1;
}
if(compteurImage<1){
compteurImage=totalimage;

}

}



function sliderAutomatique(){
	var image=document.getElementById('img');
   compteurImage=compteurImage + 1;
   image.src="images/slide/Congo" + compteurImage + ".jpg";
   
   if (compteurImage >=totalimage)
   {
	   compteurImage=1;
   }
   if(compteurImage<1){
   compteurImage=totalimage;
   
   }
   
   }
   window.setInterval(sliderAutomatique,3000);