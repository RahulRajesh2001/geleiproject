import React, { useRef, useState } from 'react'
import homepageimg from '../assets/homepageimg.png'
import button from '../assets/explorenowbutton.png'

const HomePage = () => {
// for spot light animation

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [isFocused, setIsFocused] = useState(false)

  const divRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
    setTimeout(() => {
      setPosition({ x: 0, y: 0 })
    }, 200)
  }
  const inactiveStyle = {}

  const activeStyle = {
    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 0, 0, 0.1), transparent 30%)`,
  }

  return (
    <div
      className='bg-red-100  w-[100%] h-screen
                                      '
    >
      <div  className='  relative flex justify-center items-center  w-[100%] h-[600px] '
        // spot light animation
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={opacity ? activeStyle : inactiveStyle}
      >
        {/*TextPart */}
        <div
        
          className='absolute z-20 flex flex-col justify-center items-center lg:w-[700px] lg:h-[550px] lg:mb-0
                                                                                md:w-[500px] md:h-[400px] md:mb-0
                                                                                sm:w-[500px] sm:h-[500px] sm:mb-0
                                                                                vsm:w-[320px] vsm:h-[300px] vsm:mb-0
                                                             vvsm:w-[90%] vvsm:h-[200px] vvsm:mb-[90px]
                                                                              '
        >
          <div
            className='  flex justify-center items-center  font-Lora font-[500] lg:text-[75px] lg:w-[700px] lg:tracking-[10px] 
                                                                                    md:text-[60px] md:w-[600px] md:tracking-[9px]
                                                                                    sm:text-[50px]  sm:w-[600px] sm:tracking-[8px]
                                                                                    vsm:text-[35px] vsm:w-[300px] vsm:tracking-[3px] 
                                                                                    vvsm:text-[30px] vvsm:w-[250px] vvsm:tracking-[2px]
                                                                                    '
          >
            CREATING THE
          </div>
          <div
            className='  flex justify-center items-center  font-Lora font-[500] lg:text-[55px] lg:w-[700px] lg:tracking-[8px] 
                                                                                    md:text-[50px] md:w-[500px] md:tracking-[6px] 
                                                                                    sm:text-[40px] sm:w-[500px] sm:tracking-[5px]
                                                                                    vsm:text-[30px] vsm:w-[250px] vsm:tracking-[1px]
                                                                                     vvsm:text-[25px] vvsm:w-[250px] vvsm:tracking-[1px] '
          >
            BEST TEXTILE
          </div>
          <div
            className='  flex justify-center items-center  font-Lora font-[500] lg:text-[55px] lg:w-[700px] lg:tracking-[8px]
                                                                                  md:text-[45px] md:w-[600px] md:tracking-[6px]
                                                                                  sm:text-[40px]  sm:w-[500px] sm:tracking-[6px]
                                                                                  vsm:text-[28px] vsm:w-[250px] vsm:tracking-[1px]
                                                                                  vvsm:text-[22px] vvsm:w-[250px] vvsm:tracking-[1px]'
          >
            SOLUTION
          </div>
          <div
            className=' lg:w-[300px] lg:h-[30px]  lg:mt-[15px]
                            md:w-[230px] md:h-[30px] md:mt-[15px]
                            sm:w-[220px] sm:h-[30px] sm:mt-[15px]
                            vsm:w-[170px] vsm:h-[30px] vsm:mt-[15px]
                            vvsm:w-[160px] vvsm:h-[20px vvsm:mt-[15px]'
          >
            <div
              className='font-Poppins font-[500] lg:text-[17px] text-[#4D4D4D]
                                               md:text-[15px]
                                               sm:text-[14px]
                                               vsm:text-[11px]
                                               vvsm:text-[10px]'
            >
              that revolutionizes the textile world
            </div>
          </div>

          <div
            className=' flex justify-center items-center lg:w-[200px] lg:h-[60px] lg:mt-[40px]
                                                            md:w-[150px] md:h-[50px] md:mt-[30px]
                                                            sm:w-[140px] sm:h-[50px] sm:mt-[30px] sm:block
                                                            vsm:hidden vvsm:hidden'
          >
            <div>
              <img
                src={button}
                alt=''
                className='lg:w-[200px] lg:h-[55px]
                            md:w-[150px] md:h-[40px] 
                            sm:w-[140px] sm:h-[40px]'
              />
            </div>
          </div>
        </div>

        <div
          className='absolute z-10 flex justify-center items-center  lg:w-[600px] lg:h-[550px] lg:mb-0
                                                                      md:w-[500px] md:h-[480px] md:mb-0
                                                                      sm:w-[480px]  sm:h-[480px] sm:mb-0
                                                                      vsm:w-[320px]  vsm:h-[350px] vsm:mb-0
                                                                    vvsm:mb-[90px]
                                                                       '
        >
          <div
          
         
            className=' lg:w-[600px] lg:h-[550px]
                        md:w-[500px] md:h-[480px]
                        sm:w-[480px]  sm:h-[480px] 
                        vsm:w-[350px]  vsm:h-[350px]
                        '
          >
            <img
              src={homepageimg}
              alt=''
              className='lg:w-[600px] lg:h-[550px]
                          md:w-[500px] md:h-[490px]
                          sm:w-[480px]  sm:h-[480px]
                          vsm:w-[350px] vsm:h-[350px]
                          '
            />
          </div>
        </div>
        {/* button vsm and vvsm */}
        <div
          className='flex justify-center items-center absolute z-20 vsm:bottom-0 sm:hidden vsm:w-[180px] vsm:h-[50px]
                                                                                                            vvsm:w-[150px] vvsm:bottom-11 vvsm:h-[40px]'
        >
          <div>
            <img
              src={button}
              alt=''
              className='vsm:w-[150px] vsm:h-[40px]
                                              vvsm:w-[120px] vvsm:h-[30px]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
