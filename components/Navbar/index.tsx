import css from 'styled-jsx/css'
import theme from '../../styles/theme'
import { Search } from './Search'

type variants = 'search' | 'default'

type Props = {
  variant?: variants
}

function Nav({ variant }: Props) {
  switch (variant) {
    case 'search': {
      return <Search />
    }
    default:
      return null
  }
}

export const Navbar = ({ variant }: Props) => {
  return (
    <>
      <Nav variant={variant} />
      <style jsx global>{`
        nav {
          background: ${theme.colors.grey};
          left: 0;
          padding: 0 ${theme.space.sm}px;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1;
        } 
    `}</style>
    </>
  )
}

