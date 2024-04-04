import { featuresList } from "../data"
import Card from "./Card"

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3 my-3 md:px-3">
    {
        featuresList.map((data, index) => (
            <div key={index} className="py-3 px-3">
                <Card title={data.title} description={data.description} image={data.image} />
            </div>
        ))
    }
</div>
  )
}

export default Features