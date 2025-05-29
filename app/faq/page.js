export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">What is Farm Pass?</h2>
          <p>Farm Pass is a seasonal membership that gives families access to local Long Island farms with child-friendly activities—like playgrounds, petting zoos, and hayrides—without paying each time.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">How much does it cost?</h2>
          <p>Pricing varies. A single-farm season pass may cost around $60, while an all-farm pass covering multiple locations will be higher. One-time tickets will also be available.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">What happens if a farm is closed?</h2>
          <p>Farm schedules are updated in the app and website. If a farm is closed unexpectedly, we’ll notify you. Your pass is valid at other open farms.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Can I bring guests?</h2>
          <p>Guest policies vary by farm. Many allow guest passes to be purchased at the gate or online through Farm Pass.</p>
        </div>
      </div>
    </div>
  )
}
