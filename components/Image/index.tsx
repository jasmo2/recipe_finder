import ImageNext from 'next/image'
import theme from '../../styles/theme'

interface Props {
  title: string
  src: string
}
export const Image = ({ title, src }: Props) => {
  return (<>
    <div className='img-wrapper'>
      <ImageNext
        alt={title}
        layout='fill'
        src={src}
      />
    </div>

    <style jsx global>{`
        .img-wrapper {
          display: block;
          height: 0;
          padding-bottom: ${theme.aspectRatios['9-16'] * 100}%;
          position: relative;
          width: 100%;
        }
      .img-wrapper img {
        object-fit: cover;
      }
    `}</style>
  </>)
}