//global default settings values
var maximum_time;
var maximum_target;
var taboo_points;
var correct_points;
var pass_number;

if(!localStorage.getItem("maximum_time"))  {
  maximum_time = 30;
  localStorage.setItem("maximum_time",maximum_time);
}
else{
  maximum_time = localStorage.getItem("maximum_time");
}

if(!localStorage.getItem("maximum_target"))  {
  maximum_target = 25;
  localStorage.setItem("maximum_target",maximum_target);
}
else{
  maximum_target = localStorage.getItem("maximum_target");
}

if(!localStorage.getItem("taboo_points"))  {
  taboo_points = 1;
  localStorage.setItem("taboo_points",taboo_points);
}
else{
  taboo_points = localStorage.getItem("taboo_points");
}

if(!localStorage.getItem("pass_number"))  {
  pass_number = 3;
  localStorage.setItem("pass_number",pass_number);
}
else{
  pass_number = localStorage.getItem("pass_number");
}

if(!localStorage.getItem("correct_points"))  {
  correct_points=1;
  localStorage.setItem("correct_points",correct_points);

}
else{
  correct_points = localStorage.getItem("correct_points");

}

//reference to elements
var element_maximum_target = document.getElementById("maximum_target_id");
var element_maximum_time = document.getElementById("maximum_time_id");
var element_taboo_points = document.getElementById("taboo_points_id");
var element_correct_points = document.getElementById("correct_points_id");
var element_pass_number = document.getElementById("pass_number_id");

window.onload = function(){
  init();
}

function init(){
  // check if browser supports Local storage
  if(typeof(Storage) !== "undefined"){
      //support -- YES
        //store
      localStorage.setItem("maximum_target",maximum_target);
      localStorage.setItem("maximum_time",maximum_time);
      localStorage.setItem("taboo_points",taboo_points);
      localStorage.setItem("correct_points",correct_points);
      localStorage.setItem("pass_number",pass_number);

      //retrieve
      element_maximum_target.value = localStorage.getItem("maximum_target");
      element_maximum_time.value = localStorage.getItem("maximum_time");
      element_taboo_points.value = localStorage.getItem("taboo_points");
      element_correct_points.value = localStorage.getItem("correct_points");
      element_pass_number.value = localStorage.getItem("pass_number");
  }

  else{
    //support -- NO
    console.log("Sorry, your browser does not support Web Storage...");
  }
}


