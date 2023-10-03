import logo from '../../assets/logo.png'
import moment from 'moment';
const Header = () => {
      return (
            <div className='text-center space-y-2'>
                  <img className='mx-auto' src={logo} alt="" />
                  <p className='text-[#706F6F] text-2xl'>Journalism Without Fear or Favour</p>
                  <p className='text-1xl'>{moment().format('dddd,MMMM D, YYYY ')} </p>
            </div>
      );
};

export default Header;