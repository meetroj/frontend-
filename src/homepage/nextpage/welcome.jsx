import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LayoutDashboard, CheckSquare, FileText, Settings, LogOut ,CircleCheckBig,MessageSquareWarning ,SquareCheck} from "lucide-react"


const welcome = () => {
    const naviagte=useNavigate();
  return (
    <div className='w-screen h-screen flex   bg-gray-500 overflow-hidden'>
        <div className='w-[17%] h-full p-4 bg-gradient-to-tl from-sky-200 to-blue-400 flex-col'>
            <h1 className="text-xl  gap-3 items-center font-semibold pb-6 border-b border-blue-500 flex justify-center">
                <LayoutDashboard size={20}/>
                My Dashboard
            </h1>

            <h1 className="text-l  gap-3 items-center cursor-pointer font-semibold p-3 border-blue-500 bg-transparent mt-5 flex justify-start">
                <LayoutDashboard size={20}/>
                Dashboard
            </h1>
            <h1 className="text-l  gap-5 items-centre cursor-pointer font-semibold p-3 border-blue-500 bg-transparent mt-5 flex justify-start">
                <CheckSquare size={20}/>
                Tasks
            </h1>
            <h1 className="text-l  gap-5 items-center cursor-pointer font-semibold p-3  border-blue-500 bg-transparent mt-5 flex justify-start">
                <FileText size={20}/>
                Notes
            </h1>
            <h1 className="text-l  gap-3 items-center cursor-pointer font-semibold p-3 border-blue-500 bg-transparent  mt-5 flex justify-start">
                <Settings size={20}/>
                Settings
            </h1>
<div className="flex-grow"></div>

            <button onClick={()=>naviagte("/")} className="text-lg mt-93 ml-5 gap-3 bg-transparent items-center border-t-2 cursor-pointer font-semibold p-3 border-blue-500 bg-transparent flex">
    <LogOut size={35} />
    Log Out
  </button>
</div>


<div className='w-[83%] p-6 bg-gray-200 overflow-y-auto h-full'>


    <div className="border-b-2 border-gray-300 p-6 bg-white flex items-center justify-between">

        <div> <h1 className="text-3xl font-semibold">Welcome, Aboard!</h1>
            <p className="text-gray-600 mt-1">Here's your personalized dashboard</p>
        </div>

        <button className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 flex items-center gap-2">
        View Profile
        </button>

    </div>

    <div className='flex justify-between items-center mt-5 '>
            <div className='w-95 h-25 bg-white px-10  py-2 rounded-lg  flex items-center justify-between'>
                <CircleCheckBig size={40} className='bg-green-400 rounded-2xl'/>
                <p className='text-2xl mr-5'>Total Tasks</p>
                <br />
                <p className='font-bold text-3xl'>12</p>
            </div>
            <div className='w-95 h-25 bg-white px-10  py-2 rounded-lg  flex items-center justify-between'>
                <FileText size={40} className='bg-blue-500 rounded-md'/>
                <p className='text-2xl mr-5'>Notes</p>
                <br />
                <p className='font-bold text-3xl'>5</p>
            </div>
            <div className='w-95 h-25 bg-white px-10  py-2 rounded-lg  flex items-center justify-between'>
                <MessageSquareWarning size={40} className='bg-red-400 rounded-lg'/>
                <p className='text-2xl mr-5'>Pending</p>
                <br />
                <p className='font-bold text-3xl'>6</p>
            </div>
    </div>
    <div className='flex justify-between  space-x-4 pt-4  '>

    <div className='w-1/2 h-74 bg-white rounded-lg'>
    <h1 className='font-bold border-b-2 w-135 pb-2 border-gray-200 text-2xl ml-4 mt-3 boe'>Your Tasks</h1>
    <h1 className='  flex justify-baseline space-x-1 items-center mr-30 w-130 border-b-2 border-gray-200 pb-1 pl-3 mt-3 ml-9 gap-3'>
        <SquareCheck size={20}/>
        <span>Complete the project report</span>
    </h1>
    <h1 className='  flex justify-baseline space-x-1 items-center mr-30 w-130 border-b-2 border-gray-200 pb-1 pl-3 mt-3 ml-9 gap-3'>
        <SquareCheck size={20}/>
        <span>Meeting with the team</span>
    </h1>
    <h1 className='  flex justify-baseline space-x-1 items-center mr-30 w-130 border-b-2 border-gray-200 pb-1 pl-3 mt-3 ml-9 gap-3'>
        <SquareCheck size={20}/>
        <span>Update website content</span>
    </h1>
    <h1 className='  flex justify-baseline space-x-1 items-center mr-30 w-130 border-b-2 border-gray-200 pb-1 pl-3 mt-3 ml-9 gap-3'>
        <SquareCheck size={20}/>
        <span>plannig </span>
    </h1>

    <button className=' flex items-center justify-center mt-5 ml-90 cursor-pointer bg-blue-500 rounded-md text-white w-50 h-10 border-white'>View all Tasks</button>

    </div>
    <div className='w-1/2 h-57 bg-white rounded-lg'>
    <h1 className='font-bold border-b-2 w-135 pb-2 border-gray-200 text-2xl ml-4 mt-3 '>Quick Notes</h1>
    <h1 className='  flex justify-baseline h-10 rounded-md space-x-1 items-center mr-30 w-130  bg-gray-200 pb-2 pl-3 mt-3 ml-9 '>
        Complete the project report</h1>
    <h1 className='  flex justify-baseline h-10 space-x-1 rounded-md items-center mr-30 w-130  bg-gray-200 pb-2 pl-3 mt-3 ml-9 '>
        Meeting with the team</h1>

        <button className=' flex items-center justify-center mt-5 ml-110 cursor-pointer bg-blue-500 rounded-md text-white w-30 h-10 border-white'>Add Notes</button>


    </div>
    </div>
   <div className='pt-5'>
  <div className="rounded-lg border border-gray-300 p-6 bg-white">

    <h1 className='font-bold text-2xl border-b pb-3 border-gray-200'>
      Quick Notes
    </h1>

    <div className="mt-4 space-y-3">

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="w-4 h-4" />
          <span className="text-gray-700">Client feedback</span>
        </div>
        <span className="text-gray-400 text-sm">5 Hours ago</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="w-4 h-4" />
          <span className="text-gray-700">Logged in from New Device</span>
        </div>
        <span className="text-gray-400 text-sm">Yesterdy</span>
      </div>

    </div>

  </div>
</div>


</div>






        </div>


  )
}

export default welcome
