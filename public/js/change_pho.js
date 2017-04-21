$(function(){
  var _select; //object now selected
  var _index;//number
  var picture = [ '../public/pic/ghost_house.jpg',
                  '../public/pic/wood_house.jpg',
                  '../public/pic/stone_house.jpg',
                  '../public/pic/gold_house.jpg',
                  '../public/pic/white_house.jpg'];

  $(".list ul li").on("click",function(){
    _select = $(this);//set object
    var num = $(".list ul li").index(_select);
    if(_index !== num){
      _index = num;
      changePhoto();
    }
  });

  function changePhoto(){
    $(".list ul li").fadeTo("fast",1);
    _select.fadeTo("fast",0.5);
    $(".photo img").fadeOut(500,function(){
      $(this).attr("src", picture[_index]).load(function(){
        $(".photo img").fadeIn(500);
      });   
    });
  };
});
