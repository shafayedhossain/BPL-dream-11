
import Dollarpng from '../assets/dollar 1.png'
const Navbar = ({coin}) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-none">
   
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <button className="flex justify-between items-center gap-1.5 font-bold text-xl">
        {coin}
     <img src={Dollarpng} alt="" />
     </button>
  </div>
</div>
        </div>
    );
};

export default Navbar;