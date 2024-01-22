const cart = [];

const handlecart = (state = cart, action) => {
  const product = action.payload

  switch(action.type){
    case "ADDITEM":
      const exits = state.find((x) => x.id === product.id)
      if(exits){
        return state.map((x) => x.id === product.id?{...x, qty: x.qty+1} : x)
      }
      else{
        return [...state, {...product, qty:1}]
      }
    break;
    case "DELITEM":
      const exits2 = state.find((x) => x.id === product.id)
      if(exits2.qty === 1){
        return state.filter((x) => x.id !== exits2.id)
      }
      else{
        return state.map((x) => x.id === product.id?{...x, qty: x.qty-1} : x)
      }
    break;
    default:
      return state
      break;
  }
}

export default handlecart