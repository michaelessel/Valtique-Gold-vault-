import { LoadingScreen } from "@/components/loading-screen"
import { Shield, Users, Building, Trophy, Globe, Award, Lock } from "lucide-react"
import { GoldShowcase } from "@/components/gold-showcase"
import Image from "next/image"

export default function AboutPage() {
  return (
    <LoadingScreen loadingTime={1200}>
      <main className="min-h-screen pt-24">
        <div className="container px-4 md:px-6">
          <section className="grid gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Valtique Gold Vault</h1>
              <p className="text-xl text-muted-foreground">
                Securing precious assets with cutting-edge technology since 1995
              </p>
            </div>

            {/* Gold Showcase */}
            <div className="w-full max-w-5xl mx-auto">
              <GoldShowcase />
            </div>

            {/* Features Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
              <div className="flex items-center gap-2 p-4 rounded-lg border bg-card">
                <Shield className="h-5 w-5 text-primary" />
                <p className="text-sm">Industry-leading security protocols</p>
              </div>
              <div className="flex items-center gap-2 p-4 rounded-lg border bg-card">
                <Users className="h-5 w-5 text-primary" />
                <p className="text-sm">Expert team of security professionals</p>
              </div>
              <div className="flex items-center gap-2 p-4 rounded-lg border bg-card">
                <Building className="h-5 w-5 text-primary" />
                <p className="text-sm">State-of-the-art facilities worldwide</p>
              </div>
              <div className="flex items-center gap-2 p-4 rounded-lg border bg-card">
                <Trophy className="h-5 w-5 text-primary" />
                <p className="text-sm">Award-winning tracking technology</p>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Our History</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Founded in 1995, Valtique Gold Vault has been at the forefront of precious asset security and
                    tracking. What started as a small secure storage facility in Accra, Ghana has grown into a global
                    network of high-security vaults with operations spanning across Africa and beyond.
                  </p>
                  <p>
                    Our journey began when a group of security experts and precious metals specialists identified a
                    critical gap in the market for secure, transparent, and technologically advanced storage solutions
                    for high-value assets. The founding team, led by renowned security consultant James Williams,
                    established our first facility in Ghana's capital with a commitment to unparalleled security and
                    client service.
                  </p>
                  <p>
                    By 1998, we had expanded our operations to include a second facility in Kinshasa, Democratic
                    Republic of Congo, strategically positioned to serve the growing mining industry in the region. This
                    marked the beginning of our pan-African expansion strategy, bringing world-class security solutions
                    to regions rich in natural resources.
                  </p>
                  <p>
                    The early 2000s saw Valtique Gold Vault pioneer the integration of digital tracking technologies
                    with traditional physical security measures. We were among the first in the industry to implement
                    blockchain-based asset tracking, providing our clients with unprecedented transparency and peace of
                    mind regarding their valuable holdings.
                  </p>
                  <p>
                    In 2005, we established our Advanced Security Research Center in Accra, dedicated to developing
                    cutting-edge security technologies specifically designed for precious metals and gemstones. This
                    facility has been responsible for numerous innovations in the field, including our proprietary
                    GoldTrack™ system, which has set new standards for asset tracking and verification.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    To provide unparalleled security and peace of mind for our clients' most valuable assets through
                    innovative technology and expert service.
                  </p>
                  <p>
                    We continuously invest in advanced security systems and professional development to maintain our
                    position as industry leaders. Our commitment to excellence drives every aspect of our operations,
                    from the design of our facilities to the training of our personnel.
                  </p>
                  <p>
                    At Valtique Gold Vault, we believe that true security comes from a combination of cutting-edge
                    technology, rigorous protocols, and exceptional people. This philosophy has guided our growth and
                    development for over two decades, earning us the trust of individuals, institutions, and governments
                    worldwide.
                  </p>
                  <p>
                    Our mission extends beyond mere storage. We aim to provide comprehensive asset management solutions
                    that address the unique challenges associated with precious metals and gemstones, from acquisition
                    and transportation to storage and eventual transfer or sale.
                  </p>
                  <p>
                    We are committed to maintaining the highest standards of ethical conduct and regulatory compliance
                    across all our operations. This includes strict adherence to international anti-money laundering
                    regulations, conflict mineral protocols, and responsible sourcing guidelines.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* African Operations Section */}
          <section className="py-12 md:py-16 bg-muted rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Our African Operations</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1628-cSsZS36CfknvZ06FBnhpywtmihE4om.jpeg"
                    alt="Valtique Gold Vault Ghana Headquarters"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">Ghana Headquarters</h3>
                    <p className="text-white/80">Established 1995</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    Our flagship facility in Accra, Ghana serves as both our corporate headquarters and our primary
                    secure storage facility in West Africa. Situated in a purpose-built complex with state-of-the-art
                    security systems, this location houses our Advanced Security Research Center and serves clients
                    throughout the region.
                  </p>
                  <p className="text-muted-foreground">
                    The Ghana facility specializes in gold storage and certification, working closely with local mining
                    operations and international traders to provide secure custody and transparent tracking of precious
                    metals from mine to market. Our team of over 200 security professionals, technologists, and precious
                    metals experts ensure the highest standards of service and protection.
                  </p>
                  <p className="text-muted-foreground">
                    In 2015, we expanded our Ghana operations to include a dedicated diamond assessment and storage
                    wing, equipped with cutting-edge gemological laboratories and specialized security protocols
                    designed specifically for high-value gemstones.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1630-UNUH7pKhcWgmcaw60hwEvrvAYPKt2G.webp"
                    alt="Valtique Gold Vault Congo Operations"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">Congo Operations</h3>
                    <p className="text-white/80">Established 1998</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    Our Congo facility in Kinshasa represents our commitment to serving resource-rich regions with
                    world-class security infrastructure. This location specializes in the secure handling of newly mined
                    precious metals and gemstones, providing crucial services to the region's mining industry.
                  </p>
                  <p className="text-muted-foreground">
                    The Congo operation is equipped with specialized facilities for the initial assessment,
                    certification, and secure storage of raw materials directly from mining operations. Our team works
                    closely with government authorities and international organizations to ensure compliance with all
                    regulations regarding conflict minerals and responsible sourcing.
                  </p>
                  <p className="text-muted-foreground">
                    In 2010, we established a satellite facility in Lubumbashi to better serve the mining operations in
                    the southeastern region of the country. This expansion has allowed us to provide more comprehensive
                    coverage and faster response times throughout the DRC.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values Section */}
          <section className="py-12 md:py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 border rounded-lg bg-card">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Security Excellence</h3>
                <p className="text-muted-foreground">
                  We are relentlessly committed to maintaining the highest standards of security in every aspect of our
                  operations. From physical infrastructure to digital systems, we continuously invest in the most
                  advanced technologies and methodologies to protect our clients' assets.
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Integrity & Trust</h3>
                <p className="text-muted-foreground">
                  We operate with unwavering integrity in all our dealings. Our clients trust us with their most
                  valuable assets, and we honor that trust through transparent operations, ethical business practices,
                  and strict adherence to regulatory requirements across all jurisdictions.
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card">
                <Globe className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Standards, Local Expertise</h3>
                <p className="text-muted-foreground">
                  We combine international best practices with deep local knowledge in each region where we operate.
                  This approach allows us to provide standardized security excellence while addressing the unique
                  challenges and opportunities of different markets, particularly in our core African operations.
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation Leadership</h3>
                <p className="text-muted-foreground">
                  We drive innovation in the secure storage and tracking industry. Through our dedicated research
                  facilities and partnerships with technology leaders, we continuously develop new solutions that
                  enhance security, improve transparency, and provide greater peace of mind for our clients.
                </p>
              </div>
            </div>
          </section>

          {/* Security Approach Section */}
          <section className="py-12 md:py-16">
            <h2 className="text-3xl font-bold mb-8">Our Security Approach</h2>
            <div className="space-y-6">
              <p className="text-lg">
                At Valtique Gold Vault, security is not just a feature—it's the foundation of everything we do. Our
                comprehensive approach combines multiple layers of protection to ensure the absolute safety of your
                valuable assets.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="p-6 border rounded-lg">
                  <Lock className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Physical Security</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Reinforced concrete structures with steel-core walls</li>
                    <li>• Biometric access controls with multi-factor authentication</li>
                    <li>• 24/7 armed security personnel with specialized training</li>
                    <li>• Seismic sensors and advanced motion detection systems</li>
                    <li>• Redundant power systems with multiple backup generators</li>
                  </ul>
                </div>

                <div className="p-6 border rounded-lg">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Digital Security</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Proprietary blockchain-based asset tracking system</li>
                    <li>• End-to-end encrypted communications infrastructure</li>
                    <li>• Air-gapped networks for critical security systems</li>
                    <li>• Real-time monitoring with AI-powered anomaly detection</li>
                    <li>• Regular penetration testing by independent security firms</li>
                  </ul>
                </div>

                <div className="p-6 border rounded-lg">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Operational Security</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Rigorous background checks for all personnel</li>
                    <li>• Compartmentalized access based on strict need-to-know principles</li>
                    <li>• Regular security drills and scenario-based training</li>
                    <li>• Comprehensive audit trails for all vault activities</li>
                    <li>• Collaboration with local and international security agencies</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Client Testimonials */}
          <section className="py-12 md:py-16 bg-muted rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-background p-6 rounded-lg border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">International Mining Corporation</h4>
                    <p className="text-sm text-muted-foreground">Client since 2005</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Valtique Gold Vault's facilities in Ghana have been instrumental in securing our supply chain. Their
                  combination of physical security and digital tracking gives us complete confidence in the integrity of
                  our assets."
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Central Bank of West Africa</h4>
                    <p className="text-sm text-muted-foreground">Client since 2010</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The level of security and professionalism at Valtique Gold Vault exceeds international standards.
                  Their facilities provide the perfect solution for our gold reserve storage requirements."
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Diamond Trading Company</h4>
                    <p className="text-sm text-muted-foreground">Client since 2015</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Valtique Gold Vault's specialized diamond storage facilities in Congo provide unmatched security for
                  our most valuable assets. Their tracking technology has revolutionized how we manage our inventory."
                </p>
              </div>
            </div>
          </section>

          {/* Global Presence Section */}
          <section className="py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 text-center">
                <h2 className="text-3xl font-bold">Global Presence</h2>
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="space-y-2">
                    <h3 className="text-4xl font-bold text-primary">12+</h3>
                    <p className="text-muted-foreground">Countries</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-4xl font-bold text-primary">50+</h3>
                    <p className="text-muted-foreground">Secure Facilities</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-4xl font-bold text-primary">10K+</h3>
                    <p className="text-muted-foreground">Trusted Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Future Vision Section */}
          <section className="py-12 md:py-16">
            <h2 className="text-3xl font-bold mb-8">Our Vision for the Future</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                As we look to the future, Valtique Gold Vault remains committed to expanding our presence across Africa
                and beyond, bringing world-class security solutions to emerging markets and established financial
                centers alike. Our strategic plan includes the development of new facilities in East Africa and Southern
                Africa by 2025.
              </p>
              <p className="text-muted-foreground">
                We are also investing heavily in the next generation of security technologies, with a particular focus
                on quantum-resistant encryption, advanced biometrics, and AI-powered security systems. Our research
                teams in Ghana and Congo are at the forefront of these developments, working to ensure that our security
                measures remain several steps ahead of potential threats.
              </p>
              <p className="text-muted-foreground">
                Beyond technology, we are expanding our service offerings to include comprehensive asset management
                solutions, insurance services, and specialized consulting for high-net-worth individuals and
                institutions. These initiatives reflect our holistic approach to asset security and our commitment to
                meeting the evolving needs of our diverse client base.
              </p>
              <p className="text-muted-foreground">
                We believe that the future of precious asset security lies in the seamless integration of physical and
                digital protections, backed by exceptional human expertise. This philosophy will continue to guide our
                growth and innovation as we work to set new standards for the industry globally.
              </p>
            </div>
          </section>
        </div>
      </main>
    </LoadingScreen>
  )
}

