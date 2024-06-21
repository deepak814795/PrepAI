import { SignIn } from "@clerk/nextjs";

export default function Page(){
  return(
    
    <div className="relative flex justify-center items-center h-screen">
    {/* Background Image */}
    <div className="absolute inset-0 bg-cover bg-center"
         style={{ backgroundImage: 'url(./signupbg.png)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    
    {/* Content Wrapper */}
    <div className="relative z-10 max-w-4xl mx-auto px-4">
      {/* SignUp Form */}
      <div className="md:flex justify-center items-center">
        <SignIn />
      </div>
    </div>
  </div>
  )
}