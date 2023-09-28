import {HiArrowNarrowRight} from "react-icons/hi";
import './navigation-button.css'

const NavigationButton = ({title, href}) => {
  return (
      <div>
          <a className={'nav-button group'} href={href}>
              {title}
              <span className={'group-hover:rotate-90 duration-300'}><HiArrowNarrowRight className={'nav-arrow'}/></span>
          </a>
      </div>
  );
}

export default NavigationButton;