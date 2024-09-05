import { Product } from '../../interfaces/Product'
import { ProductCart } from '../../interfaces/ProductCart'

export function productToProductCart(product: Product): ProductCart {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    imageUrl: product.image,
    quantity: 1,
  }
}
