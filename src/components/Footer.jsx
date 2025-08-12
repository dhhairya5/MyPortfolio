import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi"


const Footer = () => {
  return (
    <footer 
        className="bg-black text-white py-16 px-6 mt-40">

            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center  ">
               
                {/* Logo and Description */}
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 
                to-purple-200 bg-clip-text text-transparent ">
                    Dhhairya Shukla
                </h2>

                {/* Scroll Links */}

                <div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-200">
                        Let's Connect
                    </h3>
                    <div className="flex space-x-4 ">
                        <a className = "text-gray-700 hover:text-violet-400 transition-colors"
                         href="https://github.com/dhhairya5">
                            <FiGithub className="w-5 h-5 " />
                            </a>
                            <a className = "text-gray-700 hover:text-violet-400 transition-colors"
                         href="https://x.com/dhhairya_07">
                            <FiTwitter className="w-5 h-5 " />
                            </a>
                            <a className = "text-gray-700 hover:text-violet-400 transition-colors"
                         href="https://www.linkedin.com/in/dhhairya-shukla-58291a23b/">
                            <FiLinkedin className="w-5 h-5 " />
                            </a>
                            <a className = "text-gray-700 hover:text-violet-400 transition-colors"
                         href="mailto:dhhairyashukla5@gmail.com?subject=Hello%20Dhhairya&body=I%20wanted%20to%20connect%20with%20you...">
                            <FiMail className="w-5 h-5 " />
                            </a>
                    </div>
                </div>

                </div>
                <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row 
                justify-between items-center ">
                    <p className="text-gray-300 text-sm">
                        ⓒ 2025 DhhairyaShukla. Crafted with Code, Coffee & Logic.
                    </p>
                    {/* <div className="flex space-x-4 mt-4 md:mt-0">
                        <a className = "text-gray-300 hover:text-white text-sm transition-colors" 
                        href="#" 
                        >
                        Privacy Policy 
                        </a>

                        <a className = "text-gray-500 hover:text-white text-sm transition-colors" 
                        href="#" 
                        >
                        Terms of Service 
                        </a>

                        <a className = "text-gray-500 hover:text-white text-sm transition-colors" 
                        href="#" 
                        >
                        Cookie Policy 
                        </a>
                    </div> */}

    <div className="flex space-x-4 mt-4 md:mt-0">
  <Link to=""
    className="text-gray-300 hover:text-white text-sm transition-colors">
    Privacy Policy
  </Link>

  <Link to=""
    className="text-gray-300 hover:text-white text-sm transition-colors">
    Terms of Service
  </Link>

    <Link to="" 
    className="text-gray-300 hover:text-white text-sm transition-colors">
    Cookie Policy
  </Link>
</div>



                </div>
            </div>

    </footer>
  )
}



export default Footer


