import { forwardRef, lazy, useImperativeHandle, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarLoadingWrapper } from "../../LoadingWrapper";

const CreateNewPost = lazy(() => import("../features/create"));
const initialState = {
  search: false,
  message: false,
  notification: false,
  create: false,
};

const NavCard = forwardRef(({ card }, ref) => {
  const [navState, setNavState] = useState(initialState);
  const navigate = useNavigate();
  function navigateOrOpen() {
    if (card.path) {
      navigate(`${card.path}`);
    } else if (card.title === "Create") {
      ref.current.setShowPopup(true);
      setNavState({ ...initialState, [card.navStateKey]: true });
    }
  }
  return (
    <div className="navCard" onClick={navigateOrOpen}>
      {card.type === "g-icon" && (
        <span className="material-icons">{card.icon}</span>
      )}
      {card.type === "image" && <img src={card.icon} alt={card.title} />}
      <span className="title">{card.title}</span>
      {navState.create && (
        <SidebarLoadingWrapper sideBarRef={ref} Component={CreateNewPost} />
      )}
    </div>
  );
});

export default NavCard;
