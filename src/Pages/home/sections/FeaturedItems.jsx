import React from 'react'
import FeaturedItem from './FeaturedItem'

const featuredItem = [
    {
        id : 1,
        title : 'Club For 2',
        desc : '1 Crispy Masala + 1 Aloo Tikki Wrap + 1 Peri Peri',
        image : '/images/ui/image-151393-1650433271.jpeg',
        currency : '₹',
        price : '290',
        fakePrice : '',
        isVegFlag : 1,
        isAddedToCart : false,
    },
    {
        id : 2,
        title : 'Buy 2 Crispy Masala Burger & Get Your Favorites @1/-',
        desc : '',
        image : '/images/ui/image-158919-1650436631.jpeg',
        currency : '₹',
        price : '499',
        fakePrice : '',
        isVegFlag : 0,
        isAddedToCart : false,
    },
    {
        id : 3,
        title : 'pizza Aloo Tikki Meal',
        desc : 'Elevate your pizza Aloo Tikki burger to a meal',
        image : '/images/ui/image-914849-1644511269.jpeg',
        currency : '₹',
        price : '115',
        fakePrice : '',
        isVegFlag : 0,
        isAddedToCart : false,
    },
    {
        id : 4,
        title : 'pizza Spicy Chicken Wrap',
        desc : 'Spicy chicken patty served whole in this wrap',
        image : '/images/ui/image-833968-1644510327.jpeg',
        currency : '₹',
        price : '172',
        fakePrice : '299',
        isVegFlag : 2,
        isAddedToCart : false,
    },
    {
        id : 5,
        title : 'pizza Grilled Chicken',
        desc : 'Experience the perfect harmony of flavors in our',
        image : '/images/ui/image-423541-1677054193.jpeg',
        currency : '₹',
        price : '149',
        fakePrice : '',
        isVegFlag : 2,
        isAddedToCart : false,
    },
    {
        id : 6,
        title : 'Medium Fries',
        desc : 'Get your crunch on with our golden brown',
        image : '/images/ui/image-738188-1644510650.jpeg',
        currency : '₹',
        price : '99',
        fakePrice : '',
        isVegFlag : 0,
        isAddedToCart : true,
    },
    {
        id : 7,
        title : 'pizza Aloo Tikki Meal',
        desc : 'Elevate your pizza Aloo Tikki burger to a meal',
        image : '/images/ui/image-914849-1644511269.jpeg',
        currency : '₹',
        price : '115',
        fakePrice : '',
        isVegFlag : 0,
        isAddedToCart : false,
    },
    {
        id : 8,
        title : 'pizza Spicy Chicken Wrap',
        desc : 'Spicy chicken patty served whole in this wrap',
        image : '/images/ui/image-833968-1644510327.jpeg',
        currency : '₹',
        price : '172',
        fakePrice : '299',
        isVegFlag : 2,
        isAddedToCart : false,
    },
    {
        id : 9,
        title : 'pizza Grilled Chicken',
        desc : 'Experience the perfect harmony of flavors in our',
        image : '/images/ui/image-423541-1677054193.jpeg',
        currency : '₹',
        price : '149',
        fakePrice : '',
        isVegFlag : 2,
        isAddedToCart : false,
    },
]

const FeaturedItems = () => {
  return (
    <>
      <section className='featuredItem py-6'>
        <div className='container mx-auto'>
            <h3 className='md:text-2xl sm:text-xl text-xl uppercase font-semibold'>Featured Items</h3>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 gap-4'>
                {
                    featuredItem.map(item=>{
                        return (
                            <FeaturedItem key={item.id} itemData={item}></FeaturedItem>
                        )
                    })
                }
            </div>
            <div className='flex justify-center pt-6'>
                <button className='primary_btn uppercase'>
                    Explore Full Menu
                </button>
            </div>
        </div>
      </section>
    </>
  )
}
export default FeaturedItems