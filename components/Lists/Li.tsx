import React from 'react'
import theme from '../../styles/theme'

type Props = {
  children: React.ReactNode
}
export const Li = ({ children }: Props) => {
  return (<>
    <li>
      {children}
    </li>
    <style jsx>{`
        li {
          padding-bottom: ${theme.space.xs}px;
          width: calc(100% - ${theme.space.md * 2}px);
        }
    `}</style>
  </>)
}