import React, { ChangeEvent, MouseEvent, SyntheticEvent } from 'react'

type InputButtonType = {
  id: string
  className?: string
  value: string
  variantType?: string
  onClick?: (e: any | null) => void
}

export default function InputButton({
  id,
  variantType,
  className,
  value,
  onClick,
}: InputButtonType) {
  const variant =
    variantType === 'item'
      ? 'hover:bg-green-100 hover:text-green-700 hover:font-semibold border-0'
      : ''
  const addClassName = className ? className : ''

  return (
    <input
      id={id}
      className={` w-full bg-white py-[9px] px-3 cursor-pointer rounded-[1px] text-left ${variant} ${addClassName}`}
      type='button'
      value={value}
      onClick={onClick}
    />
  )
}
