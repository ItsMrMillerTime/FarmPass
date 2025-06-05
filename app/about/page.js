export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 space-y-16">
      
      {/* 1. Mission */}
      <section>
        <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
        <p className="text-lg leading-relaxed">
          At Farm Hopper Pass, our mission is to unlock the magic of Long Island’s farms for families,
          making visits stress-free and affordable. We believe every child deserves the chance
          to explore, learn, and play on a real farm—without parents worrying about wasted
          ticket fees.
        </p>
      </section>

      {/* 2. The Challenge */}
      <section>
        <h2 className="text-3xl font-semibold mb-3">The Challenge</h2>
        <p className="text-lg leading-relaxed">
          Single-visit tickets often cost $30–$50 per person. That means a day out can quickly
          add up, and parents hesitate to return if kids lose interest. Farms lose repeat
          customers, and families miss out on what could become cherished traditions.
        </p>
      </section>

      {/* 3. Our Solution */}
      <section>
        <h2 className="text-3xl font-semibold mb-3">Our Solution</h2>
        <p className="text-lg leading-relaxed mb-4">
          Farm Hopper Pass offers seasonal memberships that let you visit one farm or every participating
          farm as many times as you like. One upfront price unlocks playgrounds, petting zoos,
          hayrides, and more—so you can go with confidence and stay as long as the fun lasts.
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>One-Farm Hopper Pass: Perfect for your favorite local spot</li>
          <li>All-Farm Hopper Pass: Explore the best farms across Suffolk County</li>
          <li>Flexible: Upgrade or pause your pass at any time</li>
        </ul>
      </section>

      {/* 4. How It Works */}
      <section>
        <h2 className="text-3xl font-semibold mb-3">How It Works</h2>
        <ol className="list-decimal list-inside text-lg space-y-2">
          <li>Choose your pass (Single-Farm or All-Farm).</li>
          <li>Receive your digital QR code by email.</li>
          <li>Show your pass at any participating farm—no extra fees.</li>
          <li>Visit, play, and create memories all season long!</li>
        </ol>
      </section>

      {/* 5. Why Suffolk County */}
      <section>
        <h2 className="text-3xl font-semibold mb-3">Why Suffolk County?</h2>
        <p className="text-lg leading-relaxed">
          Suffolk County is home to a vibrant network of family-friendly farms, from pick-your-own
          orchards to petting zoos and seasonal festivals. By focusing here first, we can build
          deep partnerships, ensure quality experiences, and bring real value to local communities.
        </p>
      </section>

      {/* 6. Looking Ahead */}
      <section>
        <h2 className="text-3xl font-semibold mb-3">Looking Ahead</h2>
        <p className="text-lg leading-relaxed">
          This is just the beginning. In the future, we’ll add event tickets, farm-to-table
          market access, and educational programs. Our goal is to make Farm Hopper Pass the gateway
          to agritourism across New York—and eventually beyond.
        </p>
      </section>
    </div>
  )
}
