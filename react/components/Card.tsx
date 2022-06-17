import React from 'react'

export interface CardType {

    src: string,
    cardName: string,
    title: string,
    description: string,
    callToAction: string,
    buttonText: string,
    cssHandles: [string,
    string, string, string, string]


}

const Card = ({
  src,
  cardName,
  title,
  description,
  callToAction,
  buttonText,
  cssHandles
} : CardType) => {

  console.log("dkdksslsl",cssHandles);

  return (
    <div className= {cardName}>
      <img src={src} alt="card image"  className= {cssHandles[0]}/>
      <p className={cssHandles[1]} >{title}</p>
      <p className={cssHandles[2]} >{description}</p>
      <a href={callToAction} className={cssHandles[3]} >
        <button className={cssHandles[4] }>{buttonText}</button>
      </a>
    </div>
  )
}




export default Card
