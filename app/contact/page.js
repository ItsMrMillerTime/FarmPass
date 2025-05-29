export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6">Have questions? Want to learn more? Reach out to us below and we’ll get back to you shortly.</p>
      <form action="mailto:miller.robert@hotmail.com" method="POST" encType="text/plain" className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" className="w-full border p-3 rounded" required />
        <input type="email" name="email" placeholder="Your Email" className="w-full border p-3 rounded" required />
        <textarea name="message" placeholder="Your Message" rows="5" className="w-full border p-3 rounded" required></textarea>
        <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800">Send Message</button>
      </form>
    </div>
  )
}
