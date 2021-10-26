import theme from '../../styles/theme'
import { H } from '../Typography/H'
import { Li } from './Li'

export type Props = {
  title: string,
  instructions: string[]
}

export const Instructions = ({ instructions, title }: Props) => {
  // console.log("TCL ~ file: Instructions.tsx ~ line 10 ~ Instructions ~ instructions", instructions)

  return (
    <section className='detail-instructions'>
      <H variant="h2">
        {title}
      </H>
      <ul >
        {instructions.map((line, index) => (
          <Li key={index}>
            {line}
          </Li>
        ))}
      </ul>

      <style jsx>{`
        .detail-instructions{
          margin: ${theme.space.md}px 0;
        }
      `}</style>
    </section>
  )
}
