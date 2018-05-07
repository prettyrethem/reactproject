import Index from '../views/Index'
import Home from '../views/Home'
import Buy from '../views/Buy'
import Sale from '../views/Sale'
import Mine from '../views/Mine'
import City from '../views/City'
import Address from '../views/Address'
let router={
    routes:[
        {
            path: '/index',
            component: Index,
            children:[
                {
                    path: '/index/home',
                    component: Home
                },
                {
                    path: '/index/buy',
                    component: Buy
                },
                {
                    path: '/index/sale',
                    component: Sale
                },
                {
                    path: '/index/mine',
                    component: Mine
                }
            ]
        },
        {
            path: '/city',
            component: City
        },
        {
            path: '/address',
            component: Address
        }
    ]
}
export default router