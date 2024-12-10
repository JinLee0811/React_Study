import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className='flex flex-col items-center justify-center mt-8 mb-8 md:mb-16'>
      <img
        className='object-contain mb-8 w-44 h-44'
        src={logo}
        alt='A canvas'
      />
      <h1 className='text-xl font-semibold tracking-widest text-center uppercase text-[#9a3412] font-pacifico m-0 md:text-4xl'>
        ReactArt
      </h1>
      <p className='text-center text-[#a39191] m-0'>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
