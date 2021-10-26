import Link from 'next/link'
import { Image } from '../Image'

import theme from '../../styles/theme'

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
          <h2>{title}</h2>

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
      h2 {
        display: block;
        font-size: ${theme.fontSizes.h2}px;
        max-width: 80%;
        overflow: hidden;
        text-align: center;
        text-overflow: ellipsis;
        white-space: pre;
      }
      `}</style>
    </>
  )
}
