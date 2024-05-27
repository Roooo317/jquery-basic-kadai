$(function () {
  //文字色を変化させる
  $('#change-color').on('click', function () {
    $('#target').css('color', 'blue');
  });

  //文字が切り替わる
  $('#change-text').on('click', function () {
    $('#target').text('さようなら！');
  });

  //フェードアウトする
  $('#fade-out').on('click', function () {
    $('#target').fadeOut();
  });

  //フェードインする
  $('#fade-in').on('click', function () {
    $('#target').fadeIn();
  });
});