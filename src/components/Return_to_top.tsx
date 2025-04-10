import return_to_top from '../assets/return_to_top.png'
import scrollToTop from '../utils/scroll_to_top';

function Return_to_top() {
  return (
    <button className="return_to_top" onClick={scrollToTop}>
      <img src={return_to_top} alt="Scroll back to top" />
    </button>
  );
}

export default Return_to_top