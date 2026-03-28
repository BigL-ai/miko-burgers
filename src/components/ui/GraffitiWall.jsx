export default function GraffitiWall() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none">
      {/* Imagen de fondo graffiti */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.25]"
        style={{
          backgroundImage: 'url(/images/graffiti-bg.jpg)',
          filter: 'blur(2px) saturate(0.5)',
        }}
      />

      {/* Overlay para legibilidad — más transparente para que se vea el graffiti */}
      <div className="absolute inset-0 bg-gradient-to-b from-miko-black/60 via-miko-black/40 to-miko-black/70" />

      {/* Tinte fucsia/dorado sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-miko-pink/[0.05] via-transparent to-miko-gold/[0.05]" />
    </div>
  )
}
