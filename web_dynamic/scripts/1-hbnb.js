$(() => {
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