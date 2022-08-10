import { urlFor } from "../Sanity/Sanity";

const potableTextComponents = {
    types: {
      image: ({value}) => <img src={urlFor(value).width(800).height(400).url()} />,
      youtube: ({value}) => <iframe width="560" height="315" src={value.url}
       title="YouTube video player"
       frameBorder="0" allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
      // code: ({value}) => <CodeBlock text={value}/>,
      notice: ({value})=> <div className="note">
        <p className='flex items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
</svg>{"Tip"}</p>
        <p>{value.ndata}</p>
      </div>
    },
  
    marks: {
      link: ({children, value}) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        )
      },
    },
  }

  export default potableTextComponents;