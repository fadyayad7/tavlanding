import { 
  Smartphone, 
  Clock, 
  MessageSquareText, 
  Bot,
  Calendar,
  Settings
} from 'lucide-react';

const features = [
  {
    name: 'Easy Mobile Booking',
    description: 'Book your table in seconds through our intuitive mobile apps.',
    icon: Smartphone,
  },
  {
    name: 'Real-time Availability',
    description: 'See available tables and time slots instantly.',
    icon: Clock,
  },
  {
    name: 'Smart Notifications',
    description: 'Get timely updates about your reservation status.',
    icon: MessageSquareText,
  },
  {
    name: 'AI-Powered Management',
    description: 'Automated handling of reservations with artificial intelligence.',
    icon: Bot,
  },
  {
    name: 'Flexible Scheduling',
    description: 'Easily modify or cancel your reservations.',
    icon: Calendar,
  },
  {
    name: 'Restaurant Dashboard',
    description: 'Comprehensive management tools for restaurant owners.',
    icon: Settings,
  },
];

export function Features() {
  return (
    <div className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Features that Make the Difference
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need for seamless restaurant reservations.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {feature.name}
                </h3>
                <p className="mt-2 text-center text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}