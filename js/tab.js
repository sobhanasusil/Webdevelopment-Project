$(document).ready(function () {
    $('.diamond-tab').click(function () {
        var target = $(this).data('target');
        $('.tab-content .tab-pane').removeClass('active');
        $(target).addClass('active');
    });
});





$(document).ready(function () {
  $('#carTable').DataTable();
});


$(document).ready(function() {
$.ajax({
url: 'json.Searchcar.json',
dataType: 'json',
success: function(data) {
    alert(data);
  populateTable(data);
},
error: function(xhr, status, error) {
  console.log(error);
}
});
});

function populateTable(data) {
var table = $('#carTable');
$.each(data, function(index, car) {
var row = $('<tr>');
row.append($('<td>').text(car.sno));
row.append($('<td>').text(car.carName));
row.append($('<td>').text(car.model));
row.append($('<td>').text(car.year));
row.append($('<td>').text(car.color));
row.append($('<td>').text(car.price));
table.append(row);
});
}


// Car selling part

document.getElementById('carListingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var carName = document.getElementById('carName').value;
    var carPrice = document.getElementById('carPrice').value;
    var carDescription = document.getElementById('carDescription').value;
    var carPhotos = document.getElementById('carPhotos').files;
    
    // Handle the form submission and photo uploads
    // Example: Send the data to the server using AJAX
    
    // Clear the form fields
    document.getElementById('carName').value = '';
    document.getElementById('carPrice').value = '';
    document.getElementById('carDescription').value = '';
    document.getElementById('carPhotos').value = '';
  });
  