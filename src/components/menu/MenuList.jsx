import menuData from '../../data/menu.json'
import MenuSection from './MenuSection'

export default function MenuList() {
  return (
    <div className="pb-32">
      {menuData.categories.map((category) => (
        <MenuSection key={category.id} category={category} />
      ))}
    </div>
  )
}
