//libraries
var $ = require('jquery');
var toastr = require('toastr');

module.exports = {
  toastrOptions:function(){
          toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "2500",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
  },
  //function
  get:function(url){
    return new Promise(function(success,error){
      $.ajax({
        url:url,
        dataType:"json",
        success:success,
        error:error
      })
    })
  },
  //function
  post:function(url,data,callback){
    return new Promise(function(success,error){
      $.ajax(
        {
          url: url,
          type: "POST",
          data: JSON.stringify(data),
          contentType: "application/json",
          callback: data.callback,
          success: function(data) {
            console.log('success --> data:',data);
          }.bind(this),
          error: function(xhr, status, err) {
            console.log("error posting game");
          }.bind(this)
        }
      );
    })
  },
  del:function(url,data){
        return new Promise(function(success,error){
            $.ajax({
                url:url,
                type:"DELETE",
                processData: false,
                contentType: false,
                success:function(data){
                    console.log("it's a success delete");
                },
                error:function(data){
                  console.log('Error delete: '+data);
                }
            })
        })
    }

}//exports ends
