interface HeroContactProps {
  title: string
  description: string
  className?: string
}

export function HeroContact({ title, description, className }: HeroContactProps) {
  return (
    <section className={`py-24 bg-gradient-to-br from-teal-50 to-blue-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 text-sm font-medium rounded-full mb-6">
              <div className="w-2 h-2 bg-teal-600 rounded-full mr-2" />
              İletişim
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {description}
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 bg-teal-600 rounded"></div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Hızlı Yanıt</div>
                  <div className="text-sm text-gray-600">24 saat içinde dönüş</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 bg-blue-600 rounded"></div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Uzman Destek</div>
                  <div className="text-sm text-gray-600">Mühendislik danışmanlığı</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 bg-teal-100 rounded-full"></div>
              <div className="absolute inset-4 bg-teal-200 rounded-full"></div>
              <div className="absolute inset-8 bg-teal-300 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-lg text-teal-100">Destek</div>
                </div>
              </div>
              <div className="absolute top-4 right-8 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-8 left-4 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}