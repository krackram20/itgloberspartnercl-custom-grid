import React from 'react'
import { useCssHandles } from 'vtex.css-handles'


export type CardType = {
    src: string,
    title: string,
    description?: string,
    callToAction: string,
    buttonText?: string,
    nameClass?: string
}


const CardItem = ({
  src,
  title = 'title',
  description = 'description',
  callToAction,
  buttonText = 'clickme',
  nameClass = 'default',
} : CardType) => {

    const CSS_HANDLES = [
      'image',
      'title',
      'description',
      'callToAction',
      'button',
      'main__container'
    ]

    const handles = useCssHandles(CSS_HANDLES)

      return (
        <div className= {`${handles.main__container}__${nameClass}`}>
          <img
            style = {{
              maxHeight: "80%",
              maxWidth:"80%"
            }}
            src={src} alt="card image"
            className= {`${handles.image}__${nameClass}` } />

          <p className={`${handles.title}__${nameClass}`} >
              {title}
          </p>

          <p className={`${handles.description}__${nameClass}`} >
            {description}
          </p>

          <a
            href={callToAction}
            className={`${handles.callToAction}__${nameClass}`} >

            <button className={`${handles.button}__${nameClass}` }>
              {buttonText}
            </button>

          </a>
        </div>
      )
}

CardItem.schema = {
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





export default CardItem
