import { timeFunc } from "./timeStuff"

const Table = ({list, onClickMe}) => 
   <div className='grid grid-cols-3 gap-10 px-8'>
      {list.map((item, i) => 
         <div key={i} className='flex flex-col border items-center'>
            <figure className='order-2'>
               <img src={item.urlToImage} className=' mb-5 h-[14rem] w-full' />
               <figcaption className='px-5 pb-6'>
                  <p className='mb-3 text-gray-600'>{timeFunc(item.publishedAt)}</p>
                  <a className='text-2xl font-bold' href={item.url}>{item.title}</a>
                  <p className='mt-3'>{item.description}</p>
                  <p className='order-1 my-3 text-red-500'> source: {item.source.id ? item.source.id : item.source.name} </p>
               </figcaption>
            </figure>
         </div>)}
      <button onClick={onClickMe}>more...</button>
   </div>



export {Table}