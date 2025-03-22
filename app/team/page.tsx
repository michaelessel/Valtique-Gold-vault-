import { LoadingScreen } from "@/components/loading-screen"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const teamMembers = [
  {
    name: "James Williams",
    role: "Chief Executive Officer",
    image: "/team/team-member-1.png",
    bio: "With over 20 years of experience in precious metals and security, James leads GoldVault's strategic vision and operations. His expertise in international finance and security protocols has been instrumental in establishing GoldVault as a leader in secure asset management.",
    linkedin: "#",
    email: "james@goldvault.com",
  },
  {
    name: "Michael Chen",
    role: "Chief Security Officer",
    image: "/team/team-member-2.png",
    bio: "Former military intelligence officer with extensive experience in high-security operations. Michael oversees all security protocols and ensures the highest level of protection for our clients' assets using cutting-edge technology and proven methodologies.",
    linkedin: "#",
    email: "michael@goldvault.com",
  },
  {
    name: "Dr. Samuel Osei",
    role: "Head of Technology",
    image: "/team/team-member-3.jpeg",
    bio: "PhD in Computer Science with specialization in blockchain and cryptography. Samuel leads our technical innovations, developing proprietary tracking systems and implementing advanced security measures for digital asset management.",
    linkedin: "#",
    github: "#",
    email: "samuel@goldvault.com",
  },
  {
    name: "David Mensah",
    role: "Director of Operations",
    image: "/team/team-member-4.jpeg",
    bio: "With 15 years in logistics and precious metal transport, David ensures smooth operations across all our facilities. His expertise in international regulations and compliance helps maintain our perfect track record in asset handling.",
    linkedin: "#",
    email: "david@goldvault.com",
  },
]

export default function TeamPage() {
  return (
    <LoadingScreen loadingTime={1200}>
      <main className="min-h-screen pt-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Leadership Team</h1>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                Meet the experts behind GoldVault's success in secure asset management and tracking
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {teamMembers.map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex gap-4">
                      {member.linkedin && (
                        <Link href={member.linkedin} className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      )}
                      {member.github && (
                        <Link href={member.github} className="text-muted-foreground hover:text-primary">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      )}
                      <Link href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </LoadingScreen>
  )
}

