

ajax = false;


function cms(){
	date = new Date();
	time = date.getMilliseconds();
	file = arguments[0]+"?"+time;
	mode = arguments[1];
	var xmlhttp;


	try{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				processRequest(xmlhttp);
			}
		}
	}catch(e){
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onload = function(){
			processRequest(xmlhttp);
		}
	}

	xmlhttp.open("GET.html", file);
	xmlhttp.send(null);
}

function processRequest(xmlhttp){
	//配列処理
	var Text = xmlhttp.responseText;
	var data = Text.split(/\n/);
	
	
	if(mode == "more") dl_add(data);
	
	dl_count = 0;
	for(num in data){

	  var line = data[num].split(/,/);
	  
	  var dl = document.getElementsByTagName('dl')[dl_count];
  
	  if(!dl){return;}	
	  
	  var dt = dl.getElementsByTagName('dt')[0];
	  var dd = dl.getElementsByTagName('dd')[0];
	  

	  
	  //書き込み処理
	  if(line[4] != "表示") continue;
	
	  dt.innerHTML = line[0];
	  if(line[2].length>2){
	    dd.innerHTML = '<a href='+line[2]+' target='+line[3]+' class="a_link2">'+line[1]+'</a>';
	  }else{
		dd.innerHTML = line[1];	
	  }
	  dl_count++;
	}
	

	
}



function dl_add(data){
	
 
 div = document.getElementById('more');
 var html = "";
 var dl_count = 0;
 for(i=0;i<data.length;i++){
	line = data[i].split(/,/);
	if(line[4]=="表示") dl_count++;
 }

 for(i=0;i<dl_count;i++){
	html += "<dl><dt></dt><dd></dd></dl>"; 
 }
 div.innerHTML = html;
}
