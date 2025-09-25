import React from 'react';
import Newsletter from '../NewsLetterSection/NewsLetter'
import footerImg from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <footer className='bg-[#06091A]'>
        <div className='max-w-[1280px] relative mx-auto  space-y-3 '>
            {/* Subscribe to our Newsletter */}
          <div className='absolute w-full top-[-150px]'>
            <Newsletter></Newsletter>
          </div>
          <div className='pt-[170px]'>
            <div className='flex justify-center items-center'>
              <img src={footerImg} alt="" />
            </div>
            <div className="footer md:footer-horizontal justify-between text-neutral-content p-10">
              <nav>
                <h6 className="text-white font-semibold text-[18px]">About Us</h6>
                <p className='text-[#ffffff99] md:w-[350px] w-auto'>We are a passionate team dedicated to providing the best services to our customers.</p>
              </nav>
              <nav className='space-y-2'>
                <h6 className="text-white font-semibold text-[18px]">Quick Links</h6>
                <ul className='list-disc space-y-2'>
                  <li className='ml-5'><a className="link link-hover">Home</a>
                  </li>
                  <li className='ml-5'><a className="link link-hover">Services</a>
                  </li>
                  <li className='ml-5'><a className="link link-hover">About</a>
                  </li>
                  <li className='ml-5'><a className="link link-hover">Contact</a>
                  </li>

                </ul>
              </nav>
              <nav className='space-y-2'>
                <h6 className="text-white font-semibold text-[18px]">Subscribe</h6>
                <p className='text-[#ffffff99]'>Subscribe to our newsletter for the latest updates.</p>
                <div className='flex flex-col lg:flex-row'>
                  <input type="text" placeholder="Enter your email" className="px-6 py-2  text-[#131313] bg-white text-xl border-[#13131326] rounded-l-xl border-r-0" />
                  <button className=" border-l-0 px-6 py-2 font-bold
                rounded-r-xl border-amber-300
                text-[#131313]
                bg-gradient-to-r from-pink-300  to-yellow-200
                shadow-md"
                  >Subscribe
                  </button>
                </div>
              </nav>
            </div>
          </div>

        </div>
        <div className="footer bg-[#06091A] sm:footer-horizontal footer-center  text-[#ffffff99] p-4">
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
          </aside>
        </div>
      </footer>
    );
};

export default Footer;