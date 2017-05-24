// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('body').on('click', '.page-scroll a', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  // target: '.navbar-fixed-top'
  target: '#n2'
})

$(document).ready(function() {
  var old_index = 0;
  var now_index = 0;
  var class_length = 4;
  var dot_length = $(".timeline_dot").length;

  $(".timeline_dot").click(function() {
    now_index = $(this).index(".timeline_dot");
    Changstort(now_index, old_index);
    old_index = now_index;
  });

  //story左右建切換
  $(".story_btn").click(function() {
    var btn_index = $(this).index(".story_btn");

    if (btn_index == 0) {
      now_index = old_index - 1;
    } else {
      now_index = old_index + 1;
    }

    if (now_index >= dot_length)
      now_index = 0;
    if (now_index < 0)
      now_index = dot_length - 1;

    Changstort(now_index, old_index);
    old_index = now_index;
  });

  //置換內容
  function Changstort(now_index, old_index) {


    $(".story_text").each(function() {
      $(this).addClass("no_look");
    });
    $(".story_text").eq(now_index).removeClass("no_look");

    var now_ck_dot = now_index % class_length;
    var old_ck_dot = old_index % class_length;

    var now_classname = Getclassname(now_ck_dot);
    var old_classname = Getclassname(old_ck_dot);

    $(".timeline_dot").eq(old_index).removeClass(old_classname);
    $(".timeline_dot").eq(now_index).addClass(now_classname);

  }
  //選擇bk className
  function Getclassname(ck_dot) {
    switch (ck_dot) {
      case 0:
        classname = "dot1_1";
        break;
      case 1:
        classname = "dot1_2";
        break;
      case 2:
        classname = "dot1_3";
        break;
      case 3:
        classname = "dot1_4";
        break;
    }
    return classname;
  }

  $(".timeline_dot").eq(0).click();
})


$(document).ready(function() {
  resize_fc();

  var now = 0,
    old = 0,
    now_1 = 0,
    old_1 = 0;
  $(".workteam_btn").click(function() {
    var index = $(this).index();
    $(".workteam_data").each(function() {

      $(this).addClass("no_look");

    });

    $(".workteam_data").eq(index).removeClass("no_look");

    old = now;
    now = index;

    var old_class = Getclassimg(old);
    var now_class = Getclassimg(now);

    $(".workteam_btn").eq(old).removeClass(old_class);
    $(".workteam_btn").eq(now).addClass(now_class);

  });

  function Getclassimg(ck_img) {
    switch (ck_img) {
      case 0:
        classname = "img1_1";
        break;
      case 1:
        classname = "img2_1";
        break;
      case 2:
        classname = "img3_1";
        break;
    }
    return classname;
  };

  $(".workteam_btn").eq(0).click();


  $(".change_team").click(function() {

    var index = $(this).index();

    $(".show_work_team").each(function() {
      $(this).addClass("no_look");
    });
    $(".show_work_team").eq(index).removeClass("no_look");

    old_1 = now_1;
    now_1 = index;

    var old_class_team = Getclassteam(old_1);
    var now_class_team = Getclassteam(now_1);

    $(".change_team").eq(old_1).removeClass(old_class_team);
    $(".change_team").eq(now_1).addClass(now_class_team);
  });

  function Getclassteam(ck_team) {
    switch (ck_team) {
      case 0:
        classname = "appteam-1";
        break;
      case 1:
        classname = "gameteam-1";
        break;
      case 2:
        classname = "designteam-1";
        break;
      case 3:
        classname = "techteam-1";
        break;
    }
    return classname;
  }

  $(".change_team").eq(0).click();

  $(".w_img_btn").click(function() {
    var ck_idx = $(this).index();
    now_work_index = ck_idx;
    if (ck_idx == $(".look").index(".content_work")) {
      return;
    };
    reset_look(ck_idx);
    change_look(ck_idx);

  });

  var mailFlug = true;
  $(".send_btn").click(function() {
    if (mailFlug) {
      mailFlug = false;

      var mail_data;
      var name = $("#name").val();
      var mail_address = $("#address").val();
      var mail_content = $("#msg").val();

      if (name == "" || mail_address == "" || mail_content == "") {
        $("#loading").html("Please input something.");
        mailFlug = true;
        return
      }

      $("#loading").html("<img id='loading_img' src='images/support-loading.gif' ></img>");

      $.post(
        "mail.php", {
          name: name,
          address: mail_address,
          content: mail_content
        },
        function(result) {}).complete(function() {
        $("#loading").html("SUCCESS");
        $("#name").val("");
        $("#address").val("");
        $("#msg").val("");
        mailFlug = true;
      })
    }
  })


  $(".mail_text_img").click(function() {
    $("#name").focus();
  });

});

function resize_fc() {
  var window_w = $(window).width();
  $(".bk_change").css("height", $(".allheader").height());
}

function change_look(idx) {
  //var old_look_idx = $(".content_work").index(".look");
  var index = idx;
  $(".content_work").each(function() {
    $(this).addClass("no_look");
    $(this).removeClass("look");
  });
  $(".content_work").eq(index).removeClass("no_look");
  $(".content_work").eq(index).addClass("look");

  var img1 = $(".w_img").eq(index).find(".work_img1");
  var img2 = $(".w_img").eq(index).find(".work_img2");
  var img3 = $(".w_img").eq(index).find(".work_img3");
  var move_val = 280;
  var speed_time = 1000;

  img2.animate({
    opacity: '1'
  }, speed_time, function() {
    img1.css("opacity", 1);
    img3.css("opacity", 1);
    img1.animate({
      left: -move_val
    });
    img3.animate({
      left: move_val
    });
  });

}

function reset_look(idx) {
  var img1 = $(".w_img").eq(idx).find(".work_img1");
  var img2 = $(".w_img").eq(idx).find(".work_img2");
  var img3 = $(".w_img").eq(idx).find(".work_img3");
  img1.stop();
  img2.stop();
  img3.stop();
  img1.css({
    "left": 0,
    "opacity": 0
  });
  img2.css({
    "left": -10,
    "opacity": 0
  });
  img3.css({
    "left": 0,
    "opacity": 0
  });
}
