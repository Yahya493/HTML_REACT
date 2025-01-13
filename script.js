// Add event listener to card buttons
document.querySelectorAll('.card button').forEach(button => {
	button.addEventListener('click', () => {
		alert('View details button clicked!');
	});
});
