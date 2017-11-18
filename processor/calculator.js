module.exports ={
  'Calculator':function(body, callback){
    var first = body.Value;
    var second = body.Second_Value;
    var fullname = first + " " + second;
    var result ;

    result = {
      "answer" : fullname,
      "error" : false,
      "error_code" : 200
    }
      callback(result);
  }//end of calculator functions


}//End of exports
