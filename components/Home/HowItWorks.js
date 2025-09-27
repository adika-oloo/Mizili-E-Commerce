export default function HowItWorks() {
  const steps = [
    { step: 1, description: "Register as Farmer, Buyer or Expert" },
    { step: 2, description: "Complete your profile" },
    { step: 3, description: "Start connecting and trading" }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-center max-w-2xl mx-auto">
          {steps.map((item, index) => (
            <div key={index} className="text-center mb-8 md:mb-0">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {item.step}
              </div>
              <p className="font-semibold">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
