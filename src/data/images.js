const photo = (id, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const images = [
  {
    id: 1,
    title: 'Where the Wild Begins',
    category: 'Nature',
    image: photo('photo-1470770841072-f978cf4d019e'),
    description: 'A quiet alpine lake catches the last soft light of a passing day.',
  },
  {
    id: 2,
    title: 'City of a Thousand Lights',
    category: 'City',
    image: photo('photo-1519608487953-e999c86e7455'),
    description: 'The electric rhythm of the city, seen just after the sun goes down.',
  },
  {
    id: 3,
    title: 'A Sea of Stars',
    category: 'Space',
    image: photo('photo-1462331940025-496dfbfc7564'),
    description: 'Nebula clouds and distant stars make the night sky feel endless.',
  },
  {
    id: 4,
    title: 'Quiet Company',
    category: 'Animals',
    image: photo('photo-1472396961693-142e6e269027'),
    description: 'A wild visitor pauses in a sunlit clearing in the forest.',
  },
  {
    id: 5,
    title: 'The Long Way Around',
    category: 'Travel',
    image: photo('photo-1464822759023-fed622ff2c3b'),
    description: 'A winding trail leads toward a range of snow-capped peaks.',
  },
  {
    id: 6,
    title: 'Into the Blue',
    category: 'Nature',
    image: photo('photo-1433086966358-54859d0ed716'),
    description: 'A waterfall disappears into the cool mist of a green valley.',
  },
  {
    id: 7,
    title: 'After Hours',
    category: 'City',
    image: photo('photo-1519501025264-65ba15a82390'),
    description: 'Warm windows and glowing streets bring the evening skyline to life.',
  },
  {
    id: 8,
    title: 'Moonlit Horizon',
    category: 'Space',
    image: photo('photo-1446776811953-b23d57bd21aa'),
    description: 'A glimpse of our small, luminous world from far above.',
  },
  {
    id: 9,
    title: 'The Curious One',
    category: 'Animals',
    image: photo('photo-1552053831-71594a27632d'),
    description: 'A golden retriever pauses for a portrait in the soft evening light.',
  },
  {
    id: 10,
    title: 'Somewhere in the Alps',
    category: 'Travel',
    image: photo('photo-1501785888041-af3ef285b470'),
    description: 'A mountain lake reflects a landscape worth getting lost in.',
  },
  {
    id: 11,
    title: 'Emerald Stillness',
    category: 'Nature',
    image: photo('photo-1448375240586-882707db888b'),
    description: 'Sunlight finds its way through a hushed, cathedral-like forest.',
  },
  {
    id: 12,
    title: 'Postcard from the Coast',
    category: 'Travel',
    image: photo('photo-1519046904884-53103b34b206'),
    description: 'Clear turquoise water and a bright horizon invite a slower pace.',
  },
];
