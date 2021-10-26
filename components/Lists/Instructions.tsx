import { Recipe } from '../../api'
import { H } from '../Typography/H'

export type Props = {
  title: string,
  instructions: string[]
}

export const Instructions = ({ instructions, title }: Props) => {
  console.log("TCL ~ file: Instructions.tsx ~ line 10 ~ Instructions ~ instructions", instructions)

  return (
    <>
      <H variant="h2">
        {title}
      </H>
      <ul >
        {instructions.map((line, index) => (
          <li key={index}>
            {line}
          </li>
        ))}
      </ul>

      <style jsx>{``}</style>
    </>
  )
}
