import Link from 'next/link'
import { Image } from '../Image'

import theme from '../../styles/theme'
import { H } from '../Typography/H'

interface Props {
  title: string
  src: string
  url: string
}

export const Card = ({ title, src, url }: Props) => {
  return (
    <>
      <Link href={url} passHref>
        <a title={title}>
          <H variant='h2'>{title}</H>
          <Image
            title={title}
            src={src}
          />
        </a>
      </Link>

      <style jsx>{`
      a {
        align-items: center;
        color: ${theme.colors.black};
        cursor: pointer;
        display: flex;
        flex-direction: column;
        text-decoration: none;
      }
      `}</style>
    </>
  )
}
