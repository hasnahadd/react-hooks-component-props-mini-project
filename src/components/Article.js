import React from 'react'
function generateEmojis(readTime) {
    const emoji = readTime < 30 ? '☕️' : '🍱';//test yes a9l mn 30 => coffe
    const numEmojis = Math.ceil(readTime / (emoji === '☕️' ? 5 : 10));// one coffe=5 w readingtime 10 10/5
    return emoji.repeat(numEmojis);
  }

function Article ({date="January 1, 1970",title, preview ,minutes}) {
    const item = generateEmojis(minutes);
  return (
   <article>
    <h3>{title}</h3>
   <small>{date} {minutes}{item}</small>
   <p>{preview}</p> 
   </article>
  )
}

export default Article
