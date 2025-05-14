import React from 'react'
import Card from './Card'

const Home = ({news}) => {
  return (
    <>
    <div className='grid grid-cols-3'>
      {
        news && news.map(element=>{
          return(
            <Card key={element.url}
                  title={element.title}
                  content={element.content}
                  author={element.author}
                  publishedAt={element.publishedAt}
                  url={element.url}
                  urlToImage={element.urlToImage}
                  altImage={"/newsimg.jpg"}

                />
          )
        })
      }
    </div>
    </>
  )
}

export default Home