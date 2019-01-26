import React from 'react'
import { Link } from 'gatsby'

const DynamicLink = ({ className, to, isExternal, children }) => {
  const classStyle = `button${className ? ' ' + className : ''}`
  const link = isExternal ? (
    <a
      className={classStyle}
      href={to}
      target='_blank'
      rel='noopener noreferrer'>
      {children}
    </a>
  ) : (
    <Link className={classStyle} to={to}>
      {children}
    </Link>
  )
  return link
}

const IconButton = ({
  to,
  isExternal = false,
  buttonClass,
  iconClass,
  children,
  text
}) => (
  <DynamicLink to={to} className={buttonClass} isExternal={isExternal}>
    <span className={`icon${iconClass ? ' ' + iconClass : ''}`}>
      {children}
    </span>
    {text ? <span>{text}</span> : null}
  </DynamicLink>
)

/* --> IconButton has props:
- `to` for target url
- `isExternal` mark target url to external link
- `buttonClass` style class for button. See https://bulma.io/documentation/elements/button/#states
- `iconClass` style class for icon. See https://bulma.io/documentation/elements/button/#states at with icons section
- `text` the text to show in button
*/
export default IconButton
