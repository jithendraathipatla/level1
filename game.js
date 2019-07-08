
const cards = document.querySelectorAll(".column");
let logos = [];
let h21a12s12O43p34e34n45C54a45r54d = false;
let lockBoard = false;
let interval;
const c98a89r98d89O67p76e67n76e67d = [...cards];
const g98a89me98p89l67a76y67f76l67a56g = [];
const jabvaadf = [];
const a98r89a98n89d67A76r67r76r67a56g = [];
let f98i89r98s89t67A76r67r76r67a56gImg, s98e89c98o89n67d76r67r76r67a56gImg;
let f98i89r98s89t67A76r67r76r67a56g, s98e89c98o89n67d76r67r76r67a56g;
let _gameplayflag = 0;
let c45a65r76d = null;
const ga00c88o56u09n56t = [0];
let _currentBrowser = ".svg";
//delete window.console;
Object.defineProperty(console, '_commandLineAPI', { get : function() { return false; } });
function MRGLNLacaCACPRPFDF() {
  const _imageNumber = jdcadsbyfbewuyfbhdjbsuhjdsfdfdfoixnjzxcoidwe(a98r89a98n89d67A76r67r76r67a56g[this.style.order]);
  abcd1s2t4a6r8t();
 if ((lockBoard || (this === f98i89r98s89t67A76r67r76r67a56g && h21a12s12O43p34e34n45C54a45r54d))  ) return;
 if(_currentBrowser === ".png"){
  this.querySelectorAll("div")[0].style.transform=  "rotate(180deg)";
 }
 else{
  this.querySelectorAll("div")[0].style.transform=  "rotateY(180deg)";
 }
  setTimeout(() => {
    this.querySelectorAll("img")[0].alt=_imageNumber+".svg";
    if(_currentBrowser === ".png") {
      this.querySelectorAll("img")[0].setAttribute('style','transform:rotate(180deg); -webkit-transform: rotate(180deg)')
    }
    else{
      this.querySelectorAll("img")[0].style.transform = "rotateY(180deg)";
    }
    this.querySelectorAll("img")[0].src="img/"+_imageNumber+".svg";
    if (!h21a12s12O43p34e34n45C54a45r54d) {
      h21a12s12O43p34e34n45C54a45r54d = true;
      f98i89r98s89t67A76r67r76r67a56g = this;
      f98i89r98s89t67A76r67r76r67a56gImg = this.querySelectorAll("img")[0].alt;
    } else {
      s98e89c98o89n67d76r67r76r67a56g = this;
      s98e89c98o89n67d76r67r76r67a56gImg = this.querySelectorAll("img")[0].alt;
      f98i89r98s89t67A76r67r76r67a56gImg === s98e89c98o89n67d76r67r76r67a56gImg ? FKQNLNGEGacaCACPRPFDFQSQ(f98i89r98s89t67A76r67r76r67a56g,s98e89c98o89n67d76r67r76r67a56g) : ANMQSQGEGacaCACPRPFDFQSQ(f98i89r98s89t67A76r67r76r67a56g,s98e89c98o89n67d76r67r76r67a56g);
      AJGACAIKIdfdMOMPRPomoCACVTVACAJHJ();
    }
  }, 150)

}

function FKQNLNGEGacaCACPRPFDFQSQ(f98i89r98s89t67A76r67r76r67a56g,s98e89c98o89n67d76r67r76r67a56g) {
  f98i89r98s89t67A76r67r76r67a56g.removeEventListener("click", MRGLNLacaCACPRPFDF);
  s98e89c98o89n67d76r67r76r67a56g.removeEventListener("click", MRGLNLacaCACPRPFDF);
  c98a89r98d89O67p76e67n76e67d.splice(f98i89r98s89t67A76r67r76r67a56g,1);
  c98a89r98d89O67p76e67n76e67d.splice(s98e89c98o89n67d76r67r76r67a56g,1);
  jabvaadf.push(f98i89r98s89t67A76r67r76r67a56g);
  jabvaadf.push(s98e89c98o89n67d76r67r76r67a56g);
  jabvaadf.length < 11 ? reset(f98i89r98s89t67A76r67r76r67a56g,s98e89c98o89n67d76r67r76r67a56g) : abcd1s2t4o6p(f98i89r98s89t67A76r67r76r67a56g,s98e89c98o89n67d76r67r76r67a56g) ;
}

