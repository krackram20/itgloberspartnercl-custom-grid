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
      'card__container'
    ]

    const handles = useCssHandles(CSS_HANDLES)

      return (
        <div className= {`${handles.card__container}__${nameClass}`}
         style = {{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: 'center'
        }}>
          <img
            style = {{
              maxHeight: "100%",
              maxWidth:"100%",
              height: "50%",
              width: "70%"
            }}
            src={src} alt="card image"
            className= {`${handles.image}__${nameClass}` } />

          <p className={`${handles.title}__${nameClass}`}
           style = {{
             marginTop: "3px",
             marginBottom: "4px"
            }} >
              {title}
          </p>

          <p className={`${handles.description}__${nameClass}`}
          style = {{
            marginTop: "0px",
            marginBottom: "4px"
          }} >
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
