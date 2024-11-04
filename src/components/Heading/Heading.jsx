
// eslint-disable-next-line react/prop-types
export default function Heading({title, subtitle}) {
  return (
    <div className="text-center my-10">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl">{subtitle}</p>
    </div>
  )
}
