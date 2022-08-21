import React from 'react'

const ourRef = React.useRef(null)

return <div ref={ourRef} />

export default function ScrollAnimation() {

    useLayoutEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
      }, [])
      
  return (
    <div>Ref</div>
  )
}
