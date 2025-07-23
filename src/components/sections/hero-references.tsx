interface HeroReferencesProps {
  title: string
  description: string
  className?: string
}

export function HeroReferences({ title, description, className }: HeroReferencesProps) {
  return (
    <section className={`py-24 bg-gradient-to-br from-emerald-50 to-teal-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white shadow-md rounded-full border border-emerald-200 mb-6">
            <div className="flex space-x-1 mr-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
              <div className="w-3 h-3 bg-emerald-300 rounded-full"></div>
            </div>
            <span className="text-emerald-700 font-medium">Başarılı Projelerimiz</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: '500+', label: 'Tamamlanan Proje', color: 'text-emerald-600' },
            { number: '25+', label: 'Yıl Deneyim', color: 'text-teal-600' },
            { number: '15+', label: 'Ülke', color: 'text-blue-600' },
            { number: '100%', label: 'Müşteri Memnuniyeti', color: 'text-green-600' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {['İlaç', 'Gıda', 'Elektronik', 'Otomotiv', 'Havacılık', 'Sağlık'].map((sector, index) => (
            <div key={sector} className="text-center">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-2 ${
                index % 6 === 0 ? 'bg-red-100 text-red-600' :
                index % 6 === 1 ? 'bg-orange-100 text-orange-600' :
                index % 6 === 2 ? 'bg-yellow-100 text-yellow-600' :
                index % 6 === 3 ? 'bg-green-100 text-green-600' :
                index % 6 === 4 ? 'bg-blue-100 text-blue-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                <span className="text-xs font-bold">{sector.slice(0, 2)}</span>
              </div>
              <span className="text-xs text-gray-600">{sector}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}