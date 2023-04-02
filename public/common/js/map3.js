// JavaScript Document

var btns;
var table;
var back_a;
var query
var map_arr = new Array(); //北海道～九州
var test_count = 0;
var map;
var infoWindow;

// 2018.12.04 start
var g_marker1;
// 2018.12.04 end
// 2013.01.11 start
var strDebug;
// 2013.02.15 start
var bFirstFlg;
var nCntFlg;
// 2013.02.15 end
// 2013.02.19 start
var nAreaCnt;
// 2013.02.19 end
// 2015.04.07 start
var newAD;
// 2015.04.07 end
// 2015.05.14 start
var timer = 1;
// 2015.05.14 end
// 2019.10.11 start
var flgcreg1 = 1;
// 2019.10.11 end
function map(arg){
    add = "東京都新宿区西新宿6-22-1　新宿スクエアタワー"; //住所
    map = null;
    var geocoder = null;
    g_marker1 = null;
	// mapの引数がdebugの場合、地図呼び出し失敗時にalert表示
	strDebug = "";
	if(typeof arg == 'undefined') {
		// 引数が空なので何もしない
	} else {
		strDebug = arg;
	}
// 2013.02.18 start
	init_FirstFlg();
// 2013.02.18 end
// 2013.02.19 start
	nAreaCnt = 0;
// 2013.02.19 end
// 2013.01.11 end
    initialize();
	//div
	btns = document.getElementById('btns');
	table = document.getElementById('table');
	back_a = document.getElementById('back_a');
// 2013.02.18 start
	show_Honsha();
	inc_FirstFlg();
// 2013.04.16 start
	upd_pageBreakBefore('auto');
// 2013.04.16 end
// 2013.02.18 end
// 2013.02.15 end

}


function initialize() {

  /*（2）地図の表示 */
  map = new google.maps.Map(document.getElementById("map"),{
    zoom: 13,                            //地図のズームレベル
    center: new google.maps.LatLng(0.0, 0.0),    //地図の中心座標
    mapTypeId: google.maps.MapTypeId.ROADMAP       //マップタイプ
  });
  /*（3-1）マーカーの表示 */
//  var marker = new google.maps.Marker({
//    map: map,                                      //マーカーを表示する地図名
//    position: new google.maps.LatLng(35.696066, 139.689370)   //マーカーの表示位置
//  });
  /*（3-2）マーカークリックで情報ウィンドウを開く */
  infoWindow = new google.maps.InfoWindow();
//  var infoWindow = new google.maps.InfoWindow({ //マーカー毎にinfoWindowを作成
//    maxWidth: 250,                                           //情報ウィンドウの最大幅をピクセルで設定
//    content: '<b>'+ '太平ビルサービス' +'</b><br />'+ '総本社' //情報ウィンドウ内に表示するHTML
//  });
//  google.maps.event.addListener(marker, 'click', function() {infoWindow.open(map,marker);});

//    map = new GMap2(document.getElementById("map"));
    map.setCenter(new google.maps.LatLng(0.0, 0.0), 13);
    geocoder = new google.maps.Geocoder();
	showAddress(add);
	//map.addControl(new GLargeMapControl());

      sendRequest();
}


