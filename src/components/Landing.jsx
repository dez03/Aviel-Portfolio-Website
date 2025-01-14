// import React from 'react'

// export default function Landing() {
//   return (
//     <>
//     <div className="relative flex flex-col items-center justify-center h-screen bg-black">
//         {/* Background Text */}
//         <div className="absolute top-1/2 -translate-y-1/2 text-yellow-400 font-black uppercase ">
//           {/* First Name */}
//           <p className="text-[20vw] text-center flex justify-center gap-2">
//             <span className="inline-block ">A</span>
//             <span className="inline-block">V</span>
//             <span className="inline-block">I</span>
//             <span className="inline-block">E</span>
//             <span className="inline-block">L</span>
//           </p>
//           {/* Last Name */}
//           <p className="text-[20vw] text-center">Hernandez</p>
//         </div>

//         {/* Profile Image */}
//         <div className="relative z-10">
//           <img
//             src="https://media.licdn.com/dms/image/v2/D4E03AQFjDArIyi1mkA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725652207347?e=1742428800&v=beta&t=Y13zWny9AUj1qqIXkn_jCkD8QK80drkt9xMFHlj1SCM"
//             alt="Profile"
//             className="h-[50%] rounded-full object-cover border-4 border-black"
//           />
//         </div>
//       </div>
//   </>
//   )
// }

import React from 'react'

const Landing = () => {
  const firstName = "AVIEL";
  const lastName = "HERNANDEZ";
 
  return (
    <>
    <p className='text-white'>CRAFTING DIGITAL GOODS SINCE — Y:2017</p>
    <div className="relative w-full max-w-screen-lg mx-auto px-4">
      <div className="flex flex-col items-center text-center">
        <div className="name-container relative">
          {/* First name with individual letter spans */}
          <div className="first-name flex justify-center flex-wrap">
            {firstName.split('').map((letter, index) => (
              <span 
                key={index}
                className="inline-block transition-all duration-300 font-black text-[#e8ff52]"
                style={{
                  fontSize: 'clamp(6rem, 15vw, 260px)',
                  lineHeight: '0.9'
                }}
              >
                {letter}
              </span>
            ))}
          </div>
          
          {/* Last name */}
          <div className="last-name">
            <span 
              className="inline-block transition-all duration-300 font-black text-[#e8ff52]"
              style={{
                fontSize: 'clamp(4rem, 15vw, 260px)',
                lineHeight: '0.9'
              }}
            >
              {lastName}
            </span>
          </div>

          {/* Circular image container */}
          <div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25vw] max-w-[200px] aspect-square overflow-hidden rounded-full"
            style={{
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQFjDArIyi1mkA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725652207347?e=1742428800&v=beta&t=Y13zWny9AUj1qqIXkn_jCkD8QK80drkt9xMFHlj1SCM"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing;
