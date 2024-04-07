import React, { createRef, forwardRef, useRef } from "react";
import "./styles/sidebar.scss";
import { sidebarElements } from "./resource/sidebarElementsData";
import NavCard from "./components/NavCard";

const Sidebar = () => {
  const elementsRefs = useRef(sidebarElements.map(() => createRef()));
  // console.log("Elements refs", elementsRefs);
  return (
    <aside className="sidebar">
      <img
        className="insta-sidenav-logo"
        alt="instagram-logo"
        src="/resources/icons/instagram-fill.svg"
      />
      <div className="insta-sidenav-name">Instagram</div>
      {sidebarElements.map((element, index) => (
        <NavCard
          ref={elementsRefs.current[index]}
          key={element.title}
          card={element}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
