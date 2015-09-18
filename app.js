// APP.JS

var app = {};
app.url = "http://api.burningsoul.in/moon";

app.date = "";
app.month = "";
app.fancyMoon = "";
app.age = "";
app.light = "";
app.stage = "";

app.phase = "";
app.job = "";
app.photo = "";


// ========================================
// function to get user input into variable

app.getTimestamp = function(){
	$('form').on('submit', function(event){
		console.log("I SHOULDNT BE FIRING");

		event.preventDefault();
		
		var userTime = $('.inputDate').val();
		// console.log("The date is " + userTime);

		// Selecting Month
		var userMonth  = new Date(userTime);
		app.month = (userMonth.getMonth()+1);
		// console.log(userInputMonth);

		app.userTimeStamp(userTime);
		app.date = userTime;

	});
};

// ==================================================
// function to take variable and convert to timestamp 
app.userTimeStamp = function(time) {
	// console.log("UserTimeStamp is running");
	var userInputStamp = Date.parse(time).getTime()/1000;
	app.getMoon(userInputStamp);
	// console.log(userInputStamp);

} 

// ================
// Get the moon api
app.getMoon = function(userTimeStamp){
	console.log("Moon api is running");
	$.ajax({
		url: "http://api.burningsoul.in/moon/" + userTimeStamp ,
		type:'GET',
		dataTYPE:'json',


		success:function(moonInfo){
			// console.log("Got it");
			// console.log(moonInfo);
			var moonAge = Math.round(moonInfo.age);
			console.log(moonAge);
			// console.log(moonAge);
			app.sortMoonAge(moonAge);
		}
	});

}

// ================
// moonAge Sorting
app.sortMoonAge = function(moonAge){
	var light1 ="";

	console.log(moonAge);

	if (1<=moonAge && moonAge<=8 ){
	  console.log("New Moon");
	  light1 = "New Moon";
	  app.phase = 0;
	  app.job = 0;
	  app.photo = 0;
	}
	else if (9<=moonAge && moonAge<=14){
	  console.log("Second Quarter");
	  light1 = "Second Quarter";
	  app.phase = 1;
	  app.job = 1;
	  app.photo = 1;
	}
	else if (15<=moonAge && moonAge<=21){
	  console.log("Full Moon");
	  light1 = "Full Moon";
	  app.phase = 2;
	  app.photo = 2;
	}
	else if (22<=moonAge && moonAge<=31){
	  console.log("Last Quarter");
	  light1 = "Last Quarter";
	  app.phase = 3;
	  app.job = 3;
	  app.photo = 3;
	}
	else {
	  console.log("Invalid");
	}
	app.sortMoonLight(light1);
	app.age = light1;
	app.sortMoonStage(light1);


}
// =================
// moonLight Sorting
app.sortMoonLight = function(moonLight){
	var light2 = "";

	if (moonLight==="New Moon" || moonLight ==="Second Quarter"){
	  console.log("Increasing Light");
	  light2 = "Increasing Light";
	}
	else if(moonLight==="Full Moon" || moonLight==="Last Quarter"){
	  console.log("Decreasing light");
	  light2 = "Decreasing Light";
	}
	else{
	  console.log("Invalid");
	}  
	app.light = light2;

}

// =================
// moonStage Sorting
app.sortMoonStage = function(moonStage){
	var light3 = "";
	console.log(moonStage);

	if (moonStage==="New Moon" || moonStage==="Second Quarter"){
		console.log("Waxing");
		light3 = "Waxing";
	}
	else if(moonStage==="Full Moon" || moonStage==="Last Quarter"){
	  console.log("Waning");
	  light3 = "Waning";
	}
	else{
	  console.log("Invalid");
	} 

	app.stage = light3;
	app.sortMoonMonth(app.month);
}

