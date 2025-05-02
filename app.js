document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.btn');
  const card = document.querySelector('.card');
  const story = document.querySelector('.story');
  const storyWrapper = document.querySelector('.story-wrapper');
  const tagline = document.querySelector('.tagline');
  const details = document.querySelector('.details');
  const storyBtn = document.querySelector('.story-btn');

  buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const lang = this.dataset.lang;

      // Hide the card and show the story
      card.style.display = 'none';
      story.style.display = 'flex';

      // Set content based on selected language
      let content = '';
      if (lang === 'si') {
        content = 'jk';
      } else if (lang === 'en') {
        content = '<p>This is the story content in English.</p>';
      } else if (lang === 'ta') {
        content = '<p>இது தமிழ் மொழிக்கான கதையாகும்.</p>';
      }

      // Set the inner content of story-wrapper
      storyWrapper.innerHTML = content;
    });
  });
  
  // Add event listener for the story-btn
  storyBtn.addEventListener('click', function() {
      // Hide the story div and tagline div
      story.style.display = 'none';
      tagline.style.display = 'none';
      
      // Show the details div
      details.style.display = 'block';
  });
});