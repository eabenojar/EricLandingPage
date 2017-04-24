<script>
$("#about").click(function() {
  console.log('clickedddddd');
  $('html, body').animate({
  scrollTop: $(".row3").offset().top
  }, 2000);
  });
$("#projects").click(function() {
    console.log('clickedddddd');
    $('html, body').animate({
    scrollTop: $(".row4-block").offset().top
    }, 2000);
    });
$("#contact").click(function() {
        console.log('clickedddddd');
        $('html, body').animate({
        scrollTop: $(".row5").offset().top
        }, 2000);
        });
</script>