function showAddress(address,name) {
//test_count+=1;
//test.innerHTML = address+"■"+test_count;

// 2013.01.11 start
//	address = address.replace(/　/g, "");
	point = null;
// 2013.01.11 end
      //google.maps.event.trigger(map, 'resize');

      if (geocoder) {
		geocoder.geocode({'address': address}, function(res, state) {

//        geocoder.geocode(
//        geocoder.getLatLng(
//          address,
//          {'address': address},
//          function(point) {
//          function(res, state) {

            //分岐
// 2013.01.25 start
			  switch(address){
//               case "北海道旭川市６条通７－右１－３０－１<br />ノムラビル４Ｆ" :
               case "北海道旭川市６条通７－右１－３０－１　エクセルＡ１ビル４Ｆ" :
			     var latlng = new google.maps.LatLng(43.7711500,142.3609100);
				 point = latlng;
				 break;
               case "北海道小樽市稲穂４－９－１６" :
			     var latlng = new google.maps.LatLng(43.200969,140.993003);
				 point = latlng;
				 break;
               case "北海道根室市本町３－１　信興商事みなとみらい館１Ｆ" :
			     var latlng = new google.maps.LatLng(43.33692,145.579696);
				 point = latlng;
				 break;
//               case "北海道札幌市中央区南１条西６丁目<br />札幌北辰ビル３Ｆ" :
               case "北海道札幌市中央区南１条西６丁目　札幌北辰ビル３Ｆ" :
			     var latlng = new google.maps.LatLng(43.0588700,141.3490250);
				 point = latlng;
				 break;
//               case "宮城県仙台市泉区泉中央３－２－１<br />ルーセント２１ ４Ｆ" :
               case "宮城県仙台市泉区泉中央３－２－１　ルーセント２１ ４Ｆ" :
			     var latlng = new google.maps.LatLng(38.325622,140.883294);
				 point = latlng;
				 break;
//               case "福島県白河市昭和町１５６－１<br />トレンドビル３Ｆ" :
               case "福島県白河市高山７７　新白河高山テナントＣ号室" :
			     var latlng = new google.maps.LatLng(37.118076,140.191717);
				 point = latlng;
				 break;
//               case "長野県長野市中御所字宮沖２１９－１<br />長野第一生命ビル２Ｆ" :
               case "長野県長野市中御所字宮沖２１９－１　長野第一生命ビル２Ｆ" :
			     var latlng = new google.maps.LatLng(36.644302,138.184901);
				 point = latlng;
				 break;
//               case "静岡県島田市本通３－３－７<br />永井ビル１Ｆ" :
               case "静岡県島田市本通３－３－７　永井ビル１Ｆ" :
			     var latlng = new google.maps.LatLng(34.832695,138.175363);
				 point = latlng;
				 break;
//               case "大分県中津市豊田町３－６－２０<br />こばとビル２Ｆ" :
               case "大分県中津市豊田町３－６－２０　こばとビル２Ｆ" :
			     var latlng = new google.maps.LatLng(33.597411,131.188777);
				 point = latlng;
				 break;
//               case "大分県中津市豊田町３－６－２０<br />こばとビル２Ｆ" :
               case "大分県中津市豊田町３－６－２０　こばとビル２Ｆ" :
			     var latlng = new google.maps.LatLng(33.597411,131.188777);
				 point = latlng;
				 break;
//			   case "東京都新宿区北新宿２－２１－１<br />新宿フロントタワー１９Ｆ<br />":
			   case "東京都新宿区北新宿２－２１－１　新宿フロントタワー１９Ｆ":
			     var latlng = new google.maps.LatLng(35.696066, 139.689370);
				 point = latlng;
				 break;
               case "滋賀県彦根市旭町６－２２　田中ビル３Ｆ" :
			     var latlng = new google.maps.LatLng(35.273272, 136.26117);
				 point = latlng;
				 break;
               case "京都府京都市下京区烏丸通四条下る水銀屋町　６２５" :
                 address = "京都府京都市下京区烏丸通四条下る水銀屋町６２５";
			     var latlng = new google.maps.LatLng(35.003275, 135.760386);
			     //var latlng = new google.maps.LatLng(35.002873, 135.759894);
				 point = latlng;
				 break;
               case "岐阜県高山市花岡町２－５５－２５　高山ＬＯビル２Ｆ" :
			     var latlng = new google.maps.LatLng(36.145263, 137.251765);
				 point = latlng;
				 break;
               case "愛媛県八幡浜市産業通り１５－２２　ヤシロコーポ３０２" :
			     var latlng = new google.maps.LatLng(33.452977, 132.432663);
				 point = latlng;
				 break;
               case "長崎県佐世保市三浦町２－２８　ベイサイド戸尾４０４" :
			     var latlng = new google.maps.LatLng(33.166492, 129.723651);
				 point = latlng;
				 break;
               case "鳥取県米子市東福原２－１－１　わこうビル２Ｆ" :
			     var latlng = new google.maps.LatLng(35.43906, 133.342044);
				 point = latlng;
				 break;
               case "島根県松江市雑賀町１９９　藤岡ビル" :
			     var latlng = new google.maps.LatLng(35.458751, 133.06446);
				 point = latlng;
				 break;
               case "島根県松江市雑賀町２０１" :
			     var latlng = new google.maps.LatLng(35.458664, 133.064121);
				 point = latlng;
				 break;
               case "島根県浜田市長沢町３０４９" :
			     var latlng = new google.maps.LatLng(34.908963, 132.101195);
				 point = latlng;
				 break;
               case "島根県出雲市姫原４－４－２　ニューメルヘンタムラ１Ｆ" :
			     var latlng = new google.maps.LatLng(35.375781, 132.754234);
				 point = latlng;
				 break;
               case "島根県大田市大田町大田イ８５" :
			     var latlng = new google.maps.LatLng(35.195803, 132.498321);
				 point = latlng;
				 break;
               case "島根県益田市乙吉町イ３２７－６　テナントＷＡＮ１０６号" :
			     var latlng = new google.maps.LatLng(34.679617, 131.84815);
				 point = latlng;
				 break;
               case "島根県隠岐郡隠岐の島町中町目貫の三４９" :
			     var latlng = new google.maps.LatLng(36.205028, 133.334421);
				 point = latlng;
				 break;
               case "岡山県岡山市北区蕃山町９－１９　岡山大同生命ビル２Ｆ" :
			     var latlng = new google.maps.LatLng(34.665956, 133.927429);
				 point = latlng;
				 break;
               case "佐賀県佐賀市駅前中央１－１３－２０　佐賀駅前ノースフロントビルディング４Ｆ" :
			     var latlng = new google.maps.LatLng(33.264509, 130.297747);
				 point = latlng;
				 break;
			   default:
			  }
// 2013.01.25 start

			//分岐

	        //取得に成功した場合
	        if (state != google.maps.GeocoderStatus.OK) {

	            if (!point) {
	// 2013.01.11 start
					// デバッグモード判定
					if(strDebug == "debug"){
						alert(address + " not found");
					}
	// 2013.01.11 end
					address2=address.substring(0,address.length-1);
	// 2013.01.11 start
					console.log("open failed");
					// 無限ループ回避
					if(address2.length > 0) {
						showAddress(address2,name);
					}
				} else {
// 2015.04.07 start
					var name1 = document.getElementById("name1");
					name1.innerHTML = '【'  + name + '】';
// 2015.04.07 end
		            map.setCenter(point);
		            map.setZoom(13);
		            var marker = new google.maps.Marker({
		                map: map,
		                position: point
		            });
	//              map.setCenter(point, 13); //フキダシ
	//              var marker = new google.maps.Marker(point);
	//              map.addOverlay(marker);
	//			  marker.openInfoWindowHtml(address);
					//情報窓に住所と緯度経度を表示
		            var htmlstr = new String(address).toString();
		            //var htmlstr = address;
		            if( infoWindow.getMap() ) {
			            infoWindow.close();
		            }
		            infoWindow = new google.maps.InfoWindow({
					    content: htmlstr,
					    disableAutoPan: true
					});
					marker.addListener('click', function() {
			            map.setZoom(13);
			            infoWindow.setContent(htmlstr); //情報ウィンドウの内容
						infoWindow.open(map, marker);
						//google.maps.event.trigger(map, 'resize');
						//map.setCenter(point);
						console.log("click test1");
					});
					//google.maps.event.addListenerOnce(map, 'idle', function(){
					//	console.log("idle test1");
					//});
					//google.maps.event.trigger(marker, 'click');
					var tid = setInterval(function (map, marker) {
						// タイマー停止
						clearInterval(tid);
			            //map.setZoom(13);
						google.maps.event.trigger(g_marker1, 'click');
						console.log("interval test1");
					}, 500);
					console.log("open test1");
					g_marker1 = marker;
		            //infoWindow.setContent(htmlstr); //情報ウィンドウの内容
		            //infoWindow.open(map,marker);
				}
// 2013.01.11 end
            } else {
	            //入力された住所を中心にマップを表示
// 2015.04.07 start
	            if (!point) {
					var name1 = document.getElementById("name1");
					name1.innerHTML = '【'  + name + '】';
	// 2015.04.07 end
		            map.setCenter(res[0].geometry.location);
		            map.setZoom(13);
		            var marker = new google.maps.Marker({
		                map: map,
		                position: res[0].geometry.location
		            });
	//              map.setCenter(point, 13); //フキダシ
	//              var marker = new google.maps.Marker(point);
	//              map.addOverlay(marker);
	//			  marker.openInfoWindowHtml(address);
					//情報窓に住所と緯度経度を表示
		            var htmlstr = new String(address).toString();
		            //var htmlstr = address;
		            if( infoWindow.getMap() ) {
			            infoWindow.close();
		            }
		            infoWindow = new google.maps.InfoWindow({
					    content: htmlstr,
					    disableAutoPan: true
					});
					marker.addListener('click', function() {
			            map.setZoom(13);
			            infoWindow.setContent(htmlstr); //情報ウィンドウの内容
						infoWindow.open(map, marker);
						//google.maps.event.trigger(map, 'resize');
						//map.setCenter(res[0].geometry.location);
						console.log("click test2");
					});
					//google.maps.event.addListenerOnce(map, 'idle', function(){
					//	console.log("idle test2");
					//});
					//google.maps.event.trigger(marker, 'click');
					var tid = setInterval(function (map, marker) {
						// タイマー停止
						clearInterval(tid);
			            //map.setZoom(13);
						google.maps.event.trigger(g_marker1, 'click');
						console.log("interval test2");
					}, 500);
					console.log("open test2");
					g_marker1 = marker;
		            //infoWindow.setContent(htmlstr); //情報ウィンドウの内容
		            //infoWindow.open(map,marker);
	            } else {
					var name1 = document.getElementById("name1");
					name1.innerHTML = '【'  + name + '】';
// 2015.04.07 end
		            map.setCenter(point);
		            map.setZoom(13);
		            var marker = new google.maps.Marker({
		                map: map,
		                position: point
		            });
	//              map.setCenter(point, 13); //フキダシ
	//              var marker = new google.maps.Marker(point);
	//              map.addOverlay(marker);
	//			  marker.openInfoWindowHtml(address);
					//情報窓に住所と緯度経度を表示
		            var htmlstr = new String(address).toString();
		            //var htmlstr = address;
		            if( infoWindow.getMap() ) {
			            infoWindow.close();
		            }
		            infoWindow = new google.maps.InfoWindow({
					    content: htmlstr,
					    disableAutoPan: true
					});
					marker.addListener('click', function() {
			            map.setZoom(13);
			            infoWindow.setContent(htmlstr); //情報ウィンドウの内容
						infoWindow.open(map, marker);
						//google.maps.event.trigger(map, 'resize');
						//map.setCenter(point);
						console.log("click test3");
					});
					//google.maps.event.addListenerOnce(map, 'idle', function(){
					//	console.log("idle test3");
					//});
					//google.maps.event.trigger(marker, 'click');
					var tid = setInterval(function (map, marker) {
						// タイマー停止
						clearInterval(tid);
			            //map.setZoom(13);
						google.maps.event.trigger(g_marker1, 'click');
						console.log("interval test3");
					}, 500);
					console.log("open test3");
					g_marker1 = marker;
		            //infoWindow.setContent(htmlstr); //情報ウィンドウの内容
		            //infoWindow.open(map,marker);
	            }
            }
          }
        );
      }
      //google.maps.event.trigger(map, 'resize');

	 //map.checkResize(); //サイズ変更の通知
}






