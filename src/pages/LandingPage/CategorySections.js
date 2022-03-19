import React from "react";
import CategorySection from "./CategorySection";

const CategorySections = (props) => {
  const categoriesData = [
    {
      categoryName: "Electronics",
      id: "1",
      items: [
        {
          id: "1.1",
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=470&hei=556&fmt=png-alpha&.v=1631652955000",
          title: "iPhone 13 Pro Max",
          price: 1200.99,
        },
        {
          id: "1.2",
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-27-cto-hero-202008?wid=627&hei=522&fmt=jpeg&qlt=95&.v=1594932848000",
          title: "27-inch iMac",
          price: 2499.99,
        },
        {
          id: "1.3",
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1632788573000",
          title: "14-inch MacBook Pro",
          price: 2499.99,
        },
        {
          id: "1.4",
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202104?wid=470&hei=556&fmt=p-jpg&qlt=95&.v=1617126613000",
          title: "12.9-inch iPad Pro",
          price: 1399.99,
        },
        {
          id: "1.5",
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKGE3_VW_34FR+watch-45-stainless-silver-cell-hermes7s_VW_34FR_WF_CO_GEO_CA+watch-face-45-hermes7s-orange_VW_34FR_WF_CO_GEO_CA?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1631657519000%2C1632200877000%2C1632278218000",
          title: "Apple Watch Hermes",
          price: 1909.99,
        },
        {
          id: "1.6",
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=470&hei=556&fmt=png-alpha&.v=1604709508000",
          title: "Airpods Max",
          price: 779.99,
        },
      ],
    },
    {
      categoryName: "Books",
      id: "2",
      items: [
        {
          id: "2.1",
          img: "https://images-na.ssl-images-amazon.com/images/I/41XC4j0HiQL._SX331_BO1,204,203,200_.jpg",
          title: "Shoe Dog",
          writer: "Phil Knight",
          price: 25.99,
        },
        {
          id: "2.2",
          img: "https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg",
          title: "Elon Musk",
          writer: "Ashlee Vance",
          price: 21.77,
        },
      ],
    },
    {
      categoryName: "Toys",
      id: "3",
      items: [
        {
          id: "3.1",
          img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR-G6laTR8ko5qnY-8ymV0LSlyAGz0apRnfBFACdMx1CLyoy07Oemw7P0fIVRObCIDl9-O8q3UD7eqLeYA1U7J3Oh7zzBw2U-hJCkWwW5YvPf8jZJ_iOcfHdg&usqp=CAE",
          title: "Batman - Justice League",
          price: 24.99,
        },
        {
          id: "3.2",
          img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-Dj1HMkAtBmlMCkphuLqMo0nMoAgXoWhw4H3GcByf-YxUDOLxkIiTU3Bw2lNPUWt5x-jU4u1ebaa-KkxDfaBGKNOFYADmevFsm1gRPB0&usqp=CAE",
          title: "Blaster Nerf Gun",
          price: 120.99,
        },
      ],
    },
    {
      categoryName: "Sports",
      id: "4",
      items: [
        {
          id: "4.1",
          img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ4k21o6jftFmQPqe0unLAq4YBAkY-f4t5Mf7V6uqC594F00K_LmtvIk0DAw3ladku-BLrqg44VeW7ZON5EGC_guOtXU2NmxqJpqF2Mf5Zf2L_TvWwjES6Y&usqp=CAE",
          title: "Foldable Treadmill",
          price: 550.99,
        },
        {
          id: "4.2",
          img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZgBS8jOrWLC6NcZ5uToCoZlvFRD5h7mW0ogpfavr3v80phdZwpNSA3OmiAsjSf85QGgDCgrz3sF691pd08mB_64x4N2b7_GauxH1BedZNw0mf5m55Zlyvzw&usqp=CAE",
          title: "Indoor Cycling",
          price: 699.99,
        },
      ],
    },
  ];

  const getCategorySections = () => {
    const categorySections = [];
    // console.log(categorySections);
    for (let i = 0; i < categoriesData.length; i++) {
      categorySections.push(
        <CategorySection
          key={categoriesData[i].id}
          category={categoriesData[i]}
        />
      );
    }
    return categorySections;
  };

  return <>{getCategorySections()}</>;
};

export default CategorySections;
