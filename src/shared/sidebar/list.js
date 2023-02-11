import {MdBadge, MdCreditCard, MdDashboard,MdDescription,MdGroup,MdGroups, MdInventory, MdInventory2, MdRedeem, MdStore} from 'react-icons/md'
export const items = [
    {
        icon:<MdDashboard />,
        name:'Dashoard',
        to:'/dashboard'
    },
    {
        icon:<MdGroup />,
        name:'Employees',
        to:'/employees'
    },
    {
        icon:<MdCreditCard />,
        name:'Salaries',
        to:'/salaries'
    },
    {
        icon:<MdGroups />,
        name:'Vendors',
        to:'/vendors'
    },
    {
        icon:<MdStore />,
        name:'Purchase Orders',
        to:'/purchaseorders'
    },
    {
        icon:<MdDescription />,
        name:'Invoice',
        to:'/invoice'
    },
    {
        icon:<MdBadge />,
        name:'Job Card',
        to:'/jobcard'
    },
    {
        icon:<MdInventory />,
        name:'Products',
        to:'/products'
    },
    {
        icon:<MdRedeem />,
        name:'Packages',
        to:'/packages'
    }
]