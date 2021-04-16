
// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

/* Change info in meet the team dropdown in desktop version
Toggle dropdowns for individuals in mobile version */
function changeInfo(founder) {
  var paddyInfoBox = document.getElementById("collapsableInfoBoxPaddy");
  var ellieInfoBox = document.getElementById("collapsableInfoBoxEllie");
  var emilyInfoBox = document.getElementById("collapsableInfoBoxEmily");
  var sotosInfoBox = document.getElementById("collapsableInfoBoxSotos");
  var giorgosInfoBox = document.getElementById("collapsableInfoBoxGiorgos");

  switch (founder) {
    case "paddy":

      setFounderInfo("Paddy", "Our history, ambitions and how your organisation can work together with us.",
        "paddy@haelu.co.uk", "https://twitter.com/paddygardner0", "https://www.linkedin.com/in/paddy-gardner-07a9b1149/");

      showMobileInfoBox(paddyInfoBox);

      toggleQuote('Paddy', 'Ellie', 'Emily', 'Sotos', 'Giorgos');
      break;

    case "ellie":

      setFounderInfo("Ellie", "Creating content together and sharing your experiences relating to care.",
        "ellie@haelu.co.uk", "https://twitter.com/Ellie_Seddon", "https://www.linkedin.com/in/elinor-seddon/");

      showMobileInfoBox(ellieInfoBox);

      toggleQuote('Ellie', 'Emily', 'Sotos', 'Giorgos', 'Paddy');
      break;

    case "emily":

      setFounderInfo("Emily", "Upgrading human processes while keeping them person-centred and user friendly.",
        "emily@haelu.co.uk", "https://twitter.com/Fothers23", "https://www.linkedin.com/in/emily-fothergill-a18964158/");

      showMobileInfoBox(emilyInfoBox);

      toggleQuote('Emily', 'Sotos', 'Giorgos', 'Paddy', 'Ellie');
      break;

    case "sotos":

      setFounderInfo("Sotos", "Haelu’s technical know-how and exploring avenues for integration.", "sotos@haelu.co.uk",
        "https://twitter.com/SotosHadj", "https://www.linkedin.com/in/sotos-hadjipanayi/");

      showMobileInfoBox(sotosInfoBox);

      toggleQuote('Sotos', 'Giorgos', 'Paddy', 'Ellie', 'Emily');
      break;

    case "giorgos":

      setFounderInfo("Giorgos", "Our design methodology and how we turn challenges into digital solutions.",
        "giorgos@haelu.co.uk", "https://twitter.com/this_is_giorgos", "https://www.linkedin.com/in/giorgos-andreou/");

      showMobileInfoBox(giorgosInfoBox);

      toggleQuote('Giorgos', 'Paddy', 'Ellie', 'Emily', 'Sotos');
      break;

    default: console.log(founder);
  }
}

// Change info in meet the team dropdown in desktop version
function setFounderInfo(name, topic1, email, twitterUrl, linkedinUrl) {
  var founderInfo1 = document.getElementById("info1");

  var founderName = document.getElementById("founder-name");

  var founderEmail = document.getElementById("founder-email");
  var founderTwitter = document.getElementById("founder-twitter");
  var founderLinkedin = document.getElementById("founder-linkedin");

  var founderInfoBox = document.getElementById("collapsableInfoBoxDesktop");
  // var teamQuote = document.getElementById("team-quote");
  // teamQuote.classList.add("show-mobile");

  if (founderInfoBox.classList.contains("collapsing") && !(founderName.innerText.includes(name))) {
    setTimeout(function () {
      founderName.innerText = "Speak to " + name + " about...";
      founderInfo1.innerText = topic1;
      founderEmail.setAttribute("href", "mailto:" + email);
      founderTwitter.setAttribute("href", twitterUrl);
      founderLinkedin.setAttribute("href", linkedinUrl);
      founderInfoBox.classList.add("show");
    }, 250);
  }
}

// Toggle dropdowns for individuals in mobile version
function showMobileInfoBox(founderInfoBox) {
  if (screen.width <= 768 && window.matchMedia("(orientation: portrait)").matches) {
    if (founderInfoBox.style.display === "block") {
      founderInfoBox.style.display = "none";
    } else {
      founderInfoBox.style.display = "block";
    }
  }
}

// Hide quote if dropdown is showing, and display if dropdown isn't showing.
function toggleQuote(founderID1, founderID2, founderID3, founderID4, founderID5) {
  var founderName = document.getElementById("founder-name");
  var founderInfoBox = document.getElementById("collapsableInfoBoxDesktop");
  
  var teamQuote = document.getElementById("team-quote");
  var curFounder = document.getElementById(founderID1);
 
  var founders = [];
  founders.push(curFounder);
  founders.push(document.getElementById(founderID2));
  founders.push(document.getElementById(founderID3));
  founders.push(document.getElementById(founderID4));
  founders.push(document.getElementById(founderID5));
  

  for (var i = 4; i >= 0; i--) {

    if (founders[i].classList.contains("collapsed")) {
      founders.pop();
    }
  }

  if (founderInfoBox.classList.contains("collapsing") && !(founderName.innerText.includes(founderID1))) {
    teamQuote.style.display = "none"
  }
  else if (founders.length == 0) {
    teamQuote.style.display = "block";
  }
  else {
    teamQuote.style.display = "none";
  }

}

//Change mailto link
function changeMailto(checkbox) {
  if (document.getElementById("subscribe").value == "on") {

    document.getElementById("contact").setAttribute("action", "mailto:team@haelu.co.uk?subject=Subscribe");
  }
  else {
    document.getElementById("contact").setAttribute("action", "mailto:team@haelu.co.uk?subject=Contact form message");
  }
}

