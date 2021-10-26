import theme from '../../styles/theme'
export interface Props {
  text: string
}

export const Hero = ({ text }: Props) => {
  return (
    <>
      <div className='wrapper' aria-hidden="true" >
        <img className='inner' aria-hidden="true" />
      </div>
      <h1>
        {text}
      </h1>


      <style jsx>{`
        .wrapper {
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

        .inner {
          display: block;
          background-image: url('/logo.png');
          background-position: center;
          background-repeat: no-repeat;
          background-size: 25%;
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
