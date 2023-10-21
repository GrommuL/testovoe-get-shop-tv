import clsx from 'clsx'
import { FC, VideoHTMLAttributes } from 'react'

interface Props extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string
}

export const Video: FC<Props> = ({
  className,
  height = '100%',
  width = '100%',
  src,
  ...otherProps
}) => {
  return (
    <video
      className={clsx('absolute inset-0 z-[-1]', className)}
      src={src}
      width={width}
      height={height}
      {...otherProps}
    />
  )
}
