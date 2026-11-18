document.write('\
\
<div id="navigate">\
<h2 class="hide">Menu:</h2>\
<ul>\
	<li><a href="index.html">Home</a></li>\
	<li><a href="speakers.html">Speakers</a></li>\
	<li><a href="programme.html">Programme</a></li>\
	<li><a href="accommodation.html">Accommodation</a></li>\
	<li><a href="transport.html">Transport</a></li>\
	<li><a href="students.html">Students</a></li>\
	<li><a href="info.html">Information</a></li>\
	<li><a href="melbourne.html">Melbourne</a></li>\
	<li><a href="organisers.html">Organisers</a></li>\
	<li><a href="registration.html">Registration</a></li>\
</ul>\
</div>\
\
');
document.addEventListener("DOMContentLoaded", function () {
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("#navigate a").forEach(function (link) {
    const linkedPage =
      new URL(link.href).pathname.split("/").pop() || "index.html";

    if (linkedPage === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });
});