$(function(){
  var key = [0,0,0,1,1];
  var ans = [];
  $("#data_send").click(function(){
    for(var i = 0; i < key.length; i++){
      ans[i] = $(".question input[type='radio']:checked").eq(i).val();
    }
    if(ans.toString() === key.toString()){
      $(".info").fadeIn(500);
    }
  });
});
