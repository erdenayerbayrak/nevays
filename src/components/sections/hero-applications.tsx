interface HeroApplicationsProps {
  title: string
  description: string
  className?: string
}

export function HeroApplications({ title, description, className }: HeroApplicationsProps) {
  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-6">
            <div className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse" />
            Uygulama Alanları
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16">
          {['Temiz Oda', 'Laboratuvar', 'HVAC', 'LAF Kabin', 'Modüler'].map((item, index) => (
            <div key={item} className="group">
              <div className={`h-32 rounded-2xl flex items-center justify-center text-white font-semibold transform transition-all duration-300 group-hover:scale-105 ${
                index === 0 ? 'bg-blue-500' :
                index === 1 ? 'bg-green-500' :
                index === 2 ? 'bg-purple-500' :
                index === 3 ? 'bg-orange-500' :
                'bg-red-500'
              }`}>
                <span className="text-sm text-center leading-tight">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}