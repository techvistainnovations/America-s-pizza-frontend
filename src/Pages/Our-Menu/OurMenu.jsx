import React from 'react'

const menuItems = [
  {
    id : 1,
    title : 'Mocktail',
    desc : 'A cola base, similarly mixed with grenadine syrup and garnished with a maraschino cherry. Named after the famous Western film actor and entertainer.',
    coverImage : './images/ui/cocktail.jpg',
    items : [
      { 
        id : 1,
        title : '250 ml soft drink',
        price : '30'
      },
      { 
        id : 2,
        title : '2 soft drink',
        price : '50'
      },
      { 
        id : 3,
        title : '3 soft drink',
        price : '70'
      },
      { 
        id : 4,
        title : 'minit mojito',
        price : '60'
      },
      { 
        id : 5,
        title : 'green apple',
        price : '80'
      },
      { 
        id : 6,
        title : 'water lemon',
        price : '80'
      },
      { 
        id : 7,
        title : 'BLUE BERRY Mojito',
        price : '80'
      }
    ]
  },
  {
    id : 2,
    title : 'burger',
    desc : 'A burger is a patty of ground beef grilled and placed between two halves of a bun.',
    coverImage : './images/ui/burger.jpg',
    items : [
      { 
        id : 1,
        title : 'Spicy Burger',
        price : '60'
      },
      { 
        id : 2,
        title : 'Veg. Burger',
        price : '80'
      },
      { 
        id : 3,
        title : 'Spicy Paneer Burger',
        price : '90'
      },
      { 
        id : 4,
        title : `American's Special Burger`,
        price : '120'
      },
    ]
  }
]

const OurMenu = () => {
  return (
    <div className='mt-[148px]'>
        <section className='container pt-3 mx-auto mt-[142px]  lg:mb-12 md:mb-6 sm:mb-4 mb-4'>
            <h2 className='lg:text-4xl md:text-3xl text-2xl text-darkbg font-semibold md:leading-[65px] text-center sm:leading-10'>Explore Menu</h2>
            <div className='grid items-stretch gap-6 grid-cols-3'>
                {
                  menuItems.map((menuItem,i)=>{
                    return (
                    <div key={menuItem.id} className='cursor-pointer rounded-2xl hover:drop-shadow-lg transition-all menu_item shadow-sm'>
                      <div className='relative h-60 overflow-hidden transition-all rounded-t-lg'>
                        <img src={menuItem.coverImage} className='w-full h-full transition-all object-cover' alt="" />
                        <h2 className='absolute transition-all bottom-3 z-20 left-0 pr-36 p-4 text-whiteColor w-full text-4xl'>{menuItem.title}</h2>
                        <div className='py-1 text-sm font-semibold rounded-full px-3 absolute bottom-8 right-3 z-20 text-whiteColor bg-[#DA251C]'>{menuItem.items.length -1}+ Types</div>
                      </div>
                      <div className='p-4 rounded-2xl -mt-4 transition-all relative z-30 bg-whiteColor'>
                        <p className='text-base allow2Line text-darkbg'>{menuItem.desc}</p>
                      </div>
                    </div>
                    )
                  })
                }
            </div>
        </section>
    </div>
  )
}

export default OurMenu