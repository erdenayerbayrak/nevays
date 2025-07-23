interface HeroProductionProps {
  title: string
  description: string
  className?: string
}

export function HeroProduction({ title, description, className }: HeroProductionProps) {
  return (
    <section className={`py-24 bg-gradient-to-r from-gray-50 via-white to-gray-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 text-sm font-medium rounded-full mb-6">
              <div className="flex space-x-1 mr-2">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
              </div>
              Üretim Sürecimiz
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {description}
            </p>
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">ISO</div>
                <div className="text-sm text-gray-500">Standardı</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">GMP</div>
                <div className="text-sm text-gray-500">Uyumlu</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-500">Üretim</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-48 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl shadow-2xl transform rotate-3"></div>
              <div className="absolute inset-0 w-80 h-48 bg-gradient-to-br from-orange-300 to-orange-500 rounded-3xl shadow-xl transform -rotate-1"></div>
              <div className="absolute inset-0 w-80 h-48 bg-white rounded-3xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">NEVAYS</div>
                  <div className="text-lg text-gray-600">Panel Üretim</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}