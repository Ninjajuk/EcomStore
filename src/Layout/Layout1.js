import React from "react";
// import "./style.css";
import { customerData } from "../Components/AdminDashboard/Customerdata";
const GridLayout = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="h-full w-full  bg-blue-400 flex flex-col">
          <div className="flex  md:h-1/4 flex-col md:flex-row gap-2">
            <div className="flex basis-1/3 bg-gray-300">
              <div className="h-full w-full ">
                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="Image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-700 text-base">
                  This is a description or content for the card. You can
                  customize it based on your needs.
                </p>
              </div>
            </div>
            <div className="flex basis-1/3 bg-gray-400">
              <div className="h-full w-full ">
                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="Image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-700 text-base">
                  This is a description or content for the card. You can
                  customize it based on your needs.
                </p>
              </div>
            </div>
            <div className="flex basis-1/3 bg-gray-500">
              <div className="h-full w-full w-16 md:w-32 lg:w-48 ">
                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="Image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-700 text-base">
                  This is a description or content for the card. You can
                  customize it based on your needs.
                </p>
              </div>
            </div>
          </div>

          <div
            className="flex h-2/4 flex-col md:flex-row "
            style={{ height: "50vh" }}
          >
            {/* Second row with 6 columns */}
            <div className="flex flex-grow w-full md:w-1/2 h-full bg-green-300 overflow-y-auto overflow-x-auto">
              <div className="h-full w-full mx-auto bg-red-200">
                {" "}
                <p>Hi There</p>
              </div>
            </div>
            <div className="flex flex-grow bg-yellow-400 w-full md:w-1/2  overflow-y-auto overflow-x-auto">
              <div className="h-full max-h-full">
                <table className="w-full  border-collapse border border-gray-300">
                  <thead className="sticky top-0 bg-black text-white">
                    <tr className="">
                      <th className="border border-gray-300 p-2 text-left">
                        <input type="checkbox" />
                      </th>
                      <th
                        className="border border-gray-300 p-2 cursor-pointer text-left"
                        onClick={() => {}}
                      >
                        ORDER
                        <span className={`ml-2 `}>&#8593;</span>
                      </th>
                      <th
                        className="border border-gray-300 p-2 cursor-pointer text-left"
                        onClick={() => {}}
                      >
                        TOTAL
                        <span className={`ml-2 `}>&#8593;</span>
                      </th>
                      <th className="border border-gray-300 p-2 cursor-pointer text-left">
                        CUSTOMER
                        <span className={`ml-2 `}>&#8593;</span>
                      </th>
                      <th className="border border-gray-300 p-2 text-left">
                        PAYMENT STATUS
                      </th>
                      <th className="border border-gray-300 p-2 text-left">
                        FULFILMENT STATUS
                      </th>
                      <th className="border border-gray-300 p-2 text-left">
                        DELIVERY TYPE
                      </th>
                      <th className="border border-gray-300 p-2 cursor-pointer text-left">
                        DATE
                        <span className={`ml-2 `}>&#8593;</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerData.map((order) => (
                      <tr key={order.id}>
                        <td className="border border-gray-300 p-2">
                          <input type="checkbox" />
                        </td>
                        <td className="border border-gray-300 p-2">
                          {order.orderNumber}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {order.orderNumber}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {order.customer}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {order.paymentStatus}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {order.fulfilmentStatus}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {order.deliveryType}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {order.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex  h-1/4 flex-col md:flex-row gap-2">
            <div className="flex flex-1 bg-gray-300">
              <div className="h-full w-full ">
                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="Image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-700 text-base">
                  This is a description or content for the card. You can
                  customize it based on your needs.
                </p>
              </div>
            </div>
            <div className="flex flex-1 bg-gray-400">
              <div className="h-full w-full ">
                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="Image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-700 text-base">
                  This is a description or content for the card. You can
                  customize it based on your needs.
                </p>
              </div>
            </div>
            <div className="flex flex-1 bg-gray-500">
              <div className="h-full w-full ">
                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="Image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-700 text-base">
                  This is a description or content for the card. You can
                  customize it based on your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row " style={{ height: "25vh" }}>
        <div className="bg-orange-400 md:w-1/3 h-full md:h-1/3 w-full">1</div>
        <div className="bg-green-300 md:w-1/3 h-full md:h-1/3">2</div>
        <div className="bg-blue-300 md:w-1/3 h-full md:h-1/3">3</div>
      </div>

      <div className="flex flex-col md:flex-row " style={{ height: "50vh" }}>
        <div className="bg-red-400 md:w-1/3 h-full md:h-1/3 w-full">1</div>
        <div className="bg-gray-300 md:w-1/3 h-full md:h-1/3">2</div>
        <div className="bg-yellow-300 md:w-1/3 h-full md:h-1/3">3</div>
      </div>

      <div className="flex flex-col md:flex-row " style={{ height: "25vh" }}>
        <div className="bg-orange-400 md:w-1/2 h-full md:h-1/3 w-full">1</div>
        <div className="bg-green-300 md:w-1/2 h-full md:h-1/3">2</div>
        {/* <div className="bg-blue-300 md:w-1/3 h-full md:h-1/3">3</div> */}
      </div>
    </>
  );
};

export default GridLayout;

{
  /* <main className="testimonial-grid">
      <article className="testimonial grid-col-span-2 flow bg-primary-400 text-neutral-100">
        <div className="flex">
          <div>
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="daniel clifford" />
          </div>
          <div>
            <h2 className="name">Daniel Clifford</h2>
            <p className="position">Verified Graduate</p>
          </div>
        </div>
        <p>
          I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.
        </p>
        <p>
          “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
        </p>
      </article>

      <article className="testimonial flow bg-secondary-400 text-neutral-100">
        <div className="flex">
          <div>
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="Jonathan Walters" />
          </div>
          <div>
            <h2 className="name">Jonathan Walters</h2>
            <p className="position">Verified Graduate</p>
          </div>
        </div>
        <p>
          The team was very supportive and kept me motivated
        </p>
        <p>
          “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”
        </p>
      </article>

      <article className="testimonial flow bg-neutral-100 text-secondary-400">
        <div className="flex">
          <div>
            <img src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="Jeanette Harmon" />
          </div>
          <div>
            <h2 className="name">Jeanette Harmon</h2>
            <p className="position">Verified Graduate</p>
          </div>
        </div>
        <p>
          An overall wonderful and rewarding experience
        </p>
        <p>
          “ Thank you for the wonderful experience! I now have a job I really enjoy and make a good living while doing something I love. ”
        </p>
      </article>

      <article className="testimonial grid-col-span-2 flow bg-secondary-500 text-neutral-100">
        <div className="flex">
          <div>
            <img className="border-primary-400" src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="Patrick Abrams" />
          </div>
          <div>
            <h2 className="name">Patrick Abrams</h2>
            <p className="position">Verified Graduate</p>
          </div>
        </div>
        <p>
          Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.
        </p>
        <p>
          “ The staff seem genuinely concerned about my progress, which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”
        </p>
      </article>

      <article className="testimonial flow bg-neutral-100 text-secondary-400">
        <div className="flex">
          <div>
            <img src="https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="Kira Whittle" />
          </div>
          <div>
            <h2 className="name">Kira Whittle</h2>
            <p className="position">Verified Graduate</p>
          </div>
        </div>
        <p>
          Such a life-changing experience. Highly recommended!
        </p>
        <p>
          “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ” </p>
      </article>
    </main> */
}
