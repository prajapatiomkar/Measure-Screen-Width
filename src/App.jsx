import { useEffect, useState } from "react"

function App() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  function handleChange() {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener("resize", handleChange)

    return (
      window.removeEventListener("resize", handleChange)
    )
  }, [])

  return (
    <div className="window-size">
      {`${screenSize.width} X ${screenSize.height}`}
    </div>
  )
}

export default App
