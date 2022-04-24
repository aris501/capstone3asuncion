import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Aris',
      email: 'a@mail.com',
      password: bcrypt.hashSync('0202'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'j@mail.com',
      password: bcrypt.hashSync('0202'),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'Threezero One Punch Man Saitama Season 2 1/6 3Z0134t',
      slug: 'FIG-1SIXTH',
      category: 'Figure',
      image: '/images/p1.jpg', // 679px × 829px
      price: 165,
      countInStock: 10,
      brand: 'Threezero',
      rating: 4.5,
      numReviews: 10,
      description:
        'This 1/6 Articulated Figure: Saitama (SEASON 2)” is approximately 30cm tall fully articulated figure. Its hero suit costume and cape is made of fabric, and has weathering effects applied. Comes with a serious expression head and 2 kinds of interchangeable gloved hands (1 pair of opened hands and 1 pair of fists).ality shirt',
    },
    {
      name: 'KILLERBODY TRANSFORMERS BUMBLEBEE: WEARABLE HELMET SPEAKER TOUCH CONTROL OPTIMUS PRIME KB200069-14',
      slug: 'KB-OP-helmet-lifescale',
      category: 'wearable',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'KillerBody',
      rating: 4.0,
      numReviews: 10,
      description:
        'Helmet Materials: ABS, PC, PVC, metal & Electronic components with display stand and materials made of ABS Silica gel with a metal counterweight',
    },
    {
      name: 'Iron Studios Avengers: Endgame I Am Iron Man BDS Art Scale 1/10 MARCAS21519-10',
      slug: 'IS-stat',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 100,
      countInStock: 15,
      brand: 'IronStudios',
      rating: 4.5,
      numReviews: 14,
      description:
        'Limited edition, Based on original movie references, Made in polystone, Hand painted, Automotive paint',
    },
    {
      name: 'Hot Toys Avengers: Endgame Rocket Collectible Figure 1/6 MMS548',
      slug: 'HT-Fig',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 112,
      countInStock: 5,
      brand: 'HotToys',
      rating: 4.5,
      numReviews: 10,
      description:
        'HEIGHTAPPROXIMATELY 16 CM TALL POINTS OF ARTICULATIONS20 SPECIAL FEATURESA 1/6TH SCALE NANO GAUNTLET, A BURGUNDY COLORED FABRIC SCARF, A AETHER EXTRACTION',
    },
  ],
};
export default data;
