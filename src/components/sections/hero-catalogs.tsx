interface HeroCatalogsProps {
  title: string
  description: string
  className?: string
}

export function HeroCatalogs({ title, description, className }: HeroCatalogsProps) {
  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 text-sm font-medium rounded-full mb-6">
            <div className="grid grid-cols-2 gap-1 mr-2">
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
            </div>
            Teknik Dokümantasyon
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Ürün Katalogları', color: 'bg-red-500' },
            { name: 'Teknik Çizimler', color: 'bg-blue-500' },
            { name: 'Kullanım Kılavuzları', color: 'bg-green-500' },
            { name: 'Sertifikalar', color: 'bg-purple-500' }
          ].map((item, index) => (
            <div key={item.name} className="group cursor-pointer">
              <div className={`h-40 ${item.color} rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                <div className="text-center">
                  <div className="w-12 h-16 bg-white/20 rounded-lg mx-auto mb-3"></div>
                  <span className="text-white font-semibold text-sm">{item.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <span className="text-sm">PDF</span>
            <div className="w-8 h-px bg-gray-300"></div>
            <span className="text-sm">CAD</span>
            <div className="w-8 h-px bg-gray-300"></div>
            <span className="text-sm">DWG</span>
          </div>
        </div>
      </div>
    </section>
  )
}