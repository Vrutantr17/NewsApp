import React from 'react'

const Card = ({ title, content, author, publishedAt, url, urlToImage, altImage }) => {
  const truncateTitle = (title) => {
    const noTitle = "no title available for this";
    if (!title) {
      return noTitle;
    }
    const words = title.split(" ")
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return title;
  }

  const truncateContent = (content) => {
    const noContent = "visit the website to see full article";
    if (!content) {
      return noContent;
    }
    const words = content.split(" ")
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return content;
  }

  const truncateAuthor = (author) => {
    const noAuthor = " no author available";
    if (!author) {
      return noAuthor
    }
    const words = author.split(" ")
    if (words.length > 2) {
      return words.slice(0, 2).join(" ") + "...";
    }
    return author;
  }
  const truncateTime = (time) => {
    const timeStamp = time;
    const truncateDate = timeStamp.substring(0, 10);
    return truncateDate;

  }



  return (
    <>
      <div className=' w-full grid grid-cols-3 gap-20'>
        <div className='border w-70 rounded-2xl '>
          <h1>{truncateTitle(title)}</h1>
          <h2>{truncateContent(content)}</h2>
          <h3>{truncateAuthor(author)}</h3>
          <h4>{truncateTime(publishedAt)}</h4>
        </div>
      </div>

    </>
  )
}

export default Card