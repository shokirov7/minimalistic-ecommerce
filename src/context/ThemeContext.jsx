import React, { createContext, useReducer, useState, useEffect } from "react";

const Context = createContext();

function ThemeContext({ children }) {
  const themeChange = (state, action) => {
    switch (action.type) {
      case "SET_PENDING":
        return { ...state, pending: action.payload };
      case "SET_PENDING2":
        return { ...state, pending2: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(themeChange, {
    pending: false,
    pending2: true,
  });

  const changePending = (alo) => {
    dispatch({
      type: "SET_PENDING",
      payload: alo,
    });
  };

  const changePending2 = (alo) => {
    dispatch({
      type: "SET_PENDING2",
      payload: alo,
    });
  };

  const [cartItems, setCartItems] = useState([]);
  const [itemValue, setItemValue] = useState(1);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []); // Пустой массив зависимостей, чтобы этот хук выполнялся только один раз при монтировании компонента

  return (
    <Context.Provider
      value={{
        ...state,
        changePending,
        changePending2,
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ThemeContext, Context };
