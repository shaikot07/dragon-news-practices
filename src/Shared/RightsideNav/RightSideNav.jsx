
import { FaGofore, FaGithub, FaFacebook, FaInstagram, FaSquareTwitter } from "react-icons/fa6";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
      return (
            <div>
                  <div className="p-4 space-y-3 mb-6">
                        <h2 className="text-3xl">Login With</h2>
                        <button className="btn btn-outline w-full">
                              <FaGofore></FaGofore>
                              Login With Google
                        </button>
                        <button className="btn btn-outline w-full">
                              <FaGithub></FaGithub>
                              LogIn With Github
                        </button>
                  </div>
                  <div className="p-4  mb-6">
                        <h2 className="text-3xl mb-4">Find Us On</h2>
                        <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                              <FaFacebook className="mr-2  text-blue-500"></FaFacebook>
                              <span className="text-[#706F6F]">Facebook</span>
                        </a>
                        <a className="p-4 flex text-lg items-center border-x " href="">
                              <FaSquareTwitter className="mr-2  text-blue-400"></FaSquareTwitter>
                              <span className="text-[#706F6F]">Twitter</span>
                        </a>
                        <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                              <FaInstagram className="mr-2 text-orange-500"></FaInstagram>
                              <span className="text-[#706F6F]">Instagram</span>
                        </a>

                  </div>
                  {/* Q zoon  */}
                  <div className="p-4 space-y-3 mb-6 bg-[#F3F3F3]">
                        <h2 className="text-3xl">Q-Zone</h2>
                        <img src={qZone1} />
                        <img src={qZone2} />
                        <img src={qZone3} />
                  </div>
            </div>
      );
};

export default RightSideNav;