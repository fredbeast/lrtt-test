function viewTab(tabClicked) {
    var i, tabs;
    // make all tabs inactive
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    // make clicked tab active
    tabClicked.className += " active";
}   