import React from 'react'
import Card, {CardType} from './Card'
import { useCssHandles } from 'vtex.css-handles'


const CustomCard = (
  {src,
  title,
  description,
  callToAction,
  buttonText,
  nameClass}: CardType) => {

  const CSS_HANDLES = [
                      'image',
                      'title',
                      'description',
                      'callToAction',
                      'button',
                      'main__container'
                     ]

  const handles = useCssHandles(CSS_HANDLES)

  const cardClassNames: [string,string,string,string,string, string] = [
                          handles.image,
                          handles.title,
                          handles.description,
                          handles.callToAction,
                          handles.button,
                          handles.main__container
                        ]

  return (
    <Card
    src={src}
    title = {title}
    description = {description}
    callToAction = {callToAction}
    buttonText = {buttonText}
    cssHandles = {cardClassNames}
    nameClass = {nameClass}
    />
   )
  }

CustomCard.schema = {
  title: "Card",
  type: "object",
  properties: {
    src: {
      title: "Upload image",
      type: 'string',
      widget : {
        "ui:widget": "image-uploader"
      }
    },

    title: {
      title: "Card title",
      type: 'string'
    },

    description: {
      title: "Write a decription",
      type: 'string',
      widget : {
        "ui:widget": "textarea"
      }
    },

    callToAction : {
      title: "Call to action url",
      type: 'string'
    },

    buttonText : {
      title: "Call to action text",
      type: 'string'
    }
  }
}


export default CustomCard
