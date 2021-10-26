import Link from 'next/link'
import Image from 'next/image'

import theme from '../../styles/theme'

interface Props {
  title: string
  src: string
  url: string
}

export const Card = ({ title, src, url }: Props) => {
  console.log("TCL ~ file: Card.tsx ~ line 13 ~ Card ~ image", src)
  return (
    <>
      <Link href={url} passHref>
        <a title={title}>
          <h2>{title}</h2>
          <div className='img-wrapper'>
            <Image
              alt={title}
              layout='fill'
              src={src}
            />
          </div>
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
      .img-wrapper {
        display: block;
        height: 0;
        padding-bottom: ${theme.aspectRatios['9-16'] * 100}%;
        position: relative;
        width: 100%;
      }
    `}</style>
      <style jsx global>{`
      .img-wrapper img {
        object-fit: cover;
      }
    `}</style>
    </>
  )
}
