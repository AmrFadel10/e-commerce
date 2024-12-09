// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";

import { useEffect } from "react";

export default function ShippingPolicy() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <Meta title={"ShippingPolicy"} />
			<BreadCrumb title={"ShippingPolicy"} /> */}
      <section className="container mx-auto shadow-md rounded-xl bg-white px-4 py-6 mt-8 mb-20 flex gap-6 flex-col ">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            The Standard Lorem Ipsum Passage
          </h2>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            accumsan turpis posuere cursus ultricies. Ut nunc justo, faucibus
            eget elit quis, vehicula rhoncus nulla. Phasellus convallis sem nec
            facilisis commodo. Fusce ut molestie turpis. Suspendisse aliquet sed
            massa in vulputate. Quisque gravida suscipit tincidunt.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">
            At Vero Eos Et Accusamus Et Iusto Odio Dignissimos
          </h2>
          <p className="text-sm text-gray-500">
            Mauris elementum scelerisque elit non egestas. Cras lacus nibh,
            pretium quis bibendum nec, dapibus a metus. Morbi eros lectus,
            aliquam eu aliquam id, fringilla nec eros. Praesent suscipit commodo
            diam, non viverra turpis dapibus malesuada. Duis cursus metus eu sem
            eleifend, id rhoncus odio porttitor.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Certain Circumstances And Owing To The Claims Of Duty Or The
            Obligations
          </h2>
          <p className="text-sm text-gray-500">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Integer Ultrices Laoreet Nunc In Gravida
          </h2>
          <p className="text-sm text-gray-500">
            Sed lobortis pulvinar viverra. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Mauris
            suscipit dolor scelerisque, bibendum tellus ac, pharetra sapien.
            Praesent lacinia scelerisque odio et consequat. In a facilisis
            lacus. Maecenas vel lobortis tellus.
          </p>
        </div>
      </section>
    </>
  );
}
