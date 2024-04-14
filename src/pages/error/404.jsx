import NotFoundIMG from '@/assets/svg/404.svg'
const NotFound = () => {
  return (
    <div className="NotFound h-screen flex justify-center items-center ">
      <img src={NotFoundIMG} alt="404" className="size-96" />
    </div>
  )
}
export default NotFound
