import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="https://raw.githubusercontent.com/ByteGrad/Professional-React-and-Next.js-Course/main/evento/resources/favicon.ico"
        alt="Evento Logo"
        width={53}
        height={17}
      />
    </Link>
  );
};

export default Logo;
