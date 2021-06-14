import TextSmall from 'components/TextSmall'
import TitleItem, { TitleItemProps } from 'components/TitleItem'
import { toneProps } from 'types/tone'
import TextLimited from 'components/TextLimited'

import * as S from './styles'
import ButtonIcon from 'components/ButtonIcon'
import MediaMatch from 'components/MediaMatch'
import ActiveLink from 'components/ActiveLink'

export type CardProps = toneProps &
  TitleItemProps & {
    icon?: string
    subtitle?: string
    text?: string
    buttonText?: string
    buttonLink?: string
  }

const Card = ({
  tone,
  icon = 'images/iconintegral.svg',
  title = 'Title Card',
  subtitle = 'Subtitle card',
  text = 'Text Card',
  buttonText = 'Button',
  buttonLink = '#'
}: CardProps) => (
  <S.Wrapper>
    <S.Icon tone={tone}>
      <ActiveLink href={buttonLink}>
        <a>
          <img src={icon} alt={title} />
        </a>
      </ActiveLink>
    </S.Icon>

    <S.Title>
      <ActiveLink href={buttonLink}>
        <a>
          <TitleItem title={title} tone={tone} />
        </a>
      </ActiveLink>
    </S.Title>

    <MediaMatch method="greaterThan" medias="desk">
      <S.Subtitle>
        <TextSmall text={subtitle} />
      </S.Subtitle>
    </MediaMatch>

    <MediaMatch method="greaterThan" medias="desk">
      <S.Text>
        <TextLimited text={text} limit={174} />
      </S.Text>
    </MediaMatch>

    <MediaMatch method="greaterThan" medias="desk">
      <S.ButtonGroup>
        <S.ButtonText>{buttonText}</S.ButtonText>

        <S.ButtonIcon>
          <ButtonIcon
            tone={tone}
            manner="internal"
            link={buttonLink}
            size="medium"
            icon="arrowRight"
          />
        </S.ButtonIcon>
      </S.ButtonGroup>
    </MediaMatch>
  </S.Wrapper>
)

export default Card