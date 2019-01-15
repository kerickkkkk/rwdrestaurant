$(document).ready(function () {
  //heart style change
  $('.fa-heart').click(function (event) {
    $(this).toggleClass('fas');
  });

  // 漢寶選單
  // $('.burgermenu').on('click', function (e) {
  //   e.preventDefault();
  //   $('body').toggleClass('show-burger');

  // });
  $('input:checkbox').change(
    function () {
      if (this.checked) {
        $('body').addClass('show-burger');
      } else {
        $('body').removeClass('show-burger');
      }
    });
});