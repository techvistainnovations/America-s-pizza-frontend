import React, { useState } from 'react';
import MenuItemDialog from './../../components/Dialogs/ItemViewer';  // Import the dialog component

const menuItems = [
  {
    id: 1,
    title: 'Mocktail',
    desc: 'A cola base, similarly mixed with grenadine syrup and garnished with a maraschino cherry. Named after the famous Western film actor and entertainer.',
    coverImage: './images/ui/cocktail.jpg',
    items: [
    {
      id: 1,
      title: '250 ml soft drink',
      price: '30'
    },
    {
      id: 2,
      title: '2 soft drink',
      price: '50'
    },
    {
      id: 3,
      title: '3 soft drink',
      price: '70'
    },
    {
      id: 4,
      title: 'minit mojito',
      price: '60'
    },
    {
      id: 5,
      title: 'green apple',
      price: '80'
    },
    {
      id: 6,
      title: 'water lemon',
      price: '80'
    },
    {
      id: 7,
      title: 'BLUE BERRY Mojito',
      price: '80'
    }
  ]
},
{
  id: 2,
  title: 'burger',
  desc: 'A burger is a patty of ground beef grilled and placed between two halves of a bun.',
  coverImage: './images/ui/burger.jpg',
  items: [
    {
      id: 1,
      title: 'Spicy Burger',
      price: '60'
    },
    {
      id: 2,
      title: 'Veg. Burger',
      price: '80'
    },
    {
      id: 3,
      title: 'Spicy Paneer Burger',
      price: '90'
    },
    {
      id: 4,
      title: `American's Special Burger`,
      price: '120'
    },
  ]
},
{
  id: 3,
  title: 'Crispy Chaap',
  desc: 'Traditionally it is prepared from soya chunks and soya beans which is grounded together and mixed with all purpose flour.',
  coverImage: './images/ui/malai-chaap-scaled.jpg',
  items: [
    {
      id: 1,
      title: `American's Crispy Chaap(10 Pc)`,
      price: '120'
    },
    {
      id: 2,
      title: `American's Crispy Chaap(20 Pc)`,
      price: '170'
    },
    {
      id: 3,
      title: `American's Crispy Chaap(30 Pc)`,
      price: '250'
    },
    {
      id: 4,
      title: `American's Crispy Chaap(40 Pc)`,
      price: '300'
    },
  ]
},
{
  id: 4,
  title: 'Shake',
  desc: `A shake is a frozen dessert made by blending milk and ice cream with flavorings or sweeteners until it's thick and creamy.`,
  coverImage: './images/ui/shake.jpg',
  items: [
    {
      id: 1,
      title: `Cold Coffee`,
      price: '70'
    },
    {
      id: 2,
      title: `Oreo Shake`,
      price: '80'
    },
    {
      id: 3,
      title: `Vanilla Shake`,
      price: '80'
    },
    {
      id: 4,
      title: `Strawberry Shake`,
      price: '90'
    },
    {
      id: 5,
      title: `Butter Scotch Shake`,
      price: '90'
    },
    {
      id: 6,
      title: `Kit Kat Shake`,
      price: '110'
    },
  ]
},
{
  id: 5,
  title: 'Sandwich',
  desc: `A sandwich is a meal made of two or more slices of bread with a filling in between.`,
  coverImage: './images/ui/sandwich.jpg',
  items: [
    {
      id: 1,
      title: `Sweet corn sandwich`,
      price: '100'
    },
    {
      id: 2,
      title: `Cheese Pizza Sandwich (2 Pc)`,
      price: '100'
    },
    {
      id: 3,
      title: `American's Veg. Sandwich`,
      price: '120'
    },
    {
      id: 4,
      title: `Cheese Pizza Sandwich (4 Pc)`,
      price: '180'
    }
  ]
},
{
  id: 6,
  title: 'Crispy Fry',
  desc: `an all-in-one product containing a batter and a breading pack made while special blend of flour, starch, spices, and seasonings providing delicious fried chicken with fuller extra crunch.`,
  coverImage: './images/ui/triple.jpg',
  items: [
    {
      id: 1,
      title: `French Fry`,
      price: '90'
    },
    {
      id: 2,
      title: `Masala Fry`,
      price: '100'
    },
  ]
},
{
  id: 7,
  title: 'Wrap',
  desc: `Wraps are usually made with soft, pliable flatbreads such as flour tortillas, lavash, or pita.`,
  coverImage: './images/ui/chix-wrap.jpg',
  items: [
    {
      id: 1,
      title: `Punjabi Wrap`,
      price: '100'
    },
    {
      id: 2,
      title: `Sweet Corn Wrap`,
      price: '100'
    },
  ]
},
{
  id: 8,
  title: 'Breadstick',
  desc: `generally pencil-sized sticks of crisp, dry baked bread that originated in the Piedmont region of Italy.`,
  coverImage: './images/ui/Cheese-Breadstick-Marinara.jpg',
  items: [
    {
      id: 1,
      title: `Cheese Breadstick`,
      price: '100' 
    },
    {
      id: 2,
      title: `Calzone Vegi`,
      price: '120'
    },
    {
      id: 3,
      title: `Gralic Breadstick`,
      price: '100'
    },
    {
      id: 4,
      title: `Jalapeno Breadstick`,
      price: '110'
    },
    {
      id: 5,
      title: `Indian Style Breadstick`,
      price: '110'
    },
    {
      id: 6,
      title: `Spl. Stuff Garlic Bread`,
      price: '130'
    },
  ]
},
{
  id: 9,
  title: 'Maggi',
  desc: `Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings.`,
  coverImage: './images/ui/maxresdefault.jpg',
  items: [
    {
      id: 1,
      title: `Special Punjabi Maggi(M)`,
      price: '100' 
    },
    {
      id: 2,
      title: `Special Punjabi Maggi(L)`,
      price: '150' 
    }
  ]
},
{
  id: 10,
  title: 'Pasta',
  desc: `Pasta is a type of food that's usually made from an unleavened dough of flour and water or eggs, and formed into various shapes. `,
  coverImage: './images/ui/pasta.jpg',
  items: [
    {
      id: 1,
      title: `White Sauce Pasta(M)`,
      price: '100'
    },
    {
      id: 2,
      title: `White Sauce Pasta(L)`,
      price: '130'
    },
    {
      id: 3,
      title: `Red Sauce Pasta(M)`,
      price: '110'
    },
    {
      id: 4,
      title: `Red Sauce Pasta(L)`,
      price: '130'
    },
    {
      id: 5,
      title: `Mix Sauce Pasta(M)`,
      price: '110'
    },
    {
      id: 6,
      title: `Mix Sauce Pasta(L)`,
      price: '150'
    },
  ]
}
]

