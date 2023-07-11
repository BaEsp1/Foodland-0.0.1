import bcrypt from "bcryptjs";


const data = {
  users: [
    {
      name: "Admin",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("123"),
      isAdmin: true,
    },
    {
      name: "Customer",
      email: "customerr@gmail.com",
      password: bcrypt.hashSync("123"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Kiwi x Kg",
      slug: "Kiwi",
      price: 2.6,
      description: "Kiwi",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "fruits and vegetables",
      rating: 1,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Envy Apples, Each",
      slug: "Envy Apples, Each",
      price: 1.25,
      description: "Envy Apples, Each",
      image:
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/219/229/products/manzana1-f44bdc6c69705fec3a16025979691367-640-0.webp",
      imageCategory:
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
      stock: 30,
      isDeleted: false,
      comments: [],
      category: "fruits and vegetables",
      rating: 5,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Fresh Iceberg Lettuce, Each",
      slug: "Fresh Iceberg Lettuce, Each",
      price: 1.88,
      description: "Fresh Iceberg Lettuce, Each",
      image:
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/219/229/products/lechuga-mantecosa1-e5d7e917c4d14f957f16025975462683-640-0.webp",
      imageCategory:
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "fruits and vegetables",
      rating: 3,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Grape Tomato, 10 oz Package",
      slug: "Grape Tomato, 10 oz Package",
      price: 2.48,
      description: "Grape Tomato, 10 oz Package",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/472988-800-auto?v=636695568779700000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
      stock: 25,
      isDeleted: false,
      comments: [],
      category: "fruits and vegetables",
      rating: 4,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Marketside Organic Bananas, Bunch",
      slug: "Marketside Organic Bananas, Bunch",
      price: 2.0,
      description: "Marketside Organic Bananas, Bunch",
      image:
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/219/229/products/banana1-39d62a544fc16a2b8016025979095295-640-0.webp",
      imageCategory:
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
      stock: 30,
      isDeleted: false,
      comments: [],
      category: "fruits and vegetables",
      rating: 4,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Russet Potatoes, 5 lb Bag",
      slug: "Russet Potatoes, 5 lb Bag",
      price: 3.87,
      description: "Russet Potatoes, 5 lb Bag",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/449110-800-auto?v=636567690053330000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
      stock: 35,
      isDeleted: false,
      comments: [],
      category: "fruits and vegetables",
      rating: 4,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Fresh Whole Carrots, 1 lb Bag",
      slug: "Fresh Whole Carrots, 1 lb Bag",
      price: 0.98,
      description: "Fresh Whole Carrots, 1 lb Bag",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/472800-800-auto?v=636695562251270000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
      stock: 40,
      isDeleted: false,
      comments: [],
      category: "fruits and vegetables",
      rating: 3.5,
      brand: "Sin Marca",
      numReviews: 0,
    },

    {
      name: "Fresh Sweet Corn on the Cob (1 each)",
      slug: "Fresh Sweet Corn on the Cob (1 each)",
      price: 59.9,
      description: "Fresh Sweet Corn on the Cob (1 each)",
      image:
        "https://i5.walmartimages.com/asr/c78d8a57-c0e8-43a4-98b1-777826530117_1.797a40ee7523a8add2629830dc41914f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
      stock: 25,
      isDeleted: false,
      comments: [],
      category: "fruits and vegetables",
      rating: 4,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Fresh Tomato on the Vine, Bag",
      slug: "Fresh Tomato on the Vine, Bag",
      price: 1.98,
      description: "Fresh Tomato on the Vine, Bag",
      image:
        "https://i5.walmartimages.com/asr/1397cd52-8636-48d7-90a7-3c15d4c3967c.7544db07683e1eed49dbd813de13e291.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
      stock: 25,
      isDeleted: false,
      comments: [],
      category: "fruits and vegetables",
      rating: 4,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Fresh Purple Eggplant, Each",
      slug: "Fresh Purple Eggplant, Each",
      price: 2.11,
      description: "Fresh Purple Eggplant, Each",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/472978-800-auto?v=636695568718800000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
      stock: 10,
      isDeleted: false,
      comments: [],
      category: "fruits and vegetables",
      rating: 5,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Fresh Yellow Bell Pepper, Each",
      slug: "Fresh Yellow Bell Pepper, Each",
      price: 0.68,
      description: "Fresh Yellow Bell Pepper, Each",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/180107-800-auto?v=636383390636230000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
      stock: 25,
      isDeleted: false,
      comments: [],
      category: "fruits and vegetables",
      rating: 4,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Granny Smith Apples, Each",
      slug: "Granny Smith Apples, Each",
      price: 1.15,
      description: "Granny Smith Apples, Each",
      image:
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/219/229/products/7212951-de63591ecd61d8680016032807887891-640-0.webp",
      imageCategory:
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
      stock: 30,
      isDeleted: false,
      comments: [],
      category: "fruits and vegetables",
      rating: 4,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Avocados, Each",
      slug: "Avocados, Each",
      price: 0.74,
      description: "Avocados, Each",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/763476-800-auto?v=638080005645570000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "fruits and vegetables",
      rating: 3.5,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Fresh Garlic Sleeve",
      slug: "Fresh Garlic Sleeve",
      price: 1.78,
      description: "AFresh Garlic Sleeve",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/698615-800-auto?v=637871997744200000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
      stock: 50,
      isDeleted: false,
      comments: [],
      category: "fruits and vegetables",
      rating: 4,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Fresh Navel Oranges, Each",
      slug: "Fresh Navel Oranges, Each",
      price: 0.88,
      description: "Fresh Navel Oranges, Each",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/447204-800-auto?v=636559052624870000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
      stock: 55,
      isDeleted: false,
      comments: [],
      category: "fruits and vegetables",
      rating: 4,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Great Value Original Strawberry Lowfat Yogurt, 32 oz",
      slug: "Great Value Original Strawberry Lowfat Yogurt, 32 oz",
      price: 2.36,
      description: "Great Value Original Strawberry Lowfat Yogurt, 32 oz",
      image:
        "https://i5.walmartimages.com/asr/0634daff-66c2-4a7f-87db-db50a90824cf.a722f31a0f4cbc48a82f4e4914dcccec.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Dairy & Eggs",
      rating: 3.5,
      brand: "Lowfat",
      numReviews: 0,
    },

    {
      name: "Happy Egg Organic Free Range Large Brown Eggs, 12 Count",
      slug: "Happy Egg Organic Free Range Large Brown Eggs, 12 Count",
      price: 5.16,
      description: "Happy Egg Organic Free Range Large Brown Eggs, 12 Count",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/677925-800-auto?v=637734621757330000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
      stock: 40,
      isDeleted: false,
      comments: [],
      category: "Dairy & Eggs",
      rating: 3,
      brand: "Happy Egg CO",
      numReviews: 0,
    },

    {
      name: "Great Value Cage Free Extra Large AA White Eggs",
      slug: "Great Value Cage Free Extra Large AA White Eggs",
      price: 3.37,
      description: "Great Value Cage Free Extra Large AA White Eggs",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/195441-800-auto?v=636383565319570000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
      stock: 40,
      isDeleted: false,
      comments: [],
      category: "Dairy & Eggs",
      rating: 4,
      brand: "Great Value",
      numReviews: 0,
    },

    {
      name: "Great Value Whole Vitamin D Milk, Gallon, 128 fl oz",
      slug: "LGreat Value Whole Vitamin D Milk, Gallon, 128 fl oz",
      price: 3.48,
      description: "Great Value Whole Vitamin D Milk, Gallon, 128 fl oz",
      image:
        "https://i5.walmartimages.com/asr/83f533c3-3234-4bea-80bf-a0f9a43cd279_2.9b223f40bab27c513ba64f9f0e3fc2d9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Dairy & Eggs",
      rating: 4.5,
      brand: "Great Value",
      numReviews: 0,
    },

    {
      name: "Great Value Finely Shredded Colby Jack Cheese, 8 oz",
      slug: "Great Value Finely Shredded Colby Jack Cheese, 8 oz",
      price: 2.22,
      description: "Great Value Finely Shredded Colby Jack Cheese, 8 oz",
      image:
        "https://i5.walmartimages.com/asr/a5ff6ef3-cb13-4fa7-9647-a8f4f50ed199.9c310685168c5c481885dbfcbe925301.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Dairy & Eggs",
      rating: 3.5,
      brand: "Great Value",
      numReviews: 0,
    },

    {
      name: "Land O Lakes® Salted Butter, 4 Butter Sticks, 1 lb Pack",
      slug: "Land O Lakes® Salted Butter, 4 Butter Sticks, 1 lb Pack",
      price: 5.23,
      description: "Land O Lakes® Salted Butter, 4 Butter Sticks, 1 lb Pack",
      image:
        "https://i5.walmartimages.com/asr/14e48b15-468d-4496-95e5-dcaf70c1f466.92d7f75a81c4bc531edf0a13d050d13e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Dairy & Eggs",
      rating: 4,
      brand: "Land O Lakes",
      numReviews: 0,
    },

    {
      name: "Great Value Mozzarella String Cheese Sticks, 12 oz, 12 Ct",
      slug: "Great Value Mozzarella String Cheese Sticks, 12 oz, 12 Ct",
      price: 2.98,
      description: "Great Value Mozzarella String Cheese Sticks, 12 oz, 12 Ct",
      image:
        "https://i5.walmartimages.com/asr/43bbc7d0-3222-496b-a67f-672f458c8c90_1.a4f178dd38561e8eb562409ce45d508b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Dairy & Eggs",
      rating: 4.5,
      brand: "LS",
      numReviews: 0,
    },

    {
      name: "Great Value Greek Vanilla Nonfat Yogurt, 32 oZ",
      slug: "Great Value Greek Vanilla Nonfat Yogurt, 32 oz",
      price: 3.92,
      description: "Great Value Greek Vanilla Nonfat Yogurt, 32 oz",
      image:
        "https://i5.walmartimages.com/asr/cb9d8c17-c789-48c2-8694-4eb917f9497c.737cb6bcaf8809336d89c7f2fcd6cafa.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Dairy & Eggs",
      rating: 4,
      brand: "Great Value",
      numReviews: 0,
    },

    {
      name: "Challenge Butter, Sea Salted, Spreadable Butter with Canola Oil 15 oz Tub",
      slug: "Challenge Butter, Sea Salted, Spreadable Butter with Canola Oil 15 oz Tub",
      price: 4.26,
      description:
        "Challenge Butter, Sea Salted, Spreadable Butter with Canola Oil 15 oz Tub",
      image:
        "https://i5.walmartimages.com/asr/9cee10c4-dad4-4b5f-9dde-8335c3c80ff8.18e700d59524c4cab55e40fdf9ee8361.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
      stock: 55,
      isDeleted: false,
      comments: [],
      category: "Dairy & Eggs",
      rating: 4,
      brand: "Chalenge",
      numReviews: 0,
    },

    {
      name: "YoCrunch Low Fat Vanilla with M&Ms Yogurt, 4 Oz. Cups, 4 Count",
      slug: "YoCrunch Low Fat Vanilla with M&Ms Yogurt, 4 Oz. Cups, 4 Count",
      price: 551,
      description:
        "YoCrunch Low Fat Vanilla with M&Ms Yogurt, 4 Oz. Cups, 4 Count",
      image:
        "https://i5.walmartimages.com/asr/6c049cc4-8865-4cbb-a330-3692bd736eab.14a31d4a4891bc5d3b38b8d51c4af76f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
      stock: 100,
      isDeleted: false,
      comments: [],
      category: "Dairy & Eggs",
      rating: 4,
      brand: "YoCrunch",
      numReviews: 0,
    },

    {
      name: "Reddi Wip Extra Creamy Whipped Topping, 13 oz Spray Can ",
      slug: "Reddi Wip Extra Creamy Whipped Topping, 13 oz Spray Can",
      price: 4.97,
      description: "Reddi Wip Extra Creamy Whipped Topping, 13 oz Spray Can",
      image:
        "https://i5.walmartimages.com/asr/0da17333-debf-49e7-9663-58bbda95cf18_4.477391a0113db31aa7d845f2a936d6e6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
      stock: 200,
      isDeleted: false,
      comments: [],
      category: "Dairy & Eggs",
      rating: 4,
      brand: "Reddi-wip",
      numReviews: 0,
    },

    {
      name: "Great Value Singles American Pasteurized Prepared Cheese Product, 16 oz, 24",
      slug: "Great Value Singles American Pasteurized Prepared Cheese Product, 16 oz, 24",
      price: 2.48,
      description:
        "Great Value Singles American Pasteurized Prepared Cheese Product, 16 oz, 24",
      image:
        "https://i5.walmartimages.com/asr/0305f720-6c11-4656-a312-45c1d4008015.5b9d67d70d3db3d39dc7673a8d3613ab.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
      stock: 50,
      isDeleted: false,
      comments: [],
      category: "Dairy & Eggs",
      rating: 4,
      brand: "Great Value",
      numReviews: 0,
    },

    {
      name: "Sargento® Sliced Gouda Natural Cheese, 10 slices",
      slug: "Sargento® Sliced Gouda Natural Cheese, 10 slices",
      price: 3.56,
      description: "Sargento® Sliced Gouda Natural Cheese, 10 slices",
      image:
        "https://i5.walmartimages.com/asr/99e45a42-886b-4cd4-a567-9455602c1a12.cabc289d2866b940500722e075954e97.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
      stock: 150,
      isDeleted: false,
      comments: [],
      category: "Dairy & Eggs",
      rating: 4,
      brand: "Sargento",
      numReviews: 0,
    },

    {
      name: "Frigo Crumbleed Feta Cheese, 5 Oz",
      slug: "Frigo Crumbleed Feta Cheese, 5 Oz",
      price: 3.17,
      description: "Frigo Crumbleed Feta Cheese, 5 Oz",
      image:
        "https://i5.walmartimages.com/asr/9e1b99b8-5cf7-451b-908b-80d235366b71.208090646798604f322ab5174b80ba11.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
      stock: 150,
      isDeleted: false,
      comments: [],
      category: "Dairy & Eggs",
      rating: 4,
      brand: "Frigo",
      numReviews: 0,
    },

    {
      name: " Great Value 1% Low Fat Chocolate Milk, Gallon, 128 fl oz",
      slug: " Great Value 1% Low Fat Chocolate Milk, Gallon, 128 fl oz",
      price: 3.27,
      description: "Great Value 1% Low Fat Chocolate Milk, Gallon, 128 fl oz",
      image:
        "https://i5.walmartimages.com/asr/0b2bba81-1172-4550-8143-7277398d2700_3.f4762f11cc6b9c6f1e40253951c533f8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thumbs.dreamstime.com/b/productos-l%C3%A1cteos-queso-y-huevos-39613794.jpg",
      stock: 350,
      isDeleted: false,
      comments: [],
      category: "Dairy & Eggs",
      rating: 4,
      brand: "Great Value",
      numReviews: 0,
    },

    {
      name: "Beef Choice Angus Ribeye Steak, 1.5 - 2.6 lb",
      slug: "Beef Choice Angus Ribeye Steak, 1.5 - 2.6 lb",
      price: 23.5,
      description: "Beef Choice Angus Ribeye Steak, 1.5 - 2.6 lb",
      image:
        "https://i5.walmartimages.com/asr/d397f1dc-2464-40a6-a8b2-b84cecb0ca9b.a0283c6d2b1e245a83a978132c125cc2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Meat & Seafood",
      rating: 5,
      brand: "Sin marca",
      numReviews: 0,
    },
    {
      name: "Fresh Pork Loin Center Cut Chops, Thin 1.25 - 2.0 lbs",
      slug: "Fresh Pork Loin Center Cut Chops, Thin 1.25 - 2.0 lbs",
      price: 7.49,
      description: "Fresh Pork Loin Center Cut Chops, Thin 1.25 - 2.0 lbs",
      image:
        "https://i5.walmartimages.com/asr/e26be364-fb05-4ad9-beb6-faeb8a992be3.6c64f47fb30e1c5f83915b26dabd7d31.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Meat & Seafood",
      rating: 3.5,
      brand: "Sin marca",
      numReviews: 0,
    },
    {
      name: "Freshness Guaranteed Thin-Sliced Chicken Breasts, 1.7 - 3.0 lb",
      slug: "Freshness Guaranteed Thin-Sliced Chicken Breasts, 1.7 - 3.0 lb",
      price: 7.64,
      description:
        "Freshness Guaranteed Thin-Sliced Chicken Breasts, 1.7 - 3.0 lb",
      image:
        "https://i5.walmartimages.com/asr/b2c2ed2f-a958-4ff6-901b-667c7e51d622.0dfa0cf3b53e9776991066037362e4d3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Meat & Seafood",
      rating: 5,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Beef Stew Meat Family Pack, 2.15 - 3.0 lb",
      slug: "Beef Stew Meat Family Pack, 2.15 - 3.0 lb",
      price: 17.59,
      description: "Beef Stew Meat Family Pack, 2.15 - 3.0 lb",
      image:
        "https://i5.walmartimages.com/asr/bf09ad1a-f7c5-460e-b260-e3d50c8021a3.1fc1c9255fb70d77a96dfd98d936b657.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
      stock: 10,
      isDeleted: false,
      comments: [],
      category: "Meat & Seafood",
      rating: 5,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Beef Country Style Ribs, 1.25 - 2.99 lb",
      slug: "Beef Country Style Ribs, 1.25 - 2.99 lb",
      price: 12.2,
      description: "Beef Country Style Ribs, 1.25 - 2.99 lb",
      image:
        "https://i5.walmartimages.com/asr/cfba22e1-1e5f-4220-98be-5976e839f781.7803bad7d61ee0ec5ded806ad170940a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
      stock: 10,
      isDeleted: false,
      comments: [],
      category: "Meat & Seafood",
      rating: 5,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Beef Milanesa, 0.95 - 1.9 lb",
      slug: "Beef Milanesa, 0.95 - 1.9 lb",
      price: 11.67,
      description: "Beef Milanesa, 0.95 - 1.9 lb",
      image:
        "https://i5.walmartimages.com/asr/1df470dc-4278-400d-89b4-df3cbe776565.54f05160913281eec3f220e63bebca5e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Meat & Seafood",
      rating: 5,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Foster Farms Fresh & Natural Cage Free Family Pack Chicken Thighs 64 -88 oz (4-5.5 lb) Tray",
      slug: "Foster Farms Fresh & Natural Cage Free Family Pack Chicken Thighs 64 -88 oz (4-5.5 lb) Tray",
      price: 6.02,
      description:
        "Foster Farms Fresh & Natural Cage Free Family Pack Chicken Thighs 64 -88 oz (4-5.5 lb) Tray",
      image:
        "https://i5.walmartimages.com/asr/1daac967-ba82-4bf7-ac40-ad24e87d7144.0d9b25cbd545d61d8bc10b2041b7ca74.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
      stock: 40,
      isDeleted: false,
      comments: [],
      category: "Meat & Seafood",
      rating: 5,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Pecan Smoked Chicken Wings, 2.75 lb",
      slug: "Pecan Smoked Chicken Wings, 2.75 lb",
      price: 9.97,
      description: "Pecan Smoked Chicken Wings, 2.75 lb",
      image:
        "https://i5.walmartimages.com/asr/a64821db-3229-499a-a256-6e99f26317c2_1.b54b93b4cd62905cef0f838228c36565.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
      stock: 112,
      isDeleted: false,
      comments: [],
      category: "Meat & Seafood",
      rating: 5,
      brand: "Simmons",
      numReviews: 0,
    },

    {
      name: "Chicken Pate (Argeta) 95g",
      slug: "Chicken Pate (Argeta) 95g",
      price: 8.89,
      description: "Chicken Pate (Argeta) 95g",
      image:
        "https://i5.walmartimages.com/asr/530105fd-2b56-4a92-a77a-bd8001e41288_1.498b207ec5c85bbe0843cd4111b61dd5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
      stock: 55,
      isDeleted: false,
      comments: [],
      category: "Meat & Seafood",
      rating: 5,
      brand: "Argeta",
      numReviews: 0,
    },

    {
      name: "Marketside Antibiotic-Free Thin-Sliced Chicken Breast, 1.1-1.7 lb",
      slug: "Marketside Antibiotic-Free Thin-Sliced Chicken Breast, 1.1-1.7 lb",
      price: 8.5,
      description:
        "Marketside Antibiotic-Free Thin-Sliced Chicken Breast, 1.1-1.7 lb",
      image:
        "https://i5.walmartimages.com/asr/4106f195-abf4-410e-a0bb-29510d22675e.66fc476fbdd4873e9a2525b871811bde.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
      stock: 220,
      isDeleted: false,
      comments: [],
      category: "Meat & Seafood",
      rating: 5,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Great Value Frozen Tilapia Skinless & Boneless Fillets, 2 lb",
      slug: "Great Value Frozen Tilapia Skinless & Boneless Fillets, 2 lb",
      price: 10990,
      description:
        "Great Value Frozen Tilapia Skinless & Boneless Fillets, 2 lb",
      image:
        "https://i5.walmartimages.com/asr/8073f2e8-9051-4904-96c7-5c13d88d5621.0c01a7d74fad0a3b1ab561e34ee234d1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
      stock: 120,
      isDeleted: false,
      comments: [],
      category: "Meat & Seafood",
      rating: 5,
      brand: "Great Value",
      numReviews: 0,
    },

    {
      name: "Fresh Atlantic Salmon Portions, 0.70 - 1.1 lbs",
      slug: "Fresh Atlantic Salmon Portions, 0.70 - 1.1 lbs",
      price: 9.61,
      description: "Fresh Atlantic Salmon Portions, 0.70 - 1.1 lbs",
      image:
        "https://i5.walmartimages.com/asr/8c56bad0-78ab-45d7-93ae-b4a70db878d8.f66ec3379b695c079b42caab616fc178.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
      stock: 210,
      isDeleted: false,
      comments: [],
      category: "Meat & Seafood",
      rating: 5,
      brand: "Sin marca",
      numReviews: 0,
    },

    {
      name: "Beef Tri Tip Roast, 1.52 - 2.73 lb",
      slug: "Beef Tri Tip Roast, 1.52 - 2.73 lb",
      price: 14.43,
      description: "Beef Tri Tip Roast, 1.52 - 2.73 lb",
      image:
        "https://i5.walmartimages.com/asr/a3e1cd8e-9c5c-4ac0-9b94-29c45804cf74.a5dd3ad3bf5307e5934a53236c4319c1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
      stock: 120,
      isDeleted: false,
      comments: [],
      category: "Meat & Seafood",
      rating: 5,
      brand: "Fresh Beef",
      numReviews: 0,
    },

    {
      name: "Great Value Frozen Cooked Extra Small Peeled & Deveined, Tail-off Shrimp, 12 oz (100-150 Count per lb)",
      slug: "Great Value Frozen Cooked Extra Small Peeled & Deveined, Tail-off Shrimp, 12 oz (100-150 Count per lb)",
      price: 5.62,
      description:
        "Great Value Frozen Cooked Extra Small Peeled & Deveined, Tail-off Shrimp, 12 oz (100-150 Count per lb)",
      image:
        "https://i5.walmartimages.com/asr/22e66ba0-f16e-45f8-bca1-8b8436045174.eb8f10a48ca9b938d2d5901121fabcda.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Meat & Seafood",
      rating: 5,
      brand: "La Grenouille",
      numReviews: 0,
    },

    {
      name: "Fresh Wild Caught Cooked Salad Shrimp, 16 oz",
      slug: "Fresh Wild Caught Cooked Salad Shrimp, 16 oz",
      price: 7.46,
      description: "Fresh Wild Caught Cooked Salad Shrimp, 16 oz",
      image:
        "https://i5.walmartimages.com/asr/e8fb3577-1efd-4a17-9e3c-6444a69f77c2.6b8e4d059c953fd10de2b9c949be09fe.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.shopify.com/s/files/1/0469/3193/articles/carniceria_1200x1200.jpg?v=1582130204",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Meat & Seafood",
      rating: 5,
      brand: "Fresh",
      numReviews: 0,
    },

    {
      name: "Pepsi Cola Soda Pop, 12 oz Cans, 24 Pack",
      slug: "Pepsi Cola Soda Pop, 12 oz Cans, 24 Pack",
      price: 12.28,
      description: "Pepsi Cola Soda Pop, 12 oz Cans, 24 Pack",
      image:
        "https://i5.walmartimages.com/asr/d95d7098-6f69-4c53-8ca6-1884f9d4f931.6948722d416c7de1f5ee17dc8c8a2a6b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory: "https://tinypic.host/image/2mqBv",
      stock: 420,
      isDeleted: false,
      comments: [],
      category: "Beverages",
      rating: 2,
      brand: "Pepsi",
      numReviews: 0,
    },

    {
      name: "Coca-Cola Soda Pop, 12 fl oz, 24 Pack Cans",
      slug: "Coca-Cola Soda Pop, 12 fl oz, 24 Pack Cans",
      price: 13.18,
      description: "Coca-Cola Soda Pop, 12 fl oz, 24 Pack Cans",
      image:
        "https://i5.walmartimages.com/asr/a551d4e6-b4d5-4bd3-aa8b-852e9fbedbe9.b0141eabb6f296a0fa9591c595da9207.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
      "https://tinypic.host/image/2mqBv",
      stock: 320,
      isDeleted: false,
      comments: [],
      category: "Beverages",
      rating: 4.5,
      brand: "Coca-cola",
      numReviews: 0,
    },

    {
      name: "Dr Pepper Soda, 12 fl oz cans, 12 pack",
      slug: "Dr Pepper Soda, 12 fl oz cans, 12 pack",
      price: 6.18,
      description: "Dr Pepper Soda, 12 fl oz cans, 12 pack",
      image:
        "https://i5.walmartimages.com/asr/a22848d7-950e-4420-98ed-263ec24d7414.df7b17f74f0ba8a87e8b7fad8b48a875.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
      "https://tinypic.host/image/2mqBv",
      stock: 220,
      isDeleted: false,
      comments: [],
      category: "Beverages",
      rating: 4.5,
      brand: "Dr. Pepper",
      numReviews: 0,
    },

    {
      name: "Mountain Dew Citrus Soda Pop, 16.9 oz, 6 Pack Bottles",
      slug: "Mountain Dew Citrus Soda Pop, 16.9 oz, 6 Pack Bottles",
      price: 3.78,
      description: "Mountain Dew Citrus Soda Pop, 16.9 oz, 6 Pack Bottles",
      image:
        "https://i5.walmartimages.com/asr/c0de7c16-4fa6-470e-a718-8ae5106e3f48.f9062a2625d993466c892f28accc347b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
      "https://tinypic.host/image/2mqBv",
      stock: 120,
      isDeleted: false,
      comments: [],
      category: "Beverages",
      rating: 4.5,
      brand: "Mountain Dew",
      numReviews: 0,
    },

    {
      name: "7up Lima Limón 2.25l",
      slug: "7up Lima Limón 2.25l",
      price: 516,
      description: "7up Lima Limón 2.25l",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/770379-800-auto?v=638126985947370000&width=800&height=auto&aspect=true",
      imageCategory:
      "https://tinypic.host/image/2mqBv",
      stock: 520,
      isDeleted: false,
      comments: [],
      category: "Beverages",
      rating: 4.5,
      brand: "7-UP",
      numReviews: 0,
    },

    {
      name: "Health-Ade Probiotic Kombucha Tea, Pink Lady Apple, 16 fl oz",
      slug: "Health-Ade Probiotic Kombucha Tea, Pink Lady Apple, 16 fl oz",
      price: 3.28,
      description:
        "Health-Ade Probiotic Kombucha Tea, Pink Lady Apple, 16 fl oz",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/770869-800-auto?v=638128606141830000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://tinypic.host/image/2mqBv",
      stock: 620,
      isDeleted: false,
      comments: [],
      category: "Beverages",
      rating: 4.5,
      brand: "sprite",
      numReviews: 0,
    },

    {
      name: "Naked Juice, Strawberry Banana, 15.2 fl",
      slug: "Naked Juice, Strawberry Banana, 15.2 fl",
      price: 3.52,
      description: "Naked Juice, Strawberry Banana, 15.2 fl",
      image:
        "https://i5.walmartimages.com/asr/439b18f2-73ee-47a3-b10a-69af727648a2.e307aec509603f579fc909f36dc06246.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
      "https://tinypic.host/image/2mqBv",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Beverages",
      rating: 4.5,
      brand: "Naked",
      numReviews: 0,
    },

    {
      name: "Minute Maid Fruit Punch Real Fruit Juice Drink, 59 fl oz Carton",
      slug: "Minute Maid Fruit Punch Real Fruit Juice Drink, 59 fl oz Carton",
      price: 1.68,
      description:
        "Minute Maid Fruit Punch Real Fruit Juice Drink, 59 fl oz Carton",
      image:
        "https://i5.walmartimages.com/asr/ac505fd7-19b4-48ec-b141-991302e50d0d.ba4809db45d1a2ec670f04761f729c31.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
      "https://tinypic.host/image/2mqBv",
      stock: 320,
      isDeleted: false,
      comments: [],
      category: "Beverages",
      rating: 4.5,
      brand: "Minute Maid",
      numReviews: 0,
    },

    {
      name: "Pure Life Purified Water, 16.9 Fl Oz / 500 mL, Plastic Bottled Water (35 Pack)",
      slug: "Pure Life Purified Water, 16.9 Fl Oz / 500 mL, Plastic Bottled Water (35 Pack)",
      price: 5.98,
      description:
        "Pure Life Purified Water, 16.9 Fl Oz / 500 mL, Plastic Bottled Water (35 Pack)",
      image:
        "https://i5.walmartimages.com/asr/da081097-79e5-4c85-bacf-0d5ab685e8ad.b2356a6b64950986278058142cf098da.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
      "https://tinypic.host/image/2mqBv",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Beverages",
      rating: 4.5,
      brand: "Pure life",
      numReviews: 0,
    },

    {
      name: "Yoo-hoo Chocolate Drink, 6.5 fl oz boxes, 32 pack",
      slug: "Yoo-hoo Chocolate Drink, 6.5 fl oz boxes, 32 pack",
      price: 11.48,
      description: "Yoo-hoo Chocolate Drink, 6.5 fl oz boxes, 32 pack",
      image:
        "https://i5.walmartimages.com/asr/3c855216-9335-4231-991a-30269b4e7f85.0c0de8b5d888f09ce53206a3015571eb.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
      "https://tinypic.host/image/2mqBv",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Beverages",
      rating: 4.5,
      brand: "Yoo-Hoo",
      numReviews: 0,
    },

    {
      name: "Jack Daniel's Old No. 7 Tennessee Whiskey, 1.75 L Bottle, 80 Proof",
      slug: "Jack Daniel's Old No. 7 Tennessee Whiskey, 1.75 L Bottle, 80 Proof",
      price: 31.98,
      description:
        "Jack Daniel's Old No. 7 Tennessee Whiskey, 1.75 L Bottle, 80 Proof",
      image:
        "https://i5.walmartimages.com/asr/9f0f07f8-6e04-4ae0-8263-45431d53d70f.db003c3ecf170be2b638cc259ffe4a4c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
      "https://tinypic.host/image/2mqBv",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Beverages",
      rating: 4.5,
      brand: "Jack Daniels",
      numReviews: 0,
    },

    {
      name: "Captain Morgan Original Spiced Rum, 1.75 L, 35% ABV",
      slug: "Captain Morgan Original Spiced Rum, 1.75 L, 35% ABV",
      price: 18.96,
      description: "Captain Morgan Original Spiced Rum, 1.75 L, 35% ABV",
      image:
        "https://i5.walmartimages.com/asr/1f6f4549-6a91-4577-86bf-18bbbd8671d9.71611842da4b01eaaf325475f94f1edc.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
      "https://tinypic.host/image/2mqBv",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Beverages",
      rating: 4.5,
      brand: "Captain Morgan",
      numReviews: 0,
    },

    {
      name: "Black Box Cabernet Sauvignon, Red Wine, 3 L Box",
      slug: "Black Box Cabernet Sauvignon, Red Wine, 3 L Box",
      price: 17.98,
      description: "Black Box Cabernet Sauvignon, Red Wine, 3 L Box",
      image:
        "https://i5.walmartimages.com/asr/d0e70ef6-7598-4724-a5a0-2f6d494aacdd.eaec65eb0ce6c7331f2c049da3e54241.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
      "https://tinypic.host/image/2mqBv",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Beverages",
      rating: 4.5,
      brand: "Black Box",
      numReviews: 0,
    },

    {
      name: "Blue Moon Belgian White Wheat Ale Beer, 12 Pack, 12 fl oz Bottles, 5.4% ABV",
      slug: "Blue Moon Belgian White Wheat Ale Beer, 12 Pack, 12 fl oz Bottles, 5.4% ABV",
      price: 16786,
      description:
        "Blue Moon Belgian White Wheat Ale Beer, 12 Pack, 12 fl oz Bottles, 5.4% ABV",
      image:
        "https://i5.walmartimages.com/asr/e72cc87e-9035-45be-b723-16b705f6e4d6.674ce2716cb3494d88ebd3bdfd04d497.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
      "https://tinypic.host/image/2mqBv",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Beverages",
      rating: 4.5,
      brand: "Blue Moon",
      numReviews: 0,
    },

    {
      name: "Busch Light Beer, 30 Pack Beer, 12 FL OZ",
      slug: "Busch Light Beer, 30 Pack Beer, 12 FL OZ",
      price: 16.27,
      description: "Busch Light Beer, 30 Pack Beer, 12 FL OZ",
      image:
        "https://i5.walmartimages.com/asr/4c0a2b47-1fc7-4fb8-93d1-d3c24a3e0e30.f7db7145b0ebd37576c5da27c729d241.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
      "https://tinypic.host/image/2mqBv",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Beverages",
      rating: 4.5,
      brand: "Busch Light",
      numReviews: 0,
    },

    {
      name: "Head and Shoulders Dandruff Shampoo, Classic Clean, 28 oz",
      slug: "Head and Shoulders Dandruff Shampoo, Classic Clean, 28 oz",
      price: 11.47,
      description: "Head and Shoulders Dandruff Shampoo, Classic Clean, 28 oz",
      image:
        "https://i5.walmartimages.com/asr/3fef3cf8-ac67-4d0b-8f76-f9d08f95a818.860872426ecb23d51eda374c5f8b4b9d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Personal Care",
      rating: 3,
      brand: "Head & Shoulders",
      numReviews: 0,
    },
    {
      name: "Raw Sugar Pure Scalp Therapy Moisturizing Hair Mask, Activated Charcoal, 6.7 fl oz",
      slug: "Raw Sugar Pure Scalp Therapy Moisturizing Hair Mask, Activated Charcoal, 6.7 fl oz",
      price: 7.97,
      description:
        "Raw Sugar Pure Scalp Therapy Moisturizing Hair Mask, Activated Charcoal, 6.7 fl oz",
      image:
        "https://i5.walmartimages.com/asr/912447b9-c345-4f65-b2c7-c9d89d1353f9.a5801904824e9654524ecd56155aba63.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
      stock: 120,
      isDeleted: false,
      comments: [],
      category: "Personal Care",
      rating: 2,
      brand: "Raw Sugar",
      numReviews: 0,
    },

    {
      name: "Soapbox, Moisturizing Liquid Hand Soap, Skin Soothing Aloe Water & Sage, 8oz",
      slug: "Soapbox, Moisturizing Liquid Hand Soap, Skin Soothing Aloe Water & Sage, 8oz",
      price: 3.64,
      description:
        "Soapbox, Moisturizing Liquid Hand Soap, Skin Soothing Aloe Water & Sage, 8oz",
      image:
        "https://i5.walmartimages.com/asr/1d46f5a5-eccd-4a5e-b493-8364c4bd8a3c.2738d0d399e5ab4039e5a3bbc210911e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
      stock: 950,
      isDeleted: false,
      comments: [],
      category: "Personal Care",
      rating: 2,
      brand: "Soapbox",
      numReviews: 0,
    },

    {
      name: "Softsoap Liquid Hand Soap Pump, Fresh Breeze, 7.5 oz",
      slug: "Softsoap Liquid Hand Soap Pump, Fresh Breeze, 7.5 oz",
      price: 1.24,
      description: "Softsoap Liquid Hand Soap Pump, Fresh Breeze, 7.5 oz",
      image:
        "https://i5.walmartimages.com/asr/3e087046-361b-490b-ac9b-82efd5151038.0975793ef096e635f7d432090dc65456.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
      stock: 630,
      isDeleted: false,
      comments: [],
      category: "Personal Care",
      rating: 2,
      brand: "Softsoap",
      numReviews: 0,
    },

    {
      name: "Secret Solid Antiperspirant Deodorant, Powder Fresh 2.7 oz, Twin Pack",
      slug: "Secret Solid Antiperspirant Deodorant, Powder Fresh 2.7 oz, Twin Pack",
      price: 6.97,
      description:
        "Secret Solid Antiperspirant Deodorant, Powder Fresh 2.7 oz, Twin Pack",
      image:
        "https://i5.walmartimages.com/asr/566ca1bc-b091-499b-ba27-ca975d56ef8a.2486af0d5d92fa04a351fbd4ae883851.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
      stock: 720,
      isDeleted: false,
      comments: [],
      category: "Personal Care",
      rating: 2,
      brand: "Secret",
      numReviews: 0,
    },

    {
      name: "AXE Dual 48H Anti Sweat Dark Temptation Action Antiperspirant 2.7 oz",
      slug: "AXE Dual 48H Anti Sweat Dark Temptation Action Antiperspirant 2.7 oz",
      price: 5.22,
      description:
        "AXE Dual 48H Anti Sweat Dark Temptation Action Antiperspirant 2.7 oz",
      image:
        "https://i5.walmartimages.com/asr/7d2d59a3-25be-4f5e-b677-9c2d2f3eca4e.6ac038dc28dbcae468991da9376b9e37.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
      stock: 950,
      isDeleted: false,
      comments: [],
      category: "Personal Care",
      rating: 2,
      brand: "Axe",
      numReviews: 0,
    },

    {
      name: "Gillette Labs with Exfoliating Bar Men's Razor, Includes 2 Razor Blade Refills and Premium Magnetic Stand",
      slug: "Gillette Labs with Exfoliating Bar Men's Razor, Includes 2 Razor Blade Refills and Premium Magnetic Stand",
      price: 22.97,
      description:
        "Gillette Labs with Exfoliating Bar Men's Razor, Includes 2 Razor Blade Refills and Premium Magnetic Stand",
      image:
        "https://i5.walmartimages.com/asr/c31225e6-ede3-464e-9c0f-ddf53e10cebc.ef5879729259fbfff1d2a66609b3b889.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Personal Care",
      rating: 2,
      brand: "Gillette",
      numReviews: 0,
    },

    {
      name: "NIVEA MEN Sensitive Shave Gel, 2 pack",
      slug: "NIVEA MEN Sensitive Shave Gel, 2 pack",
      price: 6.78,
      description: "NIVEA MEN Sensitive Shave Gel, 2 pack",
      image:
        "https://i5.walmartimages.com/asr/486eee1f-f317-458c-b933-8681f21dae15.57a5c3b028a642ea2924355ab5a02e31.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Personal Care",
      rating: 2,
      brand: "Nivea",
      numReviews: 0,
    },

    {
      name: "Wild Willies Beard Growth Supplement, 60 Capsules",
      slug: "Wild Willies Beard Growth Supplement, 60 Capsules",
      price: 24.97,
      description: "Wild Willies Beard Growth Supplement, 60 Capsules",
      image:
        "https://i5.walmartimages.com/asr/f1471db3-8e0b-4090-88d2-16a20cad92c0_2.21e316b5447e6225174173c95b5df100.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
      stock: 280,
      isDeleted: false,
      comments: [],
      category: "Personal Care",
      rating: 2,
      brand: "Wild Willies",
      numReviews: 0,
    },

    {
      name: "Depend Underpads/Disposable Incontinence Bed Pads for Adults, Kids, and Pets, 12Ct",
      slug: "Depend Underpads/Disposable Incontinence Bed Pads for Adults, Kids, and Pets, 12Ct",
      price: 14.84,
      description:
        "Depend Underpads/Disposable Incontinence Bed Pads for Adults, Kids, and Pets, 12Ct",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/767772-800-auto?v=638113810369170000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
      stock: 120,
      isDeleted: false,
      comments: [],
      category: "Personal Care",
      rating: 2,
      brand: "Depend",
      numReviews: 0,
    },

    {
      name: "Assurance Women's Incontinence & Postpartum Underwear, XL, Maximum Absorbency (54 Count)",
      slug: "Assurance Women's Incontinence & Postpartum Underwear, XL, Maximum Absorbency (54 Count)",
      price: 23.94,
      description:
        "Assurance Women's Incontinence & Postpartum Underwear, XL, Maximum Absorbency (54 Count)",
      image:
        "https://i5.walmartimages.com/asr/9663203e-cd5c-44e6-997b-e56278f3c24b.b64717605c465122ffbc75775b0fcbf6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Personal Care",
      rating: 2,
      brand: "Assurance",
      numReviews: 0,
    },

    {
      name: "Gillette Fusion5 Men's Razor Blade Refills, 4 Count",
      slug: "Gillette Fusion5 Men's Razor Blade Refills, 4 Count",
      price: 17.97,
      description: "Gillette Fusion5 Men's Razor Blade Refills, 4 Count",
      image:
        "https://i5.walmartimages.com/asr/0e49f60c-6e12-4bb4-850d-676bf1151cfd.e8f93e2d6a3e1678077825cc8bb159f8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Personal Care",
      rating: 2,
      brand: "Gillette",
      numReviews: 0,
    },

    {
      name: "Gillette Satin Care Ultra Sensitive Women's Shave Gel, 7 oz Twin Pack",
      slug: "Gillette Satin Care Ultra Sensitive Women's Shave Gel, 7 oz Twin Pack",
      price: 4.78,
      description:
        "Gillette Satin Care Ultra Sensitive Women's Shave Gel, 7 oz Twin Pack",
      image:
        "https://i5.walmartimages.com/asr/9775402c-95f1-4f2e-97c3-abb6e7304a03.d4b0508317b1e84b76efde698f8e0170.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Personal Care",
      rating: 2,
      brand: "Gillette",
      numReviews: 0,
    },

    {
      name: "Skintimate Skin Therapy Dry Skin Women's Shave Gel Twin Pack, 14 Oz",
      slug: "Skintimate Skin Therapy Dry Skin Women's Shave Gel Twin Pack, 14 Oz",
      price: 6.47,
      description:
        "Skintimate Skin Therapy Dry Skin Women's Shave Gel Twin Pack, 14 Oz.",
      image:
        "https://i5.walmartimages.com/asr/c1bc3363-6e62-4713-9c13-b476beb6e286.a87d723fbdeb3732f13445a66be02c14.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Personal Care",
      rating: 2,
      brand: "Skintimate",
      numReviews: 0,
    },

    {
      name: "VEET Silk and Fresh Technology  Legs & Body Gel Cream Hair Remover, Sensitive Formula, 13.5 FL OZ Pump Bottle",
      slug: "VEET Silk and Fresh Technology  Legs & Body Gel Cream Hair Remover, Sensitive Formula, 13.5 FL OZ Pump Bottle",
      price: 2017,
      description:
        "VEET Silk and Fresh Technology  Legs & Body Gel Cream Hair Remover, Sensitive Formula, 13.5 FL OZ Pump Bottle",
      image:
        "https://i5.walmartimages.com/asr/17fbbea5-775e-45bb-8bfc-9801920096b1.5602b6a26bac0b2036ada1b7e3d7a8a5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www2.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1586964939918-6-02-Cuidado%20personal.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "Personal Care",
      rating: 2,
      brand: "Veet",
      numReviews: 0,
    },

    {
      name: "Marketside Sliced Cinnamon Brioche Bread, 17.6 oz",
      slug: "Marketside Sliced Cinnamon Brioche Bread, 17.6 oz",
      price: 4.97,
      description: "Marketside Sliced Cinnamon Brioche Bread, 17.6 oz",
      image:
        "https://i5.walmartimages.com/asr/82171530-b5cc-454a-a782-61e3d53ef4e7.b173c8fad9460a8fd9c412dd62b122f3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "bakery",
      rating: 5,
      brand: "Marketside",
      numReviews: 0,
    },

    {
      name: " Blueberry Muffins, 14 oz, 4 Count",
      slug: " Blueberry Muffins, 14 oz, 4 Count",
      price: 4.47,
      description: "Freshness Guaranteed Blueberry Muffins, 14 oz, 4 Count",
      image:
        "https://i5.walmartimages.com/asr/118c8c0d-17d9-49c5-afb5-5d08324a112b.22c5ecb4ef7669f793d63bc4fa8f7af2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "bakery",
      rating: 4,
      brand: "Freshness Guaranteed",
      numReviews: 0,
    },

    {
      name: " Variety Cheesecake, 16 oz, 8 Count",
      slug: "Variety Cheesecake, 16 oz, 8 Count",
      price: 7.98,
      description: "Freshness Guaranteed Variety Cheesecake, 16 oz, 8 Count",
      image:
        "https://i5.walmartimages.com/asr/b8ebc5f6-336a-4727-8d43-8e1f6dc9f14f.a9a9399bcc1c49e514fd2b3069c9383b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
      stock: 220,
      isDeleted: false,
      comments: [],
      category: "bakery",
      rating: 4,
      brand: "Freshness Guaranteed",
      numReviews: 0,
    },

    {
      name: "Chocolate Chip Cookies, 14 oz, 10 Count",
      slug: "Chocolate Chip Cookies, 14 oz, 10 Count",
      price: 2.98,
      description:
        "Freshness Guaranteed Chocolate Chip Cookies, 14 oz, 10 Count",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/501700-800-auto?v=636804535291900000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
      stock: 120,
      isDeleted: false,
      comments: [],
      category: "bakery",
      rating: 4,
      brand: "Freshness Guaranteed",
      numReviews: 0,
    },

    {
      name: "Mini Croissants, 10 oz, 12 Count",
      slug: "Mini Croissants, 10 oz, 12 Count",
      price: 3.52,
      description: "Freshness Guaranteed Mini Croissants, 10 oz, 12 Count",
      image:
        "https://i5.walmartimages.com/asr/3345ab57-f7eb-4159-b6d6-ad9ba9b89134.1655f5f602d05d12810949b982e2fb66.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
      stock: 250,
      isDeleted: false,
      comments: [],
      category: "bakery",
      rating: 4,
      brand: "Freshness Guaranteed",
      numReviews: 0,
    },

    {
      name: "Cheese Danish Pastries, 14 oz",
      slug: "Cheese Danish Pastries, 14 oz",
      price: 4.24,
      description: "Freshness Guaranteed Cheese Danish Pastries, 14 oz",
      image:
        "https://i5.walmartimages.com/asr/efcf9b8b-76b7-444b-b970-67ae7d115dbe.0a1a093b58b8ac12891aa53cc3c7bf7c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
      stock: 520,
      isDeleted: false,
      comments: [],
      category: "bakery",
      rating: 4,
      brand: "Freshness Guaranteed",
      numReviews: 0,
    },

    {
      name: "Apple Turnover Pastries, 10 oz, 4 Count",
      slug: "Apple Turnover Pastries, 10 oz, 4 Count",
      price: 5.24,
      description:
        "Freshness Guaranteed Apple Turnover Pastries, 10 oz, 4 Count",
      image:
        "https://i5.walmartimages.com/asr/f36ab8f9-f5a7-436c-a598-c19ece39e6a0.9a3ec5ce8bcb1d46ffecf8bac49cd318.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
      stock: 620,
      isDeleted: false,
      comments: [],
      category: "bakery",
      rating: 4,
      brand: "Freshness Guaranteed",
      numReviews: 0,
    },

    {
      name: "Marketside Pecan Sticky Bun, 18 oz, 4 Rolls",
      slug: "Marketside Pecan Sticky Bun, 18 oz, 4 Rolls",
      price: 5.24,
      description: "Marketside Pecan Sticky Bun, 18 oz, 4 Rolls",
      image:
        "https://i5.walmartimages.com/asr/3399cce8-0a06-4fb9-8d91-5c4c6d87680f.211b3cc97163670748aa7cbdb5b2cf95.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "bakery",
      rating: 4,
      brand: "Marketside",
      numReviews: 0,
    },

    {
      name: "Mini Iced Cinnamon Rolls, Kosher, 13oz, 16 Count",
      slug: "Mini Iced Cinnamon Rolls, Kosher, 13oz, 16 Count",
      price: 4.98,
      description:
        "Freshness Guaranteed Mini Iced Cinnamon Rolls, Kosher, 13oz, 16 Count",
      image:
        "https://i5.walmartimages.com/asr/f0362afd-09cb-4fbe-99fd-f9f44a392e53_4.bb28e7b46fa137f6c06f7075acef0711.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
      stock: 200,
      isDeleted: false,
      comments: [],
      category: "bakery",
      rating: 4,
      brand: "Freshness Guaranteed",
      numReviews: 0,
    },

    {
      name: "Marketside Bake at Home Twin Demi Baguette, 12 oz, 2 Count",
      slug: "Marketside Bake at Home Twin Demi Baguette, 12 oz, 2 Count",
      price: 1.98,
      description: "Marketside Bake at Home Twin Demi Baguette, 12 oz, 2 Count",
      image:
        "https://i5.walmartimages.com/asr/7ae3cc1f-7e83-43b3-b6c0-f2bec863b4bd_1.0619862925c9e551d16a7077b8dfce27.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "bakery",
      rating: 4,
      brand: "Marketside",
      numReviews: 0,
    },

    {
      name: "Everything Italian Bread Loaf, 14 oz",
      slug: "Everything Italian Bread Loaf, 14 oz",
      price: 1039,
      description: " Freshness Guaranteed Everything Italian Bread Loaf, 14 oz",
      image:
        "https://i5.walmartimages.com/asr/17f434ee-646e-4e47-adbb-6436b711a4d5.a61b7eafdb82f2e4dc46ba075a6866cf.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "bakery",
      rating: 4,
      brand: "Freshness Guaranteed",
      numReviews: 0,
    },

    {
      name: "Thomas' Cinnamon Raisin Pre-Sliced Bagels, 6-Count",
      slug: "Thomas' Cinnamon Raisin Pre-Sliced Bagels, 6-Count",
      price: 4.38,
      description: "Thomas' Cinnamon Raisin Pre-Sliced Bagels, 6-Count",
      image:
        "https://i5.walmartimages.com/asr/569917d5-330e-46db-acf5-e6bb02e47fa7.1cfec91351533b146b24209dc3bb4543.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
      stock: 230,
      isDeleted: false,
      comments: [],
      category: "bakery",
      rating: 4,
      brand: "Thomas'",
      numReviews: 0,
    },

    {
      name: "Assorted Ring Donuts, 12 Count",
      slug: "Assorted Ring Donuts, 12 Count",
      price: 5.97,
      description: "Freshness Guaranteed Assorted Ring Donuts, 12 Count",
      image:
        "https://i5.walmartimages.com/asr/d3b3d2e0-e91d-4715-aba4-19f6a642e8b1.c21ffbdccad73d76e54fe20826d8bf23.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
      stock: 120,
      isDeleted: false,
      comments: [],
      category: "bakery",
      rating: 4,
      brand: "Freshness Guaranteed",
      numReviews: 0,
    },

    {
      name: "Frosted Sugar Cookies, 13.5 oz, 10 Count",
      slug: "Frosted Sugar Cookies, 13.5 oz, 10 Count",
      price: 1139,
      description:
        "Freshness Guaranteed Frosted Sugar Cookies, 13.5 oz, 10 Count",
      image:
        "https://i5.walmartimages.com/asr/4e22c807-c798-4821-a82e-329bfaed617b_1.1fed6fe6c4bdede92b66d29f58083b9d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "bakery",
      rating: 4,
      brand: "Freshness Guaranteed",
      numReviews: 0,
    },

    {
      name: "Marketside Bite Sized Chocolate Chip Cookies, 12 oz, 48 Count",
      slug: "Marketside Bite Sized Chocolate Chip Cookies, 12 oz, 48 Count",
      price: 5.87,
      description:
        "Marketside Bite Sized Chocolate Chip Cookies, 12 oz, 48 Count",
      image:
        "https://i5.walmartimages.com/asr/89712822-d27f-49f9-8af3-3a9d4e3177a3.8bb31651c1ec11e941a3ac29e45f67d1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://agendacolombia.com/wp-content/uploads/2022/01/panaderia-barranquilla.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "bakery",
      rating: 4,
      brand: "Marketside",
      numReviews: 0,
    },

    {
      name: "SAMSUNG 50-inch QLED Q60B Series 4K UHD ",
      slug: "SAMSUNG 50-inch QLED Q60B Series 4K UHD ",
      price: 618.99,
      description:
        "SAMSUNG 50-inch QLED Q60B Series 4K UHD Dual LED Quantum HDR Smart TV with Additional 2 Year Coverage by Epic Protect (2022)'",
      image:
        "https://i5.walmartimages.com/asr/0873a225-fe66-4486-a52a-5b3345fb067d.66c6dd71b7892f8dbb9d08f4c2d76f2a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Electronic",
      rating: 4,
      brand: "Samsung",
      numReviews: 0,
    },

    {
      name: "Straight Talk TCL 30 Z, 32GB, Black - Prepaid Smartphone",
      slug: "Straight Talk TCL 30 Z, 32GB, Black - Prepaid Smartphone",
      price: 29.88,
      description: "Straight Talk TCL 30 Z, 32GB, Black - Prepaid Smartphone",
      image:
        "https://i5.walmartimages.com/asr/532b983f-f6a5-46c2-a84a-6b3c59e36957.657296f91e67e12c33128a7254760f09.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
      stock: 12,
      isDeleted: false,
      comments: [],
      category: "Electronic",
      rating: 4,
      brand: "TCL",
      numReviews: 0,
    },

    {
      name: "2021 Apple 10.2-inch iPad Wi-Fi 64GB - Space Gray (9th Generation)",
      slug: "2021 Apple 10.2-inch iPad Wi-Fi 64GB - Space Gray (9th Generation)",
      price: 279,
      description:
        "2021 Apple 10.2-inch iPad Wi-Fi 64GB - Space Gray (9th Generation)",
      image:
        "https://i5.walmartimages.com/asr/7f011036-b9fe-41fa-a034-630ee09c40c8.223ef5b846523de9f00acc7653753201.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
      stock: 12,
      isDeleted: false,
      comments: [],
      category: "Electronic",
      rating: 4,
      brand: "Apple",
      numReviews: 0,
    },

    {
      name: "Onn. 23 mile Walkie Talkie 3pk with Two Way Radios, LED Light",
      slug: "Onn. 23 mile Walkie Talkie 3pk with Two Way Radios, LED Light",
      price: 48.28,
      description:
        "Onn. 23 mile Walkie Talkie 3pk with Two Way Radios, LED Light",
      image:
        "https://i5.walmartimages.com/asr/df0aaae8-7d57-4be6-8267-f52d1f8afd18.f742443acf14ea2d56e5fcc17cf00bd3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
      stock: 12,
      isDeleted: false,
      comments: [],
      category: "Electronic",
      rating: 4,
      brand: "Onn",
      numReviews: 0,
    },

    {
      name: "Canon PIXMA TS3522 All-In-One Wireless InkJet Printer with Print, Copy and Scan Features",
      slug: "Canon PIXMA TS3522 All-In-One Wireless InkJet Printer with Print, Copy and Scan Features",
      price: 49,
      description:
        "Canon PIXMA TS3522 All-In-One Wireless InkJet Printer with Print, Copy and Scan Features",
      image:
        "https://i5.walmartimages.com/asr/308ceea2-cd6d-4f31-912c-3ca90d9cc0b9.5ebba294652d0fcad53f36d37951ef84.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
      stock: 12,
      isDeleted: false,
      comments: [],
      category: "Electronic",
      rating: 4,
      brand: "Canon",
      numReviews: 0,
    },

    {
      name: "Skullcandy Kilo Small Portable Wireless Speaker Xt, Black",
      slug: "Skullcandy Kilo Small Portable Wireless Speaker Xt, Black",
      price: 39.88,
      description: "Skullcandy Kilo Small Portable Wireless Speaker Xt, Black",
      image:
        "https://i5.walmartimages.com/asr/151d072a-63b7-415d-8085-2aacbda3feb6.f0be4f34e8100b4d94da00f95474a611.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
      stock: 12,
      isDeleted: false,
      comments: [],
      category: "Electronic",
      rating: 4,
      brand: "Skullcandy",
      numReviews: 0,
    },

    {
      name: "Beats Solo3 Wireless On-Ear Headphones with Apple W1 Headphone Chip, Black, MX432LL/A",
      slug: "Beats Solo3 Wireless On-Ear Headphones with Apple W1 Headphone Chip, Black, MX432LL/A",
      price: 129,
      description:
        "Beats Solo3 Wireless On-Ear Headphones with Apple W1 Headphone Chip, Black, MX432LL/A",
      image:
        "https://i5.walmartimages.com/asr/f76ac660-9f5a-495c-9af3-4bec619de77a_1.cf2fbfe5d7071433a3c80a2360a3d7f4.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
      stock: 12,
      isDeleted: false,
      comments: [],
      category: "Electronic",
      rating: 4,
      brand: "Beats by Dr. Dre",
      numReviews: 0,
    },

    {
      name: "VANKYO Leisure 470 HD Mini Wifi Projector with Roku Express Streaming Player",
      slug: "VANKYO Leisure 470 HD Mini Wifi Projector with Roku Express Streaming Player",
      price: 139,
      description:
        "VANKYO Leisure 470 HD Mini Wifi Projector with Roku Express Streaming Player, 50000 Hrs LED Life, 240'' Display Screen for Home Theater & Outdoor Movies",
      image:
        "https://i5.walmartimages.com/asr/cc83ff17-17e5-4f6a-b7c3-2c77a87241ab.6e763f6faef2291e5f0d7a0004562b8c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
      stock: 122,
      isDeleted: false,
      comments: [],
      category: "Electronic",
      rating: 4,
      brand: "vankyo",
      numReviews: 0,
    },

    {
      name: "Samsung Chromebook 4, 11.6 HD, Intel Celeron N4020, 4GB RAM, 32GB Storage, ChromeOS, Platinum Titan, XE310XBA-K01US",
      slug: "Samsung Chromebook 4, 11.6 HD, Intel Celeron N4020, 4GB RAM, 32GB Storage, ChromeOS, Platinum Titan, XE310XBA-K01US",
      price: 149,
      description:
        "Samsung Chromebook 4, 11.6 HD, Intel Celeron N4020, 4GB RAM, 32GB Storage, ChromeOS, Platinum Titan, XE310XBA-K01US",
      image:
        "https://i5.walmartimages.com/asr/25f80107-8854-4246-a608-dfc56748a61c.ff6ab0490adb4cc567c90db55b9fd22a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
      stock: 12,
      isDeleted: false,
      comments: [],
      category: "Electronic",
      rating: 4,
      brand: "SAMSUNG",
      numReviews: 0,
    },

    {
      name: "Fujifilm QuickSnap One Time Use 35mm Camera with Flash",
      slug: "Fujifilm QuickSnap One Time Use 35mm Camera with Flash",
      price: 18.98,
      description: "Fujifilm QuickSnap One Time Use 35mm Camera with Flash",
      image:
        "https://i5.walmartimages.com/asr/59d775b1-89c0-4ffe-8bf0-dcddd296d660.095878f2c4f675a517ef16a56dbd8b18.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
      stock: 12,
      isDeleted: false,
      comments: [],
      category: "Electronic",
      rating: 4,
      brand: "Fujifilm",
      numReviews: 0,
    },

    {
      name: "Beats Flex - All-Day Wireless Earphones - Beats Black",
      slug: "Beats Flex - All-Day Wireless Earphones - Beats Black",
      price: 49.0,
      description: "Beats Flex  All-Day Wireless Earphones  Beats Black",
      image:
        "https://i5.walmartimages.com/asr/eb2eac02-a223-4c6d-ab91-d8c104853e8a.160a20ad2af7cbb1281aba785eb08f52.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
      stock: 12,
      isDeleted: false,
      comments: [],
      category: "Electronic",
      rating: 4,
      brand: "EBeats by Dr. Dre",
      numReviews: 0,
    },

    {
      name: "Galanz 4.6. Cu ft Two Door Mini Refrigerator with Freezer, Stainless Steel",
      slug: "Galanz 4.6. Cu ft Two Door Mini Refrigerator with Freezer, Stainless Steel",
      price: 224.0,
      description:
        "Galanz 4.6. Cu ft Two Door Mini Refrigerator with Freezer, Stainless Steel",
      image:
        "https://i5.walmartimages.com/asr/66eb4769-f8a8-47b6-a29c-2be38d4ae0ad.6c130beaaf7d5adc0bda61b3ae6be2dd.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
      stock: 12,
      isDeleted: false,
      comments: [],
      category: "Electronic",
      rating: 4,
      brand: "Galanz",
      numReviews: 0,
    },

    {
      name: "GE GTW465ASNWW 27 Inch Top Load Washer with 4.5 cu. ft. Capacity, 14 Wash Cycles, 750 RPM, Speed Wash in White",
      slug: "GE GTW465ASNWW 27 Inch Top Load Washer with 4.5 cu. ft. Capacity, 14 Wash Cycles, 750 RPM, Speed Wash in White",
      price: 876.82,
      description:
        "GE GTW465ASNWW 27 Inch Top Load Washer with 4.5 cu. ft. Capacity, 14 Wash Cycles, 750 RPM, Speed Wash in White",
      image:
        "https://i5.walmartimages.com/asr/225ef066-598a-43c9-91ff-e05a255a3f35.d9e756feafba1e5f910c578beaf0ed77.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
      stock: 12,
      isDeleted: false,
      comments: [],
      category: "Electronic",
      rating: 4,
      brand: "General Electric",
      numReviews: 0,
    },

    {
      name: "ASUS ROG R7 3060 Laptop; ASUS ROG Strix G15 15.6",
      slug: "ASUS ROG R7 3060 Laptop; ASUS ROG Strix G15 15.6",
      price: 1299.0,
      description:
        "ASUS ROG R7 3060 Laptop; ASUS ROG Strix G15 15.6 WQHD, AMD Ryzen 7 6800H, NVIDIA GeForce RTX 3060 Graphics, 16GB RAM, 1TB SSD, Eclipse Gray, Windows 11 Home, G513RM-WS74",
      image:
        "https://i5.walmartimages.com/asr/4120a977-98be-44cd-9bfc-f8fb5b98aeae.e38ed5440e7cbe06c101144bc7ca089c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
      stock: 12,
      isDeleted: false,
      comments: [],
      category: "Electronic",
      rating: 4,
      brand: "ASUS",
      numReviews: 0,
    },

    {
      name: "Sony PlayStation 5 Digital Console with Extra Purple Dualsense Controller and Accessories Kit (PS5, PlayStation Digital Version)",
      slug: "Sony PlayStation 5 Digital Console with Extra Purple Dualsense Controller and Accessories Kit (PS5, PlayStation Digital Version)",
      price: 639.99,
      description:
        "Sony PlayStation 5 Digital Console with Extra Purple Dualsense Controller and Accessories Kit (PS5, PlayStation Digital Version)",
      image:
        "https://i5.walmartimages.com/asr/807402c8-a674-4bef-8bf7-a2b0608718c5.ea34d5ca76a1ea72054d2ce3aec02fef.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?tf=3840x",
      stock: 12,
      isDeleted: false,
      comments: [],
      category: "Electronic",
      rating: 4,
      brand: "Play Station",
      numReviews: 0,
    },

    {
      name: "Clorox Toilet Bowl Cleaner Bleach, Rain Clean, 24 fl oz, 2 Pack",
      slug: "Clorox Toilet Bowl Cleaner Bleach, Rain Clean, 24 fl oz, 2 Pack",
      price: 5.18,
      description:
        "Clorox Toilet Bowl Cleaner Bleach, Rain Clean, 24 fl oz, 2 Pack",
      image:
        "https://i5.walmartimages.com/asr/63856640-6f2e-48c6-8766-70a16875b57a.30916d4860c801eb01b6cace76b27f07.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
      stock: 10,
      isDeleted: false,
      comments: [],
      category: "Cleaning",
      rating: 3,
      brand: "Clorox",
      numReviews: 0,
    },

    {
      name: "SLysol Multi-Surface Cleaner",
      slug: "Lysol Multi-Surface Cleaner",
      price: 2500,
      description:
        "Lysol Multi-Surface Cleaner, Sanitizing and Disinfecting Pour, to Clean and Deodorize, Sparkling Lemon and Sunflower Essence, 90 Fl Oz.",
      image:
        "https://i5.walmartimages.com/asr/bd258d6b-c780-4dd9-beac-49548a579cbf.278ed8fccda0f06dc478895c1e35e6a6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
      stock: 8,
      isDeleted: false,
      comments: [],
      category: "Cleaning",
      rating: 4,
      brand: "Lysol",
      numReviews: 0,
    },

    {
      name: "Bathroom Grime Fighter Aerosol",
      slug: "Bathroom Grime Fighter Aerosol",
      price: 4.27,
      description:
        "Scrubbing Bubbles Bathroom Grime Fighter Aerosol, Disinfectant Spray; Effective Tile, Bathtub, Shower and Overall Bathroom Cleaner (1 Aerosol Spray), Rainshower, 20 Oz",
      image:
        "https://i5.walmartimages.com/asr/250aa394-1d34-4d0a-aa4b-651673974ee7.b4c30a5802c33d91aabf9f842269abde.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
      stock: 8,
      isDeleted: false,
      comments: [],
      category: "Cleaning",
      rating: 4,
      brand: "Scrubbing Bubbles",
      numReviews: 0,
    },

    {
      name: "Great Value Steel Wool Soap Pads, 10 Count",
      slug: "Great Value Steel Wool Soap Pads, 10 Count",
      price: 1.22,
      description: "Great Value Steel Wool Soap Pads, 10 Count",
      image:
        "https://i5.walmartimages.com/asr/2b442914-b022-4cd5-b14f-ed73a1932296.cf69bce613f1c3ebd4ffdd0560845b58.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
      stock: 8,
      isDeleted: false,
      comments: [],
      category: "Cleaning",
      rating: 4,
      brand: "Great Value",
      numReviews: 0,
    },

    {
      name: "Scotch-Brite ocelo Multi-Purpose Sponges, 6 Sponges",
      slug: "Scotch-Brite ocelo Multi-Purpose Sponges, 6 Sponges",
      price: 3.48,
      description: "Scotch-Brite ocelo Multi-Purpose Sponges, 6 Sponges",
      image:
        "https://i5.walmartimages.com/asr/acacf024-c18b-428b-a0bc-71aa457ced24.61f33b4c82f185ecb3f208076301cd5c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
      stock: 8,
      isDeleted: false,
      comments: [],
      category: "Cleaning",
      rating: 4,
      brand: "ocelo",
      numReviews: 0,
    },

    {
      name: "Weiman Complete Cook Top Cleaning Kit",
      slug: "Weiman Complete Cook Top Cleaning Kit",
      price: 7.22,
      description: "Weiman Complete Cook Top Cleaning Kit",
      image:
        "https://i5.walmartimages.com/asr/f9208b4d-aa91-4f6c-a947-f8e7589b0e8e_2.769243d2fcef5951d97e9eb9189142d4.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
      stock: 8,
      isDeleted: false,
      comments: [],
      category: "Cleaning",
      rating: 4,
      brand: "Weiman",
      numReviews: 0,
    },

    {
      name: "EASY-OFF Fume Free Oven Cleaner Spray, Lemon 14.5 oz, Removes Grease",
      slug: "EASY-OFF Fume Free Oven Cleaner Spray, Lemon 14.5 oz, Removes Grease",
      price: 5.22,
      description:
        "EASY-OFF Fume Free Oven Cleaner Spray, Lemon 14.5 oz, Removes Grease",
      image:
        "https://i5.walmartimages.com/asr/5bb657b8-d7fe-4bf2-8d23-70381e3dbed0.313f268fef1a845689a5bdfaebee2a0e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
      stock: 8,
      isDeleted: false,
      comments: [],
      category: "Cleaning",
      rating: 4,
      brand: "CEASY-OFF",
      numReviews: 0,
    },

    {
      name: "Fresh Gel Toilet Cleaning Stamp",
      slug: "Fresh Gel Toilet Cleaning Stamp",
      price: 558,
      description:
        "Scrubbing Bubbles Fresh Gel Toilet Cleaning Stamp, Rainshower, Dispenser with 6 Gel Stamps, 1.34 Oz",
      image:
        "https://i5.walmartimages.com/asr/bbf028cf-2dd6-4f82-91a5-68fa7233c44e.912d726f8841a4558dcdd4ea806031ce.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
      stock: 8,
      isDeleted: false,
      comments: [],
      category: "Cleaning",
      rating: 4,
      brand: "Scrubbing Bubbles",
      numReviews: 0,
    },

    {
      name: "The Pink Stuff, Miracle Cleaning Paste, All-Purpose Cleaner, 17.63 oz.",
      slug: "The Pink Stuff, Miracle Cleaning Paste, All-Purpose Cleaner, 17.63 oz.",
      price: 5.97,
      description:
        "The Pink Stuff, Miracle Cleaning Paste, All-Purpose Cleaner, 17.63 oz.",
      image:
        "https://i5.walmartimages.com/asr/39fc645a-6c63-4aa4-9f47-48603a4c87f9.3b14a1a14b3cd740533f857e8740a631.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
      stock: 8,
      isDeleted: false,
      comments: [],
      category: "Cleaning",
      rating: 4,
      brand: "The Pink Stuff",
      numReviews: 0,
    },

    {
      name: "EasyWring Spin Mop & Bucket System",
      slug: "EasyWring Spin Mop & Bucket System",
      price: 34.98,
      description: "EasyWring Spin Mop & Bucket System",
      image:
        "https://i5.walmartimages.com/asr/87fb7a82-a286-42c9-acd4-dbcb3856ff41.315e10b1d6b02bf5bef4c19cc235f898.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
      stock: 8,
      isDeleted: false,
      comments: [],
      category: "Cleaning",
      rating: 4,
      brand: "O-Cedar",
      numReviews: 0,
    },

    {
      name: "CLR Calcium Lime and Rust Remover, Multi-Use Household Cleaner, EPA Safer Choice, 28 oz",
      slug: "CLR Calcium Lime and Rust Remover, Multi-Use Household Cleaner, EPA Safer Choice, 28 oz",
      price: 5.54,
      description:
        "CLR Calcium Lime and Rust Remover, Multi-Use Household Cleaner, EPA Safer Choice, 28 oz",
      image:
        "https://i5.walmartimages.com/asr/9d85bc60-023b-4c3f-8b04-d7088c1cb7be.31193ebc1f8e742b0dd9b0bc9fcff028.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
      stock: 8,
      isDeleted: false,
      comments: [],
      category: "Cleaning",
      rating: 4,
      brand: "CLR",
      numReviews: 0,
    },

    {
      name: "Pledge Clean It Dust & Allergen Multisurface Cleaner Spray, Lemon Scent, 9.7 Ounce",
      slug: "Pledge Clean It Dust & Allergen Multisurface Cleaner Spray, Lemon Scent, 9.7 Ounce",
      price: 5.38,
      description:
        "Pledge Clean It Dust & Allergen Multisurface Cleaner Spray, Lemon Scent, 9.7 Ounce",
      image:
        "https://i5.walmartimages.com/asr/d8315d74-e595-49bf-a9c6-43cce4ad76fd.c1c106a50e65ac5fee1f1f21733bded1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
      stock: 8,
      isDeleted: false,
      comments: [],
      category: "Cleaning",
      rating: 4,
      brand: "Pledge",
      numReviews: 0,
    },

    {
      name: "Mr. Clean Magic Eraser Original Cleaning Pads with Durafoam, 9 Ct",
      slug: "Mr. Clean Magic Eraser Original Cleaning Pads with Durafoam, 9 Ct",
      price: 8.99,
      description:
        "Mr. Clean Magic Eraser Original Cleaning Pads with Durafoam, 9 Ct",
      image:
        "https://i5.walmartimages.com/asr/fca2fdfa-7186-411c-8b7e-f1bf81657948.d6ad45f99f22b195bfd8414bb97698a7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
      stock: 8,
      isDeleted: false,
      comments: [],
      category: "Cleaning",
      rating: 4,
      brand: "Mr. Clean",
      numReviews: 0,
    },

    {
      name: "Mean Green Super Strength Cleaner & Degreaser, 128 Ounce",
      slug: "Mean Green Super Strength Cleaner & Degreaser, 128 Ounce",
      price: 6.12,
      description: "Mean Green Super Strength Cleaner & Degreaser, 128 Ounce",
      image:
        "https://i5.walmartimages.com/asr/5a820d2c-9dc1-433e-9478-bf94b836168c.e548ef476a5ddf5db5ba921b6828986a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
      stock: 8,
      isDeleted: false,
      comments: [],
      category: "Cleaning",
      rating: 4,
      brand: "Mean Green",
      numReviews: 0,
    },

    {
      name: "Cleaning Supplies Clearance Universal Cleaning ",
      slug: "LCleaning Supplies Clearance Universal Cleaning",
      price: 3.01,
      description:
        "Cleaning Supplies Clearance Universal Cleaning Powder A Good Cleaning Product Is A Unique Gift For Family And Friends All Purpose Cleaning Powder",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/761365-800-auto?v=638053546108970000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
      stock: 8,
      isDeleted: false,
      comments: [],
      category: "Cleaning",
      rating: 4,
      brand: "poett",
      numReviews: 0,
    },

    {
      name: "Swiffer WetJet Wood Mopping Refill Pads, 20 count",
      slug: "Swiffer WetJet Wood Mopping Refill Pads, 20 count",
      price: 14.44,
      description: "Swiffer WetJet Wood Mopping Refill Pads, 20 count",
      image:
        "https://i5.walmartimages.com/asr/ef9e930d-9dfe-4aa6-9dd9-c8a0595033fb.a12eddd1dd211a71d8ae720c0b72869d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://papelmatic.com/wp-content/uploads/2018/08/papelmatic-higiene-profesional-elegir-quimicos-limpieza-negocio-1080x675.jpg",
      stock: 8,
      isDeleted: false,
      comments: [],
      category: "Cleaning",
      rating: 4,
      brand: "Swiffer",
      numReviews: 0,
    },

    {
      name: "Smart Ones Santa Fe Rice & Beans Frozen Meal, 9 Oz Box",
      slug: "Smart Ones Santa Fe Rice & Beans Frozen Meal, 9 Oz Box",
      price: 2.54,
      description: "Smart Ones Santa Fe Rice & Beans Frozen Meal, 9 Oz Box",
      image:
        "https://i5.walmartimages.com/asr/6d626281-d707-4d0b-9ebc-7f3718cbce1e.fc804141ef774fa091993e566b482594.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
      stock: 6,
      isDeleted: false,
      comments: [],
      category: "Frozen",
      rating: 4,
      brand: "SMART ONES",
      numReviews: 0,
    },

    {
      name: "Atkins Roasted Turkey with Garlic Mashed Cauliflower Meal 9 Oz. (Frozen Dinner)",
      slug: "Atkins Roasted Turkey with Garlic Mashed Cauliflower Meal 9 Oz. (Frozen Dinner)",
      price: 4.24,
      description:
        "Atkins Roasted Turkey with Garlic Mashed Cauliflower Meal 9 Oz. (Frozen Dinner)",
      image:
        "https://i5.walmartimages.com/asr/b75d3741-276c-473b-a718-f8abefc59d9e.a1255a48109de6c4d52510930998d38a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
      stock: 6,
      isDeleted: false,
      comments: [],
      category: "Frozen",
      rating: 4,
      brand: "Atkins",
      numReviews: 0,
    },

    {
      name: "Healthy Choice Café Steamers Sweet & Sour Chicken Frozen Meal, 10 oz (Frozen)",
      slug: "Healthy Choice Café Steamers Sweet & Sour Chicken Frozen Meal, 10 oz (Frozen)",
      price: 3.28,
      description:
        "Healthy Choice Café Steamers Sweet & Sour Chicken Frozen Meal, 10 oz (Frozen)",
      image:
        "https://i5.walmartimages.com/asr/8f50624e-2e16-4f41-8195-cf0118f2b818.c2f3730a19440f24a416661aa5a9323a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
      stock: 6,
      isDeleted: false,
      comments: [],
      category: "Frozen",
      rating: 4,
      brand: "Healthy Choice",
      numReviews: 0,
    },

    {
      name: "TGI Fridays Loaded Cheddar & Bacon Potato Skins Frozen Snacks & Appetizers, 13.5 oz Box",
      slug: "TGI Fridays Loaded Cheddar & Bacon Potato Skins Frozen Snacks & Appetizers, 13.5 oz Box",
      price: 7.62,
      description:
        "TGI Fridays Loaded Cheddar & Bacon Potato Skins Frozen Snacks & Appetizers, 13.5 oz Box",
      image:
        "https://i5.walmartimages.com/asr/322f576c-ef32-433b-8f19-b8b7299c0329.3a94d42ff883ba1efb0331380f924cae.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
      stock: 6,
      isDeleted: false,
      comments: [],
      category: "Frozen",
      rating: 4,
      brand: "TGI Fridays",
      numReviews: 0,
    },

    {
      name: "Delimex Beef Corn Taquitos Frozen Snacks & Appetizers, 23 ct Box",
      slug: "Delimex Beef Corn Taquitos Frozen Snacks & Appetizers, 23 ct Box",
      price: 6.28,
      description:
        "Delimex Beef Corn Taquitos Frozen Snacks & Appetizers, 23 ct Box",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/773989-800-auto?v=638146533941270000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
      stock: 6,
      isDeleted: false,
      comments: [],
      category: "Frozen",
      rating: 4,
      brand: "Delimex",
      numReviews: 0,
    },

    {
      name: "Foster Farms Bite-sized Chicken Frank Mini Corndogs Fully Cooked 29.3 oz (1.83 lb) bag",
      slug: "Foster Farms Bite-sized Chicken Frank Mini Corndogs Fully Cooked 29.3 oz (1.83 lb) bag",
      price: 7.24,
      description:
        "Foster Farms Bite-sized Chicken Frank Mini Corndogs Fully Cooked 29.3 oz (1.83 lb) bag",
      image:
        "https://i5.walmartimages.com/asr/17b25b6d-2a3d-4d5c-80a6-6319018ed59f.bf03f0e12b327468823e2efd3dc53a0f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
      stock: 6,
      isDeleted: false,
      comments: [],
      category: "Frozen",
      rating: 4,
      brand: "Foster Farms",
      numReviews: 0,
    },

    {
      name: "Snapps Loaded Potato Sticks, 5 oz",
      slug: "Snapps Loaded Potato Sticks, 5 oz",
      price: 1.24,
      description: "Snapps Loaded Potato Sticks, 5 oz",
      image:
        "https://i5.walmartimages.com/asr/aab72872-7642-4ce2-b906-611d4c5a0c31.adce66752835bbfd94a58dd53529dc3e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
      stock: 6,
      isDeleted: false,
      comments: [],
      category: "Frozen",
      rating: 4,
      brand: "Snapps",
      numReviews: 0,
    },

    {
      name: "Tyson Chicken Breast Sliders, 20.8 oz, 8 Count, (Frozen)",
      slug: "Tyson Chicken Breast Sliders, 20.8 oz, 8 Count, (Frozen)",
      price: 7.33,
      description: "Tyson Chicken Breast Sliders, 20.8 oz, 8 Count, (Frozen)",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/658700-800-auto?v=637643241238770000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
      stock: 6,
      isDeleted: false,
      comments: [],
      category: "Frozen",
      rating: 4,
      brand: "Tyson",
      numReviews: 0,
    },

    {
      name: "Great Value Regular Cut French Fried Potatoes, 32 oz (Frozen)",
      slug: "Great Value Regular Cut French Fried Potatoes, 32 oz (Frozen)",
      price: 2.82,
      description:
        "Great Value Regular Cut French Fried Potatoes, 32 oz (Frozen)",
      image:
        "https://i5.walmartimages.com/asr/f8b20b5d-9dc3-41fa-9ba9-a5b4dfb1856a_1.74fcc5c4a6f1090158bd71f594eb02c1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
      stock: 6,
      isDeleted: false,
      comments: [],
      category: "Frozen",
      rating: 4,
      brand: "Great Value",
      numReviews: 0,
    },

    {
      name: "Great Value Fully Cooked Chicken Strips, 25 oz",
      slug: "Great Value Fully Cooked Chicken Strips, 25 oz",
      price: 8.26,
      description: "Great Value Fully Cooked Chicken Strips, 25 oz",
      image:
        "https://i5.walmartimages.com/asr/542cca47-6bf8-4436-904f-ff1aefcd08f0.79772e53518bd99217e9006fc17156f9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
      stock: 6,
      isDeleted: false,
      comments: [],
      category: "Frozen",
      rating: 4,
      brand: "Great Value",
      numReviews: 0,
    },

    {
      name: "Jimmy Dean Pancakes & Sausages on a Stick, 30 oz, 12 Count (Frozen)",
      slug: "Jimmy Dean Pancakes & Sausages on a Stick, 30 oz, 12 Count (Frozen)",
      price: 10.48,
      description:
        "Jimmy Dean Pancakes & Sausages on a Stick, 30 oz, 12 Count (Frozen)",
      image:
        "https://i5.walmartimages.com/asr/27b6d6ef-2e5d-4550-846f-5a92a19c83a3.c7ff8384dc46aedd343f47eb246db70c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
      stock: 6,
      isDeleted: false,
      comments: [],
      category: "Frozen",
      rating: 4,
      brand: "Jimmy Dean",
      numReviews: 0,
    },

    {
      name: "Great Value Croissant Sandwiches Sausage Egg and Cheese, 4 Count (Frozen)",
      slug: "Great Value Croissant Sandwiches Sausage Egg and Cheese, 4 Count (Frozen)",
      price: 5.78,
      description:
        "Great Value Croissant Sandwiches Sausage Egg and Cheese, 4 Count (Frozen)",
      image:
        "https://i5.walmartimages.com/asr/d38c83b2-c8bd-4a58-a8f6-48981b4ed1fa.a3384874336ecb8e4f577789fc14c0a2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
      stock: 6,
      isDeleted: false,
      comments: [],
      category: "Frozen",
      rating: 4,
      brand: "Great Value",
      numReviews: 0,
    },

    {
      name: "Great Value Italian-Style Lasagna with Meat Sauce, 90 oz",
      slug: "Great Value Italian-Style Lasagna with Meat Sauce, 90 oz",
      price: 14.48,
      description: "Great Value Italian-Style Lasagna with Meat Sauce, 90 oz",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/587059-800-auto?v=637269241863570000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
      stock: 6,
      isDeleted: false,
      comments: [],
      category: "Frozen",
      rating: 4,
      brand: "Great Value",
      numReviews: 0,
    },

    {
      name: "Stouffer's Baked Ziti Large Family Size Frozen Frozen Meal, 57 oz (Frozen)",
      slug: "Stouffer's Baked Ziti Large Family Size Frozen Frozen Meal, 57 oz (Frozen)",
      price: 13.48,
      description:
        "Stouffer's Baked Ziti Large Family Size Frozen Frozen Meal, 57 oz (Frozen)",
      image:
        "https://i5.walmartimages.com/asr/3895cca4-2c1f-4b8b-bae0-73d69def8e63.8a69c93d08458dafa08e5e719e60e514.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
      stock: 6,
      isDeleted: false,
      comments: [],
      category: "Frozen",
      rating: 4,
      brand: "Franui",
      numReviews: 0,
    },

    {
      name: "Red Baron Rising Crust Supreme Frozen Pizza 23.45oz",
      slug: "Red Baron Rising Crust Supreme Frozen Pizza 23.45oz",
      price: 5.12,
      description: "Red Baron Rising Crust Supreme Frozen Pizza 23.45oz",
      image:
        "https://i5.walmartimages.com/asr/13c3a70f-98d4-4066-94dc-8d0a27a4362e.c51a3c0497d2077b7521584ca87e10c5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://thefoodtech.com/wp-content/uploads/2021/03/alimentos-congelados.jpg",
      stock: 6,
      isDeleted: false,
      comments: [],
      category: "Frozen",
      rating: 4,
      brand: "Red Baron",
      numReviews: 0,
    },

    {
      name: "12 Reusable 10.5 Plastic Paper Plate Holders in bright colors (12 Pack)",
      slug: "C12 Reusable 10.5 Plastic Paper Plate Holders in bright colors (12 Pack)",
      price: 12.99,
      description:
        "12 Reusable 10.5 Plastic Paper Plate Holders in bright colors (12 Pack)",
      image:
        "https://i5.walmartimages.com/asr/718d4d59-6c35-4e23-9cba-73a0afdb77d7.d9824036554f4f762aaea699cd67d109.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Home",
      rating: 4,
      brand: "Keep-IT!",
      numReviews: 0,
    },

    {
      name: "Vanity Fair Everyday Disposable Paper Napkins, White, 300 Count",
      slug: "Vanity Fair Everyday Disposable Paper Napkins, White, 300 Count",
      price: 6.98,
      description:
        "Vanity Fair Everyday Disposable Paper Napkins, White, 300 Count",
      image:
        "https://i5.walmartimages.com/asr/79de11f9-a14b-4517-80bc-a6ea0aa649e5.da6e22bc48d9b679193e4bf7580b651d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
      stock: 152,
      isDeleted: false,
      comments: [],
      category: "Home",
      rating: 4,
      brand: "Vanity Fair",
      numReviews: 0,
    },

    {
      name: "Comfy Package [Combo Box] 360 Clear Disposable Plastic Silverware Flatware Sets",
      slug: "Comfy Package [Combo Box] 360 Clear Disposable Plastic Silverware Flatware Sets",
      price: 20.99,
      description:
        "Comfy Package [Combo Box] 360 Clear Disposable Plastic Silverware Flatware Sets",
      image:
        "https://i5.walmartimages.com/asr/8996d10d-b05c-47b0-890a-aca05c00d6c1.813385d4697028671f2080ee75b8f8be.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Home",
      rating: 4,
      brand: "Comfy Package",
      numReviews: 0,
    },

    {
      name: "Hefty Party On Disposable Plastic Cups, Red, 18 Ounce, 50 Count",
      slug: "Hefty Party On Disposable Plastic Cups, Red, 18 Ounce, 50 Count",
      price: 29019,
      description:
        "Hefty Party On Disposable Plastic Cups, Red, 18 Ounce, 50 Count",
      image:
        "https://i5.walmartimages.com/asr/92e46fa2-e552-4749-9317-1c0a8a22067a.976347a2bcd16eb27a80245bbd077a09.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Home",
      rating: 4,
      brand: "Hefty",
      numReviews: 0,
    },

    {
      name: "BAKER DEPOT 17 oz Plastic Tumblers",
      slug: "BAKER DEPOT 17 oz Plastic Tumblers",
      price: 18.2,
      description:
        "BAKER DEPOT 17 oz Plastic Tumblers Drinking Glasses Clear Acrylic Cups Wine Glassware Drinkware Tumbler for Poolside Party",
      image:
        "https://i5.walmartimages.com/asr/bebac04f-1a79-4101-a0d1-7be759f5034f.66f92853868c30790609db3c91ee2239.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Home",
      rating: 4,
      brand: "BBAKER DEPOT",
      numReviews: 0,
    },

    {
      name: "DII Solid Color Napkin - Set of 6",
      slug: "DII Solid Color Napkin - Set of 6",
      price: 17.76,
      description: "DII Solid Color Napkin - Set of 6",
      image:
        "https://i5.walmartimages.com/asr/6e9a5983-5915-4024-8a6f-7cd2318dd381_1.52d47d4a22576cfd3eb02ca07ed26b53.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Home",
      rating: 4,
      brand: "DII",
      numReviews: 0,
    },

    {
      name: "100 Pack 5oz Heart shaped Clear Plastic Dessert Cups with Spoons",
      slug: "100 Pack 5oz Heart shaped Clear Plastic Dessert Cups with Spoons",
      price: 19900,
      description:
        "100 Pack 5oz Heart shaped Clear Plastic Dessert Cups with Spoons, Appetizer Serving Cups for Desserts, Appetizers, Puddings, Mousse",
      image:
        "https://i5.walmartimages.com/asr/46a5b9e2-5cc6-413d-ac9a-902c94a313a5.cd1c549baa2742c0071623dde8819d61.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Home",
      rating: 4,
      brand: "TANGDA",
      numReviews: 0,
    },

    {
      name: "STEADY Creative Style Household Plastic Cups With Handles Thick Drop Resistant Bottle - Orange",
      slug: "STEADY Creative Style Household Plastic Cups With Handles Thick Drop Resistant Bottle - Orange",
      price: 4.98,
      description:
        "STEADY Creative Style Household Plastic Cups With Handles Thick Drop Resistant Bottle - Orange",
      image:
        "https://i5.walmartimages.com/asr/37f5f641-5bfc-4396-a300-1c626793c424.fbdf3904a0fa90eca606d3a5e95d5970.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Home",
      rating: 4,
      brand: "Steady Clothing",
      numReviews: 0,
    },

    {
      name: "OUNONA Ceramic Soup Bowl Cups Bowl Baking Cups Bowls Bowls Ramekins Yogurt Dish Chic Dishes Dessert Ramekins Ice Dish Sauce",
      slug: "OUNONA Ceramic Soup Bowl Cups Bowl Baking Cups Bowls Bowls Ramekins Yogurt Dish Chic Dishes Dessert Ramekins Ice Dish Sauce",
      price: 8.99,
      description:
        "OUNONA Ceramic Soup Bowl Cups Bowl Baking Cups Bowls Bowls Ramekins Yogurt Dish Chic Dishes Dessert Ramekins Ice Dish Sauce",
      image:
        "https://i5.walmartimages.com/asr/74f166d4-f20c-4701-bcd4-c231700b2a50.f0d3e1f89edcd1be827db1ab1a5a6c96.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://jumboargentina.vtexassets.com/arquivos/ids/766334-800-auto?v=638103658072030000&width=800&height=auto&aspect=true",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Home",
      rating: 4,
      brand: "Ounona",
      numReviews: 0,
    },

    {
      name: "DanceeMangoo 2 Liters Water Bottle Motivational Drinking",
      slug: "DanceeMangoo 2 Liters Water Bottle Motivational Drinking",
      price: 19.39,
      description:
        "DanceeMangoo 2 Liters Water Bottle Motivational Drinking Bottle Sports Bottles With Time Marker Stickers Plastic Cups For Girls Free Shipping",
      image:
        "https://i5.walmartimages.com/asr/6d32b0f1-2127-4431-a6e0-5b31cf22d4a6.98d3542e284624b46aebedb076eb7b3f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Home",
      rating: 4,
      brand: "DanceeMangoo",
      numReviews: 0,
    },

    {
      name: "2 Liters Water Bottle Motivational Drinking Bottle Sports",
      slug: "2 Liters Water Bottle Motivational Drinking Bottle Sports",
      price: 13.49,
      description:
        "DabuLiu 2 Liters Water Bottle Motivational Drinking Bottle Sports Water Bottle With Time Marker Stickers Portable Reusable Plastic Cups",
      image:
        "https://i5.walmartimages.com/asr/c0ac923a-5a37-456e-9f07-02ab3f7613cb.ad793517105ff852b4514362fb18e8c3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Home",
      rating: 4,
      brand: "DabuLiu",
      numReviews: 0,
    },

    {
      name: "50 Pack 14-inch Disposable Food",
      slug: "50 Pack 14-inch Disposable Food",
      price: 27.99,
      description:
        "Gezond 50 Pack 14-inch Disposable Food Serving Trays Heavy-Duty Compostable Sugarcane Platters Large Paper Plates for Crawfish Serving",
      image:
        "https://i5.walmartimages.com/asr/36e0db8b-5b84-4216-b9f7-da4c2bec9269.2b476cc8c01e48801df2e6fadc61c9a6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Home",
      rating: 4,
      brand: "Gezond",
      numReviews: 0,
    },

    {
      name: "Ibambo Natural Bamboo Cutlery 100 Set (50 Forks, 25 Spoons, 25 Knives)",
      slug: "Ibambo Natural Bamboo Cutlery 100 Set (50 Forks, 25 Spoons, 25 Knives)",
      price: 18.97,
      description:
        "Ibambo Natural Bamboo Cutlery 100 Set (50 Forks, 25 Spoons, 25 Knives)",
      image:
        "https://i5.walmartimages.com/asr/aa648665-3c72-428a-99fa-a18a884e6ca8.1ce7e567e8a0378060e62607e66bfc4e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Home",
      rating: 4,
      brand: "IBambo",
      numReviews: 0,
    },

    {
      name: "Jumbo Smoothie Straws - 8.5 High Assorted Colors Milkshake Straws [100 Pack]",
      slug: "Jumbo Smoothie Straws - 8.5 High Assorted Colors Milkshake Straws [100 Pack]",
      price: 16.8,
      description:
        "Jumbo Smoothie Straws - 8.5 High Assorted Colors Milkshake Straws [100 Pack]",
      image:
        "https://i5.walmartimages.com/asr/248868a2-1c6a-4e47-b295-e98694f5be2e.10a73356c5725aa7bd1c8436d07b130f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Home",
      rating: 4,
      brand: "Krea",
      numReviews: 0,
    },

    {
      name: "Spoon Spoons Mini Scoops Laboratory",
      slug: "Spoon Spoons Mini Scoops Laboratory",
      price: 5.99,
      description:
        "NUOLUX Spoon Spoons Mini Scoops Laboratory Micro Medicine Powder Shovelmeasuring Spatula Filling Silverware Gold Disposable",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/181076-800-auto?v=636383406813770000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://amsagt.com/wp-content/uploads/2019/10/StandardEggRings_1-300x300.jpg",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Home",
      rating: 4,
      brand: "NUOLUX",
      numReviews: 0,
    },

    {
      name: "Juguete Dog Cancat Unicornio 15cm",
      slug: "Juguete Dog Cancat Unicornio 15cm",
      price: 961,
      description: "Juguete Dog Cancat Unicornio 15cm",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/670695-800-auto?v=637696822094370000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
      stock: 15,
      isDeleted: false,
      comments: [],
      category: "Pets",
      rating: 4,
      brand: "pet CanCat",
      numReviews: 0,
    },

    {
      name: "IAMS PROACTIVE HEALTH Hairball Care Chicken and Salmon Dry Cat Food for Adult Cat, 7 lb. Bag",
      slug: "IAMS PROACTIVE HEALTH Hairball Care Chicken and Salmon Dry Cat Food for Adult Cat, 7 lb. Bag",
      price: 18.98,
      description:
        "IAMS PROACTIVE HEALTH Hairball Care Chicken and Salmon Dry Cat Food for Adult Cat, 7 lb. Bag",
      image:
        "https://i5.walmartimages.com/asr/2bcade2b-875c-475e-a103-e488574b9633.c79e87843b3c77376c5868ff2ed26e36.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
      stock: 13,
      isDeleted: false,
      comments: [],
      category: "Pets",
      rating: 4,
      brand: "IAMS",
      numReviews: 0,
    },

    {
      name: "Nylabone Gourmet Style Dog Chew Toy Stick Chicken X-Large/Souper (1 Count)",
      slug: "Nylabone Gourmet Style Dog Chew Toy Stick Chicken X-Large/Souper (1 Count)",
      price: 12.78,
      description:
        "Nylabone Gourmet Style Dog Chew Toy Stick Chicken X-Large/Souper (1 Count)",
      image:
        "https://i5.walmartimages.com/asr/800325b0-7747-4b58-a023-bbf340a1b5a2.7432222566932459e0bbe4721a981922.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
      stock: 13,
      isDeleted: false,
      comments: [],
      category: "Pets",
      rating: 4,
      brand: "Nylabone",
      numReviews: 0,
    },

    {
      name: "Nerf Dog Vortex Chain Tug Dog Toy with Durable Braided Nylon, 25",
      slug: "Nerf Dog Vortex Chain Tug Dog Toy with Durable Braided Nylon, 25",
      price: 9.97,
      description:
        "Nerf Dog Vortex Chain Tug Dog Toy with Durable Braided Nylon, 25",
      image:
        "https://i5.walmartimages.com/asr/282a94f3-db9b-4b87-9178-b33a581b327c.4ba1f2df580a03fb4e8c37684a792d4a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
      stock: 13,
      isDeleted: false,
      comments: [],
      category: "Pets",
      rating: 4,
      brand: "Nerf Dog",
      numReviews: 0,
    },

    {
      name: "Homes For Pets Hard-Sided Dog/Cat Carrier",
      slug: "Homes For Pets Hard-Sided Dog/Cat Carrier",
      price: 159.2,
      description:
        "MidWest Homes For Pets Hard-Sided Dog/Cat Carrier, Green, Inside Dims 20.70L x 13.22W x 14.09H & Suitable for Tiny Dog Breeds Perfect Dog Kennel Travel Carrier for Quick Trips",
      image:
        "https://i5.walmartimages.com/asr/216b5920-29ad-4103-be3f-6e3049b6484b.c52faa30335b603fa792307da7f7416d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
      stock: 13,
      isDeleted: false,
      comments: [],
      category: "Pets",
      rating: 4,
      brand: "MidWest Homes For Pets",
      numReviews: 0,
    },

    {
      name: "Purina Beneful Baked Delights Real Beef & Cheese Crunchy Treats for Dogs, 8.5 oz Pouch",
      slug: "Purina Beneful Baked Delights Real Beef & Cheese Crunchy Treats for Dogs, 8.5 oz Pouch",
      price: 7.99,
      description:
        "Purina Beneful Baked Delights Real Beef & Cheese Crunchy Treats for Dogs, 8.5 oz Pouch",
      image:
        "https://i5.walmartimages.com/asr/6a1c0a9b-203c-479f-a639-70936b9ebd13.742a41039a2bf23dc4f6fef8e0821eb4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
      stock: 13,
      isDeleted: false,
      comments: [],
      category: "Pets",
      rating: 4,
      brand: "DPurina Beneful",
      numReviews: 0,
    },

    {
      name: "CRAVE Grain Free Indoor Adult Dry Cat Food with Protein from Chicken & Salmon, 4 lb. Bag",
      slug: "CRAVE Grain Free Indoor Adult Dry Cat Food with Protein from Chicken & Salmon, 4 lb. Bag",
      price: 20.99,
      description:
        "CRAVE Grain Free Indoor Adult Dry Cat Food with Protein from Chicken & Salmon, 4 lb. Bag",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/687340-800-auto?v=637795965688600000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
      stock: 13,
      isDeleted: false,
      comments: [],
      category: "Pets",
      rating: 4,
      brand: "Crave",
      numReviews: 0,
    },

    {
      name: "Purina Pro Plan Duck Entree Wet Cat Food, Grain-Free, 3 oz Cans (24 Pack)",
      slug: "Purina Pro Plan Duck Entree Wet Cat Food, Grain-Free, 3 oz Cans (24 Pack)",
      price: 39.84,
      description:
        "Purina Pro Plan Duck Entree Wet Cat Food, Grain-Free, 3 oz Cans (24 Pack)",
      image:
        "https://i5.walmartimages.com/asr/c63c8949-2353-47e5-a149-6b99ca482653.33f3ddf09b184566ed58d724cd098031.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
      stock: 13,
      isDeleted: false,
      comments: [],
      category: "Pets",
      rating: 4,
      brand: "Purina Pro Plan",
      numReviews: 0,
    },

    {
      name: "Purina Pro Plan Indoor Hairball Turkey Rice Dry Cat Food, 16 lb Bag",
      slug: "Purina Pro Plan Indoor Hairball Turkey Rice Dry Cat Food, 16 lb Bag",
      price: 52.98,
      description:
        "Purina Pro Plan Indoor Hairball Turkey Rice Dry Cat Food, 16 lb Bag",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/760160-800-auto?v=638048146494200000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
      stock: 13,
      isDeleted: false,
      comments: [],
      category: "Pets",
      rating: 4,
      brand: "Purina Pro Plan",
      numReviews: 0,
    },

    {
      name: "Milo's Kitchen Chicken Meatballs Dog Treats, 18-Ounce Bag",
      slug: "Milo's Kitchen Chicken Meatballs Dog Treats, 18-Ounce Bag",
      price: 13.68,
      description: "Milo's Kitchen Chicken Meatballs Dog Treats, 18-Ounce Bag",
      image:
        "https://i5.walmartimages.com/asr/0ddd0fe2-bf3e-461f-bf03-7127a1a3f792.909dc3601944cbe04e38732e6a2cc3c0.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
      stock: 13,
      isDeleted: false,
      comments: [],
      category: "Pets",
      rating: 4,
      brand: "Milo's Kitchen",
      numReviews: 0,
    },

    {
      name: "Milk-Bone Soft and Chewy Dog Treats Made With Real Bacon, 5.6 Oz. Bag (Pack of 10)",
      slug: "Milk-Bone Soft and Chewy Dog Treats Made With Real Bacon, 5.6 Oz. Bag (Pack of 10)",
      price: 29.99,
      description:
        "Milk-Bone Soft and Chewy Dog Treats Made With Real Bacon, 5.6 Oz. Bag (Pack of 10)",
      image:
        "https://i5.walmartimages.com/asr/fd8d57ea-9433-41d7-a45a-1614a03e2c7a.d2ba33fef930c298631c16cb346e4106.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
      stock: 13,
      isDeleted: false,
      comments: [],
      category: "Pets",
      rating: 4,
      brand: "Milk-Bone",
      numReviews: 0,
    },

    {
      name: "PAWZ Road 32 Cat Tree Tower with Cactus Sisal Scratching Posts for Indoor Small Cats, Green",
      slug: "PAWZ Road 32 Cat Tree Tower with Cactus Sisal Scratching Posts for Indoor Small Cats, Green",
      price: 39.99,
      description:
        "PAWZ Road 32 Cat Tree Tower with Cactus Sisal Scratching Posts for Indoor Small Cats, Green",
      image:
        "https://i5.walmartimages.com/asr/9a9fe41a-de3b-4640-a41f-49d164b6035c.34a7ceb58a97076933e7312be7328198.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
      stock: 13,
      isDeleted: false,
      comments: [],
      category: "Pets",
      rating: 4,
      brand: "Pawz Road",
      numReviews: 0,
    },

    {
      name: "TEMPTATIONS Meaty Bites, Soft and Savory Cat Treats, Salmon Flavor, 4.12 oz. Pouch",
      slug: "TEMPTATIONS Meaty Bites, Soft and Savory Cat Treats, Salmon Flavor, 4.12 oz. Pouch",
      price: 6.48,
      description:
        "TEMPTATIONS Meaty Bites, Soft and Savory Cat Treats, Salmon Flavor, 4.12 oz. Pouch",
      image:
        "https://i5.walmartimages.com/asr/55447569-4982-43de-bb2b-4b1aa4cdaa19.e2d815b1c20ad1548acee2786728a4ee.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
      stock: 13,
      isDeleted: false,
      comments: [],
      category: "Pets",
      rating: 4,
      brand: "Temptations",
      numReviews: 0,
    },

    {
      name: "Gap Rugby Stripe Cuddler Pet Bed, Recycled Polyester Cover with Sherpa inner, Small 2018, Navy",
      slug: "Gap Rugby Stripe Cuddler Pet Bed, Recycled Polyester Cover with Sherpa inner, Small 2018, Navy",
      price: 25.97,
      description:
        "Gap Rugby Stripe Cuddler Pet Bed, Recycled Polyester Cover with Sherpa inner, Small 2018, Navy",
      image:
        "https://i5.walmartimages.com/asr/9fc07086-d880-4607-87d2-34c7d54479cb.5cbed1dab8403a9d6ee567a166f21123.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
      stock: 13,
      isDeleted: false,
      comments: [],
      category: "Pets",
      rating: 4,
      brand: "Gap",
      numReviews: 0,
    },

    {
      name: "Dog Chew Toothbrush Toys",
      slug: "Dog Chew Toothbrush Toys",
      price: 10.99,
      description:
        "HESLAND Dog Chew Toothbrush Toys, Squeaky Teeth Cleaning Toy for Aggressive Chewers Small Medium Large Breed Indestructible Tough Dogs Dental Care",
      image:
        "https://i5.walmartimages.com/asr/4c40e462-010c-4d86-b2ce-5fdbef5db8f7.7a2353968f62ea39065f0f6391e2b684.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://www.elimparcial.com/__export/1556972784536/sites/elimparcial/img/2016/01/09/1336459-N.JPG_1359985867.jpg",
      stock: 13,
      isDeleted: false,
      comments: [],
      category: "Pets",
      rating: 4,
      brand: "HESLAND",
      numReviews: 0,
    },

    {
      name: "Nescafé Clasico, Dark Roast Instant Coffee 10.5 oz",
      slug: "Nescafé Clasico, Dark Roast Instant Coffee 10.5 oz",
      price: 10.48,
      description: "Nescafé Clasico, Dark Roast Instant Coffee 10.5 oz",
      image:
        "https://i5.walmartimages.com/asr/76fdf54f-994c-4a7d-88ae-81e0bfc5ef95.5e947fdb8caf34ff9aaf7c7324daefa5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
      stock: 122,
      isDeleted: false,
      comments: [],
      category: "store",
      rating: 4,
      brand: "NESCAFÉ",
      numReviews: 0,
    },

    {
      name: "ACaf Bustelo, Espresso Style Dark Roast Ground Coffee, 10 oz. Can",
      slug: "Caf Bustelo, Espresso Style Dark Roast Ground Coffee, 10 oz. Can",
      price: 4.92,
      description:
        "Caf Bustelo, Espresso Style Dark Roast Ground Coffee, 10 oz. Can",
      image:
        "https://i5.walmartimages.com/asr/accbfa38-66c9-4320-aab3-30a61dd95c4f.a90e3ce6dce0e417d8368b6f5ccd0276.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
      stock: 100,
      isDeleted: false,
      comments: [],
      category: "store",
      rating: 4,
      brand: "Cafe Bustelo",
      numReviews: 0,
    },

    {
      name: "Starbucks Sumatra, Ground Coffee, Dark Roast, 18 oz",
      slug: "Starbucks Sumatra, Ground Coffee, Dark Roast, 18 oz",
      price: 14.16,
      description: "Starbucks Sumatra, Ground Coffee, Dark Roast, 18 oz",
      image:
        "https://i5.walmartimages.com/asr/7e57c51e-0ed0-4a27-9c19-e3ef01395de5.9e838a8d8903b1d2c7a2ed5e9e2aea41.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
      stock: 222,
      isDeleted: false,
      comments: [],
      category: "store",
      rating: 4,
      brand: "Starbucks",
      numReviews: 0,
    },

    {
      name: "Betty Crocker REESE'S Peanut Butter Premium Brownie Mix, 16 oz.",
      slug: "Betty Crocker REESE'S Peanut Butter Premium Brownie Mix, 16 oz.",
      price: 4.12,
      description:
        "Betty Crocker REESE'S Peanut Butter Premium Brownie Mix, 16 oz.",
      image:
        "https://jumboargentina.vtexassets.com/arquivos/ids/703709-800-auto?v=637895325885100000&width=800&height=auto&aspect=true",
      imageCategory:
        "https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
      stock: 50,
      isDeleted: false,
      comments: [],
      category: "store",
      rating: 4,
      brand: "Betty Crocker",
      numReviews: 0,
    },

    {
      name: "Duncan Hines Dark Chocolate Fudge Brownie Mix, 18.2 Oz",
      slug: "Duncan Hines Dark Chocolate Fudge Brownie Mix, 18.2 Oz",
      price: 1.46,
      description: "Duncan Hines Dark Chocolate Fudge Brownie Mix, 18.2 Oz",
      image:
        "https://i5.walmartimages.com/asr/f56f43c3-83f5-410e-8698-642ec0e9897c.a0973e5e5334e04b1901c09f955ce3ae.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
      stock: 200,
      isDeleted: false,
      comments: [],
      category: "store",
      rating: 4,
      brand: "Duncan Hines",
      numReviews: 0,
    },

    {
      name: "Crisco All-Vegetable Shortening 48 oz",
      slug: "Crisco All-Vegetable Shortening 48 oz",
      price: 9.46,
      description: "Crisco All-Vegetable Shortening 48 oz",
      image:
        "https://i5.walmartimages.com/asr/a22e6a5c-0bc7-40a5-bca2-e4fac08c3333.c27dba841ee97df0d626bcc996f4fb9e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
      stock: 300,
      isDeleted: false,
      comments: [],
      category: "store",
      rating: 4,
      brand: "Crisco",
      numReviews: 0,
    },

    {
      name: "Great Value Vegetable Oil, 1 Gallon",
      slug: "Great Value Vegetable Oil, 1 Gallon",
      price: 9.58,
      description: "Great Value Vegetable Oil, 1 Gallon",
      image:
        "https://i5.walmartimages.com/asr/10cff47d-c24b-4e8d-8dd8-8c8d3c4377eb.52c6ed9708ab85493c145b1b47cbfa68.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
      stock: 729,
      isDeleted: false,
      comments: [],
      category: "store",
      rating: 4,
      brand: "Great Value",
      numReviews: 0,
    },

    {
      name: "Agro Corn Starch (Single Unit)",
      slug: "Agro Corn Starch (Single Unit)",
      price: 2.08,
      description: "GAgro Corn Starch (Single Unit)",
      image:
        "https://i5.walmartimages.com/asr/8f4b2db7-3d26-4821-98a6-55f3812f3e88_5.a82fecc21f0fc5149ae428cc024704d8.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
      stock: 321,
      isDeleted: false,
      comments: [],
      category: "store",
      rating: 4,
      brand: "Argo",
      numReviews: 0,
    },

    {
      name: "Nestle Toll House Semi Sweet Chocolate Baking Chips, 12 oz Bag",
      slug: "Nestle Toll House Semi Sweet Chocolate Baking Chips, 12 oz Bag",
      price: 3.13,
      description:
        "Nestle Toll House Semi Sweet Chocolate Baking Chips, 12 oz Bag",
      image:
        "https://i5.walmartimages.com/asr/a362b6b0-2eb6-45b8-9872-8cb000d67e95.4fbf16582a409dfb1059a98e74c9d5da.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
      stock: 183,
      isDeleted: false,
      comments: [],
      category: "store",
      rating: 4,
      brand: "Nestlé Toll House",
      numReviews: 0,
    },

    {
      name: "Great Value Honey, 12 oz",
      slug: "Great Value Honey, 12 oz",
      price: 3.94,
      description: "Great Value Honey, 12 oz",
      image:
        "https://i5.walmartimages.com/asr/c07e5a16-fb71-4313-a8e2-5a5561a9b3d3.9f104c3a50f0a5278dd722c470f6b9a9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
      stock: 300,
      isDeleted: false,
      comments: [],
      category: "store",
      rating: 4,
      brand: "Great Value",
      numReviews: 0,
    },

    {
      name: "Zulka Morena Pure Cane Sugar, 64 oz",
      slug: "Zulka Morena Pure Cane Sugar, 64 oz",
      price: 3.66,
      description: "Zulka Morena Pure Cane Sugar, 64 oz",
      image:
        "https://i5.walmartimages.com/asr/2b89a1e6-1144-40c9-bd9b-b1de1fade7b5.6fa00562a0ab6ee4d8092dd578c7afd2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
      stock: 35,
      isDeleted: false,
      comments: [],
      category: "store",
      rating: 4,
      brand: "Zulka",
      numReviews: 0,
    },

    {
      name: "HERSHEY'S Natural Unsweetened Ingredient, Gluten Free, No Preservatives",
      slug: "HERSHEY'S Natural Unsweetened Ingredient, Gluten Free, No Preservatives",
      price: 4.66,
      description:
        "HERSHEY'S Natural Unsweetened Ingredient, Gluten Free, No Preservatives",
      image:
        "https://i5.walmartimages.com/asr/fb54ea6c-282c-47de-8468-5969294819cb.67d152703f860ff522bf06011aa998ca.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
      stock: 46,
      isDeleted: false,
      comments: [],
      category: "store",
      rating: 4,
      brand: "Hershey's",
      numReviews: 0,
    },

    {
      name: "Eagle Brand Sweetened Condensed Milk, 14 oz",
      slug: "Eagle Brand Sweetened Condensed Milk, 14 oz",
      price: 2.86,
      description: "Eagle Brand Sweetened Condensed Milk, 14 oz",
      image:
        "https://i5.walmartimages.com/asr/bf8401f1-ec3d-4994-ae7d-f5a18fd845d7.d495903cb5ece9ffd81e266d42138287.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
      stock: 324,
      isDeleted: false,
      comments: [],
      category: "store",
      rating: 4,
      brand: "Eagle Brand",
      numReviews: 0,
    },

    {
      name: "Fisher Chopped Pecans, 16 Ounces",
      slug: "Fisher Chopped Pecans, 16 Ounces",
      price: 9.87,
      description: "Fisher Chopped Pecans, 16 Ounces",
      image:
        "https://i5.walmartimages.com/asr/d779d6fe-ec29-48a4-a323-1e73551a8254.a5ca434a357ba40be1c794d2b168eba6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
      stock: 20,
      isDeleted: false,
      comments: [],
      category: "store",
      rating: 4,
      brand: "Fisher",
      numReviews: 0,
    },

    {
      name: "Imperial Dragon Coconut Milk, 13.5 fl oz",
      slug: "Imperial Dragon Coconut Milk, 13.5 fl oz",
      price: 2.12,
      description: "Imperial Dragon Coconut Milk, 13.5 fl oz",
      image:
        "https://i5.walmartimages.com/asr/7d3affb3-c36d-4481-a62d-987d1948af77.a6fddb8a305bb9919c0b7048d816a1c1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      imageCategory:
        "https://2.bp.blogspot.com/-wricktez7OU/T3sWg0u44LI/AAAAAAAAAcg/WhiC48KWEww/s1600/GESTION+POR+CATEGORIAS+3.jpg",
      stock: 100,
      isDeleted: false,
      comments: [],
      category: "store",
      rating: 4,
      brand: "Imperial Dragon",
      numReviews: 0,
    },
  ],
};

export default data;
