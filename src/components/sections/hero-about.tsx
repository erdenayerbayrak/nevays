interface HeroAboutProps {
  title: string
  description: string
  className?: string
}

export function HeroAbout({ title, description, className }: HeroAboutProps) {
  return (
    <section className={`py-24 bg-gradient-to-br from-blue-50 to-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
              Hakkımızda
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-blue-100 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 w-64 h-64 bg-blue-200 rounded-3xl transform -rotate-3" />
              <div className="absolute inset-0 w-64 h-64 bg-blue-300 rounded-3xl flex items-center justify-center">
                <div className="text-6xl font-bold text-white">25+</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-lg">
                <span className="text-sm font-semibold text-gray-700">Yıl Deneyim</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}