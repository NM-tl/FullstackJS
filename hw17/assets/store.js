export const products = Array.from({ length: 12 }, (_, i) => ({
    title: 'Graphic Design',
    description: 'English Department',
    price: '16.48',
    discount: '6.48',
    img: `./public/products/p${i + 1}.png`,
}));

export const categories = Array.from({ length: 5 }, (_, i) => ({
    title: 'Cloths',
    counter: 5,
    img: `./public/categories/${i + 1}.png`,
}));

const partnerImageNames = ['hooli', 'lya', 'hat', 'stripe', 'aws', 'reddit', ];

export const partners = partnerImageNames.map((imageName, i) => ({
    img: `./public/partners/${imageName}.png`,
}));