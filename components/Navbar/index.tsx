import { Recipe } from '../../api'
import { BackNFavorite } from './BackNFavorite'
import { Search } from './Search'

import theme from '../../styles/theme'
type variants = 'search' | 'back&favorite' | 'back' | undefined

type Props = {
  variant?: variants
  recipe?: Recipe
}

function Nav({ variant, recipe }: Props) {
  switch (variant) {
    case 'search': {
      return <Search />
    }
    case 'back&favorite':
    case 'back':
    default:
      return (
        <div className='nav-wrapper'>
          <BackNFavorite recipe={recipe} />
        </div>
      )
  }
}

export const Navbar = ({ variant, ...props }: Props) => {
  return (
    <>
      <Nav variant={variant} {...props} />
      <style jsx global>{`
        .nav-wrapper {
          width: 100%;
          height: ${theme.sizes.navbar}px;
        }
        nav {
          background: ${theme.colors.grey};
          display: flex;
          justify-content: space-between;
          left: 0;
          padding: 0 ${theme.space.sm}px;
          position: fixed;
          top: 0;
          width: calc(100% - ${theme.space.sm * 2}px);
          z-index: 1;
        } 
    `}</style>
    </>
  )
}

