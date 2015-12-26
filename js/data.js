$(document).ready(function()
{
	window.onload = Loadberanda();
	$(" zikran").click(function(){Loadzikran();});
	$(" laode").click(function(){Loadlaode();});
	$(" fajar").click(function(){Loadfajar();});
});

function loading(){
	$(".content-block").html('<center><img src="img/loading.gif"/><i> loading page ...</i></center>');
	 $(".content-block").hide();
	 $(".content-block").fadeIn("slow");
};
function Loadzikran(){loading();$(".item-link").load('pengantar.html');};
function Loadlaode(){loading();$(".item-link").load('pengantar.html');};
function Loadfajar(){loading();$(".item-link").load('pengantar.html');};