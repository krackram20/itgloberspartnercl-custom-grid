import React from "react";
import { useDevice } from 'vtex.device-detector'
import styles from './styles.css'


interface Props {
  children: any[]
  gridTypeDesktop: number,
  gridTypeMobile: number,
  onlyCardItemsAllowed: boolean
}


const CardsLayout = ({children, gridTypeDesktop = 3, gridTypeMobile = 1, onlyCardItemsAllowed = true}: Props) => {

  const { isMobile } = useDevice()

  const mainContainerClass =  isMobile ? styles["mobile__cards__container"] : styles["desktop__cards__container"]


  // filters out non card-item blocks
  if (onlyCardItemsAllowed) {children = children.filter(child => child.props.id.includes('card-item'))}

  // avoids rendering more than 5 cards by only using the first five children
  if (children.length > 5) {children = children.slice(0,5) }

  // avoids rendering if there aren't any children
  if (children.length < 1) {return <></> }

  return (
    <div className={mainContainerClass}>
        {
          children.map((child, index) => {
           let itemContainerName =  isMobile ? styles[`mobile_${gridTypeMobile}_card_${index + 1}`] : styles[`desktop_${gridTypeDesktop}_card_${index + 1}`]

            return (
              <div key = {index} className = {itemContainerName}>
                {child}
              </div>
            )
        }
      )
    }

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
