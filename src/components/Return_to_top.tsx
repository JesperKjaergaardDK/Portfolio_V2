import return_to_top from '../assets/return_to_top.png'
import scrollToTop from '../utils/scroll_to_top';

function Return_to_top() {
  return (
    <button onClick={scrollToTop}>
      <img className="return_to_top" src={return_to_top} alt="" />
    </button>
  );
}

export default Return_to_top