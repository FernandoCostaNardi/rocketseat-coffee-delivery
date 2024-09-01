import { Item } from './item'
import { ItemsContainer, ItemsTitle, ListItemContainer } from './style'

export function Items() {
  return (
    <ItemsContainer>
      <ItemsTitle>Nossos cafés</ItemsTitle>
      <ListItemContainer>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ListItemContainer>
    </ItemsContainer>
  )
}
