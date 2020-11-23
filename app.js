// fullPage.js controls
$(document).ready(function() {
  $('#fullpage').fullpage({
	  scrollOverflow: true,
		sectionsColor: ['black', '#0c0c0c'],
		afterLoad: function(index){
		  if(index === "secondPage") {
		    $(this).resize();
		  }
		}
  });
            
  $(".overlay, .popup").fadeToggle();
});

var cardsRiderWaite = [
  {
    name: "The Fool",
    fileName: "The Fool.jpg",
    home: "XII",
    descr: "<p>Upright:<br>Free of burdens. Free of worries. Living in the now. Fearlessly taking risks, not of bravery but of naivete. A new start, and a blank page. An open mind, and an adventurous heart. The Fool is a child sampling life. Spontaneous. Endearing. Exploring where his whims take him. Anything is possible. But his little dog may be warning him not to step too close to the edge of the cliff. The Fool may be studying the stars when he should be looking where his next step will land. He may be a likely victim of trickery and deception. An easy target for bullying or usery. Traditionally, also a suggestion of careless and excessive sexuality. This card more than any other represents the subject, experiencing the influences of the diverse cast of characters in the Tarot deck.<br><br>Reversed:<br>Foremost, the victim of recklessness. Reversed, the Fool falls from the cliff. After his painful landing, he may shy away from risk taking, become suspicious or fearful. But, sometimes read as the exaggeration of the negative aspects of the upright position. Even greater excesses or irresponsibilty. Foolish choices. In some contexts, also seen as a call to accept responsibility and quit acting the Fool.</p>"
  },
  {
 