import Header from "./Header"
function HeaderItem({title, Icon}) {
  return (
    <div className="w-12 flex flex-col items-center group ml-2
    cursor-pointer sm:w-20 hover:text-white transition duration 500">
      <Icon className="w-7  mb-2 group-hover:animate-bounce "/>
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  );
}

export default HeaderItem;
