$(function(){
  var _select; //object now selected
  var _index;//number
  var picture = [ "<img src='pic/ghost_house.jpg' width='500' height='500'>",
                  "<img src='pic/wood_house.jpg' width='500' height='500'>",
                  "<img src='pic/stone_house.jpg' width='500' height='500'>",
                  "<img src='pic/gold_house.jpg' width='500' height='500'>",
                  "<img src='pic/white_house.jpg' width='500' height='500'>"];

  $(".list ul li").click(function(){
    _select = $(this);//set object
    var num = $(".list ul li").index(_select);
    if(_index !== num){
      _index = num;
      $(".list ul li").fadeTo("fast",1);
      _select.fadeTo("fast",0.5);
      $(".photo img").fadeOut(500,function(){
        $(".photo img").replaceWith(picture[_index]);
        $(".photo img").fadeIn(500);
      });
    }
  })

});
