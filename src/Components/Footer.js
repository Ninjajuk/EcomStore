function Footer() {
  const navigationLinks = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "team", current: false },
    { name: "Orders", href: "#", current: false },
    { name: "Login", href: "#", current: false }
  ];
  const Solutions = [
    { name: "Marketing", href: "Marketing", current: true },
    { name: "Analytics", href: "Marketing", current: false },
    { name: "Commerce", href: "Marketing", current: false },
    { name: "Insights", href: "Insights", current: false }
  ];
  const Support = [
    { name: "Pricing", href: "Marketing", current: false },
    { name: "Documentation", href: "Marketing", current: false },
    { name: "Guides", href: "Marketing", current: false },
    { name: "API Status", href: "Insights", current: false }
  ];
  const Company = [
    { name: "About", href: "Marketing", current: false },
    { name: "Jobs", href: "Marketing", current: false },
    { name: "Press", href: "Marketing", current: false },
    { name: "Partners", href: "Insights", current: false }
  ];

  const Legal = [
    { name: " Claim", href: "Marketing", current: false },
    { name: "Privacy", href: "Marketing", current: false },
    { name: "Press", href: "Marketing", current: false },
    { name: "  Terms", href: "Insights", current: false }
  ];

  return (
    <>
      <div className=" bg-gray-900 mt-4">
          <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">Copyright© Teghiya, 2024.Deisgned by Samsu</p>
            <div className="order-1 md:order-2">
              <span className="px-2">About us</span>
              <span className="px-2 border-l">Contact us</span>
              <span className="px-2 border-l">Privacy Policy</span>
            </div>
          </div>
      </div>
    </>
  );
}

export default Footer;
