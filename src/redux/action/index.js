// For Add Item to Cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// For Add Item From Cart
export const deleteCart = (product) => {
    return {
        type: "DELETEITEM",
        payload: product
    }
}