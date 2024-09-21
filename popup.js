var string_id = 1231414;
var page_title   = document.title;
 var time_cklick  = 0;
var check_button = 0;
var index_max    = getinfont(1,7);

	window.onload = function() {
		setTimeout(function(){$('div[class="gow-wrap"] img').remove();},2000);
		setTimeout(function(){$('div[class="gow-tumbleweed"]').remove();},2000);
		setTimeout(function(){$('span[class="gow-btn-mid__val"]').remove();},2000);
		/*$('div[class="gow-fan"]').attr("style",'bottom:-150px;
		left:1%;
		width:100%;
		height:100%;
		background:url(https://i.ibb.co/gyzFHVS/150.jpg) no-repeat 50%')*/;
		
		document.onclick = ({target}) => {
		
		page_title = document.title;
		if (page_title.indexOf('Wild West Gold') !== -1)
		{
			console.log(page_title);
			let parent = target;
			if (parent.className == "gow-start-btn gow-btn gow-btn-green gow-btn-mid our-btn dont_touch")
			{
				console.log(0);
				get_format_new();
				index_max    = getinfont(1,7);
				get_format(index_max);
			}
			
			if (parent.className == "gow-btn gow-btn-brownl gow-get-price gow-btn-mid")
			{
				console.log(1);
				get_format_new();
			}}}};
	
function getinfont(min, max) {min = Math.ceil(min);max = Math.floor(max);return_tt = Math.floor(Math.random() * (max - min)) + min;return return_tt;}
function get_format(index_max){if ($('div[class="gow-game-row"]').eq(0).children('div[class="gow-game-cel"]').length == 2){for(i=0;i<index_max;i++){var get_infont = getinfont(0,2);$('div[class="gow-game-row"]').eq(9-i).children('button').eq(get_infont).attr("style",'background:url(https://v2l.cdnsfree.com/default/img/gold_of_west/gow-win-img.jpg)');}}else{for(i=0;i<index_max;i++){var get_infont = getinfont(0,3);$('div[class="gow-game-row"]').eq(9-i).children('button').eq(get_infont).attr("style",'background:url(https://v2l.cdnsfree.com/default/img/gold_of_west/gow-win-img.jpg)');}}}
function get_format_new(){$('div[style="background:url(https://v2l.cdnsfree.com/default/img/gold_of_west/gow-win-img.jpg)"]').attr("style",'');}