
export type Product = {
  id: number;
  name: string;
  series: string;
  image: string;
  price: number;
  specs: {
    [key: string]: string;
  };
  category: string;
  description?: string;
};

export const featured: Product[] = [
  {
    id: 1,
    name: "Alienware m18 R1",
    series: "Alienware",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 2499.99,
    specs: {
      cpu: "Intel i9-13900HX",
      gpu: "NVIDIA RTX 4090",
      display: "18\" QHD+ 240Hz",
      memory: "64GB DDR5",
      storage: "2TB SSD",
    },
    category: "Premium Gaming",
    description: "The ultimate gaming machine with our largest display ever and unprecedented power."
  },
  {
    id: 2,
    name: "Alienware x16 R1",
    series: "Alienware",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 1999.99,
    specs: {
      cpu: "Intel i7-13700H",
      gpu: "NVIDIA RTX 4070",
      display: "16\" QHD+ 240Hz",
      memory: "32GB DDR5",
      storage: "1TB SSD",
    },
    category: "Premium Gaming",
    description: "Sleek design meets high performance with advanced cooling and stunning visuals."
  },
  {
    id: 3,
    name: "Dell G16 Gaming",
    series: "G-Series",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 1399.99,
    specs: {
      cpu: "Intel i7-13650HX",
      gpu: "NVIDIA RTX 4060",
      display: "16\" QHD+ 165Hz",
      memory: "16GB DDR5",
      storage: "1TB SSD",
    },
    category: "Performance Gaming",
    description: "Balanced performance and value with the latest technology for serious gamers."
  },
  {
    id: 4,
    name: "Dell G15 Gaming",
    series: "G-Series",
    image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 999.99,
    specs: {
      cpu: "Intel i5-13500H",
      gpu: "NVIDIA RTX 4050",
      display: "15.6\" FHD 120Hz",
      memory: "16GB DDR5",
      storage: "512GB SSD",
    },
    category: "Entry Gaming",
    description: "Affordable gaming power with essential features for aspiring gamers."
  }
];

export const allProducts: Product[] = [
  ...featured,
  {
    id: 5,
    name: "Alienware x14 R2",
    series: "Alienware",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 1799.99,
    specs: {
      cpu: "Intel i7-13620H",
      gpu: "NVIDIA RTX 4060",
      display: "14\" QHD+ 165Hz",
      memory: "32GB DDR5",
      storage: "1TB SSD",
    },
    category: "Ultra-Portable Gaming",
    description: "Our thinnest gaming laptop ever without compromising on power."
  },
  {
    id: 6,
    name: "Alienware m16 R2",
    series: "Alienware",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 2299.99,
    specs: {
      cpu: "Intel i9-13900HX",
      gpu: "NVIDIA RTX 4080",
      display: "16\" QHD+ 240Hz",
      memory: "64GB DDR5",
      storage: "2TB SSD",
    },
    category: "Premium Gaming",
    description: "Power meets portability with cutting-edge technology in a refined design."
  },
  {
    id: 7,
    name: "Dell G15 Special Edition",
    series: "G-Series",
    image: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 1299.99,
    specs: {
      cpu: "AMD Ryzen 7 7840HS",
      gpu: "NVIDIA RTX 4060",
      display: "15.6\" QHD 165Hz",
      memory: "16GB DDR5",
      storage: "1TB SSD",
    },
    category: "Performance Gaming",
    description: "Special edition with unique design elements and enhanced cooling."
  },
  {
    id: 8,
    name: "Dell G16 Plus",
    series: "G-Series",
    image: "https://images.unsplash.com/photo-1561112078-7d24e04c3407?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 1599.99,
    specs: {
      cpu: "Intel i7-13700H",
      gpu: "NVIDIA RTX 4070",
      display: "16\" QHD+ 240Hz",
      memory: "32GB DDR5",
      storage: "1TB SSD",
    },
    category: "Performance Gaming",
    description: "Enhanced G-Series model with premium features and superior display."
  }
];
