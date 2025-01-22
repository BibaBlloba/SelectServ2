import Construct from '../assets/constructuon.png'

const UnderConstruction = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <h1 className="text-[60px] font-bold">В разрабштке</h1>
      <img src={Construct} alt="" />
    </div>
  )
}

export default UnderConstruction
