interface HeroBlogProps {
  title: string
  description: string
  className?: string
}

export function HeroBlog({ title, description, className }: HeroBlogProps) {
  return (
    <section className={`py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-6 py-3 bg-white shadow-lg rounded-full border border-gray-200">
            <div className="flex items-center space-x-2 mr-3">
              <div className="w-3 h-3 bg-indigo-500 rounded-full" />
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <div className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
            </div>
            <span className="text-indigo-700 font-medium">Blog & Haberler</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-md mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg"></div>
              </div>
              <span className="text-sm text-gray-500">Teknoloji</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <div className="w-8 h-8 bg-purple-500 rounded-lg"></div>
              </div>
              <span className="text-sm text-gray-500">Haberler</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <div className="w-8 h-8 bg-pink-500 rounded-lg"></div>
              </div>
              <span className="text-sm text-gray-500">Rehberler</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}