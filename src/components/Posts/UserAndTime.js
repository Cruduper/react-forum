import React from 'react'

export default function UserAndTime (props) {
  return(
    <div>
      <p className="">{props.username}</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaw4iGCKN-f4ZoTSS_fkY2RXlxXquj4W0pTkInOCTUqufFLwKtmN9-UvEf6ajkkIFYeNM&usqp=CAU" className="rounded-circle w-50" alt="headshot"/>
      <p>{props.postDateTime}</p>
    </div>
  )
}