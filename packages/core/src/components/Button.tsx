import React from 'react'

interface btnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string,
  children?: React.ReactNode | string | number
}

const defaultProps: btnProps = {
  variant: "",
  children: "Button Component",
}

function Button({ ...props }: btnProps) {
  props = {...defaultProps, ...props }
  return (
    <button {...props}>
      {props.children}
    </button>
  )
}

export default Button;