// ==================
// moonMonth Sorting
app.sortMoonMonth = function (moonMonth){
	var light4 = "";

	if (moonMonth===1){
		console.log("Wolf Moon");
		light4 = "Wolf Moon";
	}
	else if (moonMonth===2){
		console.log("Snow Moon");
		light4 = "Snow Moon";
	}
	else if (moonMonth===3){
		console.log("Worm Moon");
		light4 = "Worm Moon";
	}
	else if (moonMonth===4){
		console.log("Pink Moon");
		light4 = "Pink Moon";
	}
	else if (moonMonth===5){
		console.log("Flower Moon");
		light4 = "Flower Moon";
	}
	else if (moonMonth===6){
		console.log("Strawberry Moon");
		light4 = "Stawberry Moon";
	}
	else if (moonMonth===7){
		console.log("Buck Moon");
		light4 = "Buck Moon";
	}
	else if (moonMonth===8){
		console.log("Sturgeon Moon");
		light4 = "Sturgeon Moon";
	}
	else if (moonMonth===9){
		console.log("Harvest Moon");
		light4 = "Harvest Moon";
	}
	else if (moonMonth===10){
		console.log("Hunter's Moon");
		light4 = "Hunter's Moon";
	}
	else if (moonMonth===11){
		console.log("Beaver Moon");
		light4 = "Beaver Moon";
	}
	else if (moonMonth===12){
		console.log("Long Nights Moon");
		light4 = "Long Nights Moon";
	}
	else {
		console.log("Invalid");
	}
	$('.container').empty();
	// $('h2').empty();
	app.fancyMoon = light4;
	app.displayMoonInfo();
	
}

// ==============================
// BUILD HTML TO DISPLAY ON PAGE
app.displayMoonInfo = function(){
	$('.moon-phase').removeClass('hide');  
	
	console.log(app.age);
	console.log(app.fancyMoon);
	console.log(app.month);

	var $dateHolder = $('<h3>');
	$dateHolder.append(app.date);
	$('.moon-02-1').append($dateHolder);

	var $monthHolder = $('<h2>');
	$monthHolder.append(app.fancyMoon);
	$('.moon-02-1').append($monthHolder);

	var $moonPicture = $('<img>');
	$moonPicture.attr('src',app.profilepic[app.photo]);
	$('.lunar-picture').html($moonPicture);
	console.log($moonPicture);
	console.log(app.profilepic[app.photo]);

	var $ageHolder = $('<p>');
	$ageHolder.append(app.age);
	$('.01').append($ageHolder);

	var $stageHolder = $('<p>');
	$stageHolder.append(app.stage);
	$('.02').append($stageHolder);

	var $lightHolder = $('<p>');
	$lightHolder.append(app.light);
	$('.03').append($lightHolder);



	// console.log("whoooo");
	console.log("asdkflk");
	app.displayAction();
};

// ===============
// START OF ARRAYS

app.fact = [
"The new moon is said to help plants grow balanced roots. During a new moon, the gravity of the moon pulls water up in the soil, which increases a seed's ability to germinate. Plants also benefit from increased moonlight during the night."
,
"During the second quarter, plants benefit from strong leaf growth because of the increased moonlight."
,
"As the moon wanes, the gravitational pull is at its highest, resulting in moist soil and decreased moonlight."
,
"During the last quarter of the moon, the gravitational pull and moonlight have decreased to their lowest levels."
];

app.task = [
"According to folklore, the new moon is the ideal time to plant crops that produce their seeds outside the fruit like lettuce, celery, broccoli, cauliflower and spinach."
,
"Plants that form seeds inside their fruit-like peppers, tomatoes, squash and beans should be planted during this quarter."
,
"These conditions are ideal for root plants including carrots, potatoes, radishes, onions and beets. According to a study done by Dr. Lili Kolisko in Germany in 1939, the success rate of seed germination increases a few days before a full moon. Gardening folklore also suggests that pruning is best done during a full moon because it encourages root growth."
,
"This is the ideal time to let the garden rest and to weed, tend to shrubs, mow and kill pests."
];

app.profilepic = [
"i/stages/new_moon.jpg"
,
"i/stages/waxing.jpg"
,
"i/stages/full_moon.jpg"
,
"i/stages/waning.jpg"
];

// ======================
// BUILD ARRAYS ONTO PAGE
app.displayAction = function(){
	$('.action').empty();
	// $('.lunar-picture').empty();
	$('.moon-phase').removeClass('hide'); 



	var $factHolder = $('<p>');
	$factHolder.append(app.fact[app.phase]);
	$('.action1').append($factHolder);
	// console.log($factHolder);

	var $taskHolder = $('<p>');
	$taskHolder.append(app.task[app.job]);
	$('.action2').append($taskHolder);

	app.displayEverything();
	console.log("I am here");
};







app.init = function(){
  //code to kick off app goes here
  this.getTimestamp();
};

$(function(){
  app.init();
  // smoothScroll.init();
});