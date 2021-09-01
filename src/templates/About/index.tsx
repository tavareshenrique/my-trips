import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ducimus
        veritatis ab. Inventore a unde optio ipsum reiciendis temporibus ipsam
        amet magni distinctio est modi excepturi consequatur, facere corrupti
        expedita culpa dicta pariatur delectus atque provident! Animi optio
        asperiores dolorem odio quidem, ipsam pariatur laborum ratione quasi
        fugiat, impedit nostrum!
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
