import React from 'react';
import Header from './Header';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <>
      <Header />
      <div className='home'>
        <div className='home__container'>
          <img className='home__image' src="Home-5.jpg" alt='' />
          <div className='home__row'>

            <Product id="12321341" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" price={29.99} image="Pr-LeanStartup .jpg" rating={5} />

            <Product id="49538094" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixwe with k-beater, Dough Hook Whisk, 5 Litres Glass Bowl" price={299.0} image="Pr-kMixer.jpg" rating={4} />

          </div>
          <div className='home__row'>

            <Product id="49526094" title="Neutrogena Makeup Remover Facial Cleansing Towelette Singles, Daily Face Wipes Remove Dirt, Oil, Makeup & Waterproof Mascara, Gentle, Individually Wrapped, 100% Plant-Based Fibers, 20 ct" price={5.96} image="Pr-makeupRemover.jpg" rating={3} />

            <Product id="49528094" title="Philips Norelco Multigroomer All-in-One Trimmer Series 3000, 13 Piece Mens Grooming Kit, for Beard, Face, Nose, and Ear Hair Trimmer and Hair Clipper, NO Blade Oil Needed, MG3750/60" price={19.96} image="Pr-trimmer.jpg" rating={5} />

            <Product id="49530094" title="Philips Sonicare Genuine C2 Optimal Plaque Control Toothbrush Heads, 3 Brush Heads, White, HX9023/65" price={24.29} image="Pr-toothBrush.jpg" rating={5} />

          </div>
          <div className='home__row'>

            <Product id="49545094" title="SAMSUNG 65-Inch Class QLED Q60A Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN65Q60AAFXZA, 2021 Model)" price={300.00} image="Pr_LED.jpg" rating={4} />

          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
