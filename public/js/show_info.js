$(function(){
  var key = [0,0,0,1,1];
  var ans = [,,,,];
  $("#data_send").click(function(){
    ans[0] = $(".question #sex input[type='radio']:checked").val();
    ans[1] = $(".question #name input[type='radio']:checked").val();
    ans[2] = $(".question #age input[type='radio']:checked").val();
    ans[3] = $(".question #food input[type='radio']:checked").val();
    ans[4] = $(".question #color input[type='radio']:checked").val();
    if(ans.toString() == key.toString()){
      $(".info").fadeIn(500);
    }
  });
});
