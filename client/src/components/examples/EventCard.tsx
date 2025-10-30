import { EventCard } from '../EventCard'
import jazzImage from '@assets/generated_images/Jazz_performance_event_c9ee8d74.png'

export default function EventCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <EventCard
        id="1"
        image={jazzImage}
        title="Live Jazz Night"
        date="Sat, Nov 15 • 8:00 PM"
        location="The Blue Note, NYC"
        price={35}
        originalPrice={50}
        badges={["VIP Available", "Soft Grouping"]}
        category="Live Shows"
      />
    </div>
  )
}