function save(){
  console.log('new values received');
  var new_maximum_target = element_maximum_target.value;
  var new_maximum_time = element_maximum_time.value;
  var new_pass_number = element_pass_number.value;
  var new_taboo_points = element_taboo_points.value;
  var new_correct_points =element_correct_points.value;
  var pattern=/^[a-z]*[A-Z]*[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]*$/;

//correct_points
if(typeof(new_correct_points)==="string" && new_correct_points===""){
  var new_correct_points =element_correct_points.value;
  console.log('oops EMPTY');

}
else if(typeof(new_correct_points)==="string" && new_correct_points==="NaN"){
    var new_correct_points =element_correct_points.value;
    console.log('oops cant convert');

  }
  else if(typeof(new_correct_points)==="string" && new_correct_points.match(pattern)){
    var new_correct_points =element_correct_points.value;
    console.log('oops cant convert (regex)');
  }
  else{
    new_correct_points=Number(element_correct_points.value);
    console.log('transformed! correct_points '+typeof(new_correct_points));
  }

  //taboo_points
  if(typeof(new_taboo_points)==="string" && new_taboo_points===""){
    var new_taboo_points =element_taboo_points.value;
    console.log('oops EMPTY');

  }
    else if(typeof(new_taboo_points)==="string" && new_taboo_points==="NaN"){
      var new_taboo_points =element_taboo_points.value;
      console.log('oops cant convert');

    }
    else if(typeof(new_taboo_points)==="string" && new_taboo_points.match(pattern)){
      var new_taboo_points =element_taboo_points.value;
      console.log('oops cant convert (regex)');
    }
    else{
      new_taboo_points=Number(element_taboo_points.value);
      console.log('transformed! taboo_points '+typeof(new_taboo_points));
    }

    //new_maximum_time
    if(typeof(new_maximum_time)==="string" && new_maximum_time===""){
      var new_maximum_time =element_maximum_time.value;
      console.log('oops EMPTY');

    }
      else if(typeof(new_maximum_time)==="string" && new_maximum_time==="NaN"){
        var new_maximum_time =element_maximum_time.value;
        console.log('oops cant convert');

      }
      else if(typeof(new_maximum_time)==="string" && new_maximum_time.match(pattern)){
        var new_maximum_time =element_maximum_time.value;
        console.log('oops cant convert (regex)');
      }
      else{
        new_maximum_time=Number(element_maximum_time.value);
        console.log('transformed! taboo_points '+typeof(new_maximum_time));
      }

      //new_maximum_target
      if(typeof(new_maximum_target)==="string" && new_maximum_target===""){
        var new_maximum_target =element_maximum_target.value;
        console.log('oops EMPTY');

      }
        else if(typeof(new_maximum_target)==="string" && new_maximum_target==="NaN"){
          var new_maximum_target =element_maximum_target.value;
          console.log('oops cant convert');

        }
        else if(typeof(new_maximum_target)==="string" && new_maximum_target.match(pattern)){
          var new_maximum_target =element_maximum_target.value;
          console.log('oops cant convert (regex)');
        }
        else{
          new_maximum_target=Number(element_maximum_target.value);
          console.log('transformed! taboo_points '+typeof(new_maximum_target));
        }

        //new_pass_number
        if(typeof(new_pass_number)==="string" && new_pass_number===""){
          var new_pass_number =element_pass_number.value;
          console.log('oops EMPTY');

        }
          else if(typeof(new_pass_number)==="string" && new_pass_number==="NaN"){
            var new_pass_number =element_pass_number.value;
            console.log('oops cant convert');

          }
          else if(typeof(new_pass_number)==="string" && new_pass_number.match(pattern)){
            var new_pass_number =element_pass_number.value;
            console.log('oops cant convert (regex)');
          }
          else{
            new_pass_number=Number(element_pass_number.value);
            console.log('transformed! taboo_points '+typeof(new_pass_number));
          }

console.log('---------------------------------');
  console.log('empty: '+new_maximum_time+"\told: "+maximum_time);
  console.log('empty: '+new_maximum_target+"\told: "+maximum_target);
  console.log('empty: '+new_pass_number+"\told: "+pass_number);
  console.log('empty: '+new_taboo_points+"\told: "+taboo_points);
  console.log('empty: '+new_correct_points+"\told: "+correct_points);

  console.log('typeof correct_points: '+typeof(new_correct_points));
    console.log('typeof taboo_points: '+typeof(new_taboo_points));
      console.log('typeof maximum_time: '+typeof(new_maximum_time));
        console.log('typeof maximum_target: '+typeof(new_maximum_target));
          console.log('typeof pass_number: '+typeof(new_pass_number));

  //only if values are NUMBER
  if(new_maximum_target==="" || new_maximum_time==="" || new_pass_number==="" || new_taboo_points==="" || new_correct_points==="")
  {

    document.getElementById('empty-modal').style.display='block';
  }
  else if(typeof(new_maximum_target)==="number" && typeof(new_maximum_time)==="number" && typeof(new_pass_number)==="number" && typeof(new_taboo_points)==="number" && typeof(new_correct_points)==="number")
  {

        //store new values
      localStorage.setItem("maximum_target",new_maximum_target);
      localStorage.setItem("maximum_time",new_maximum_time);
      localStorage.setItem("taboo_points",new_taboo_points);
      localStorage.setItem("correct_points",new_correct_points);
      localStorage.setItem("pass_number",new_pass_number);

      //retrieve new values
      element_maximum_target.value = localStorage.getItem("maximum_target");
      element_maximum_time.value = localStorage.getItem("maximum_time");
      element_taboo_points.value = localStorage.getItem("taboo_points");
      element_correct_points.value = localStorage.getItem("correct_points");
      element_pass_number.value = localStorage.getItem("pass_number");

      console.log('new values saved');
      //load saving modal
        document.getElementById('saving-modal').style.display='block';
      //show modal only for 2 seconds
        setTimeout(hidemodal, 2000);



  }

  else{//throw error

    document.getElementById('caution-modal').style.display='block';
    console.log('down down here');
  }

}

function hidemodal(){
  document.getElementById('saving-modal').style.display='none'
}

//SLEEP function
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