const OurMenu = () => {
  const [dialog, setDialog] = useState({
    isOpen: false,
    data: {},
  });

  const handleClickOpen = (item) => {
    setDialog({
      isOpen: true,
      data: item,
    });
  };

  const handleClose = () => {
    setDialog({
      isOpen: false,
      data: {},
    });
  };

  return (
    <div className='mt-[148px]'>
      <section className='container pt-3 mx-auto mt-[142px]  lg:mb-12 md:mb-6 sm:mb-4 mb-4'>
        <h2 className='lg:text-4xl mb-6 md:text-3xl text-2xl text-darkbg font-semibold md:leading-[65px] text-center sm:leading-10'>Explore Menu</h2>
        <div className='grid items-stretch gap-6 lg:grid-cols-3 md:grid-cols-2'>
          {
            menuItems.map((menuItem) => {
              return (
                <div key={menuItem.id} onClick={() => handleClickOpen(menuItem)} className='cursor-pointer rounded-2xl hover:drop-shadow-lg transition-all menu_item shadow-sm'>
                  <div className='relative lg:h-60 h-44 overflow-hidden transition-all rounded-t-lg'>
                    <img src={menuItem.coverImage} className='w-full h-full transition-all object-cover' alt={menuItem.title} />
                    <h2 className='absolute transition-all bottom-3 z-20 left-0 lx:pr-36 lg:pr-28 p-4 text-whiteColor w-full lx:text-4xl lg:text-3xl text-2xl'>{menuItem.title}</h2>
                    <div className='py-1 lg:text-sm text-xs font-semibold rounded-full px-3 absolute bottom-8 right-3 z-20 text-whiteColor bg-[#DA251C]'>{menuItem.items.length - 1}+ Types</div>
                  </div>
                  <div className='p-4 rounded-2xl -mt-4 transition-all relative z-30 bg-whiteColor'>
                    <p className='ld:text-base md:text-sm text-sm allow2Line text-darkbg'>{menuItem.desc}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>

      <MenuItemDialog 
        isOpen={dialog.isOpen} 
        data={dialog.data} 
        onClose={handleClose} 
      />
    </div>
  );
};

export default OurMenu;
