import { MapPin } from 'phosphor-react'
import { LocaleContainer } from './style'

export function Locale() {
  return (
    <LocaleContainer>
      <MapPin size={22} weight="fill" />
      <p>Porto Alegre, RS</p>
    </LocaleContainer>
  )
}
