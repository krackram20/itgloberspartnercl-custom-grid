import React from 'react'

export type CardType = {

    src?: string,
    title?: string,
    description?: string,
    callToAction?: string,
    buttonText?: string,
    cssHandles: [string,
    string, string, string, string, string],
    nameClass?: string
}


const Card = ({
  src,
  title,
  description,
  callToAction,
  buttonText,
  cssHandles,
  nameClass,
} : CardType) => {

  return (
    <div className= { nameClass ? `${cssHandles[5]}__${nameClass}` : cssHandles[5] }>
      <img
        src={src} alt="card image"
        className= {nameClass ? `${cssHandles[0]}__${nameClass}` : cssHandles[0] } />
      <p className={nameClass ? `${cssHandles[1]}__${nameClass}` : cssHandles[1]} >{title}</p>
      <p className={nameClass ? `${cssHandles[2]}__${nameClass}` : cssHandles[2]} >{description}</p>
      <a href={callToAction} className={nameClass ? `${cssHandles[3]}__${nameClass}` : cssHandles[3]} >
        <button className={nameClass ? `${cssHandles[4]}__${nameClass}` : cssHandles[4] }>{buttonText}</button>
      </a>
    </div>
  )
}




export default Card
