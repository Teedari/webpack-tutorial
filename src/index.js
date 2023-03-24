import _ from 'lodash'
import './style.scss'
import shotImg from './shot.png'

const component = () => {
  const element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack', 'Awesome'], ' ')
  element.classList.add('hello')

  // adding the image
  // const myImage = new Image()
  // myImage.src = shotImg
  // element.appendChild(myImage)

  return element;
}

document.body.appendChild(component())