function Select(){

	var tag = "";
	var count = 0;


for(i=1;i<allData.length;i++){



		if(allData[i][0].length>1){

		var layout_1 = "";
		count++;
		dataKey = allData[i][0].replace('\n','');
		allData[i][0] = dataKey;

		if((count%8) == 0){var layout_1 = "end";}
//		if((count%5) == 0){var layout_1 = "layout_1 clearfix";}



// 2015.04.10 start
//		tag += '<li id="' + 'btns_btn_' + count + '" class="'+layout_1+'"><a class="btn_size" href="javascript:void(0);" onclick="Select2(\''+allData[i][0]+'\');"><span>'+dataKey+'</span></a></li>';
//		tag += '<li class="'+layout_1+'"><button ' + 'id="' + 'btns_btn_' + count + '" class="btn_size" onclick="Select2(this.value)" value="'+allData[i][0]+'">'+dataKey+'</button></li>';
// 2013.04.10 end

		map_arr.push(allData[i][0]);

		}


	}
// 2013.02.19 start
	nAreaCnt = count;
// 2013.02.19 end
//	btns.innerHTML += tag;


	//ＵＲＬ判別
// 2019.10.11 start
	query = location.href.split("?");
	if(query[1]){
		var strquery1 = query[1];
		var query2 = strquery1.split("&");
		var strno1 = -1;
		if(query2[1]){
			flgcreg1 = 2;
			strno1 = query2[0];
		} else {
			//alert(query2[0]);
			var strquery2 = query2[0];
			if(strquery2.indexOf("c=1") != -1){
				flgcreg1 = 2;
			} else {
				strno1 = strquery2;
			}
		}
		//alert(query[1]);
		if(strno1 > -1){
			Select2(map_arr[strno1]);
		}
	}
	if(flgcreg1 == 2){
		for(var j = 1;j < 35;j++){
			var obja = document.getElementById('a_btn_'+j);
			var strhref1 = obja.href;
			var query4 = strhref1.split("?");
			if(query4[1]){
				var strhref2 = query4[1];
				if(strhref2.indexOf("c=1") != -1){
					// 何もしない
				} else {
					obja.href = obja.href + '&c=1';
				}
			} else {
				obja.href = obja.href + '?c=1';
			}
		}
	}
// 2019.10.11 end
}



