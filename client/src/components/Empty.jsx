import Image from "next/image";
import React from "react";

function Empty() {
  return <div className="border-conversation-border
  border-l w-full bg-panel-header-background flex flex-col h-[100vg] border-b-4 border-b-icon-green items-center justify-center">
    <Image src="/whatsapp.gif" width={300} height={300} alt="Whatsapp" />
  </div>;
}

export default Empty;
