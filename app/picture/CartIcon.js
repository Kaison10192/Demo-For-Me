import * as React from "react"
const CartIcon = ({ className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 24 24"
    className="h-[34px] w-[34px] ${className}"
    {...rest}
  >
    <path d="M8 3v4h13l-2 7H8v2h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1V4H4a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1ZM6 20.5A1.5 1.5 0 1 0 7.5 19 1.5 1.5 0 0 0 6 20.5Zm9 0a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0-1.5 1.5Z" />
  </svg>
)
export default CartIcon