interface HeroPageProps {
  title: string
  description: string
  className?: string
}

export function HeroPage({ title, description, className }: HeroPageProps) {
  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {title}
          </h1>
          
          <div className="w-16 h-1 bg-blue-600 mx-auto" />
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}