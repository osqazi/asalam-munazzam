import Image from 'next/image';
import Header from '../app/components/Header';
import RightToLeftMarquee from './components/LeftToRight';
import LeftToRightMarquee from './components/RightToLeft';
import hero from '@/public/hero.jpg'
import HomeSection from './components/HomeSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Header */}
      <Header />
      {/* <div>
        <Partners/>
      </div> */}
<div className='pt-12'>
  <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
             Our Trusted Dependent Hajj Companies (DHCs)
           </h2>
           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             Cluster of leading organizations to provide you with the best Hajj experience
           </p>
         </div>
  <RightToLeftMarquee />

  <LeftToRightMarquee />
</div>
<div className='py-8'>
  <div className='h-auto py-4 bg-amber-400 text-center text-white md:flex md:justify-center md:items-center md:gap-10'>
    <p className='text-3xl md:text-4xl font-bold mb-2 md:mb-0'>
      HAJJ 2026
    </p>
    <p className='text-2xl md:text-4xl font-bold'>
      حج ۱۴۴۷ ہجری
    </p>
  </div>
  <div className='relative w-full'>
    <Image 
      src={hero}
      alt='Hajj 2026 - حج ۱۴۴۷ ہجری'
      className='w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover'
      priority // For above-the-fold images
    />
  </div>
</div>
<HomeSection/>
      
      
    </div>
  );
}