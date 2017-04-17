$(function(){
  var _move=false;
  var _x, _y;
  var _select; //get draggable object
  $(".draggable").click(function(){}).mousedown(function(e){
    if(!_move){
      _move=true;
      _select=$(this);//set draggable object
      // _x=e.pageX-parseInt($(this).css("left"));
      // _y=e.pageY-parseInt($(this).css("top"));
      $(this).fadeTo("fast",0.5);
    }else{
      _move=false;
      $(this).fadeTo("fast",1);
    }
  });
  $(document).mousemove(function(e){
    if(_move){
      var x = e.pageX-parseInt(_select.css("width"))/2;
      var y = e.pageY-parseInt(_select.css("height"))/2;
      _select.css({top:y, left:x});
    }
  });
});
