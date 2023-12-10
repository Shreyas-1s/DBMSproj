$(document).ready(function() {
    $.get('/trips', function(data) {
      const table = $('<table>');
      const header = $('<tr>').append(
        $('<th>').text('From Location'),
        $('<th>').text('To Location'),
        $('<th>').text('Date'),
        $('<th>').text('Number of People')
      );
      table.append(header);
      $.each(data, function(i, trip) {
        const row = $('<tr>').append(
          $('<td>').text(trip.from_location),
          $('<td>').text(trip.to_location),
          $('<td>').text(trip.date),
          $('<td>').text(trip.num_people)
        );
        table.append(row);
      });
      $('body').append(table);
    });
  });
  