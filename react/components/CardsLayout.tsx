import React from "react";
import { useDevice } from 'vtex.device-detector'
import styles from './styles.css'
import { CardType} from './Card'



interface Props {
  children: CardType[]
  gridTypeDesktop: number,
  gridTypeMobile: number
}

const CardsLayout = ({children, gridTypeDesktop = 3, gridTypeMobile = 1}: Props) => {

  const { isMobile } = useDevice()

  return (
    <div
     className={
        isMobile
      ?
        styles["mobile__cards__container"]
      :
        styles["desktop__cards__container"]
      }>
      {

      children.filter(x => typeof x !=='string').map((card: CardType, index) => {


        return (
          <div key = {index}
          className = {
            isMobile
          ?
            styles[`mobile_${gridTypeMobile}_card_${index + 1}`]
          :
            styles[`desktop_${gridTypeDesktop}_card_${index + 1}`]
            }>
            {card}
          </div>
        )

  }
  )}
    </div>
  )

}

CardsLayout.schema  = {
  title: "Card Grid",
  type: "object",
  properties: {
    gridTypeDesktop: {
      title: "Grid type desktop",
      description: "choose grid layout",
      type: 'number',
      enum: [
        1,
        2,
        3,
        4
      ]

    },

    gridTypeMobile: {
      title: "Grid type mobile",
      description: "choose grid layout",
      type: 'number',
      enum: [
        1,
        2,
        3,
        4,
        5,
        6
      ]

    }
  }
}


export default CardsLayout
