import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress} = useProgress();

  return (
    <Html className="w-full h-full flex justify-center items-center">
      <span className="canvas-load"></span>
      <p>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader