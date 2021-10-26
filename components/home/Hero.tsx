import theme from '../../styles/theme'
export interface Props {
  text: string
}

export const Hero = ({ text }: Props) => {
  return (
    <>
      <img className='9-16' aria-hidden="true" />
      <h1>
        {text}
      </h1>


      <style jsx>{`
        img: {
          align-items: center;
          background-image: url('/home-background.jpg');
          background-position: center bottom;
          background-repeat: no-repeat;
          background-size: cover;
          box-sizing: border-box;
          display: flex;
          height: 0;
          justify-content: center;
          padding-bottom: ${theme.aspectRatios['9-16'] * 100}%;
          position: relative;
          width: 100%;
        }

        img:after {
          display: block;
          background-size: 30%;
          background: url('/logo.png') no-repeat center;
          content: '';
          height: 100%;
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
        }
        h1 {
          color: ${theme.colors.grey};
          margin-bottom: ${theme.space.md}px;
          margin-top: ${theme.space.md}px;
          text-align: center;
        }
      `}</style>
    </>
  )
}
