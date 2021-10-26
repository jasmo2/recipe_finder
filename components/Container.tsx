import theme from '../styles/theme'

export interface Props {
  children: React.ReactNode
}
export const Container = ({ children }: Props) => {
  return <>
    <div>{children}</div>
    <style jsx>{`
    div {
      margin: 0 auto;
      max-width: ${theme.sizes.container}px;
    }
    `}</style>
  </>
}
