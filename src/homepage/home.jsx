import image from '../assets/qq.png';
import { useNavigate } from 'react-router-dom';

function Home(){
     const navigate=useNavigate();
    return (

        <div
          className="w-screen h-screen bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${image})` }}
        >
            <div className="flex justify-between items-center bg-white/10 border-b border-white/10 px-6 py-4 mx-auto">
                <h1 className='text-white text-3xl animate-fadeIn'>Shutter Stock</h1>
                <div className="flex justify-between items-center px-5 py-5">
                    <p
                    onClick={()=>navigate("/homee")}
                    className='bg-transparent  text-white px-6 py-2 cursor-pointer  hover:underline text-2xl '>Home</p>
                    <p
                    onClick={()=>navigate("/products")}
                    className='bg-transparent  text-white px-6 py-2  cursor-pointer hover:underline text-2xl'>Products</p>
                    <p
                    onClick={()=>navigate("/contactus")}
                    className='bg-transparent  text-white px-6 py-2  cursor-pointer hover:underline text-2xl'>Contact US</p></div>

                <div className="space-x-4  ">

                    <button
                    onClick={()=>navigate("/signup")}
                    className='bg-transparent border-2 rounded-[10px] cursor-pointer hover:scale-105 transition-transform duration-200 hover:bg-white/20 text-white px-6 py-2'>
                      Sign Up
                    </button>
                    <button
                    onClick={()=>navigate("/login")}
                    className='bg-transparent border-2 cursor-pointer rounded-[10px] hover:scale-105 transition-transform duration-200 hover:bg-white/20 text-white px-6 py-2'>
                      Login
                    </button>



                </div>
            </div>
            <div className='centre'>
                <h1 className=' text-white text-6xl mt-30 px-6'>Landing Page</h1>
                <h1 className=' text-white text-3xl text px-6'>Creative design</h1>
                <p className="text-white/80 text-lg leading-relaxed max-w-xl mt-6 px-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, quo libero? Eaque
                    dolore porro, minus ut libero excepturi harum quibusdam commodi et delectus nemo impedit quaerat ab tempore, ad temporibus.</p>
            </div>
            <div className='px-6 my-3 space-x-4'>
                <button
                onClick={()=>navigate("/trial")}
                className='bg-transparent border-2 rounded-[10px] cursor-pointer hover:scale-105 transition-transform duration-200 hover:bg-white/20 text-white px-6 py-2'>
                      Trial
                    </button>
                    <button
                    onClick={()=>navigate("/premium")}
                    className='bg-transparent border-2  border-white cursor-pointer rounded-[10px] backdrop-blur hover:bg-yellow-200 hover:scale-105 transition-transform duration-200 hover:bg-white/20 text-white hover:text-black px-6 py-2'>
                      Premium
                    </button>
            </div>
            <div className="flex justify-between items-center px-10 py-6 text-white text-sm mt-40">
        <div className="flex space-x-6">
          <p>Legal</p>
          <p>Privacy Center</p>
          <p>Cookie</p>
          <p>About Ads</p>
        </div>
        <p>© 2010 Shutter Stock</p>
      </div>
        </div>
    )
}

export default Home