function ANMQSQGEGacaCACPRPFDFQSQ(f98i89r98s89t67A76r67r76r67a56g,s98e89c98o89n67d76r67r76r67a56g) {
  lockBoard = true;
  interval = setInterval(() =>{
    PGQGEGVTVacaCACPRPFDFQSQ(f98i89r98s89t67A76r67r76r67a56g,s98e89c98o89n67d76r67r76r67a56g);  }, 500);
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

function PGQGEGVTVacaCACPRPFDFQSQ(f98i89r98s89t67A76r67r76r67a56g,s98e89c98o89n67d76r67r76r67a56g) {
  f98i89r98s89t67A76r67r76r67a56g.querySelectorAll("div")[0].style.transform=  "rotateY(0deg)";
  s98e89c98o89n67d76r67r76r67a56g.querySelectorAll("div")[0].style.transform=  "rotateY(0deg)";
  setTimeout(() => {
    f98i89r98s89t67A76r67r76r67a56g.querySelectorAll("img")[0].src="img/js.png";
    f98i89r98s89t67A76r67r76r67a56g.querySelectorAll("img")[0].style.transform = "rotateY(0deg)";
    f98i89r98s89t67A76r67r76r67a56g.querySelectorAll("img")[0].alt="js.png";
    s98e89c98o89n67d76r67r76r67a56g.querySelectorAll("img")[0].src="img/js.png";
    s98e89c98o89n67d76r67r76r67a56g.querySelectorAll("img")[0].style.transform = "rotateY(0deg)";
    s98e89c98o89n67d76r67r76r67a56g.querySelectorAll("img")[0].alt="js.png";
    reset();
  },150);
}

function reset(f98i89r98s89t67A76r67r76r67a56g,s98e89c98o89n67d76r67r76r67a56g) {
  h21a12s12O43p34e34n45C54a45r54d = false;
  lockBoard = false;
  f98i89r98s89t67A76r67r76r67a56g = null;
  s98e89c98o89n67d76r67r76r67a56g = null;
  clearInterval(interval);
}

function getRandomNumber(_num, arr) {
  if(arr.indexOf(_num) > -1){
    _num = parseInt(Math.random() * 22 )
    getRandomNumber(_num, arr);
  }
  else{
    arr.push(_num);
  }
}
let intervals;
function abcd1s2t4a6r8t(){
  var _second = "00";
  var _minute = "00";
  var _milliSecond = "00";
  if(intervals){
    return
  }
    intervals = setInterval(function(){
      // console.log(g98a89me98p89l67a76y67f76l67a56g.length);
      // if(!g98a89me98p89l67a76y67f76l67a56g.length){
      //   g98a89me98p89l67a76y67f76l67a56g.push(1);
      // }
      document.getElementById("viewTime").innerHTML = _minute+":"+ _second+"<font style=\"display:none\">:"+_milliSecond + "</font>";
        _milliSecond++;
        _milliSecond = _milliSecond < 10 ? "0".concat(_milliSecond) : _milliSecond
        if(_milliSecond === 99){
          _second++;
          _second = _second < 10 ? "0".concat(_second) : _second
            _milliSecond=00;
        }
        if(_second === 60){
          _minute++;
          _minute = _minute < 10 ? "0".concat(_minute) : _minute
            _second = 00;
        }
    },10);
}


function abcd1s2t4o6p(ajdnfjdskafnadsf,adsjifhnadjfa){
  clearInterval(intervals);
  setTimeout(()=> {
    AJGACAIKIdfdMOMPRPegeCACOMOGEGdfdKIKLNLKIKQSQJHJ(ajdnfjdskafnadsf,adsjifhnadjfa).then( (_fromResolve) => {
      let _timeTaken = document.getElementById("viewTime").innerHTML.replace("<font style=\"display:none\">","");
      _timeTaken = _timeTaken .replace("</font>","")
      let _totalCount = document.getElementById("viewCounter").innerHTML;
      //alert("You completed Level 1 taking time "+ _timeTaken +" and "+ document.getElementById("viewCounter").innerHTML+ " moves");
      QVMPRPGEGvtvJHJGEGqsqACAMOMPRPGEG(_timeTaken,_totalCount,ajdnfjdskafnadsf,adsjifhnadjfa);
    showMessage("You completed the game in "+ _timeTaken +" with "+ document.getElementById("viewCounter").innerHTML+ " moves")

    }).catch( (fromReject)=>{
      console.log("gameNotFinished");
    });
  }, 2000);
}

let AJGACAIKIdfdMOMPRPegeCACOMOGEGdfdKIKLNLKIKQSQJHJ = (eqwewqe,eerqwrq) => {
  return new Promise( (resolve, reject)=> {
    
      if(!c98a89r98d89O67p76e67n76e67d.length){
        _movesCheck = parseInt(document.getElementById("viewCounter").innerHTML);
        if(_movesCheck >= 6) {
          if(eqwewqe.toString() === f98i89r98s89t67A76r67r76r67a56g.toString() && eerqwrq === jabvaadf[11] ){
            resolve(1);
          }
          else{
            reject(0);
          }
        }else{
          reject(0);
        }
      }else{
        reject(0);
      }
  });
};

function showMessage(_displayMsg) {
  $(".modal-message").show();
  $("#message-show").html(_displayMsg);
}

function showError(_displayMsg) {
  $(".modal-error").show();
  $("#error-show").html(_displayMsg);
}

$(".close-error").click( () => {
  $(".modal-error").hide();
});

$(".proceed-button").click( ()=> {
  location.href ="final.html";
});

function QVMPRPGEGvtvJHJGEGqsqACAMOMPRPGEG(_timeTaken, _totalCount,ajdnfjdskafnadsf,adsjifhnadjfa){
  AJGACAIKIdfdMOMPRPegeCACOMOGEGdfdKIKLNLKIKQSQJHJ(ajdnfjdskafnadsf,adsjifhnadjfa).then( (_fromResolve) => {
    const score = {
      "time" : jdcadsbyfbewuyfbhdjbsuhjdsfdfdfoixnjzxcoidwe(_timeTaken),
      "moves" : jdcadsbyfbewuyfbhdjbsuhjdsfdfdfoixnjzxcoidwe(document.getElementById("viewCounter").innerHTML)
    }
    let level_first_score = {
      "local_first_score" : {
        "time" : _timeTaken,
        "moves" : _totalCount
      }
    };
    const _gameData = jdcadsbyfbewuyfbhdjbsuhjdsfdfdfoixnjzxcoidwe(JSON.stringify(level_first_score));
    localStorage.setItem("_gameData", _gameData);
    localStorage.setItem("level_first_score",JSON.stringify(score));
  }).catch((fromReject) => {
    console.log("gameNotFinished");
  });
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





function AJGACAIKIdfdMOMPRPomoCACVTVACAJHJ(){
  let count = ga00c88o56u09n56t[0] + 1;
  ga00c88o56u09n56t.pop();
  ga00c88o56u09n56t.push(parseInt(count));
  count = count < 10 ? "0".concat(count) : count
  document.getElementById("viewCounter").innerHTML = count;

}

$(document).ready( () => {
  checkResponsive();
  loadAllImagesToPage();
  //getDataFromAjaxCall("https://cl8lkrnc16.execute-api.us-east-1.amazonaws.com/default/jb_memory_game_leaderboard_postgresql", "get", 0)
  localStorage.setItem("level_first_score",null);
  checkTheBrowser().then( (fromResolve)=> {
    if(fromResolve){
      _currentBrowser = ".png";
    }
  });
  $(".card").click(() => {
    if(!_gameplayflag){
      showError("Click on the PLAY button to start the game");
    }
  });
});

let checkTheBrowser = (() =>{
  return new Promise ((resolve) =>{
    var browser = (function(agent){
      switch(true){
          case agent.indexOf("edge") > -1: return "edge";
          case agent.indexOf("opr") > -1 && !!window.opr: return "opera";
          case agent.indexOf("chrome") > -1 && !!window.chrome: return "chrome";
          case agent.indexOf("trident") > -1: return "ie";
          case agent.indexOf("firefox") > -1: return "firefox";
          case agent.indexOf("safari") > -1: return "safari";
          default: return "other";
      }
  })(window.navigator.userAgent.toLowerCase());
  if(browser=="safari"){
    resolve(1);
  }
  });
});

function loadAllImagesToPage() {
  for(var image = 0; image<23; image++) {
    $("#load-image").append("<img src="+ "img/".concat(image.toString().concat(".svg"))+">");
  }
}


function checkResponsive() {
  var _screenWidth = screen.width
  if(_screenWidth < 770) {
    $("#hide-image").hide();
    $(".container").css({"width": "90%", "margin-top" : "15%" , "margin-left" : "-10px", "height":"600px"})
    $(".container1").css({"width": "100%", "margin-top" : "-20%" , "margin-left" : "-10px", "height":"300px", "text-align":"center;", "padding":"0px",})
    $("#differentText").css({"font-size" : "25px", "text-align": "justify", "padding": "0px 52px 0px 83px", "float": "left"});
    $("#utmLinks").css({"color": "white","margin-top": "-110", "font-size" : "25px", "text-align": "justify", "padding":"24px 50px 65px 131px", "font-family": "myFirstFont"});
    $("#utmLinks1").css({"margin-left":"-50px"});
    $("#developerImage").css({"height" : "50px", "width" :"20px", "height": "105px","width": "474px","margin-bottom": "10px", "margin-top": "80px"});
    $(".two").css({"margin-top" : "8%"});
    $("body").css({"height": "120vh",  "background-repeat": "no-repeat",
    "background-size": "3000px 2000px", "background-image" : "url('img/bg.jpg')" });
    $(".col-md-4").css({ "display" : "inline-block" })
    $(".first").css({"float" : "left" , "margin-top" :"0%"});
    $(".second").css({"margin-left" : "-7%"});
    $(".third").css({"float" : "right", "margin-right" : "7%"});
    $(".card").css({"border" : "4px solid white" })
    $("#game-rule").css({"display" : "none"});
    $(".modal-content").css({"width" : "80%", "font-size" : "40px"});
    $(".modal-card").css({"font-size" : "5vw"});
    $(".is-success").css({"font-size" : "3vw"});
    $(".play-button").css({"margin-left" : "-35%"});
    $(".rules-button").show();
    $(".rules-button").css({"float" : "right", "margin-right" : "-48%"});
    $(".leaderboard-button").css({"float" : "left", "margin-left" : "-64%", "font-size" : "23px"});
    $(".game-title").css({"margin-top" : "7%", "margin-bottom" : "-23%", "font-size" : "50px"});
  }
  else{
    $(".container").css({"width": "40%"});
    $(".container1").hide();
    $("#utmLinks1").hide();
    $(".two").css({"width": "40%", "height":"450px"});
    $(".col-md-4").css({ "display" : "block" })
    $("body").css({"height": "103vh"})
    $(".first").css({"float" : "none"});
    $(".second").css({"margin-left" : "0%"});
    $(".third").css({"float" : "none", "margin-right" : "0%"});
    $(".play-button").css({"margin-left" : "0%"});
    $(".rules-button").hide();
   
  }
}

$(".rules-button").click( () => {
  $(".modal-game-rules").show();
});


//html view

var _scoreTimeLevel = "<div class=\"col-md-4 first\">\n" +
    "            <div  class=\"move-time-score heading\"> Time</div>\n" +
    "            <div class=\"move-time-score\" id=\"viewTime\" style=\"margin-top:-18px;margin-bottom: 18px\">00:00</div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4 second\">\n" +
    "            <div class=\"move-time-score heading\">Level</div>\n" +
    "            <div class=\"move-time-score\" style=\"margin-top:-18px;margin-bottom: 18px\" >1/2</div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4 third\">\n" +
    "            <div class=\"move-time-score heading\">Moves</div>\n" +
    "            <div class=\"move-time-score\" id=\"viewCounter\" style=\"margin-top:-18px;margin-bottom: 18px\" >00</div>\n" +
    "        </div>";

    $(".submit-button").click(()=> {
      clickPlayButton();
    });

    function clickPlayButton() {
      $("#hide-image").hide();
      $("#scroe-time-area").html(_scoreTimeLevel);
      $("#utmLinks1").css({"margin-top":"-55px","text-align": "justify"});
      $("#hide-image").css({"margin-top":"85px","text-align": "justify"});
       checkResponsive();
      _gameplayflag = _gameplayflag + 1;
      (function shuffle() {
        let arr = [];
        for(let i = 0; i < 6 ; i++ ) {
          let _num  = parseInt(Math.random() * 22);
          getRandomNumber(_num,arr);
        }
        for (let i = 0 ; i < 6 ; i++) {
          logos.push(arr[i]);
        }
        for (let i = 0 ; i < 6 ; i++) {
          logos.push(arr[i]);
        }
        cards.forEach( (card, index) => {
          randomPos = logos.splice(Math.random() * logos.length,1)[0];
          card.style.order = index;
          randomPos = jdcadsbyfbewuyfbhdjbsuhjdsfdfdfoixnjzxcoidwe(randomPos.toString());
          a98r89a98n89d67A76r67r76r67a56g.push(randomPos);
          card.addEventListener("click", MRGLNLacaCACPRPFDF)
        });
        
       //console.log(a98r89a98n89d67A76r67r76r67a56g);
      })();
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

    $(".play-button-on-rules").click( () => {
      $(".modal-game-rules").hide();
      // clickPlayButton();
    });

  