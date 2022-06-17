import React from 'react'
import Card, {CardType} from './Card'
import { useCssHandles } from 'vtex.css-handles'


const CustomCard = (
  {src,
  cardName,
  title,
  description,
  callToAction,
  buttonText}: CardType) => {

  const CSS_HANDLES = [
                      'image',
                      'title',
                      'description',
                      'callToAction',
                      'button'
                     ]

  const handles = useCssHandles(CSS_HANDLES)

  const cardClassNames: [string,string,string,string,string] = [
                          handles.image,
                          handles.title,
                          handles.description,
                          handles.callToAction,
                          handles.button
                        ]

  return (
    <Card
    src={src}
    cardName = {cardName}
    title = {title}
    description = {description}
    callToAction = {callToAction}
    buttonText = {buttonText}
    cssHandles = {cardClassNames}
    />
   )
  }

CustomCard.schema = {
  title : "Card",
  type : "object",
  properties : {
    src : {
      title: "Upload image",
      type: 'string',
      widget : {
        "ui:widget": "image-uploader"
      }
    },

    title : {
      title: "Card title",
      type: 'string',
      widget : {
        "ui:widget": "textarea"
      }
    },

    description : {
      title: "Write a decription",
      type: 'string',
      widget : {
        "ui:widget": "textarea"
      }
    },

    callToAction : {
      title: "Call to action url",
      type: 'string',
      widget : {
        "ui:widget": "textarea"
      }
    },

    buttonText : {
      title: "Call to action text",
      type: 'string',
      widget : {
        "ui:widget": "textarea"
      }
    }
  }
}


export default CustomCard
