import { Button } from '@/components/ui/button';
import Image from 'next/image'

export function AppsSection() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Two Apps, One Ecosystem
            </h2>
            <div className="mt-12 space-y-12">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Tavolos</h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  The perfect app for diners. Book tables, manage reservations, and discover 
                  new restaurants with ease.
                </p>
                <div className="mt-6 flex gap-4">
                  <Button variant="outline" size="lg">
                    Coming to Android
                  </Button>
                  <Button variant="outline" size="lg">
                    Coming to iOS
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground">Tavolos Manager</h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  Powerful tools for restaurants. Manage bookings, handle customer requests, 
                  and optimize your operations with AI assistance.
                </p>
                <div className="mt-6 flex gap-4">
                  <Button variant="outline" size="lg">
                    Coming to Android
                  </Button>
                  <Button variant="outline" size="lg">
                    Coming to iOS
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <Image 
                src="/assets/images/cover.jpeg" 
                alt="Tavolos Apps" 
                //width={192} 
                //height={192} 
                style={{objectFit:"cover"}}
                fill
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}