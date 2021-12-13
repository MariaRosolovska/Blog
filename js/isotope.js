$('.grid').isotope({
  itemSelector: '.grid-item'
});


// Робимо активною кнопку
$('#filters li').click(function(){
    $('#filters li').removeClass('active');
    $(this).addClass('active');

    // Відбираємо значення категорії в кнопки
    var selector = $(this).data('filter');

    // Фільтруємо
    $('.grid').isotope({
      filter:selector
    });
});