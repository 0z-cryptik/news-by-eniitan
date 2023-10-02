import { useEffect, useState } from "react";
import { Search } from "./search";
import axios from "axios";
import { timeFunc } from "./timeStuff";
import { useList } from "./myHooks";
import { key } from "./key";
import { Bars, Oval } from "react-loader-spinner";

export const SearchComp = () => {
   const { dark, setActiveCategory } = useList()
   const [searchTerm, setSearchTerm] = useState('')
   const [loading, setLoading] = useState(false)
   const [page, setPage] = useState(0)
   const [fetchLoading, setFetchLoading] = useState(false)
   const [searchList, setSearchList] = useState([])
   const [error, setError] = useState(null)

   const conSearchList = searchList.filter(item => item.multimedia && item.multimedia.length)

   let onSearchchange = (e) => setSearchTerm(e.target.value)

   let onSearchSubmit = (e) => {
      e.preventDefault()
      setLoading(true)
      axios(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&sort=newest&api-key=${key}`)
         .then(result => {
            setSearchList(result.data.response.docs)
            setLoading(false)
         })
         .catch(error => {
            console.log(error)
            setLoading(false)
         })
   }

   const fetchData = (pageNumber) => {
      axios(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${pageNumber}&q=${searchTerm}&sort=newest&api-key=${key}`
      )
        .then((result) => {
            setSearchList([...searchList, ...result.data.response.docs]);
            setFetchLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setPage(prevPage => prevPage - 1)
            setFetchLoading(false);
        });
   };

   const fetchHandler = () => {
      setPage(prevPage => prevPage + 1)
      setFetchLoading(true)
      fetchData(page + 1)
   }
    
   useEffect(() => {
      setActiveCategory('search')
   }, [])

   if (loading) return <div className={`${dark ? 'bg-black pt-[4rem] h-screen' : "pt-[4rem] h-screen   overflow-hidden"}`}>
      <Search onSubmit={onSearchSubmit} val={searchTerm} onChange={onSearchchange} />
      <div className='h-[75vh] flex items-center'>
         <Bars wrapperClass='mx-auto' color='blue' />
      </div>
   </div>

   if (!conSearchList.length) return <div className={`${dark ? 'bg-black pt-[4rem] h-screen overflow-hidden' : "pt-[4rem] h-screen overflow-hidden"}`}>
      <Search onSubmit={onSearchSubmit} val={searchTerm} onChange={onSearchchange} />
      <div className={`${dark  ? `w-full h-screen` : `w-full h-screen`}`}></div>
   </div>
    
   return <div className={`${dark ? `bg-black pt-[4rem]` : `pt-[4rem]`}`}>

      <Search onSubmit={onSearchSubmit} val={searchTerm} onChange={onSearchchange} />
      
      <div className={`${dark ? `bg-black text-white md:grid md:grid-cols-2 md:gap-10 md:px-8 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-8` : ` md:grid md:grid-cols-2 md:gap-10 md:px-8 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-8`}`}>
         
         {conSearchList.map((item, i) => 
            <div key={i} className='flex flex-col md:border items-center overflow-hidden'>

               <figure className='order-2'>

                  <img id="op" src={`https://static01.nyt.com/${item.multimedia[0].url}`} className='hover:opacity-70 mb-5 h-[14rem] w-full' />
                  <figcaption className='px-5 pb-6'>

                     <p className='mb-3 text-gray-600'>
                        {timeFunc(item.pub_date)}
                     </p>

                     <a href={item.web_url} target="_blank" className='text-2xl cursor-pointer font-bold'>
                        {item.headline.main}
                     </a>

                     <p className='mt-3'>
                        {item.abstract}
                     </p>

                     <p className='order-1 my-3 text-red-500'>
                        {item.byline.original} 
                     </p>

                  </figcaption>
                  
               </figure>
            
            </div>)
         }
         
         <Oval color='blue' secondaryColor={`${dark ? 'grey' : '#D0D3D4'}`} visible={fetchLoading ? true : false} wrapperStyle={{display: `${fetchLoading ? 'flex' : 'none'}`, justifyContent: 'center', alignItems: 'center'}} />
         
      </div>

      <center>
         <button id="btns" onClick={fetchHandler} className={`${dark ? `bg-transparent mb-6 border border-white lg:hover:bg-[#0C3758] md:my-12 w-[7rem] rounded-md h-[2rem] ${fetchLoading ? 'mt-6' : ''} text-white` : `bg-blue-300 md:my-12 hover:bg-transparent hover:text-gray-400 hover:border-2 w-[7rem] mb-6 ${fetchLoading ? 'mt-6' : ''} rounded-md h-[2rem]`}`}>
            fetch more
         </button>
      </center>
      
   </div>
}

