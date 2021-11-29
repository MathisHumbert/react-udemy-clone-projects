const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false };
  }

  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE_ITEM') {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    console.log('test');
    return { ...state, cart: tempCart };
  }

  if (action.type === 'ADD_ONE') {
    const tempCart = state.cart.map((item) => {
      if (item.id === action.payload)
        return { ...item, amount: item.amount + 1 };
      return item;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === 'REMOVE_ONE') {
    const tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload)
          return { ...item, amount: item.amount - 1 };
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === 'GET_TOTALS') {
    const { total, amount } = state.cart.reduce(
      (acc, curr) => {
        acc.amount += curr.amount;
        acc.total += curr.amount * curr.price;
        return acc;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    return { ...state, total: parseFloat(total.toFixed(2)), amount };
  }
};

export default reducer;
