
function loadTemplate() {
    loadHeader();
    loadRightColumn();
    loadFooter();
    loadHead();
}


function loadHeader() {
    $('.headertemplate').load("Templates/headerTemplate.html");
}

function loadRightColumn() {
    $('.rightcolumntemplate').load("Templates/rightColumnTemplate.html");
}

function loadFooter() {
    $('.footertemplate').load("Templates/footerTemplate.html");
}

function loadHead() {
    $('.headtemplate').load("Templates/headTemplate.html");
}