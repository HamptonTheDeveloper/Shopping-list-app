/* eslint-disable strict */
$(function(){
    $('#js-shopping-list-form').submit(evt =>{
      evt.preventDefault();
      const newItem = $('#shopping-list-entry').val();
      const item = `<li>
      <span class="shopping-item">${newItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
      </li>`;
      $('ul').append(item);
  
  
      
    });
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      $(this).closest('li').remove();
    });
  
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
  
      });
  
  
  
  