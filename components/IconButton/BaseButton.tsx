

import theme from '../../styles/theme'
import {
  BackArrow,
  Heart,
  HeartFilled,
  Search
} from '../Icons'

export interface Props extends React.HTMLAttributes<HTMLElement> {
  color?: 'gray' | 'red',
  icon: 'heart' | 'heart-filled' | 'back-arrow' | 'search',
}

export const IconButton = ({ icon, color, ...props }: Props) => {
  const iconButtonSize = 65
  return (
    <>
      <button type="button" {...props}>
        <Icon icon={icon} />
      </button>

      <style jsx>{`
        button {
          align-items: center;
          background: ${defaultColor(color)};
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          font-size: 42px;
          height: ${iconButtonSize}px;
          justify-content: center;
          padding: 0;
          width: ${iconButtonSize}px;
        }
     `}</style>
    </>
  )
}

function Icon({ icon }: Pick<Props, 'icon'>) {
  const { colors: { white } } = theme
  switch (icon) {
    case 'heart':
      return <Heart fill={white} />

    case 'heart-filled':
      return <HeartFilled fill={white} />

    case 'back-arrow':
      return <BackArrow fill={white} />

    case 'search':
      return <Search fill={white} />

    default:
      return null
  }
}


function defaultColor(color: string) {
  if (color === 'red') {
    return theme.colors.red
  }
  return theme.colors.grey
}