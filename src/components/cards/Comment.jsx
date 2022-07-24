import React from 'react'

const Comment = () => {
  return (
    <div className="flex flex-col my-8">


        <div className="flex gap-4 justify-between items-center">

        <div className="flex gap-4 items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden">
                <img className='h-full w-full  max-w-full object-cover' src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" alt="" />
            </div>            

                <div className="leading-3 flex flex-col gap-2">
                <p>Name</p>
                <small className='text-gray-400'>December 4, 2017 at 3:12 pm</small>
                </div>
            </div>
        
        <div className="bg-blue-400 text-white py-2 px-4">
            <button>Reply</button>
        </div>

        </div>
        <div className="px-20 text-gray-500">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatem.</p>

        {/* Nested Comments */} 
        
                {/* <div className="px-4 mt-4">
                <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
                <img className='h-full w-full  max-w-full object-cover' src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" alt="" />
            </div>            

                <div className="leading-3 flex flex-col gap-2 text-sm">
                <p>Name</p>
                <small className='text-gray-400'>December 4, 2017 at 3:12 pm</small>
                </div>
                </div>
                <div className="px-16 text-sm">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatem.</p>
                </div>
                </div> */}

        </div>

    </div>
  )
}

export default Comment