import bannerImg from '../../assets/banner.jpg'

export default function Banner() {
  return (
    <div
      className="hero h-[600px]"
      style={{
        backgroundImage:
          `url(${bannerImg})`,
      }}
    >
    </div>
  );
}
