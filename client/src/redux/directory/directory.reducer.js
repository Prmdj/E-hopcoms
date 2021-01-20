const INITIAL_STATE = {
  sections: [
    {
      title: "Leaves",
      imageUrl: "https://foodsguy.com/wp-content/uploads/2020/06/Leaves-We-Eat.jpg",
      id: 1,
      linkUrl: "shop/leaves",
    },
    {
      title: "DryFruits",
      imageUrl: "https://goodhomes.wwmindia.com/content/2020/aug/dry-fruits-11598613274.jpg",
      id: 2,
      linkUrl: "shop/dryfruits",
    },
    {
      title: "Pulses",
      imageUrl: "https://earthjustice.org/sites/default/files/styles/image_800x600/public/seeds_shutterstock_JoHo.jpg?itok=YXAIheex",
      id: 3,
      linkUrl: "shop/pulses",
    },
    {
      title: "Fruits",
      imageUrl: "https://frueat.in/wp-content/uploads/2019/06/Fresh-Fruit-Basket.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/fruits",
    },
    {
      title: "Vegetables",
      imageUrl: "https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images-medium-5/vegetable-basket-garry-gay.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/vegetables",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
