$(".button").hover(
    function() {
      $( this ).css({
        background: '#FAF8F4', 
        color: '#FAF8F4',
        '-webkit-text-stroke-width': '2px',
        '-webkit-text-stroke-color': '#2B2B2B'
      });
    }, function() {
      $( this ).css({ 
        background: '#FAF8F4', 
        color: '#2B2B2B' 
      });
    }
  );
  
  $(".button").click(
    function() {
      $( this ).css({ 
        background: '#2B2B2B', 
        color: '#FAF8F4'
      });
    }
  );