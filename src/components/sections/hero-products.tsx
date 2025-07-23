interface HeroProductsProps {
  title: string
  description: string
  className?: string
}

export function HeroProducts({ title, description, className }: HeroProductsProps) {
  return (
    <section className={`py-24 bg-gray-900 text-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg text-white border border-white/20 rounded-full">
            <div className="grid grid-cols-4 gap-1 mr-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <div className="w-2 h-2 bg-red-400 rounded-full" />
            </div>
            Ürün Gamımız
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {title}
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="flex justify-center space-x-8 pt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-3 mx-auto">
                <span className="text-2xl font-bold">4</span>
              </div>
              <span className="text-sm text-gray-400">Ana Kategori</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-3 mx-auto">
                <span className="text-2xl font-bold">50+</span>
              </div>
              <span className="text-sm text-gray-400">Ürün Çeşidi</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-3 mx-auto">
                <span className="text-2xl font-bold">GMP</span>
              </div>
              <span className="text-sm text-gray-400">Uyumlu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}