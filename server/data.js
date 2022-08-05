import bcrypt from 'bcryptjs'

const data = {
  users:[
    {
       name: 'Miroslav',
       email: 'admin@example.com',
       password: bcrypt.hashSync('12345678'),
       isAdmin: true
    },
    {
      name: 'Pesho',
      email: 'user@example.com',
      password: bcrypt.hashSync('12345678'),
      isAdmin: false
    }
  ],
  products: [
    {
      name: "Nike Shirt",
      slug: "nike-shirt",
      category: "Shirt",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "High quality t-shirt",
    },
    {
      name: "Adidas Fit Shirt",
      slug: "adidas-fit-shirt",
      category: "Shirt",
      image: "/images/p2.jpg",
      price: 250,
      countInStock: 10,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "High quality t-shirt",
    },
    {
      name: "Nike Slim Pant",
      slug: "nike-slim-pant",
      category: "Pants",
      image: "/images/p3.jpg",
      price: 25,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "High quality pants",
    },
    {
      name: "Adidas Fit Pant",
      slug: "adidas-fit-pant",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 65,
      countInStock: 5,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description: "High quality pants",
    },
  ],
};

export default data;