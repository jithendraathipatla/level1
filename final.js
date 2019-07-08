var _levelFirst = "";
//var _levelSecond = "";
let findOutScore = (() => {
  return new Promise((resolve, reject) => {
    try{
      let _gameData = localStorage.getItem("_gameData");
      _gameData = JSON.parse(kshdufksdjbskjfbdsafhkadiufwekf(_gameData));
      resolve(_gameData);
    }
    catch(err){
      reject(err);
    }
  });
});
$(document).ready( () => {
  findOutScore().then( (fromResolve)=> {
    //console.log(fromResolve);
    _levelFirst = fromResolve.local_first_score;
    //_levelSecond = fromResolve.level_second_score.local_second_score;
    //console.log(_levelFirst, _levelSecond);
      checkResponsive();
      if(_levelFirst == null  || _levelFirst == "null" ){
          location.href = "index.html";
      }
      else{
          try{
              const _levelFirstTime = (_levelFirst.time);
              const _levelFirstMoves = (_levelFirst.moves);
              displayScore(calculateTime(_levelFirstTime), parseInt(_levelFirstMoves));
          }
          catch(err){
            console.log(err);
            location.href = "final.html";
          }
        }
  }).catch((formReject)=> {
    console.log(formReject);
    location.href = "index.html";
  })
  });

  function displayScore(_levelFirstTime, _levelFirstMoves) {
      $("#time-taken").html(_levelFirstTime);
      $("#moves").html(_levelFirstMoves);
     // localStorage.setItem("level_second_score",null);
      //localStorage.setItem("level_first_score",null);
      //localStorage.setItem("_gameData", null);
  }

  function calculateTime(_levelFirstTime){
      let first = _levelFirstTime.split(':');
      let _totalMilliSec = parseInt(first[2]);
      let _totalSec = parseInt(first[1]) + parseInt(_totalMilliSec/60);
      let _totalMin = parseInt(first[0]) + parseInt(_totalSec/60);
      _totalMilliSec = _totalMilliSec >= 100 ? _totalMilliSec - 100 : _totalMilliSec;
      _totalSec = _totalSec >= 60 ? _totalSec - 60 : _totalSec;
      _totalMin = _totalMin >= 60 ? _totalMin - 60 : _totalMin;
      _totalMin = _totalMin < 10 ? "0".concat(_totalMin):_totalMin;
      _totalSec = _totalSec < 10 ? "0".concat(_totalSec):_totalSec;
      _totalMilliSec = _totalMilliSec < 10 ? "0".concat(_totalMilliSec):_totalMilliSec;
      return (_totalMin + ":" + _totalSec + ":" + _totalMilliSec);
  }

  function checkResponsive() {
    var _screenWidth = screen.width
    if(_screenWidth < 700) {
      $("body").css({ "background-image" : "url('img/bg.jpg')" });
    }else{

    }
  }

  function kshdufksdjbskjfbdsafhkadiufwekf(str) {
    var key = parseInt(((17232332233/2312323*23232-36456234242423*73647346343%3434)*(17232332233/2312323*23232-36456234242423*73647346343%3434))-29975142603379940)
    var pos = 0;
    ostr = '';
    while (pos < str.length) {
        ostr = ostr + String.fromCharCode(str.charCodeAt(pos) ^ key);
        pos += 1;
    }
    return ostr;
}

function jdcadsbyfbewuyfbhdjbsuhjdsfdfdfoixnjzxcoidwe(str) {
  var key = parseInt(((17232332233/2312323*23232-36456234242423*73647346343%3434)*(17232332233/2312323*23232-36456234242423*73647346343%3434))-29975142603379940)
  var pos = 0;
  ostr = '';
  while (pos < str.length) {
      ostr = ostr + String.fromCharCode(key ^ str.charCodeAt(pos));
      pos += 1;
  }

  return ostr;
}

