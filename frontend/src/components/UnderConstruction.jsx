import Construct from '../assets/constructuon.png'

const UnderConstruction = ({ Chad }) => {
  return (
    <div className={`flex flex-col justify-center items-center h-screen
      ${Chad ? "bg-[url(./assets/giga.jpg)] bg-cover" : "bg-[url(./assets/UnderConstruct4.jpeg)] bg-bottom bg-cover"}`}>
      {Chad && (
        <>
          <h1 className={`text-[60px] font-bold
      ${Chad ? "text-white" : "text-black"}`
          }>В разрабштке</h1>
          <img src={Construct} alt="" />
        </>
      )}
    </div>
  )
}

export default UnderConstruction
