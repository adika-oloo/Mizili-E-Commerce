export default function Features() {
  const features = [
    {
      title: "For Farmers",
      description: "Sell your produce directly to buyers",
      icon: "👨‍🌾"
    },
    {
      title: "For Buyers", 
      description: "Source fresh agricultural products",
      icon: "🛒"
    },
    {
      title: "For Experts",
      description: "Offer extension services to farmers",
      icon: "👨‍🔬"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Platform Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
