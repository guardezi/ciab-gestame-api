import express from 'express'
// import profileRouter from '../api/profile/profile.router'
// import deviceRouter from '../api/device/device.router'
// import locationRouter from '../api/location/location.router'
// import voucherRouter from '../api/voucher/voucher.router'
// import costumerRouter from '../api/costumer/costumer.router'
// import saleRouter from '../api/sale/sale.router'
// import rateRouter from '../api/rate/rate.route'
// import actionRouter from '../api/action/action.route'
// import productZoneRouter from '../api/productZone/productZone.route'
import serviceRouter from '../api/service/service.router'
import providerRouter from '../api/provider/provider.router'
import orderRouter from '../api/order/order.router'
const router = express.Router()

// commom
router.use('/service', serviceRouter)
router.use('/provider', providerRouter)
router.use('/order', orderRouter)

// router.use('/device', deviceRouter)
// router.use('/profile', profileRouter)
// router.use('/rate', rateRouter)

// // mobile
// router.use('/location', locationRouter)
// router.use('/voucher', voucherRouter)
// router.use('/costumer', costumerRouter)
// router.use('/sale', saleRouter)

// // seller
// router.use('/action', actionRouter) // doing
// router.use('/productzone', productZoneRouter) // doing 
// router.use('/notification', pushRouter) //doing 
// router.use('/seller', sellerRouter) //doing

router.use('/', (req, res) => {
  res.send('OK')
})
export default router
