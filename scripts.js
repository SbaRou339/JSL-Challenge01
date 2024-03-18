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


const status = document.querySelectorAll('.status');
const reserve = document.querySelectorAll('.reserve');
const checkout = document.querySelectorAll('.checkout');
const checkin = document.querySelectorAll('.checkin');
//checkin.0.color = none
//status.style.color = STATUS_MAP.status.color;
let reserved= STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
let checkOut  = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
let chekin = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.color = none
//status.style.color = STATUS_MAP.status.color
let Oreserve = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
let oCheckout = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
let oCheckin = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.color = none
status.style.color = STATUS_MAP.status.color
let cReserve = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
let cCheckout = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
//checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'
