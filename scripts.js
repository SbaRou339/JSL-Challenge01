const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

// let status = selector(status);
// let reserve = selector(reserve);
// let checkout = selector(checkout);
// let checkin = selector(checkin);


// checkin[0].color = ''
// status[0].style.color = STATUS_MAP.shelf.color
// reserve[0] = STATUS_MAP.shelf.canReserve ? 'enabled' 
// checkout[0] = STATUS_MAP.shelf.canCheckout ? 'enabled' 
// checkin[0] = STATUS_MAP.shelf.canCheckIn ? 'disabled'

// checkin[1].color = ''
// status[1].style.color = STATUS_MAP.reserved.color
// reserve[1] = STATUS_MAP.reserved.canReserve ? 'disabled'
// checkout[1] = STATUS_MAP.reserved.canCheckout ? 'enabled' 
// checkin[1] = STATUS_MAP.reserved.canCheckIn ?  'disabled'

// checkin[2].color = ''
// status[2].style.color = STATUS_MAP.overdue.color
// reserve[2] = STATUS_MAP.overdue.canReserve ?  'disabled'
// checkout[2] = STATUS_MAP.overdue.canCheckout ?  'disabled'
// checkin[2] = STATUS_MAP.overdue.canCheckIn ? 'enabled' 


// Select all book elements and iterate over them
const books = document.querySelectorAll("[id^='book']");


books.forEach((book, index) => {
    // Select elements within each book
    const status = book.querySelector('.status'); // Status text element
    const reserve = book.querySelector('.reserve'); // Reserve text element
    const checkout = book.querySelector('.checkout'); // CheckOut text element
    const checkin = book.querySelector('.checkin'); // CheckIn text element

    // Update properties based on the status defined in STATUS_MAP
    status.style.color = STATUS_MAP[status.innerText.trim()].color; // Update status text color
    reserve.disabled = !STATUS_MAP[status.innerText.trim()].canReserve; // Enable/disable Reserve button
    checkout.disabled = !STATUS_MAP[status.innerText.trim()].canCheckout; // Enable/disable Checkout button
    checkin.disabled = !STATUS_MAP[status.innerText.trim()].canCheckIn; // Enable/disable Check In button
});