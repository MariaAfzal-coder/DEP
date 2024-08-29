function openVideoModal() {
  document.getElementById('video-modal').style.display = 'block';
  document.getElementById('page-overlay').style.display = 'block'; // Show the overlay
}

function closeVideoModal() {
  document.getElementById('video-modal').style.display = 'none';
  document.getElementById('page-overlay').style.display = 'none'; // Hide the overlay
}
