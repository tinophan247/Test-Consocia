//fake data product
const createProductData = (id, img, name ,price) => {
    return { id, img, name ,price };
  };
  
  export const productDatas = [
    createProductData(1, 'https://dohieuus.com/wp-content/uploads/2021/08/4.jpeg', 'Bleu De Chanel',100),
    createProductData(2, 'https://theperfume.vn/wp-content/uploads/2021/05/review-dior-sauvage.jpg', 'Dior Sauvage',110),
    createProductData(3, 'https://myphamau.com/wp-content/uploads/2020/07/N%C6%B0%E1%BB%9Bc-Hoa-Nam-Giorgio-Armani-Acqua-Di-Gi%C3%B2-for-Men-100ml-Full-Box.jpg', 'Acqua Di Gio',120),
    createProductData(4, 'https://missluxury.vn/wp-content/uploads/2022/08/nuoc-hoa-nam-jean-paul-gaultier-ultra-male-3-jpg-1623324018-10062021182018.jpg', 'JPG Ultra Male',130),
    createProductData(5, 'https://file.hstatic.net/200000315285/file/santal-33-lelabo-2_6560e93481cf4ce98bfd66aa3cc23ac5_grande.jpg', 'Le Labo Santal 33',200),
    createProductData(6, 'https://clmensstore.com/wp-content/uploads/2021/04/Creed-Aventus-802x1024.jpg', 'Creed Aventus',210),
    createProductData(7, 'https://theperfume.vn/wp-content/uploads/2021/08/nuoc-hoa-ysl-y-1.jpg', 'YSL Y',150),
    createProductData(8, 'https://mifashop.net/wp-content/uploads/2022/10/Nuoc-hoa-nam-Versace-Eros-Parfum-mifashop-1.jpg', 'Versace Eros',115),
];

export const defaultProduct = {
    id : 0,
    img : '',
    name : '',
    price :0
}