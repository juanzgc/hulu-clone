import React, { ReactChildren } from "react";

function HeaderItem({title, Icon}: {title: string, Icon: any}) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-14 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
      <p className="opacity-0 group-hover:opacity-100 tracking-widest ">{title}</p>
    </div>
  )
}

export default HeaderItem;