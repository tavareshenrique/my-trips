import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const PagesTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni iusto,
        saepe exercitationem, recusandae asperiores animi explicabo consequatur
        corrupti inventore quasi praesentium vitae quibusdam eius cumque
        excepturi hic dicta esse debitis architecto doloremque minus? Aut
        placeat, tempora, natus voluptates distinctio, repellat voluptas quasi a
        eveniet quaerat perferendis fugiat. Reiciendis, recusandae assumenda?
      </p>
    </S.Body>
  </S.Content>
)

export default PagesTemplate
