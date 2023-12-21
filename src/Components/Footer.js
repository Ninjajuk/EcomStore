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
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="  flex   justify-around ">
            <div className="flex flex-col">
              {Solutions.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={` px-4 py-1 text-white ${link.current ? "" : ""}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col">
              {Support.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={` px-4 py-1 text-white ${link.current ? "" : ""}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col">
              {Company.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={` px-4 py-1 text-white ${link.current ? "" : ""}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col">
              {Legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={` px-4 py-1 text-white ${link.current ? "" : ""}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl mb-3"> Download our Ecommerce App </h3>
            <p> Buy what you want. </p>
            <div className="flex justify-center my-10">
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Google Play Store </p>
                </div>
              </div>
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Apple Store </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">© Samsu, 2023.</p>
            <div className="order-1 md:order-2">
              <span className="px-2">About us</span>
              <span className="px-2 border-l">Contact us</span>
              <span className="px-2 border-l">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
