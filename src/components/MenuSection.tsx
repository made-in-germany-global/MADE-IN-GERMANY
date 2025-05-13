import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Award, Briefcase, ShoppingCart, Ship, Globe, Users, Book, Droplet, Leaf, UsersRound, Link } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SecondNavigationBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const navigate = useNavigate();

  const menuItems = [
    {
      title: 'Who we are',
      icon: Award,
      tooltip: 'Learn about our mission and team',
      dropdown: true,
      items: [
        { name: 'Vision & Values', path: '/visionandvalues' },
        { name: 'Team', path: '/teams' },
        { name: 'Press & Media', path: '/pressandmedia' },
      ],
    },
    {
      title: 'German Manufacturers',
      icon: Briefcase,
      tooltip: 'Explore German manufacturing excellence',
      dropdown: true,
      items: [
        { name: 'Become a Partner', path: '/becomepartner' },
        { name: 'Product Categories', path: '/productcategories' },
        { name: 'Manufacturing Excellence', path: '/manufacturingexcellence' },
      ],
    },
    {
      title: 'Buyers & Distributors',
      icon: ShoppingCart,
      tooltip: 'Solutions for buyers and distributors',
      dropdown: true,
      items: [
        { name: 'I’m a Buyer', path: '/imbuyer' },
        { name: 'Business Inquiry', path: '/businessenquiry' },
        { name: 'Sample Orders', path: '/sampleorders' },
      ],
    },
    {
      title: 'Import & Logistics',
      icon: Ship,
      tooltip: 'Streamlined import and logistics services',
      dropdown: true,
      items: [
        { name: 'Container Options', path: '/containeroption' },
        { name: 'Shipping Process', path: '/shippingprocess' },
        { name: 'Warehousing in Germany', path: '/warehousingingermany' },
      ],
    },
    {
      title: 'Global Impact',
      icon: Globe,
      tooltip: 'Our initiatives for sustainability and global impact',
      dropdown: true,
      items: [
        { name: 'Clean Water Initiatives', path: '/cleanwaterinitiatives', icon: Droplet },
        { name: 'Environmental Projects', path: '/environmentalprojects', icon: Leaf },
        { name: 'Future Generations', path: '/futuregeneration', icon: UsersRound },
        { name: 'Our Impact Vision', path: '/ourimpactvision', icon: Globe },
      ],
    },
    {
      title: 'Partners & Networks',
      icon: Users,
      tooltip: 'Collaborations for economic and knowledge transfer',
      dropdown: true,
      items: [
        { name: 'For Chambers, Associations & Networks', path: '/forchambers', icon: Users },
        { name: 'For Educational & Research Institutions', path: '/educational', icon: Book },
        { name: 'For Policy & Trade Organizations', path: '/policytrade', icon: Briefcase },
        { name: 'Cooperation Opportunities', path: '/cooperation', icon: Link },
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMouseEnterDropdown = (index) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(index);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const showTooltip = (index) => {
    setActiveTooltip(index);
  };

  const hideTooltip = () => {
    setActiveTooltip(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="bg-gray-900 shadow-md border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Desktop Menu */}
        <div className="flex justify-center h-16">
          <div className="hidden md:flex items-center justify-center">
            <div className="flex space-x-4">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-center"
                  onMouseEnter={() => handleMouseEnterDropdown(index)}
                  onMouseLeave={handleMouseLeaveDropdown}
                >
                  {/* Icon with Tooltip */}
                  {item.icon && (
                    <div
                      className="relative"
                      onMouseEnter={() => showTooltip(index)}
                      onMouseLeave={hideTooltip}
                    >
                      <item.icon className="mr-2 h-5 w-5 text-yellow-500" />
                      {item.tooltip && activeTooltip === index && (
                        <div className="absolute z-50 w-64 rounded-md shadow-lg transition-all duration-300 ease-in-out transform left-1/2 -translate-x-1/2 top-full mt-2">
                          <div className="rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300">
                            {item.tooltip}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  {/* Text with Dropdown */}
                  <div className="relative group">
                    <button
                      className="inline-flex items-center px-4 pt-1 text-xs font-medium text-gray-300 hover:text-white border-b-2 border-transparent hover:border-yellow-500 transition duration-150 ease-in-out h-16 min-w-fit whitespace-nowrap"
                    >
                      {item.title}
                      {item.dropdown && (
                        <>
                          <ChevronDown
                            className={`ml-1 h-4 w-4 ${activeDropdown === index ? 'hidden' : 'block'}`}
                          />
                          <ChevronUp
                            className={`ml-1 h-4 w-4 ${activeDropdown === index ? 'block' : 'hidden'}`}
                          />
                        </>
                      )}
                    </button>
                    {/* Dropdown / Mega-Menu */}
                    {item.dropdown && activeDropdown === index && (
                      <div className="absolute z-40 min-w-[28rem] max-w-[36rem] w-full rounded-md shadow-lg transition-all duration-300 ease-in-out transform left-1/2 -translate-x-1/2 top-full mt-2">
                        <div className="rounded-md bg-gray-900 border border-gray-800 shadow-xl w-full">
                          <div className="py-4 px-6 w-full">
                            <div className="py-1">
                              {item.items.map((subItem, subIndex) => (
                                <button
                                  key={subIndex}
                                  onClick={() => navigate(subItem.path)}
                                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none transition duration-150 ease-in-out flex items-center"
                                >
                                  {subItem.icon && <subItem.icon className="mr-2 h-4 w-4 text-yellow-500" />}
                                  {subItem.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4 flex items-center h-16">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:text-white focus:bg-gray-800 transition duration-150 ease-in-out"
                aria-expanded={activeDropdown === index}
              >
                {item.icon && <item.icon className="mr-3 h-5 w-5 text-yellow-500" />}
                {item.title}
                {item.dropdown && (
                  activeDropdown === index ? (
                    <ChevronUp className="ml-auto h-5 w-5" />
                  ) : (
                    <ChevronDown className="ml-auto h-5 w-5" />
                  )
                )}
              </button>
              {item.dropdown && activeDropdown === index && (
                <div className="bg-gray-800 pl-12 pt-2 pb-3 space-y-1">
                  {item.items.map((subItem, subIndex) => (
                    <button
                      key={subIndex}
                      onClick={() => navigate(subItem.path)}
                      className="block w-full text-left px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white transition duration-150 ease-in-out flex items-center"
                    >
                      {subItem.icon && <subItem.icon className="mr-2 h-4 w-4 text-yellow-500" />}
                      {subItem.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}