function Select2(A){

  var setKey = A; //セル最初の列（例：北海道電材社）

  companyKey = "";

  count = 0;
  Flag = "";

  table.innerHTML = '';



for(var i=-0; allData.length>i; i++){


	  if(allData[i][0] == setKey || Flag == "OK"){
		  if(allData[i][0] == setKey || allData[i][0].length == 1){
		    Flag = "OK";
			count++;
			if(companyKey==""){companyKey = i;}
		  }else{
		    Flag = "NO";
		  }
	  }

  };



// 2013.02.19 start
  upd_btns_bk(setKey);
// 2013.02.19 end
// 2013.04.16 start
  upd_pageBreakBefore('always');
// 2013.04.16 end


  table_write(setKey,0);




}




function table_write(A,num){

	int = 0;
	back_a.innerHTML = "";
// 2013.02.15 start
	show_Honsha();
// 2013.02.15 end

// 2015.05.14 start
	of_scroll();
// 2019.10.02 start
// miraclegate用
//	tableValue =  '<form name="myform" action="../contact/univ_reg_entry.php" method="POST">\n';
// 本番環境用
	tableValue =  '<form name="myform" action="https://www.taihei-bs.co.jp/contact/univ_reg_entry.php" method="POST">\n';
	tableValue += '<input type="hidden" name="branch01" value="">\n';
// 2019.10.02 end
//	tableValue =  '<table class="offies">\n';
// 2015.05.14 end
// 2015.04.09 start
	var strArea = "";
	var colspan3;
//	for(j=0;map_arr.length>j;j++) {
//		strArea += map_arr[j] + '\n';
//	}
//	alert(strArea);
//	tableValue += '<tr><th width="10%">'+allData[0][1]+'</th><th width="10%">'+allData[0][2]+'</th><th width="11%">'+allData[0][3]+'</th><th width="39%">'+allData[0][4]+'</th><th width="15%">'+allData[0][5]+'<th>'+allData[0][6]+'</th></tr>';
//	tableValue += '<tr><th width="10%">'+allData[0][1]+'</th><th width="10%">'+allData[0][2]+'</th><th width="11%">'+allData[0][3]+'</th><th width="39%" colspan="2">'+allData[0][4]+'</th><th width="15%">'+allData[0][5]+'<th>'+allData[0][6]+'</th></tr>';
// 2015.05.14 start
//	tableValue += '<tr><th width="105">'+allData[0][1]+'</th><!--<th width="55"></th>--><th width="65">'+allData[0][3]+'</th><th width="360" colspan="2">'+allData[0][4]+'</th><th width="95">'+allData[0][5]+'<th width="95">'+allData[0][6]+'</th></tr>';
// 2015.05.14 end
// 2015.04.09 end

// 2013.01.11 start
//	alert("count:" + count);
// 2013.01.11 end
for(i=int; count>i; i++){



	companykey2 = Number(companyKey+i); //companyKey=行数
// 2016.01.26 start
	var mapdata_temp1 = allData[companykey2][4];
	var nResult3 = mapdata_temp1.indexOf("<a>");
	if(nResult3 == -1) {
		// 何もしない
	} else {
		// リンクを削除
		mapdata_temp1 = mapdata_temp1.substr(0, nResult3);
	}
	mapdata = mapdata_func(mapdata_temp1);
// 2016.01.26 end
    allData[companykey2][4] = allData[companykey2][4].replace(/"/g,"");
    allData[companykey2][4] = allData[companykey2][4].replace(/\n/g,"<br \/>");

	style1 = (allData[companykey2][1]=="") ? "border:none" : "border-bottom:none;";
	if(allData[companykey2+1]){
	  style1 = (allData[companykey2+1][1] != "") ? "border-top:none" : "border:none;";
	}
// 2015.04.07 start
// 2015.05.14 start
//   colspan = (allData[companykey2][1]=="") ? '' : 'colspan="2"';
   colspan = '';
// 2015.05.14 end
   strKey3 = allData[companykey2][0].replace('\n','');
   colspan2 = (strKey3=="") ? '' : 'colspan="7"';
// 2015.05.14 start
//	   td2 = (allData[companykey2][1]=="") ? '<td class="nowrap">'+allData[companykey2][2]+'</td>' : '';
	   td2 = (allData[companykey2][2]=="") ? '<td class="nowrap">'+allData[companykey2][1]+'</td>': '<td class="nowrap">'+allData[companykey2][2]+'</td>';
//	name2 = (allData[companykey2][1]=="") ? allData[companykey2][2] : allData[companykey2][1];
	name2 = (allData[companykey2][2]=="") ? allData[companykey2][1] : allData[companykey2][2];
// 2015.05.14 end
// 2015.04.07 end

// 2015.04.07 start
//	tableValue += '<tr id="tr'+i+'" class="cursor" onmouseover="this.style.backgroundColor=\'#CCFFEC\'" onmouseout="this.style.background=\'\'" onclick="getMap(\''+mapdata+'\',this.id);">';
	if(strKey3.length > 0) {
		strArea = strKey3;
		colspan3 = colspan2;
// 2015.05.14 start
//		tableValue += '<tr id="tr'+i+'" class="cursor">';
//		tableValue += '<td class="nowrap" '+colspan2+'>'+allData[companykey2][0]+'&nbsp;エリア</td>';
//		tableValue += '</tr>';
		tableValue += '<h3>' + allData[companykey2][0] + '&nbsp;エリア</h3>\n';
		tableValue += '<table>\n';
// 2019.10.02 start
		tableValue += '<tr><th width="105">'+allData[0][1]+'</th><!--<th width="55"></th>--><th width="65">'+allData[0][3]+'</th><th width="340" colspan="2">'+allData[0][4]+'</th><th width="90">'+allData[0][5]+'<th width="90">'+allData[0][6]+'</th><th width="125">'+allData[0][9]+'</th></tr>';
// 2019.10.02 end
// 2015.05.14 end
	}
	tableValue += '<tr id="tr'+i+'" class="cursor">';
// 2015.04.07 end
// 2015.05.14 start
//	tableValue += '<td class="nowrap" style="'+style1+'" '+colspan+'>'+allData[companykey2][1]+'</td>';
// 2015.05.14 end
	tableValue += td2;
	tableValue += '<td>'+allData[companykey2][3]+'</td>';
// 2013.01.11 start
	var strAddress = "";
	strAddress = allData[companykey2][4];
	strAddress = strAddress.replace(/　/g, "<br \/>");
// 2016.01.26 start
	var strAA1 = strAddress;
	var nResult = strAA1.indexOf("<a>");
	if(nResult == -1) {
		// 何もしない
	} else {
		// リンクを文字列の後に挿入
		strAddress = strAddress.substr(0, nResult);
		strAddress += "<br \/>";
		strAA1 = strAA1.substr(nResult);
		strAA1 = strAA1.replace("<a>", "");
		var nResult2 = strAA1.indexOf("<\/a>");
		if(nResult2 != -1) {
			strAA1 = strAA1.substr(0, nResult2);
		}
		strAddress += "<a href='" + strAA1 + "' target='_blank'>" + strAA1 + "<\/a>";
	}
// 2016.01.26 end
// 2015.04.07 start
	tableValue += '<td class="nowrap border-r-w">'+strAddress+'</td>';
	tableValue += '<td class="border-l-w"><a data-target="con1" onclick="getMap2(\''+mapdata+'\',this.id,\''+name2+'\');" class="modal-open">MAP</a></td>';
//	tableValue += '<td><a href="simple.html" onclick="m_win(this.href,\'全国営業網\',780,410); return false;" style="text-decoration:none; color:#111111;"><div style="width:36px; text-align:center; background-color:#98c5e6; font-family:"メイリオ"; font-weight:bold;">MAP</div></a></td>';
// 2015.04.07 end
// 2013.01.11 end
	tableValue += '<td class="nowrap">'+allData[companykey2][5]+'</td>';
	tableValue += '<td class="nowrap">'+allData[companykey2][6]+'</td>';
// 2019.10.02 start
	var nReg1 = allData[companykey2][9];
	if(nReg1 == 0){
		tableValue += '<td class="nowrap">－</td>';
	} else {
		var value01 = allData[companykey2][10];
		value01 = value01.replace(/"/g,"");
		//2019.10.03 start
		var strSelect01 = '<div class="selectBranchWrap">\n';
		strSelect01 += '<select name="reg'+nReg1+'" id="reg'+nReg1+'" class="selectBranchBody">\n';
// 2019.10.11 start
		if(flgcreg1 == 2){
			strSelect01 += '<option value="1" class="selectBranchOption">大学卒</option>\n';
			strSelect01 += '<option value="2" selected="selected" class="selectBranchOption">キャリア</option>\n';
		} else {
			strSelect01 += '<option value="1" selected="selected" class="selectBranchOption">大学卒</option>\n';
			strSelect01 += '<option value="2" class="selectBranchOption">キャリア</option>\n';
		}
// 2019.10.11 end
		strSelect01 += '</select>\n';
		strSelect01 += '</div>'
		//2019.10.03 end
		tableValue += '<td class="nowrap">'+strSelect01+'<a onclick="onEntry1('+nReg1+');" class="modal-open2">'+value01+'採用担当へ</a></td>';
	}
// 2019.10.02 end
	tableValue += '</tr>';
}

// 2015.04.07 start
/*for(j=0; map_arr.length>j; j++) {
		if(strArea != map_arr[j]) {
			tableValue += '<tr id="tr2_'+j+'" class="cursor">';
			tableValue += '<td onclick="Select2(\'' + map_arr[j] + '\')" onmouseover="this.style.backgroundColor=\'#CCFFEC\'" onmouseout="this.style.background=\'\'" class="nowrap" '+colspan3+'>'+map_arr[j]+'&nbsp;エリア</td>';
			tableValue += '</tr>';
		}
	}*/
// 2015.04.07 end
// 2019.10.02 start
    table.innerHTML += tableValue+'</table></form>';
// 2019.10.02 end

}

// 2015.05.14 start
function table_all_write(){

	var int = 0;
	back_a.innerHTML = "";
    table.innerHTML = "";
	var setKey = ""; //セル最初の列（例：北海道電材社）
	var count = 0;
	var Flag = "";
	var strData0 = "";
	var strData1 = "";
	var strData2 = "";
	var strData3 = "";
	var strData4 = "";
	var strData5 = "";
	var strData6 = "";
	var strData7 = "";
	var strData8 = "";
// 2019.10.02 start
	var strForm0 = "";
	var strForm1 = "";
// 2019.10.02 end

// 2019.10.02 start
// miraclegate用
//	strForm0 = '<form name="myform" action="../contact/univ_reg_entry.php" method="POST">\n';
// 本番環境用
	strForm0 = '<form name="myform" action="https://www.taihei-bs.co.jp/contact/univ_reg_entry.php" method="POST">\n';
	strForm0 += '<input type="hidden" name="branch01" value="">\n';
	strForm1 = "</form>";
// 2019.10.02 end
	//of_scroll();
//	var tableValue =  '<table class="offies">\n';
	var tableValue =  '';
//	tableValue += '<tr><th width="105">'+allData[0][1]+'</th><!--<th width="55"></th>--><th width="65">'+allData[0][3]+'</th><th width="360" colspan="2">'+allData[0][4]+'</th><th width="95">'+allData[0][5]+'<th width="95">'+allData[0][6]+'</th></tr>';
	strData0 = tableValue;

	for(s=0; map_arr.length>s; s++) {
		companyKey = "";
		count = 0;
		setKey = map_arr[s];
		for(var t=-0; allData.length>t; t++){
			if(allData[t][0] == setKey || Flag == "OK"){
			  if(allData[t][0] == setKey || allData[t][0].length == 1){
			    Flag = "OK";
				count++;
				if(companyKey==""){
					companyKey = t;
					//alert("companyKey:" + companyKey);
				}
			  }else{
			    Flag = "NO";
			  }
			}
		}

		var strArea = "";
		var colspan3;
		tableValue = "";
		for(i=int; count>i; i++){
			companykey2 = Number(companyKey+i); //companyKey=行数
// 2016.01.26 start
			var mapdata_temp1 = allData[companykey2][4];
			var nResult3 = mapdata_temp1.indexOf("<a>");
			if(nResult3 == -1) {
				// 何もしない
			} else {
				// リンクを削除
				mapdata_temp1 = mapdata_temp1.substr(0, nResult3);
			}
			mapdata = mapdata_func(mapdata_temp1);
			//mapdata = mapdata_func(allData[companykey2][4]);
// 2016.01.26 end
		    allData[companykey2][4] = allData[companykey2][4].replace(/"/g,"");
		    allData[companykey2][4] = allData[companykey2][4].replace(/\n/g,"<br \/>");

			style1 = (allData[companykey2][1]=="") ? "border:none" : "border-bottom:none;";
			if(allData[companykey2+1]){
			  style1 = (allData[companykey2+1][1] != "") ? "border-top:none" : "border:none;";
			}
			colspan = '';
			strKey3 = allData[companykey2][0].replace('\n','');
			colspan2 = (strKey3=="") ? '' : 'colspan="7"';

			td2 = (allData[companykey2][2]=="") ? '<td class="nowrap">'+allData[companykey2][1]+'</td>': '<td class="nowrap">'+allData[companykey2][2]+'</td>';
			name2 = (allData[companykey2][2]=="") ? allData[companykey2][1] : allData[companykey2][2];
			if(strKey3.length > 0) {
				strArea = strKey3;
				colspan3 = colspan2;
//				tableValue += '<tr id="tr'+i+'" class="cursor">';
//				tableValue += '<td class="nowrap" '+colspan2+'>'+allData[companykey2][0]+'&nbsp;エリア</td>';
//				tableValue += '</tr>';
				if(s > 0){
					tableValue += '<div style="height:20px">&nbsp;</div>\n';
				}
				tableValue += '<h3>' + allData[companykey2][0] + '&nbsp;エリア</h3>\n';
				tableValue += '<table>\n';
// 2019.10.02 start
				tableValue += '<tr><th width="105">'+allData[0][1]+'</th><!--<th width="55"></th>--><th width="65">'+allData[0][3]+'</th><th width="340" colspan="2">'+allData[0][4]+'</th><th width="90">'+allData[0][5]+'<th width="90">'+allData[0][6]+'<th width="125">'+allData[0][9]+'</th></tr>';
// 2019.10.02 end
			}
			tableValue += '<tr id="tr'+i+'" class="cursor">';
			tableValue += td2;
			tableValue += '<td>'+allData[companykey2][3]+'</td>';

			var strAddress = "";
			strAddress = allData[companykey2][4];
			strAddress = strAddress.replace(/　/g, "<br \/>");
// 2016.01.26 start
			var strAA1 = strAddress;
			var nResult = strAA1.indexOf("<a>");
			if(nResult == -1) {
				// 何もしない
			} else {
				// リンクを文字列の後に挿入
				strAddress = strAddress.substr(0, nResult);
				strAddress += "<br \/>";
				strAA1 = strAA1.substr(nResult);
				strAA1 = strAA1.replace("<a>", "");
				var nResult2 = strAA1.indexOf("<\/a>");
				if(nResult2 != -1) {
					strAA1 = strAA1.substr(0, nResult2);
				}
				strAddress += "<a href='" + strAA1 + "' target='_blank'>" + strAA1 + "<\/a>";
			}
// 2016.01.26 end

			tableValue += '<td class="nowrap border-r-w">'+strAddress+'</td>';
			tableValue += '<td class="border-l-w"><a data-target="con1" onclick="getMap2(\''+mapdata+'\',this.id,\''+name2+'\');" class="modal-open">MAP</a></td>';

			tableValue += '<td class="nowrap">'+allData[companykey2][5]+'</td>';
			tableValue += '<td class="nowrap">'+allData[companykey2][6]+'</td>';
// 2019.10.02 start
			var nReg2 = allData[companykey2][9];
			if(nReg2 == 0){
				tableValue += '<td class="nowrap">－</td>';
			} else {
				var value01 = allData[companykey2][10];
				value01 = value01.replace(/"/g,"");
				//2019.10.03 start
				var strSelect01 ='<div class="selectBranchWrap">\n';
				strSelect01 += '<select name="reg'+nReg2+'" id="reg'+nReg2+'" class="selectBranchBody">\n';
// 2019.10.11 start
				if(flgcreg1 == 2){
					strSelect01 += '<option value="1" class="selectBranchOption">大学卒</option>\n';
					strSelect01 += '<option value="2" selected="selected" class="selectBranchOption">キャリア</option>\n';
				} else {
					strSelect01 += '<option value="1" selected="selected" class="selectBranchOption">大学卒</option>\n';
					strSelect01 += '<option value="2" class="selectBranchOption">キャリア</option>\n';
				}
// 2019.10.11 end
				strSelect01 += '</select>';
				strSelect01 += '</div>\n'
				//2019.10.03 end
				tableValue += '<td class="nowrap">'+strSelect01+'<a onclick="onEntry1('+nReg2+');" class="modal-open2">'+value01+'採用担当へ</a></td>';
			}
// 2019.10.02 end
			tableValue += '</tr>';
		}
		tableValue += '</table>';
		switch(s){
		case 0:
			strData1 = tableValue;
			break;
		case 1:
			strData2 = tableValue;
			break;
		case 2:
			strData3 = tableValue;
			break;
		case 3:
			strData4 = tableValue;
			break;
		case 4:
			strData5 = tableValue;
			break;
		case 5:
			strData6 = tableValue;
			break;
		case 6:
			strData7 = tableValue;
			break;
		case 7:
			strData8 = tableValue;
			break;
		default:
		}
	}
// 2019.10.02 start
	table.innerHTML = strForm0 + strData0 + strData1 + strData2 + strData3 + strData4 + strData5 + strData6 + strData7 + strData8 + strForm1;
// 2019.10.02 end
}

function of_scroll() {
    var speed = 500; //移動完了までの時間(sec)を指定
    var href= $('.hoge');
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
}
// 2015.05.14 end

// 2015.04.06 start
function m_win(url,windowname,width,height) {
 var features="location=no,menubar=no,status=no,scrollbars=yes,resizable=no,toolbar=no";
 if (width) {
  if (window.screen.width > width)
   features+=", left="+(window.screen.width-width)/2;
  else width=window.screen.width;
  features+=", width="+width;
 }
 if (height) {
  if (window.screen.height > height)
   features+=", top="+(window.screen.height-height)/2;
  else height=window.screen.height;
  features+=", height="+height;
 }
 window.open(url,windowname,features);
}
// 2015.04.06 end

//住所分岐
function mapdata_func(value){
// 2013.01.11 start
//  if(typeof value === "undefined"){
//  	alert("valueは未定義");
//  }
// 2013.01.11 end
  value = value.replace(/\n/g,"<br />");
  value = value.replace(/"/g,"");
  //value = value.replace(/大字中河原字西興247/,"中河原247");
  //value = value.replace(/山形県米沢市中田町川原4/,"山形県米沢市中田町川原");
  //value = value.replace(/佐賀県鳥栖市村田町字岩井手1280-1/,"佐賀県鳥栖市村田町");
  //value = value.replace(/宮崎県児湯郡高鍋町大字蚊口浦字茱萸原5580/,"宮崎県児湯郡高鍋町大字蚊口浦字");
  //value = value.replace(/鹿児島県薩摩川内市宮崎町字古川1467-2/,"鹿児島県薩摩川内市宮崎町字");
  return value;
}





function getMap(AD,id){

newAD = AD.split(" ")[0]; //空白cut用
showAddress(newAD);

  if(id){
	  for(i=0;i<count;i++){
		if(id != ("tr"+i)){
		document.getElementById("tr"+i).style.display = "none";
		}

	  }
// 2013.02.18 start
	  inc_FirstFlg();
	  back_a.innerHTML = "<a href=\"javascript:block()\">戻る</a><br /><br />\n";
// 2013.02.18 end
// 2013.04.16 start
	  upd_pageBreakBefore('auto');
// 2013.04.16 end
  }
}

// 2015.04.06 start
function getMap2(AD,id,name){

newAD = AD.split(" ")[0]; //空白cut用
showAddress(newAD,name);

  if(id){
//	  for(i=0;i<count;i++){
//		if(id != ("tr"+i)){
//		document.getElementById("tr"+i).style.display = "none";
//		}
//	  }
	  inc_FirstFlg();
//	  back_a.innerHTML = "<a href=\"javascript:block()\">戻る</a><br /><br />\n";
	  upd_pageBreakBefore('auto');
  }
}
// 2015.04.06 end


// 2019.10.02 start
function onEntry1(id){
	if(id > 0) {
		var obj1 = document.getElementById("reg"+id);
		var value1 = obj1.value;
		document.myform.branch01.value = id;
		if(value1 == 1){
			// miraclegate用
			//document.myform.action = '../contact/univ_reg_entry.php';
			// 本番環境用
			document.myform.action = '../contact/univ_reg_entry.html';
		} else {
			// miraclegate用
			//document.myform.action = '../contact/career_reg_entry.php';
			// 本番環境用
			document.myform.action = '../contact/career_reg_entry.html';
		}
		document.myform.submit();
	}
}
// 2019.10.02 end


function block(){
	  back_a.innerHTML = "";
// 2013.02.15 start
	  hide_Honsha();
// 2013.02.15 end
// 2013.04.16 start
	  upd_pageBreakBefore('always');
// 2013.04.16 end
	  for(i=0;i<count;i++){
		tr = document.getElementById("tr"+i);
		tr.style.display = "";
	  }



}



//Ajax
function sendRequest(){

	var xmlhttp;

	try{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState == 4 && xmlhttp.status== 200) {
				processRequest(xmlhttp);
			}
		}
	}catch(e){
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onload = function(){
			processRequest(xmlhttp);
		}
	}
    date = new Date();
	time = date.getMilliseconds();
	xmlhttp.open("GET.html", "../common/js/data.csv?"+time);
	xmlhttp.send(null);

	try_select();

// 2015.05.14 start
	//ＵＲＬ判別
	var query2 = location.href.split("?");
	if(query2[1]){
// 2019.10.11 start
		var strquery1 = query2[1];
		var query3 = strquery1.split("&");
		if(query3[1]){
			// 何もしない
			flgcreg1 = 2;
		} else {
			var strquery2 = query3[0];
			if(strquery2.indexOf("c=1") != -1){
				flgcreg1 = 2;
				$.wait(1000).done(function(){
					//alert("読み込み完了");
					try_all_write();
				});
			}
		}
// 2019.10.11 end
	} else {
		$.wait(1000).done(function(){
			//alert("読み込み完了");
			try_all_write();
		});
	}
// 2015.05.14 end
}



function try_select(){ //エラーがでなくなるまで繰り返す処理
	try{
// 2015.05.14 start
		Select();
		if(timer == 1) {
			// 何もしない
		} else {
			if(timer != null) {
				clearTimeout(timer);
			}
		}
		timer = null;
    }catch( e ){
       timer = setTimeout('try_select()',100);
    }
// 2015.05.14 end
}

// 2015.05.14 start
function try_all_write(){ //エラーがでなくなるまで繰り返す処理
	try{
		table_all_write();
		if(timer == 1) {
			// 何もしない
		} else {
			if(timer != null) {
				clearTimeout(timer);
			}
		}
		timer = null;
    }catch( e ){
       timer = setTimeout('try_all_write()',1000);
    }
}
// 2015.05.14 end

// 2015.05.14 start
$.extend({
    wait: function(duration){
        var dfd = $.Deferred();
        setTimeout(dfd.resolve, duration);
        return dfd;
    }
});
// 2015.05.14 end



function processRequest(xmlhttp){
	//配列の作成１
	allData = Array();
    var CR = String.fromCharCode(13);

	lineData = xmlhttp.responseText.split(CR);

	for(i=0;i<lineData.length;i++){
// 2013.01.11 start
	   colData = lineData[i].split(',');
//		alert(colData);
		if(colData.length > 1){
// 2019.10.02 start
		   allData[i] = [colData[0],colData[1],colData[2],colData[3],colData[4],colData[5],colData[6],colData[7],colData[8],colData[9],colData[10]];
// 2019.10.02 end
		}
//		alert(allData[i]);
// 2013.01.11 end
	}

}

// 2013.02.15 start
function show_Honsha() {
	if(get_FirstFlg() == true) {
		var test1 = document.getElementById('back_a');
// 2013.02.19 start
// 2015.04.07 start
		//test1.innerHTML = "【総本社】";
// 2015.04.07 end
// 2013.02.19 end
	}
}
function hide_Honsha() {
	var test2 = document.getElementById('back_a');
	test2.innerHTML = "";
}
// 2013.02.15 end
// 2013.02.18 start
function init_FirstFlg() {
	bFirstFlg = true;
	nCntFlg = 0;
}
function inc_FirstFlg() {
	nCntFlg++;
	if(nCntFlg > 1){
		bFirstFlg = false;
	}
}
function get_FirstFlg() {
	return(bFirstFlg);
}
// 2013.02.18 end

// 2013.02.19 start
function upd_btns_bk(A) {
	var j;
	for(i=0;i < nAreaCnt;i++){
		j= i + 1;
	//	var test3 = document.getElementById('btns_btn_' + j);
	//	if(test3.getAttributeNode("value").nodeValue == A) {
	//		test3.getAttributeNode("class").nodeValue = "btn_size_2";
	//	} else {
	//		test3.getAttributeNode("class").nodeValue = "btn_size";
	//	}
	}
}
// 2013.02.19 end

// 2013.04.16 start
function upd_pageBreakBefore(B) {
	var test3 = document.getElementById('back_a');

	if(B == 'always') {
		test3.style.pageBreakBefore = "always";
	} else {
		test3.style.pageBreakBefore = "auto";
	}
}
// 2013.04.16 end

// 2015.04.07 start
//$(document).ready(function() {
    // 「.modal-open」をクリック
    $(document).on('click','.modal-open',function(){
    //$('.modal-open').click(function(){
        // オーバーレイ用の要素を追加
        $('body').append('<div class="modal-overlay"></div>');
        // オーバーレイをフェードイン
        $('.modal-overlay').fadeIn('slow');

        // モーダルコンテンツのIDを取得
        var modal = '#' + $(this).attr('data-target');
        // モーダルコンテンツの表示位置を設定
        modalResize();
        // モーダルコンテンツフェードイン
        $(modal).fadeIn('slow');
        // Google Map の再描画
		google.maps.event.addListenerOnce(map, 'idle', function(){
			var tid3 = setInterval(function () {
				// タイマー停止
				clearInterval(tid3);
			    google.maps.event.trigger(map, 'resize');
			    map.setZoom(13);
				console.log("interval test10");
			}, 600);
			console.log("modal-open test1");
		});

        // 「.modal-overlay」あるいは「.modal-close」をクリック
        $('.modal-overlay, .modal-close').off().click(function(){
            // モーダルコンテンツとオーバーレイをフェードアウト
            $(modal).fadeOut('slow');
            $('.modal-overlay').fadeOut('slow',function(){
                // オーバーレイを削除
                $('.modal-overlay').remove();
            });
            if( infoWindow.getMap() ) {
	            infoWindow.close();
            }
		    google.maps.event.trigger(map, 'resize');
		    if(g_marker1) {
		    	g_marker1.setMap(null);
		    	g_marker1 = null;
		    }
		    // 現在表示されているページをリロードする
		    //location.reload();
        });

        // リサイズしたら表示位置を再取得
        $(window).on('resize', function(){
            modalResize();
        });

        // モーダルコンテンツの表示位置を設定する関数
        function modalResize(){
            // ウィンドウの横幅、高さを取得
            var w = $(window).width();
            var h = $(window).height();

            // モーダルコンテンツの表示位置を取得
            // 下記はIE非対応のため、計算方法を変更
            //var x = (w - $(modal).outerWidth(true)) / 2;
            //var y = (h - $(modal).outerHeight(true)) / 2;
            var x = 0;
            var y = 0;
            if(w > 730) {
                x = (w - 730) / 2;
            } else {
                x = 0;
            }
            if(h > 590) {
                y = (h - 590) / 2;
            } else {
                y = 0;
            }

            // モーダルコンテンツの表示位置を設定
            $(modal).css({'left': x + 'px','top': y + 'px'});
        }

    });
//});
// 2015.04.07 end
