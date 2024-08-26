const CallToUsCard = ({title = "" , content = "" , src = "" , alt= ""}) => {
  return (
    <div className="w-full  border-2 border-blue bg-white shadow h-[279px] rounded-[10px] flex flex-col items-center justify-center lg:justify-between py-4">
        <img src={src} alt={alt} width={88} height={84} />
        <p className='text-primary font-bold text-lg my-4'>{title}</p>
        <p>{content}</p>
    </div>
  )
}

export default CallToUsCard