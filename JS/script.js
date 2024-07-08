const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal'); 
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container')
// hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTickets() {
    console.log('Show modal');
    modal.classList.add('open');
}

// hàm ẩn modal mua vé (gỡ bỏ class open của modal)
function hideBuyTickets() {
    console.log('Hide modal');
    modal.classList.remove('open');
}

// Tạo vòng lặp lặp qua từng thẻ button và nghe hành vi click
buyBtns.forEach(function(buyBtn) {
    buyBtn.addEventListener('click', showBuyTickets);
});

// Nghe hành vi click vào button close
modalClose.addEventListener('click', hideBuyTickets);

// click vào modal đóng modal lại
modal.addEventListener('click', hideBuyTickets);

// tính chất nổi bọt của sự kiện, có nghĩa là khi tạo ra hành vi click của thẻ con thì các hành vi đó có thể lắng nghe từ thẻ cha 
// cho đến khi nó đạt đến phần tử document. Quá trình này diễn ra theo thứ tự từ phần tử gốc (target element) lên tới document.

// ngăn chặn hành vi nổi bọt 
modalContainer.addEventListener('click', function(even) {
    // even sẽ giúp ngăn chặn các hành vi mặc định
    event.stopPropagation(); // stopPropagation() ngăn chặn sự kiện nổi bọt
})

var headerElement = document.getElementsByClassName('header')[0] ;
var mobileMenu = document.getElementById('mobile-menu')
var currentHeight = headerElement.clientHeight ;

// đóng/mở mobile menu
mobileMenu.onclick = function () { 
    var isClose = headerElement.clientHeight === currentHeight ;
    if(isClose) {
        headerElement.style.height = 'auto';
    }
    else {
        headerElement.style.height = null ;
    }
}

// tự động đóng khi chọn menu

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

if (headerElement) {
    for (var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i];
        
        menuItem.onclick = function (event) {
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            // console.log('Clicked menu item:', this); // In ra phần tử được nhấp
            // console.log('Next sibling element:', this.nextElementSibling); // In ra phần tử liền kề

            if (isParentMenu) {
                event.preventDefault();
                // console.log('Preventing default action for parent menu item.');
            } else {
                headerElement.style.height = null;
                // console.log('Header height set to null');
            }
        }
    }
} else {
    console.error('headerElement is not defined or not found.');
}
