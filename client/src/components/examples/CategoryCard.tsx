import { CategoryCard } from '../CategoryCard'
import jazzImage from '@assets/generated_images/Jazz_performance_event_c9ee8d74.png'

export default function CategoryCardExample() {
  return (
    <div className="p-8 max-w-md">
      <CategoryCard
        image={jazzImage}
        title="Live Shows"
        eventCount={152}
      />
    </div>
  )
}
