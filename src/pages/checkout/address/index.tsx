import { MapPinLine } from 'phosphor-react'
import {
  AddressCard,
  AddressContainer,
  AddressForm,
  AddressLabel,
} from './style'
import { InputText } from '../../../components/form/input'

export function Address() {
  return (
    <AddressContainer>
      <h2>Complete seu pedido</h2>
      <AddressCard>
        <AddressLabel>
          <MapPinLine size={22} />
          <div>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido </p>
          </div>
        </AddressLabel>
        <AddressForm>
          <InputText
            placeholder="CEP"
            type="text"
            containerProps={{ style: { gridArea: 'cep' } }}
          />
          <InputText
            placeholder="Rua"
            type="text"
            containerProps={{ style: { gridArea: 'street' } }}
          />
          <InputText
            placeholder="Número"
            type="text"
            containerProps={{ style: { gridArea: 'number' } }}
          />
          <InputText
            placeholder="Complemento"
            type="text"
            containerProps={{ style: { gridArea: 'fullAddress' } }}
            optional
          />
          <InputText
            placeholder="Bairro"
            type="text"
            containerProps={{ style: { gridArea: 'neighborhood' } }}
          />
          <InputText
            placeholder="Cidade"
            type="text"
            containerProps={{ style: { gridArea: 'city' } }}
          />
          <InputText
            placeholder="UF"
            type="text"
            containerProps={{ style: { gridArea: 'state' } }}
          />
        </AddressForm>
      </AddressCard>
    </AddressContainer>
  )
}
