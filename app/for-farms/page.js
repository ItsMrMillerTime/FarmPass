// app/for-farms/page.js
export const metadata = {
  title: 'Partner with Farm Pass',
  description: 'Join Farm Pass to drive repeat visits, loyalty, and revenue for your farm.'
}

export default function ForFarms() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 space-y-16">
      
      {/* 1. Intro */}
      <section>
        <h1 className="text-4xl font-bold mb-4 text-center">Partner with Farm Pass</h1>
        <p className="text-lg leading-relaxed text-center">
          Farm Pass brings more families through your gates—turning one-time visitors into
          loyal fans who come back again and again. No upfront cost, just a shared mission
          to make farm life accessible and memorable.
        </p>
      </section>

      {/* 2. Founder's Insight */}
      <section>
        <h2 className="text-3xl font-semibold mb-3">A Farmer & Parent’s Perspective</h2>
        <p className="text-lg leading-relaxed">
          I’ve built this program because I’m a parent who wants to take my kids to our
          favorite local farm every week—but $40 per visit just doesn’t make sense when
          they decide to run off or move on. With Farm Pass, those same families feel
          free to return multiple times a month—giving farms like yours consistent
          traffic, more upsell opportunities, and true brand ambassadors.
        </p>
      </section>

      {/* 3. Why Join Farm Pass */}
      <section>
        <h2 className="text-3xl font-semibold mb-3">Why Join Farm Pass?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <strong>Steady Foot Traffic:</strong> Members visit farms repeatedly,
            smoothing out seasonal peaks and valleys.
          </li>
          <li>
            <strong>Higher Per-Visit Spend:</strong> Engaged families stay longer
            and explore add-ons—snacks, gift shops, special events.
          </li>
          <li>
            <strong>Customer Loyalty:</strong> Pass holders see your farm as their
            “home base,” not just a one-off trip.
          </li>
          <li>
            <strong>Word-of-Mouth Growth:</strong> Happy families tell their
            friends, amplifying your reach without extra marketing spend.
          </li>
          <li>
            <strong>Data & Insights:</strong> Access visit counts, peak days, and
            member feedback to plan promotions and staffing.
          </li>
        </ul>
      </section>

      {/* 4. How It Works for Farms */}
      <section>
        <h2 className="text-3xl font-semibold mb-3">How It Works for Your Farm</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li><strong>Sign Up for Free:</strong> Complete our partner form—no upfront fee.</li>
          <li><strong>We Handle Everything:</strong> Digital ticketing, QR scanning,
            marketing emails, and member support.</li>
          <li><strong>Earn Commission:</strong> You receive a percentage of every
            Farm Pass visit—guaranteed revenue, no per-ticket hassle.</li>
          <li><strong>Access Analytics:</strong> See who’s visiting, when, and what
            activities they love most.</li>
          <li><strong>Grow Together:</strong> Be featured in Suffolk-wide campaigns
            and seasonal promotions.</li>
        </ol>
      </section>

      {/* 5. Ready to Get Started? */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Grow Your Farm’s Community?</h2>
        <p className="mb-6 text-lg leading-relaxed">
          Fill out our partner form and we’ll be in touch within 48 hours to onboard
          your farm, train your team, and get you in front of hundreds of Farm Pass families.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-800 transition"
        >
          Contact Us to Join
        </a>
      </section>

    </div>
  )
}
