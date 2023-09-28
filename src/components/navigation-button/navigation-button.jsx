import {HiArrowNarrowRight} from "react-icons/hi";
import './navigation-button.css'
const NavigationButton = ({title}) => {
  return (
      <div>
          <button className={'nav-button group'}>
              {title}
              <span className={'group-hover:rotate-90 duration-300'}><HiArrowNarrowRight className={'nav-arrow'}/></span>
          </button>
      </div>
  );
}

export default NavigationButton;