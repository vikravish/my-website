function openTab(tabName, elmnt, color) {
    var bColor = color;
    // Hide all elements with class="tabcontent" by default */
    var i
    var tabcontent;
    var tablinks;
    /*tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }*/
    let $tabcontents = document.getElementsByClassName("tabcontent");

    [...$tabcontents].forEach(function ($item) {
        $item.style.display = "none";
    });

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";

    document.getElementById("footer").style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
    document.getElementById("footer").style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();