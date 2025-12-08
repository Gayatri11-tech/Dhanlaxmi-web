const images = import.meta.glob('../assets/images/*.{jpg,png,jpeg,webp}', { eager: true });

export const ProductData = [
     {
    id: 1,
    name: "Lalu Wafers - Potato Chips",
    image: images["../assets/images/prodimg1-1.png"].default,
    hoverimage: images["../assets/images/prodimg1-2.png"].default,
    availableIn: '7kg Cartoons',
    price: "₹200 - ₹250",
    minOrder: "70kg ( 7 cartoons )",
    description:'Crispy, light, and full of flavor — a trusted name for classic potato wafers loved by all ages.'
  },
  {
    id: 2,
    name: "Potato King - Potato chips",
    image: images["../assets/images/prodimg2-1.png"].default,
    hoverimage: images["../assets/images/prodimg2-2.png"].default,
    availableIn: '7kg Cartoons',
    price: "₹180 - ₹200",
    minOrder: "70kg ( 10 cartoons )",
    description:'Premium-quality chips with the perfect crunch and taste, made from farm-fresh potatoes.'
  },
   {
    id: 3,
    name: "Mr. Potato - Aalu papad",
    image: images["../assets/images/prodimg3-1.png"].default,
    hoverimage: images["../assets/images/prodimg3-2.png"].default,
    availableIn: '12kg Cartoons',
    price: "₹200 - ₹250",
    minOrder: "120kg ( 10 cartoons )",
    notes:'Also available in 1kg pkg',
    description:'Traditional-style aalu papad with a delicious homemade touch — thin, tasty, and ready to fry.'
  }, 
]