let getDataFromAjaxCall = (url,type,data) =>{
  return new Promise((resolve,reject) => {
      if(type.toLowerCase() === "get") {
      $.ajax({url: url,type: "GET",dataType: "JSON",success: (data) =>{resolve(data);}});
      }
      else{
          $.ajax({url: url,type: "POST",dataType: "JSON",data : data,success: (data) =>{resolve(data);}});
      }
  });
}

function validateForms(){
  var level1 ={}, 
    level1 = {
      "time" : _levelFirst.time,
      "moves" : _levelFirst.moves
    };console.log(level1);
      sendDataToBack(level1).then( (fromResolve)=> {
        console.log(fromResolve);
      }).catch( (formReject) =>{
        location.href = "";
      });
}

let getScoreFromSession = (key) => {
  return new Promise( (resolve,reject) => {
    let _level = localStorage.getItem(key);
    if(!_level){
      reject(null);
    }
    else{
      _level = JSON.parse(_level);
      resolve(_level);
    }
  });
}

let sendDataToBack = (level1) => {
  return new Promise( (resolve,reject)=> {
    var formData = new getFormData("#score-submit-form");
    let data = {
      "level1" : level1,
      "total_moves" : parseInt(level1.moves ),
      "total_time" : calculateTime(level1.time),
      "player" : formData
    }
    data = JSON.stringify(data);

    $(".score-button").html("<i class=\"fa fa-spinner fa-spin\"></i>");
    localStorage.setItem("_tgdagpr",jdcadsbyfbewuyfbhdjbsuhjdsfdfdfoixnjzxcoidwe(data));
    data = jdcadsbyfbewuyfbhdjbsuhjdsfdfdfoixnjzxcoidwe(data);
    data = JSON.stringify({"data" : data});
    getDataFromAjaxCall("https://cl8lkrnc16.execute-api.us-east-1.amazonaws.com/default/jb_memory_game_save_user_data_postgresql","post",data).then(
      (fromResolve) => {
        
        //console.log(fromResolve);
        if(parseInt(fromResolve.rank) < 11){
          // $("#player-rank").html(fromResolve.rank);
          // $("#no-of-participants").html(fromResolve.Total_participants);
          $("#close-score-modal").click();
          $(".twitter-submit-button").click();
          $(".twitter-button").html("Submit");
        }
        else{
          $(".twitter-button").html("Submit");
          location.href = "leaderboard.html";
        }
      }
    )
    resolve(data);
  });
};


function getFormData(dom_query){
  var out = {};
  var s_data = $(dom_query).serializeArray();
  for(var i = 0; i<s_data.length; i++){
      var record = s_data[i];
      out[record.name] = record.value;
  }
  return out;
};

function tweetOnTwitter() {
  let _prevData = [];
  $(".twitter-button").html("<i class=\"fa fa-spinner fa-spin\"></i>");
  _prevData =  localStorage.getItem("_tgdagpr");
  _prevData = kshdufksdjbskjfbdsafhkadiufwekf(_prevData);
  _prevData = JSON.parse(_prevData);
  localStorage.setItem("_tgdagpr",null);
  var _formData = new getFormData("#score-submit-form");
  var _twitterData = new getFormData("#score-twitter-form")
  let _twitterDataForApi = {
    "_emailId" : _formData._emailId,
    "twitter" : _twitterData._twitterHandle
  }
  _prevData["twitter"] = _twitterDataForApi
  _twitterDataForApi = JSON.stringify(_prevData);
  data = jdcadsbyfbewuyfbhdjbsuhjdsfdfdfoixnjzxcoidwe(_twitterDataForApi);
  data = JSON.stringify({"data" : data});
  getDataFromAjaxCall("https://cl8lkrnc16.execute-api.us-east-1.amazonaws.com/default/jb_memory_game_save_user_data_postgresql", "post", data)
  .then( (fromResolve)=> {
    location.href = "leaderboard.html";
  }).catch((fromReject)=> {
    $(".twitter-button").html("Submit");
    location.href = "leaderboard.html";
  });
}
