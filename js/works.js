$('.work-link').click(function() {
	var url = $(this).data('url');
	window.open(url, '_blank');
	return false;
});
