import React from 'react'

const SinglePost = () => {
  return (
    <div className='flex flex-col h-max my-5 bg-white'>
            
            <div className="image relative h-80">
                <img src="https://source.unsplash.com/ugnrXk1129g" alt="" className='h-full w-full object-cover'/>
                <small className='absolute cursor-pointer left-5 bottom-5 px-4 py-1 backdrop-blur-sm text-white bg-white bg-opacity-30 rounded-full'>Tags</small>
            </div>

            

            <div className="content col-start-3 col-end-6 flex flex-col gap-4 p-2 py-4 px-4">

            <div className="tags flex gap-2">
                        <div className="tag py-0.5 px-2 inline-block bg-gray-200 text-xs text-gray-600">Javascript</div>
                        <div className="tag py-0.5 px-2 inline-block bg-gray-200 text-xs text-gray-600">Javascript</div>
                        <div className="tag py-0.5 px-2 inline-block bg-gray-200 text-xs text-gray-600">Javascript</div>
                    </div>

                    <div className="title">
                        <h3 className='text-4xl font-extrabold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
                    </div>
                    <div className="info text-gray-400 flex items-center gap-4">
                        <small className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Today</small>
                        <small className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                            125 Comments</small>
                    </div>
                    <div className="content">
                        <p className='text-lg leading-8 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque minima nihil? Itaque impedit deserunt unde repudiandae magni! Vero optio voluptatem libero neque voluptatibus cupiditate eos suscipit assumenda eius obcaecati aspernatur eveniet omnis odit alias totam consectetur voluptas quod minus officiis ad dolorum incidunt, excepturi iure! Incidunt maxime fuga cum illum neque nisi similique odio voluptas amet veniam. Maxime harum culpa assumenda excepturi? Consequatur quia ducimus obcaecati, quo eligendi rerum repellendus a eos? Doloribus, molestias cumque? Incidunt earum nemo quod consequatur praesentium accusamus, delectus, sed fugiat iure repudiandae voluptas amet beatae pariatur cupiditate eligendi aliquam facilis in sapiente! Voluptas, vel.</p>
                    </div>

                    <div className="flex justify-between">

                        <div className="py-1.5 text-white bg-blue-500 px-6">Prev</div>
                        <div className="py-1.5 text-white bg-blue-500 px-6">Next</div>

                    </div>

                    <div className="comments">
                    <div className="my-2 py-2 px-2 mb-5 bg-gradient-to-r from-gray-700 to-gray-500 text-white relative">
                        <p className='mx-3'>Comments</p>
                        <div className="span h-full w-2 absolute left-0 bg-blue-500 top-0"></div>
                    </div>
                    </div>

            </div>

    </div>
  )
}

export default SinglePost