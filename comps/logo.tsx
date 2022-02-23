import Image from "next/image"

const s = 4;
export const Logo = () => {
  return (
    <div className="title">
      <span className="logo">
        <Image
          src="/logo.png"
          alt="Links, Incorporated Logo"
          width={1082/s}
          height={551/s} />
      </span>
    </div>
  );
}