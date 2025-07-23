export default function ContactMap() {
  return (
    <div className="relative bg-gray-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.123456789!2d32.0!3d36.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDMwJzAwLjAiTiAzMsKwMDAnMDAuMCJF!5e0!3m2!1str!2str!4v1234567890"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full min-h-[600px] rounded-xl shadow-lg"
        title="NEVAYS Ofis Konumu"
      />
      
      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-sm border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          NEVAYS Ofis
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          Mahmutlar Mah., Barbaros Cad. No:27<br />
          Alanya / Antalya<br />
          Türkiye
        </p>
        <div className="pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Temiz oda mühendisliği projeleriniz için<br />
            uzman ekibimizle buluşun.
          </p>
        </div>
      </div>
    </div>
  );
}