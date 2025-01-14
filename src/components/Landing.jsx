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
import Profile from "../assets/profile.png";

const Landing = () => {
  const firstName = "AVIEL";
  const lastName = "HERNANDEZ";

  console.log("Landing component rendered");
  console.trace();
 
  return (
    <>
      <p className="font-dm_sans font-medium text-center text-[#f0f0f0] opacity-50 py-8">
        BUILDING FOR THE WEB SINCE 2020
      </p>
      <div className="relative w-full max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="name-container relative">
            {/* First name with individual letter spans */}
            <div className="first-name flex justify-center flex-wrap">
              {firstName.split("").map((letter, index) => (
                <span
                  key={index}
                  className="inline-block transition-all duration-300 font-big_shoulders font-black text-[#e0f024]"
                  style={{
                    fontSize: "clamp(6rem, 15vw, 260px)",
                    lineHeight: "0.9",
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>

            {/* Last name */}
            <div className="last-name">
              <span
                className="inline-block transition-all duration-300 font-big_shoulders font-black text-[#e0f024]"
                style={{
                  fontSize: "clamp(4.5rem, 15vw, 260px)",
                  lineHeight: "0.9",
                }}
              >
                {lastName}
              </span>
            </div>

            {/* Circular image container */}
            <div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden "
              style={{
                width: "clamp(4rem, 10vw, 150px)", // Dynamically scale the width
                height: "clamp(4rem, 10vw, 150px)", // Dynamically scale the height
              }}
            >
              <img
                src={Profile}
                alt="Profile"
                className="rounded-edge h-full brightness-75 object-cover"
                style={{
                  clipPath: "ellipse(75% 50%)", // Retain the rounded-edge class behavior
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
