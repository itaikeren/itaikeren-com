import Image from "next/image";
import classNames from "classnames";

function Button({ text, image, href, className }) {
  const classes = classNames(
    "inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:w-32",
    className
  );

  return (
    <a className={classes} href={href} target="_blank">
      <div className="flex items-center justify-center w-full space-x-1 text-center md:text-left">
        <Image src={image} width={20} height={20} />
        <span>{text}</span>
      </div>
    </a>
  );
}

export default Button;
