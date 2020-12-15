var old_x = 0;
var old_y = 0;
var x;
var y;
var globalCompositeOperation  = 'source-over';
var selectColor = "#ff0000";
var selectSize = 3;
var selectEmoji = '';

var remNum=23;


var canvas = document.getElementById("can");
var ctx = canvas.getContext('2d');
ctx.lineWidth=4;
ctx.strokeStyle="#e01454";

var remain =document.getElementById("remainNum");

window.onload = function() {
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    canvas.addEventListener("touchstart", touchStart, false);
    canvas.addEventListener("touchmove", touchMove, false);
}

function touchStart(e) {
    old_x = e.touches[0].pageX;
    old_y = e.touches[0].pageY;
}

function touchMove(e) {
    e.preventDefault();

    x = e.touches[0].pageX;
    y = e.touches[0].pageY;

    drawLine(old_x, old_y, x, y);
    old_x = x;
    old_y = y;
}

function drawLine(x1, y1, x2, y2) {
    ctx.globalCompositeOperation = globalCompositeOperation;
    ctx.strokeStyle = selectColor;
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = selectSize;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.fillStyle = selectColor;
    ctx.font = "20px sans";
    ctx.fillText(selectEmoji, x2-30, y2);
    ctx.closePath();
    ctx.stroke();
}

$(function(){
  var cardNum=22;
  
  $('.cardImg').on('click',function () {
  	if($(this).hasClass('add_dark')){
      $(this).removeClass('add_dark');
      remNum++;
      remain.textContent=remNum;
    }else{
      $(this).addClass('add_dark');
      remNum--;
      remain.textContent=remNum;
    }
  });





  $('.checkBut').on('click',function () {
      $('#can').addClass('add_can_hide');
      if(!$(this).hasClass('add_but_choice')){
        $(this).addClass('add_but_choice');
      }
      $('.penBut').removeClass('add_but_choice');
      $('.eraBut').removeClass('add_but_choice');
    
  });
  $('.penBut').on('click',function () {
      $('#can').removeClass('add_can_hide');
      if(!$(this).hasClass('add_but_choice')){
        $(this).addClass('add_but_choice');
      }
      $('.checkBut').removeClass('add_but_choice');
      $('.eraBut').removeClass('add_but_choice'); 

      globalCompositeOperation='source-over'; 
      selectSize=3;
  });
  $('.eraBut').on('click',function () {
      $('#can').removeClass('add_can_hide');
      if(!$(this).hasClass('add_but_choice')){
        $(this).addClass('add_but_choice');
      }
      $('.checkBut').removeClass('add_but_choice');
      $('.penBut').removeClass('add_but_choice');

      globalCompositeOperation='destination-out';
      selectSize=20;

  });
  $('.red').on('click',function () {
    selectColor="#ff0000";
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.green').removeClass('add_col_choice');
    $('.black').removeClass('add_col_choice');
    $('.blue').removeClass('add_col_choice');
    $('.yellow').removeClass('add_col_choice');
    $('.white').removeClass('add_col_choice');
  });
  $('.green').on('click',function () {
    selectColor="#008000";
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.red').removeClass('add_col_choice');
    $('.black').removeClass('add_col_choice');
    $('.blue').removeClass('add_col_choice');
    $('.yellow').removeClass('add_col_choice');
    $('.white').removeClass('add_col_choice');
  });
  $('.black').on('click',function () {
    selectColor="#000000";
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.red').removeClass('add_col_choice');
    $('.green').removeClass('add_col_choice');
    $('.blue').removeClass('add_col_choice');
    $('.yellow').removeClass('add_col_choice');
    $('.white').removeClass('add_col_choice');
  });
  $('.blue').on('click',function () {
    selectColor="#0000ff";
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.red').removeClass('add_col_choice');
    $('.black').removeClass('add_col_choice');
    $('.green').removeClass('add_col_choice');
    $('.yellow').removeClass('add_col_choice');
    $('.white').removeClass('add_col_choice');
  });
  $('.yellow').on('click',function () {
    selectColor="#ffff00";
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.red').removeClass('add_col_choice');
    $('.black').removeClass('add_col_choice');
    $('.blue').removeClass('add_col_choice');
    $('.green').removeClass('add_col_choice');
    $('.white').removeClass('add_col_choice');
  });
  $('.white').on('click',function () {
    selectColor="#ffffff";
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.red').removeClass('add_col_choice');
    $('.black').removeClass('add_col_choice');
    $('.blue').removeClass('add_col_choice');
    $('.yellow').removeClass('add_col_choice');
    $('.green').removeClass('add_col_choice');
  });

});
