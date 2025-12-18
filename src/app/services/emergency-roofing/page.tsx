import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, Cloud, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency Roofing Services in Boise | Top Shelf Roofing",
  description: "24/7 emergency roof repair in Boise. Storm damage, leaks, and urgent roofing problems. Fast response. Call (208) 505-9352 now.",
  openGraph: {
    title: "Emergency Roofing Services in Boise | Top Shelf Roofing",
    description: "24/7 emergency roof repair in Boise. Fast response to storm damage and urgent leaks.",
    url: "https://boise-roofing-company.com/services/emergency-roofing",
  },
};

export default function EmergencyRoofing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/services"
            className="inline-flex items-center text-red-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Emergency Roofing Services in Boise
          </h1>
          <p className="text-xl text-red-100">
            Storm damage? Active leak? We'll get there fast.
          </p>
          <a
            href="tel:2085059352"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors mt-6"
          >
            <Phone className="w-5 h-5" />
            Call (208) 505-9352 Now
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              Roof emergencies don't happen on a schedule. They happen at 2 AM during a storm. Or on a Saturday when the rain's coming through your ceiling.
            </p>
            <p>
              When you've got water pouring into your house, you need help now—not next Tuesday.
            </p>
            <p>
              At Top Shelf Roofing, we handle emergency calls across Boise and the Treasure Valley. We'll get to you as quickly as we can, stop the immediate damage, and make a plan to fix it permanently.
            </p>
          </div>
        </div>
      </section>

      {/* What's an Emergency */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-red-600 text-white p-3 rounded-full">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">What Counts as a Roofing Emergency?</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Not every roof issue needs emergency service. But if you're dealing with any of these, call us right away:
            </p>
            <ul>
              <li><strong>Active leaks:</strong> Water coming into your home, especially if it's getting worse.</li>
              <li><strong>Storm damage:</strong> Significant damage from wind, hail, or fallen trees.</li>
              <li><strong>Missing large sections of shingles:</strong> If a big chunk of your roof is exposed, that's urgent.</li>
              <li><strong>Collapsed or sagging roof sections:</strong> This is a structural emergency. Get out of the house and call us immediately.</li>
              <li><strong>Fire or other disaster damage:</strong> If your roof has been damaged by fire, we can help secure it.</li>
              <li><strong>Large holes or punctures:</strong> From falling branches, debris, or other impacts.</li>
            </ul>
            <p>
              If you're not sure whether it's an emergency, call anyway. We'd rather check it out and find it's not urgent than have you wait and let the damage get worse.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-red-600 text-white p-3 rounded-full">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Emergency Response Services</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              When you call us for an emergency, here's what we do:
            </p>
            <h3>1. Fast Response</h3>
            <p>
              We'll get to you as quickly as we can. In most cases, we can be there the same day—sometimes within a few hours.
            </p>
            <h3>2. Assess the Damage</h3>
            <p>
              We'll figure out what's causing the problem and how bad it is. Safety first—we'll make sure it's not dangerous before we proceed.
            </p>
            <h3>3. Stop the Immediate Problem</h3>
            <p>
              Our first priority is stopping more water from getting in. That might mean:
            </p>
            <ul>
              <li>Tarping damaged sections</li>
              <li>Emergency patching</li>
              <li>Boarding up holes</li>
              <li>Temporary sealing of leaks</li>
            </ul>
            <h3>4. Document Everything</h3>
            <p>
              If you'll be filing an insurance claim, we'll take photos and document the damage for your records.
            </p>
            <h3>5. Create a Repair Plan</h3>
            <p>
              Once the emergency is under control, we'll give you an estimate for permanent repairs and help you figure out next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Common Emergencies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-red-600 text-white p-3 rounded-full">
              <Cloud className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Common Roofing Emergencies in Boise</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <h3>Storm Damage</h3>
            <p>
              Idaho gets its share of severe weather—high winds, hail, heavy snow, and occasional thunderstorms. All of these can damage your roof fast.
            </p>
            <p>
              If you've just been through a storm, it's smart to get your roof checked even if you don't see obvious damage. Sometimes the damage is there, but you can't see it from the ground.
            </p>
            <h3>Wind Damage</h3>
            <p>
              Strong winds can lift and tear off shingles, especially if they were already loose or aging. Once shingles are gone, the underlayment is exposed—and that won't hold up long.
            </p>
            <h3>Hail Damage</h3>
            <p>
              Hail can dent metal flashing, crack shingles, and knock off protective granules. Even small hail can cause damage that leads to leaks down the road.
            </p>
            <h3>Fallen Trees or Branches</h3>
            <p>
              A large branch can punch right through a roof. Even smaller branches can damage shingles or dent gutters.
            </p>
            <h3>Ice Dams</h3>
            <p>
              In winter, ice dams can form at the edge of your roof, trapping water and forcing it under the shingles. This can cause major leaks and water damage.
            </p>
          </div>
        </div>
      </section>

      {/* What to Do */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">What to Do While You Wait for Help</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              If you're dealing with an active leak or major damage, here's what you can do before we arrive:
            </p>
            <ul>
              <li><strong>Move valuables:</strong> Get furniture, electronics, and anything important out of the way of the leak.</li>
              <li><strong>Catch the water:</strong> Use buckets, towels, or tarps to catch dripping water and protect your floors.</li>
              <li><strong>Don't go on the roof yourself:</strong> Especially during a storm or if the roof is damaged. It's dangerous. Let us handle it.</li>
              <li><strong>Turn off electricity in affected areas:</strong> If water is near outlets or light fixtures, shut off the power to that area.</li>
              <li><strong>Take photos:</strong> Document the damage for insurance purposes, but stay safe while doing it.</li>
              <li><strong>Don't delay:</strong> The longer water sits, the more damage it does. Call us as soon as you notice a problem.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Working With Insurance</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Most homeowners insurance policies cover sudden, accidental roof damage—like storm damage or fallen trees.
            </p>
            <p>
              We've worked with dozens of insurance companies, and we know what they need to process your claim. We can:
            </p>
            <ul>
              <li>Document the damage with photos and detailed notes</li>
              <li>Provide written estimates for repairs</li>
              <li>Work directly with your adjuster if needed</li>
              <li>Help you understand what's covered and what's not</li>
            </ul>
            <p>
              That said, we can't file the claim for you—you'll need to contact your insurance company to start that process. But we'll make it as easy as possible on our end.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Why Call Top Shelf Roofing for Emergencies?</h2>
          <div className="prose prose-lg max-w-none">
            <ul>
              <li><strong>We respond fast:</strong> We know emergencies can't wait. We'll get to you as quickly as possible.</li>
              <li><strong>We're experienced:</strong> We've handled hundreds of emergency calls. We know how to stop the damage and fix it right.</li>
              <li><strong>We're equipped:</strong> We keep tarps, emergency supplies, and repair materials on hand so we can help immediately.</li>
              <li><strong>We're local:</strong> We live and work in Boise. We're not storm chasers who show up after bad weather and disappear.</li>
              <li><strong>We're honest:</strong> We'll tell you what needs to be done now, and what can wait. No pressure, no upselling.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Don't Wait—Call Now</h2>
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p>
              Roof emergencies get worse the longer you wait. Water doesn't take a break. It keeps soaking into your insulation, your walls, your ceilings.
            </p>
            <p>
              The faster you call, the less damage you'll have to deal with—and the lower your repair bill will be.
            </p>
            <p>
              We're here to help. Give us a call, and we'll get someone out as soon as we can.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Need Emergency Roof Repair?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Call now. We'll respond as quickly as we can.
          </p>
          <a
            href="tel:2085059352"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call (208) 505-9352 Now
          </a>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Other Roofing Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/services/roof-repair" className="text-blue-600 hover:text-blue-700 font-medium">
              → Roof Repair
            </Link>
            <Link href="/services/roof-replacement" className="text-blue-600 hover:text-blue-700 font-medium">
              → Roof Replacement
            </Link>
            <Link href="/services/roof-inspection" className="text-blue-600 hover:text-blue-700 font-medium">
              → Roof Inspection
            </Link>
            <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
              → View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
