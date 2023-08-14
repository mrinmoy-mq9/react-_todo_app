import React from 'react'

const Hero = () => {
  return (
    <div className='max-w--full px-6'>
          <nav>
       <div className='shadow-sky-300 max-w-full h-[50] py-2 mt-1.5 flex justify-around'>
       <div className='text-orange-500  underline text-3xl flex items-center justify-center '>
       <img className='w-17  h-16 object-contain' src='https://www.pngmart.com/files/22/Finding-Nemo-PNG-Transparent-HD-Photo-1.png'/>
          
        </div>

        <ul className='flex justify-evenly items-center font-serif'>
          <li className='mx-1 p-2 text-center text-lg underline text-orange-500'>Find nimo</li>
          <li className='mx-1 p-2 text-center text-lg underline text-orange-500'>Profile</li>
          <li className='mx-1 p-2 text-center text-lg underline text-orange-500'>Friends</li>
          <li className='mx-1 p-2 text-center text-lg underline text-orange-500'>Nimo family</li>
        </ul>

        <div className=''>
          <form className=''>
            <input className='border border-3 p-1 border-orange-500' type='text' placeholder='search...' />
            <button className='p-1 border border-orange-500 border-3 my-2 bg-orange-500  text-base' > <img src=''/>buy it</button>
          </form>
        </div>
       </div>
      </nav>

        <div className='flex justify-between p-6'>
        
            <div className='p-6 m-auto h-[90%] flex flex-col justify-center items-center '> 
                <div className=' w-full flex justify-start items-center'>
                    <div className='px-6 py-3 rounded-3xl mb-2 text-orange-200 bg-indigo-500 text-lg font-serif'>followers 12300 k </div>
                    <div className='px-1 ml-2    mb-2  text-indigo-500 text-lg font-serif'>Views 300 k </div>
                    
                </div>
                

                <h1 className='text-semibold font-serif text-orange-500 text-6xl mb-3'>Finding Nimo in The Atlantic Ocean</h1>
                <p className='text-lg font-serif text-orange-400 tracking-wide'>Finding Nemo is a 2003 American computer-animated comedy-drama adventure film produced by Pixar Animation Studios for Walt Disney Pictures.</p>

                <button className='p-3 w-full bg-orange-500 text-2xl font-serif hover:bg-blue-500 mt-6 text-white'> Find Nimo </button>
            </div>

            <div className='w-full h-screen'> 
                <img className='w-full m-auto h-[90%]' src='https://images.pexels.com/photos/325045/pexels-photo-325045.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            </div>
        </div>
    </div>
  )
}

export default Hero



















