import { createContext, ReactNode, useReducer } from 'react'
import { Item } from '../interfaces/Item'
import { Address } from '../interfaces/Address'
import { cartReducer } from './../reducers/cart/reducer'
import {
  AddProductAction,
  IncrementItemQuantityAction,
  DecrementItemQuantityAction,
  ExcludeItemAction,
  CheckOutAction,
  PaymentMethodAction,
} from '../reducers/cart/actions'
import { CartState } from '../interfaces/Cart'

interface CartContextType {
  cartStateData: CartState
  addItem: (item: Item) => void
  IncrementItemQuantity: (itemId: number) => void
  DecrementItemQuantity: (itemId: number) => void
  excludeItem: (itemId: number) => void
  checkOut: (Address: Address) => void
  paymentMethodCheckOut: (paymentMethod: string) => void
}

// Criando o contexto
export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cartStateData: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0'
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    }
  )

  function addItem(item: Item) {
    dispatch(AddProductAction(item))
  }

  function IncrementItemQuantity(itemId: number) {
    dispatch(IncrementItemQuantityAction(itemId))
  }

  function DecrementItemQuantity(itemId: number) {
    dispatch(DecrementItemQuantityAction(itemId))
  }

  function excludeItem(itemId: number) {
    dispatch(ExcludeItemAction(itemId))
  }

  function checkOut(Address: Address) {
    dispatch(CheckOutAction(Address))
  }

  function paymentMethodCheckOut(paymentMethod: string) {
    dispatch(PaymentMethodAction(paymentMethod))
  }

  return (
    <CartContext.Provider
      value={{
        cartStateData: cartState,
        addItem,
        IncrementItemQuantity,
        DecrementItemQuantity,
        excludeItem,
        checkOut,
        paymentMethodCheckOut,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
