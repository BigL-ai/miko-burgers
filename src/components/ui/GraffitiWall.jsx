export default function GraffitiWall() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none">
      {/* Imagen de fondo graffiti */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15]"
        style={{
          backgroundImage: 'url(/images/graffiti-bg.jpg)',
          filter: 'blur(1px) saturate(0.6)',
        }}
      />

      {/* Overlay degradado para que el contenido sea legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-miko-black/80 via-miko-black/60 to-miko-black/80" />

      {/* Tinte fucsia/dorado sutil para que matchee la paleta */}
      <div className="absolute inset-0 bg-gradient-to-br from-miko-pink/[0.03] via-transparent to-miko-gold/[0.03]" />
    </div>
  )
}
