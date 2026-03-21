import MenuItem from './MenuItem'

export default function MenuSection({ category }) {
  return (
    <section className="mt-8">
      <h2 className="font-heading text-2xl text-miko-pink tracking-wider mb-4">
        {category.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
