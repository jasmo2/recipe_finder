import React from 'react'
import theme from '../../styles/theme'

type Props = {
  variant: 'h2' | 'h3',
  children: React.ReactNode
}

const Variant = ({ variant, children }: Props) => {
  switch (variant) {
    case 'h2':
      return <h2>{children}</h2>
    case 'h3':
      return <h3>{children}</h3>
    default:
      break
  }
}

export const H = ({ variant, children }: Props) => {
  return (<>
    <Variant variant={variant}>
      {children}
    </Variant>

    <style jsx global>{`
    h2 {
      color: ${theme.colors.black};
      display: block;
      font-size: ${theme.fontSizes.h2}px;
      overflow: hidden;
      text-align: center;
      text-overflow: ellipsis;
      white-space: pre;
      width: 100%;
    }

    h3 {
      color: ${theme.colors.black};
      font-family: ${theme.fonts.body}px;
      font-size: ${theme.fontSizes.h3}px;
      font-style: italic;
      font-weight: 600;
      letter-spacing: 0.1em;
      width: 100%;
    }
  `}</style>
  </>

  )
}