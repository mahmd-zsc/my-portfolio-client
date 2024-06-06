import Image from "next/image";
import pattern from "@/images/black-plain-concrete-textured.jpg";
function Message() {
  return (
    <div className="bg-black  relative py-40">
      <div className=" relative z-30 text-center text-textColor">
        <h3 className=" text-4xl md:text-6xl leading-tight">
          {" "}
          <span className=" block">Thank you for viewing!</span> Stay in touch.
        </h3>
      </div>
      <Image
        className="absolute w-full h-full left-0 top-0 opacity-20 touch-none "
        src={pattern}
        alt="pattern"
      />
      <div className="absolute w-full h-full left-0 top-0"></div>
    </div>
  );
}

export default Message;
