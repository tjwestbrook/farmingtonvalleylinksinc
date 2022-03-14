import Image from "next/image"

const s = 5;
export const Logo = () => {
  return <>
    <span className="logo">
      <Image
        src="/logo.jpg"
        alt="Logo for inks, Incorporated"
        width={1082/s}
        height={551/s}
      />
    </span>
    {/* <span className="social-media">
      
    </span> */}
  </>
}