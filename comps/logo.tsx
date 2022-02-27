import Image from "next/image"

const s = 6;
export const Logo = () => {
  return (
    <div className="title">
      <span className="logo">
        <Image
          src="/logo.jpg"
          alt="Links, Incorporated Logo"
          width={1082/s}
          height={551/s} />
      </span>
      {/* <span className="social-media">
        
      </span> */}
    </div>
  );
}