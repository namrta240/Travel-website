function filterPlaces(type) {
    // Get all divisions
    var divisions = document.querySelectorAll('.division');
    
    // Hide all divisions
    divisions.forEach(function(division) {
        division.style.display = 'none';
    });
    
    // Show divisions based on filter type
    if (type === 'all') {
        divisions.forEach(function(division) {
            division.style.display = 'inline-block';
        });
    } else {
        var filteredDivisions = document.querySelectorAll('.' + type);
        filteredDivisions.forEach(function(division) {
            division.style.display = 'inline-block';
        });
    }
}
