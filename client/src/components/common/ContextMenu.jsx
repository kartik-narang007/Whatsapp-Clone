import React, { useEffect, useRef } from "react";

function ContextMenu({ options, coordinates, contextMenu, setConetextMenu }) {
  const contextMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.classList.contains("context-opener")) {
        if (
          contextMenuRef.current &&
          !contextMenuRef.current.contains(event.target)
        ) {
          setConetextMenu(false);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = (e, callback) => {
    e.stopPropagation();
    setConetextMenu(false);
    callback();
  };

  return (
    <div
      className={`rounded-lg bg-dropdown-background fixed py-1 z-[100 shadow-xl`}
      style={{
        top: coordinates.y,
        left: coordinates.x,
      }}
      ref={contextMenuRef}
    >
      <ul>
        {options.map(({ name, callback }) => (
          <li
            key={name}
            onClick={(e) => handleClick(e, callback)}
            className="text-md px-5 py-2 cursor-pointer hover:bg-background-default-hover "
          >
            <span className="text-white">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContextMenu;
