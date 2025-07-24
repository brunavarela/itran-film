import { useEffect, useState } from 'react';
import LogoFull from '../assets/Logo-full.png';
import bgMobile from '../assets/bg-mobile.png';
import bgDesktop from '../assets/bg-desktop.png';
import Header from './Header';

const Hero = () => {
  const [bgImage, setBgImage] = useState(bgMobile);

  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth >= 1024 ? bgDesktop : bgMobile);
    };

    handleResize(); // já checa na montagem
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="h-screen w-full flex items-center justify-center"
      >
        <img
          src={LogoFull}
          alt="Logo completa"
          className="w-[196px] h-auto object-contain"
        />
      </div>
      <Header />
    </>
  );
};

export default Hero;


// import { useEffect, useState } from 'react';
// import LogoFull from '../assets/Logo-full.png';
// import Header from './Header';
// import videoMobile from '../assets/bg-mobile.mp4';
// import videoDesktop from '../assets/bg-desktop.mp4';

// const Hero = () => {
//   const [videoSrc, setVideoSrc] = useState(videoMobile);

//   useEffect(() => {
//     const handleResize = () => {
//       setVideoSrc(window.innerWidth >= 1024 ? videoDesktop : videoMobile);
//     };

//     handleResize(); // já define o certo ao montar
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <>
//       <div className="relative h-screen w-full overflow-hidden">
//         {/* vídeo no fundo */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           src={videoSrc}
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
        
//         {/* conteúdo acima do vídeo */}
//         <div className="relative z-10 flex items-center justify-center h-full">
//           <img
//             src={LogoFull}
//             alt="Logo completa"
//             className="w-[118px] lg:w-[158px] h-auto object-contain"
//           />
//         </div>
//       </div>
//       <Header />
//     </>
//   );
// };

// export default Hero;
