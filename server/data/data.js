const sliderItems = [
    {
        id: 1,
        img: "/assets/slider1.png",
        title: "SUMMER SALE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    },
    {
        id: 2,
        img: "/assets/slider2.png",
        title: "AUTUMN COLLECTION",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    },
    {
        id: 3,
        img: "/assets/slider3.png",
        title: "LOUNGEWEAR LOVE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    },
];

const categories = [
    {
        id: 1,
        img: "/assets/category1.webp",
        title: "SHIRT STYLE!",
        cat: "woman",
    },
    {
        id: 2,
        img: "/assets/category2.jpg",
        title: "LOUNGEWEAR LOVE",
        cat: "coat",
    },
    {
        id: 3,
        img: "/assets/category3.jpg",
        title: "LIGHT JACKETS",
        cat: "jeans",
    },
];

const popularProducts = [
    {
        title: "Nike T-Shirt",
        desc: "test",
        img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
        categories: ["woman"],
        size: ["XS", "L"],
        color: ["White"],
        price: 30,
    },
    {
        title: "Adidas T-Shirt",
        desc: "test",
        img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
        categories: ["woman"],
        size: ["M", "L"],
        color: ["Yellow"],
        price: 30,
    },
    {
        title: "Flower T-Shirt",
        desc: "test",
        img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
        categories: ["woman"],
        size: ["XL", "XXL"],
        color: ["Black"],
        price: 30,
    },
    {
        title: "Green T-Shirt",
        desc: "test",
        img: "/assets/popular4.png",
        categories: ["woman"],
        size: ["XS", "L"],
        color: ["Green", "Black"],
        price: 30,
    },
    {
        title: "Bag",
        desc: "test",
        img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
        categories: ["woman"],
        size: ["XS", "S", "M"],
        color: ["Red", "Green"],
        price: 90,
    },
    {
        title: "Hat",
        desc: "test",
        img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
        categories: ["woman", "jeans"],
        size: ["M", "L", "XL"],
        color: ["Black", "Teal"],
        price: 20,
    },
    {
        title: "Jacket",
        desc: "test",
        img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
        categories: ["woman"],
        size: ["XL", "XXL"],
        color: ["Teal", "White"],
        price: 45,
    },
];

module.exports = { popularProducts, categories, sliderItems };
