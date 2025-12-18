import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, ClipboardCheck, Star, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Choose a Roofing Contractor in Boise | Top Shelf Roofing",
  description: "Not all roofers are created equal. Here's what to look for when choosing a roofing contractor in Boise and the Treasure Valley.",
  openGraph: {
    title: "How to Choose a Roofing Contractor in Boise",
    description: "Not all roofers are created equal. Here's what to look for when choosing a roofing contractor in Boise.",
    url: "https://boise-roofing-company.com/blogs/choosing-roofing-contractor-boise",
  },
};

export default function ChoosingRoofingContractorBoise() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/blogs"
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How to Choose a Roofing Contractor in Boise
          </h1>
          <p className="text-xl text-blue-100">
            Not all roofers are created equal. Here's what to look for.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              Your roof keeps water out, keeps heat in, and protects everything you own. When it's time to repair or replace it, you can't afford to hire the wrong contractor.
            </p>
            <p>
              But here's the problem: in Boise and the Treasure Valley, there are dozens of roofing companies to choose from. Some are great. Some are okay. And a few will leave you with a leaky roof and an empty wallet.
            </p>
            <p>
              So how do you tell the difference? Let's walk through exactly what to look for when you're choosing a roofing contractor in Boise.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Check Their License and Insurance</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              This should be step one. Always. If a roofer doesn't have a valid contractor's license and liability insurance, move on immediately.
            </p>
            <p>
              In Idaho, roofing contractors need a specialty contractor license from the Idaho Contractors Board. They should also carry general liability insurance and workers' comp coverage.
            </p>
            <p>
              Why does this matter? Because if someone gets hurt on your property, or if the contractor damages your home, you need to know you're protected.
            </p>
            <p>
              Ask for copies of their license and insurance certificates. If they hesitate or make excuses, that's a red flag. Legitimate contractors will hand these over without blinking.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Star className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Look at Reviews (But Read Between the Lines)</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Google reviews are helpful, but you need to know what you're looking at. Don't just check the star rating—actually read the reviews.
            </p>
            <p>
              What are people saying? Do multiple reviews mention the same issues? Are there recent reviews, or are they all from three years ago?
            </p>
            <p>
              Look for patterns. If five different people say the crew was professional and cleaned up thoroughly, that tells you something. If three reviews mention "delayed start dates" or "poor communication," that's a warning sign.
            </p>
            <p>
              Also check how the company responds to negative reviews. Do they ignore complaints, or do they address them professionally? That tells you a lot about how they handle problems.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Get Multiple Written Estimates</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Don't hire the first roofer you talk to. Get at least three written estimates so you can compare pricing and services.
            </p>
            <p>
              A good estimate should be detailed. It should list the materials being used (brand and quality level), the scope of work, how long the project will take, and what's included in the price.
            </p>
            <p>
              If an estimate is vague or doesn't break down costs, ask for clarification. If they can't or won't explain where your money's going, that's a problem.
            </p>
            <p>
              And here's a tip: the cheapest bid isn't always the best. Sometimes it means they're cutting corners on materials or labor. You want value, not just the lowest price.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Ask About Experience and Warranties</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              How long has the company been in business? Do they specialize in residential roofing, or are they a general contractor who does a little bit of everything?
            </p>
            <p>
              Experience matters. A company that's been roofing homes in Boise for 10 years knows how to handle our weather—hot summers, cold winters, and the occasional hailstorm.
            </p>
            <p>
              Also ask about warranties. Most shingle manufacturers offer warranties, but what about workmanship? Does the contractor guarantee their work? For how long?
            </p>
            <p>
              A solid roofing company will stand behind their work with a written warranty. If they don't offer one, that should make you nervous.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Watch for Red Flags</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Some warning signs should make you walk away immediately:
            </p>
            <ul>
              <li><strong>They want full payment upfront.</strong> A deposit is normal, but no reputable contractor asks for the entire cost before starting work.</li>
              <li><strong>They're pushing you to decide right now.</strong> High-pressure sales tactics are a red flag. Good contractors don't need to rush you.</li>
              <li><strong>They show up at your door uninvited.</strong> Legit roofing companies don't go door-to-door looking for work, especially after storms.</li>
              <li><strong>They don't have a local office or phone number.</strong> If they're hard to reach or operate out of state, who do you call if something goes wrong?</li>
              <li><strong>Their estimate is way lower than everyone else's.</strong> If it seems too good to be true, it probably is.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">How Top Shelf Roofing Does Things Differently</h2>
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p>
              Look, we're a roofing company, so of course we think you should hire us. But we're not going to pressure you.
            </p>
            <p>
              We've been roofing homes in Boise and the Treasure Valley for years, and we do it by being straightforward. No tricks, no surprises, no disappearing after we cash your check.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>Licensed and fully insured</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>Written estimates with detailed breakdowns</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>Workmanship warranty on every job</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>Local team that's easy to reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Bottom Line</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Choosing a roofing contractor in Boise doesn't have to be complicated. Do your homework, ask the right questions, and trust your gut.
            </p>
            <p>
              If a company checks all the boxes—licensed, insured, experienced, well-reviewed, and transparent—you're probably in good hands. If something feels off, keep looking.
            </p>
            <p>
              Your roof is too important to leave to chance. Take your time and choose wisely.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Roofing Estimate?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We'll give you a straight answer and a fair price. No games.
          </p>
          <a
            href="tel:2085059352"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call (208) 505-9352
          </a>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">More Roofing Resources</h2>
          <Link
            href="/blogs"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to all blog posts
          </Link>
        </div>
      </section>
    </div>
  );
}
