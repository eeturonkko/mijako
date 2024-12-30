import { Button } from "@/components/ui/button"
import { LockIcon } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <LockIcon className="w-16 h-16 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Secure Your World with Mijako</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Advanced locking systems and security solutions for homes and businesses. 
            Protect what matters most with cutting-edge technology.
          </p>
          <Button size="lg" className="bg-white text-purple-800 hover:bg-blue-100">
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

