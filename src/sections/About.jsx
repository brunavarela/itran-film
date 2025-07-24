import Header from './Header';
import IconeTitle from '../assets/icone-title.png';
import ImgAbout1 from '../assets/img-about-1.png';
import ImgAbout2 from '../assets/img-about-2.png';

const About = () => {

  return (
    <>
      <div className='overflow-auto flex h-full pt-15 lg:pt-[100px] lg:pb-9 lg:gap-18 gap-12 flex-col items-center bg-[#C2C2C2]'>
            <div className='flex justify-center gap-3'>
                <img
                    src={IconeTitle}
                    alt="Icone do titulo"
                    className="w-6 h-auto object-contain"
                />
                <h1 className='text-black text-3xl font-thin'>SOBRE</h1>
                <img
                    src={IconeTitle}
                    alt="Icone do titulo"
                    className="w-6 h-auto object-contain"
                />
            </div>
            <div className='w-full flex flex-col justify-center lg:flex-row gap-8 lg:gap-[66px] pb-32 lg:pb-0'>
                <div className='flex flex-col items-center gap-8 lg:gap-13'>
                    <p className='max-w-[350px] text-xs text-center lg:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                    <img
                        src={ImgAbout2}
                        alt="Imagem com a camera" 
                        className="w-full lg:w-[324px] h-auto object-contain"
                    />
                </div>
                <div className='flex flex-col-reverse items-center lg:flex-col gap-8 lg:gap-13'>
                    <img
                        src={ImgAbout1}
                        alt="Outra imagem com a camera"
                        className="w-full lg:w-[324px] h-auto object-contain"
                    />
                    <p className='text-center lg:text-right max-w-[350px] text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                </div>
            </div>
      </div>
  
      <Header />
    </>
  );
};

export default About;


