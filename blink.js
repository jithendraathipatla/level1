$(document).ready(function() {
    getDataFromAjaxCall("config.json", "get", 0)
        .then( (fromResolve) => {
           fromResolve = fromResolve.data
            storeDataIntoTable(fromResolve).then( (fromResolve)=> {
                $("#example").dataTable();
            })
        });

} );

let getDataFromAjaxCall = (url,type,data) =>{
    return new Promise((resolve,reject) => {
        if(type.toLowerCase() === "get") {
        $.ajax({url: url,type: "GET",dataType: "JSON",success: (data) => {resolve(data); $("#loading").hide(); }});
        }
        else{
            $.ajax({url: url,type: "POST",dataType: "JSON",data : data,success: (data) =>{resolve(data);}});
        }
    });
  }

const twt = "img/twitter_PNG9.png";
  let storeDataIntoTable = ((_pData) => {
    return new Promise ( (resolve, reject) =>{
        for( var _noOfParticipant = 0; _noOfParticipant < _pData.length; _noOfParticipant++) {
            let _twitter = _pData[_noOfParticipant].twitter;
            let name = _pData[_noOfParticipant].user_name;
            if(_twitter != null) {
                name = _noOfParticipant < 10 ? _pData[_noOfParticipant].user_name + "  <a target=\"_blank\" href="+"https://twitter.com/".concat(_pData[_noOfParticipant].twitter.replace("@","")) +"><img src="+twt+" style=\"width:12px; height:12px;cursor:pointer;\" ></a>": _pData[_noOfParticipant].user_name 
            }
            
            $("#participant-data-table").append(
               
              "<tr>"+
                "<td>"+(_noOfParticipant+1)+"</td>"+
                    "<td>"+name+"</td>"+
                    "<td>"+_pData[_noOfParticipant].total_moves+"</td>"+
                    "<td>"+_pData[_noOfParticipant].total_time+"</td>"+
                "</tr>"
            );
        }
        resolve(1)
    });
});

var myTable = $('#myTable').DataTable();
 
myTable.row( ':eq(0)' ).delete( {
    title: 'Delete first row'
} );
