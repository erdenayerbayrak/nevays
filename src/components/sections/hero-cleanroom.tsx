interface HeroCleanroomProps {
  title: string
  description: string
  className?: string
}

export function HeroCleanroom({ title, description, className }: HeroCleanroomProps) {
  return (
    <section className={`py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full">
            <div className="flex items-center space-x-1 mr-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
            <span className="text-cyan-100 font-medium">Temiz Oda Bilgi Merkezi</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="flex justify-center space-x-12 pt-12">
            {['ISO 14644', 'GMP', 'FDA'].map((standard, index) => (
              <div key={standard} className="text-center">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto ${
                  index === 0 ? 'bg-cyan-600' :
                  index === 1 ? 'bg-blue-600' :
                  'bg-indigo-600'
                }`}>
                  <span className="text-sm font-bold">{standard}</span>
                </div>
                <span className="text-sm text-slate-400">Standart</span>
              </div>
            ))}
          </div>
          
          <div className="pt-8">
            <div className="w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  )
}