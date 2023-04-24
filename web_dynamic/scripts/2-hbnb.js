$(() => {
  $.get('http://0.0.0.0:5001/api/v1/status/', (res) => {

    if (res.status === 'OK') {
      $('div#api_status').addClass('available');
      $('div#api_status').removeAttr('id');
    } else {
      $('div#api_status').removeClass('available');
    }
  });

  const checkedAmenities = {};
  $(':checkbox').change(function () {
    if (this.checked) {
      checkedAmenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete checkedAmenities[$(this).attr('data-id')];
    }
    const amenities = Object.values(checkedAmenities);
    if (amenities.length > 0) {
      $('div.amenities > h4').text(amenities.join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
});