import BannerInner from "./BannerInner";

export default function BannerList() {
  const data = [
    {
      img: "assets/images/catbanner-01.webp",
      title: "BEST SALE",
      subtitle: "Laptops Max",
      desc: "From $1699.00 or $64.62/mo.",
    },
    {
      img: "assets/images/catbanner-03.webp",
      title: "New arrival",
      subtitle: "Buy iPad Air",
      desc: "From $599 or $49.91/mo. for 12 mo.",
    },
    {
      img: "assets/images/catbanner-02.webp",
      title: "15% off",
      subtitle: "smartwatch 7",
      desc: "Shop the latest band styles and colors.",
    },
    {
      img: "assets/images/catbanner-04.webp",
      title: "Free engraving",
      subtitle: "AirPods max",
      desc: "High-fidelity playback & ultra-low distortion",
    },
  ];
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mx-auto flex-1">
      {data.map((item, index) => (
        <BannerInner item={item} key={index} />
      ))}
    </div>
  );
}
