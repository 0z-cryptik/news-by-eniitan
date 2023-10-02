import { useEffect, useState } from "react";
import { timeFunc } from "./timeStuff";
import axios from "axios";
import BarLoader from "./barLoader";
import { useList } from "./myHooks";
import { key } from "./key";
import { EmptyListPage } from "./errorpage";

export const Politics = () => {
   const { dark, setActiveCategory } = useList()
   const [list, setList] = useState([])
   const [error, setError] = useState(null)
   const [loading, setLoading] = useState(false)

   const conList = list.filter(item => item.multimedia && item.multimedia.length)

   useEffect(() => {
      setActiveCategory('politics')
      setLoading(true)
      axios(`https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=${key}`)
         .then(result => {
            setList(result.data.results)
            setLoading(false)
         })
         .catch(error => {
            setError(error)
            setLoading(false)
         })
   }, [])

   if (error && !conList.length) return <EmptyListPage />


   if (loading) return <BarLoader />
   
   return <div id="bg" className={`${dark ? `bg-black pt-[4rem] lg:pt-[7rem] text-white md:grid md:grid-cols-2 md:gap-10 md:px-8 md:pb-8 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-8` : ` md:grid md:grid-cols-2 md:gap-10 md:px-8 md:pb-8 pt-[4rem] lg:pt-[7rem] lg:grid lg:grid-cols-3 lg:gap-10 lg:px-8`}`}>
      {conList.map((item, i) => 
         <div key={i} className={`flex flex-col md:border items-center overflow-hidden`}>

            <figure className='order-2'>

               <img id="op" src={item.multimedia[0].url} className='lg:hover:opacity-70 mb-5 h-[14rem] w-full' />
               <figcaption className='px-5 pb-6'>

                  <p className='mb-3 text-gray-600'>
                     {timeFunc(item.published_date)}
                  </p>

                  <a href={item.url} target="_blank" className='text-2xl cursor-pointer font-bold'>
                     {item.title}
                  </a>

                  <p className='mt-3'>
                     {item.abstract}
                  </p>

                  <p className='order-1 my-3 text-red-500'>
                     {item.byline}
                  </p>

               </figcaption>

            </figure>

         </div>)
      }
   </div>
}