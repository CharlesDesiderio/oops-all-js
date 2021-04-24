// Build the root element to add all other elements into
let rootElement = document.createElement('div')
rootElement.id = 'root'
rootElement.classList = 'root'
document.body.append(rootElement)

// The new root element!
let root = document.getElementById('root')

// Function to build elements
let ce = (ele = 'div', id, className, text) => {
  if (ele === '') ele = 'div'
  let newElement = document.createElement(ele)
  if (className) newElement.classList = className
  if (text) newElement.innerText = text
  if (id) newElement.id = id
  return newElement
}

let as = (className, styleType, property) => {
  document.querySelector(`.${className}`).style[styleType] = property
}

// Build the Element creator form
let form = ce('form', null, 'form')
form.append(ce('label', null, null, 'Element Type'))
form.append(document.createElement('br'))
form.append(ce('input', 'element', 'element'))
form.append(document.createElement('br'))
form.append(ce('label', null, null, 'ID'))
form.append(document.createElement('br'))
form.append(ce('input', 'id', 'id'))
form.append(document.createElement('br'))
form.append(ce('label', null, null, 'Class'))
form.append(document.createElement('br'))
form.append(ce('input', 'class', 'class'))
form.append(document.createElement('br'))
form.append(ce('label', null, null, 'Text'))
form.append(document.createElement('br'))
form.append(ce('input', 'text', 'text'))
form.append(document.createElement('br'))
form.append(ce('button', 'submitForm', 'submit', 'Submit'))
root.append(form)
root.append(document.createElement('br'))

// Build the style modification form
let styleForm = ce('form', null, 'styleForm')
styleForm.append(ce('label', null, null, 'Class Name'))
styleForm.append(document.createElement('br'))
styleForm.append(ce('input', 'className'))
styleForm.append(document.createElement('br'))
styleForm.append(ce('label', null, null, 'Property'))
styleForm.append(document.createElement('br'))
styleForm.append(ce('input', 'property'))
styleForm.append(document.createElement('br'))
styleForm.append(ce('label', null, null, 'Value'))
styleForm.append(document.createElement('br'))
styleForm.append(ce('input', 'propValue'))
styleForm.append(document.createElement('br'))
styleForm.append(ce('button', 'submitStyleForm', 'submit', 'Submit'))
root.append(styleForm)

// Handling of element creation through form
document.getElementById('submitForm').addEventListener('click', (event) => {
  event.preventDefault()
  root.append(ce(document.getElementById('element').value, document.getElementById('id').value, document.getElementById('class').value, document.getElementById('text').value))
  document.getElementById('element').value = ''
  document.getElementById('id').value = ''
  document.getElementById('class').value = ''
  document.getElementById('text').value = ''
})

// Handling of style change through form
document.getElementById('submitStyleForm').addEventListener('click', (event) => {
  event.preventDefault()
  as(document.getElementById('className').value, document.getElementById('property').value, document.getElementById('propValue').value)
  document.getElementById('className').value = ''
  document.getElementById('property').value = ''
  document.getElementById('propValue').value = ''
})

// Creating elements for the page
as('root', 'fontFamily', 'Arial')
as('root', 'width', '80%')

as('form', 'position', 'absolute')
as('form', 'right', '0')

as('styleForm', 'position', 'absolute')
as('styleForm', 'top', '13rem')
as('styleForm', 'right', '0')

root.append(ce('h1', null, 'title-h1', 'Oops! All JavaScript'))
root.append(ce('hr'))
root.append(ce('h2', null, 'what-h2', 'What is this?'))
root.append(ce('p', null, 'what-p', 'This is a perfectly normal website, except it was built in the most obnoxious way possible. Everything here is done entirely in JavaScript. The HTML elements, the CSS styling, the positioning is all 100% JS. Seriously, check out the page source. There\'s nothing in the body tag. The only thing I added was the script file.'))

root.append(ce('h2', null, 'do-h2', 'So what can I do with it?'))
root.append(ce('p', null, 'do-p', 'I mean, I dunno. You can use the forms on the right to create elements and style them. Or style any other elements on the page. You\'ll have to use the JavaScript identifiers for CSS styles when appropriate, so for example "background-color" won\'t work, you\'ll have to use "backgroundColor" instead.'))



