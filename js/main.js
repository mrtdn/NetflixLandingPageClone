const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab-content-item
function selectItem(e) {
    removeBorder();
    removeShow();
    // add border line to the current tab
    this.classList.add('tab-border');
    // grab tab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // add show class to selected item
    tabContentItem.classList.add('show');
}

// Remove border from other tabs
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

// remove show class
function removeShow(e) {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// To listen for tab click 
tabItems.forEach(item => item.addEventListener('click', selectItem));
