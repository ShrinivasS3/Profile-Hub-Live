"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Github, Linkedin, Twitter, Sun, Moon, ExternalLink, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProfileHub() {
  const [isDark, setIsDark] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const themeClasses = isDark ? "bg-[#12141C] text-[#E2E6F3]" : "bg-[#EFF1F5] text-[#1F1F1F]"

  const cardClasses = isDark
    ? "bg-[rgba(18,21,28,0.6)] backdrop-blur-[12px] border-white/5 hover:bg-[rgba(18,21,28,0.8)] shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] text-[#E2E6F3] hover:text-[#E2E6F3]/90"
    : "bg-[rgba(255,248,240,0.6)] backdrop-blur-[12px] border-black/5 hover:bg-[rgba(255,248,240,0.8)] shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] text-[#1F1F1F] hover:text-[#1F1F1F]/90"

  const sectionBgClasses = isDark
    ? "bg-[#181B23]/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/5"
    : "bg-[#f2f4f8]/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] border border-black/5"

  const projects = [
    { name: "Quadis PD App Development", subtitle: "@Neurogati", color: "from-[#FDBA74] to-[#FB923C]", animation: "pulse", logo: "/mobile-development.png" },
    { name: "Market Research", subtitle: "@Neurogati", color: "from-[#FDBA74] to-[#FB923C]", animation: "pulse", logo: "/market-research.png" },
    { name: "Full Stack Local Chatbot", subtitle: "@CNS Lab IITM", color: "from-[#FDBA74] to-[#FB923C]", animation: "pulse", logo: "/robotics.png" },
  ]

  const stackItems = [
    // --- AI & Machine Learning ---
    { name: "Python", color: "bg-gradient-to-r from-[#FCD5CE] to-[#FFB4A2]", subtitle: "AI & Backend Dev" },
    { name: "PyTorch", color: "bg-gradient-to-r from-[#FCD5CE] to-[#FFB4A2]", subtitle: "Deep Learning" },
    { name: "Langchain", color: "bg-gradient-to-r from-[#FCD5CE] to-[#FFB4A2]", subtitle: "LLM App Framework" },
    { name: "LangGraph", color: "bg-gradient-to-r from-[#FCD5CE] to-[#FFB4A2]", subtitle: "Agentic AI Systems" },
    { name: "pydantic", color: "bg-gradient-to-r from-[#FCD5CE] to-[#FFB4A2]", subtitle: "Agentic AI Systems" },

    // --- Web, Mobile & Cloud ---
    { name: "React", color: "bg-gradient-to-r from-[#FCD5CE] to-[#FFB4A2]", subtitle: "Web Development" },
    { name: "React-Native", color: "bg-gradient-to-r from-[#FCD5CE] to-[#FFB4A2]", subtitle: "Mobile App Dev" },
    { name: "AWS", color: "bg-gradient-to-r from-[#FCD5CE] to-[#FFB4A2]", subtitle: "Cloud Infrastructure" },

    // --- 3D & Creative Tech ---
    { name: "Unreal Engine", color: "bg-gradient-to-r from-[#FCD5CE] to-[#FFB4A2]", subtitle: "Real-time 3D Dev" },
    { name: "Blender", color: "bg-gradient-to-r from-[#FCD5CE] to-[#FFB4A2]", subtitle: "3D Modeling & VFX" },
    { name: "DaVinci Resolve", color: "bg-gradient-to-r from-[#FCD5CE] to-[#FFB4A2]", subtitle: "Video Editing" },
    { name: "Adobe Lightroom", color: "bg-gradient-to-r from-[#FCD5CE] to-[#FFB4A2]", subtitle: "Photo Editing" },

    // --- Database ---
    { name: "Neo4j", color: "bg-gradient-to-r from-[#FCD5CE] to-[#FFB4A2]", subtitle: "Graph Databases" },
    { name: "MongoDB", color: "bg-gradient-to-r from-[#FCD5CE] to-[#FFB4A2]", subtitle: "Document Databases" },

  ]

  const creativePortals = [
    {
      name: "DeviantArt",
      subtitle: "Traditional to Digital Art",
      color: "from-[#C084FC] to-[#FBBF24]",
      logo: "/deviantart.png",
      animation: "float",
      url: "https://www.deviantart.com/3ss123",
    },
    {
      name: "ArtStation",
      subtitle: "Concept Environments",
      color: "from-[#C084FC] to-[#FBBF24]",
      logo: "/art.png",
      animation: "pulse",
      url: "https://www.artstation.com/shrinivassesadri",
    },
    {
      name: "Behance",
      subtitle: "Photography & Posters",
      color: "from-[#C084FC] to-[#FBBF24]",
      logo: "/behance.png",
      animation: "bounce",
      url: "https://www.behance.net/shrinivassesadri",
    },
  ]

  return (
    <div className={`min-h-screen transition-all duration-700 ease-in-out ${themeClasses}`}>
      <style jsx>{`
  @keyframes breathe {
    0%, 100% { 
      transform: scale(1);
      box-shadow: 0 8px 32px rgba(251, 146, 60, 0.35);
    }
    50% { 
      transform: scale(1.02);
      box-shadow: 0 12px 40px rgba(251, 146, 60, 0.45);
    }
  }
  
  @keyframes shimmer {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.7; }
  }
  
  @keyframes ping {
    75%, 100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-8px) rotate(2deg);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.9;
    }
    50% {
      transform: scale(1.1);
      opacity: 1;
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0px) scale(1);
    }
    25% {
      transform: translateY(-4px) scale(1.05);
    }
    50% {
      transform: translateY(-8px) scale(1.1);
    }
    75% {
      transform: translateY(-4px) scale(1.05);
    }
  }
`}</style>
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] min-h-screen">
        {/* Left Sidebar */}
        <div className={`p-8 space-y-8 border-r ${isDark ? "border-white/5" : "border-black/5"} ${sectionBgClasses}`}>
          {/* Profile Section */}
          <div
            className={`space-y-6 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="relative w-28 h-28 mx-auto lg:mx-0">
              <Image
                src="/portrait.png"
                alt="Shrinivas Sesadri"
                width={90}
                height={100}
                className={`rounded-full grayscale hover:opacity-40 transition-all duration-500 ${isDark ? "shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]" : "shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]"} hover:scale-105`}
              />
            </div>

            <div className="text-center lg:text-left">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-[#FDBA74] to-[#FB923C] bg-clip-text text-transparent">
                  Shrinivas Sesadri
                </h1>
                <Button
                  onClick={toggleTheme}
                  variant="ghost"
                  size="icon"
                  className={`rounded-full ${cardClasses} transition-all duration-500 hover:scale-110 shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] w-8 h-8`}
                >
                  <div className="relative w-4 h-4">
                    <Sun
                      className={`absolute inset-0 transition-all duration-500 ${isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`}
                    />
                    <Moon
                      className={`absolute inset-0 transition-all duration-500 ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`}
                    />
                  </div>
                </Button>
              </div>
              <p
                className={`text-base font-medium tracking-wide ${isDark ? "text-[#E2E6F3]/70" : "text-[#1F1F1F]/70"}`}
              >
                AI Architect | Researcher | Creative Technologist
              </p>
            </div>

            <p className={`text-sm leading-relaxed font-light ${isDark ? "text-[#E2E6F3]/80" : "text-[#1F1F1F]/80"} pb-4`}>
              I explore cognition through AI, art, and code. My work spans LLMs, computational neuroscience, and
              creative technology.
            </p>

            <Link href="mailto:shrini1908@gmail.com" passHref>
              <Button className="w-full bg-gradient-to-r from-[#FDBA74] to-[#FB923C] hover:from-[#FDBA74]/90 hover:to-[#FB923C]/90 text-[#1F1F1F] border-0 font-medium tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_8px_24px_rgba(251,146,60,0.3)] hover:shadow-[0_12px_32px_rgba(251,146,60,0.4)]">
                <Mail className="w-4 h-4 mr-2" />
                Reach Out
              </Button>
            </Link>
          </div>

          {/* Connect Section */}
          <div
            className={`space-y-4 transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h3 className="text-xl font-semibold tracking-wide">Connect</h3>
            <div className="space-y-3">
              {[
                { icon: Github, title: "GitHub", subtitle: "Projects & Research", url: "https://github.com/ShrinivasS3" },
                { icon: ExternalLink, title: "Blog", subtitle: "Synchronized Chaos", url: "https://blog.shrinivassesadri.in/" },
                { icon: Linkedin, title: "LinkedIn", subtitle: "Professional Network", url: "https://www.linkedin.com/in/shrinivassesadri/" },
              ].map((item, i) => (
                <Card
                  key={i}
                  className={`${cardClasses} border transition-all duration-500 hover:scale-105 cursor-pointer shadow-inner hover:shadow-lg`}
                >
                  <CardContent className="p-4">
                    <Link href={item.url} target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-[#FB923C]" />
                        <div>
                          <h4 className="font-semibold text-sm tracking-wide">{item.title}</h4>
                          <p className={`text-xs ${isDark ? "text-[#E2E6F3]/60" : "text-[#1F1F1F]/60"}`}>
                            {item.subtitle}
                          </p>
                          <Button variant="ghost" size="icon" className="hover:scale-110 transition-all duration-300">
                            <ExternalLink className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div
            className={`space-y-4 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="flex gap-3 justify-center lg:justify-start">
              <div className="relative group">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-full ${cardClasses} hover:scale-110 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)]`}
                  asChild
                >
                  <Link href="https://www.instagram.com/Shrinivass3/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4" />
                  </Link>
                </Button>
                <div
                  className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${cardClasses} whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.2)]`}
                >
                  @ShrinivasS3
                </div>
              </div>

              <div className="relative group">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-full ${cardClasses} hover:scale-110 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)]`}
                  asChild
                >
                  <Link href="https://www.instagram.com/ss3_art/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4" />
                  </Link>
                </Button>
                <div
                  className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${cardClasses} whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.2)]`}
                >
                  @ss3_art
                </div>
              </div>

              <div className="relative group">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-full ${cardClasses} hover:scale-110 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)]`}
                  asChild
                >
                  <Link href="https://x.com/ShrinivasSesa3" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-4 h-4" />
                  </Link>
                </Button>
                <div
                    className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${cardClasses} whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.2)]`}
                >
                  @ShrinivasSesa3
                </div>
              </div>
            </div>

            <div
              className={`text-xs text-center lg:text-left font-light ${isDark ? "text-[#E2E6F3]/50" : "text-[#1F1F1F]/50"}`}
            >
              <p>© 2025 Shrinivas Sesadri</p>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="p-8 space-y-16">
          {/* My Projects */}
          <section
            className={`transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold tracking-tight">My Ongoing Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <Card
                  key={i}
                  className={`${cardClasses} border transition-all duration-700 hover:scale-105 cursor-pointer hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] group`}
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  <CardContent className="p-0">
                    <div
                        className={`h-32 bg-gradient-to-br ${project.color} rounded-t-lg transition-all duration-500 group-hover:scale-105 relative flex items-center justify-center overflow-hidden`}
                    >
                      <Image
                          src={project.logo || "/placeholder.svg"}
                          alt={`${project.name} logo`}
                          width={80}
                          height={80}
                          className={`object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-500`}
                          style={{
                            animation: `${project.animation} 3s ease-in-out infinite`,
                            animationDelay: `${i * 0.5}s`,
                          }}
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-lg tracking-wide mb-1">{project.name}</h3>
                      {project.subtitle && (
                        <p className={`text-sm font-light ${isDark ? "text-[#E2E6F3]/60" : "text-[#1F1F1F]/60"}`}>
                          {project.subtitle}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* My Stack & Portfolio */}
          <section
              className={`transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* My Stack Card */}
              <Card
                  className={`${cardClasses} border transition-all duration-700 hover:scale-105 cursor-pointer hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] group`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold tracking-tight">My Stack</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {stackItems.map((item, i) => (
                        <div key={i} className="relative group/stack">
                          <div
                              key={i}
                              className={`px-4 py-2 rounded-full text-black text-xs font-medium ${item.color} hover:scale-110 transition-all duration-300 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3)]`}
                              style={{ animationDelay: `${i * 100}ms` }}
                          >
                            {item.name}
                            <div
                                className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs rounded-lg opacity-0 group-hover/stack:opacity-100 transition-opacity duration-300 ${cardClasses} whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.2)] z-10 pointer-events-none`}
                            >
                              {item.subtitle}
                            </div>
                          </div>

                        </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Portfolio Website Card */}
              <Card
                  className={`${cardClasses} border transition-all duration-700 hover:scale-105 cursor-pointer hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] group animate-pulse hover:animate-none`}
                  style={{
                    animation: "breathe 3s ease-in-out infinite",
                  }}
              >
                <Link href="https://portfolio.shrinivassesadri.in" target="_blank" rel="noopener noreferrer">
                  <CardContent className="p-8 h-full flex flex-col justify-between relative overflow-hidden">
                    {/* Subtle animated background gradient */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-[#5EEAD4]/5 to-[#22D3EE]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          animation: "shimmer 4s ease-in-out infinite",
                        }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#FDBA74] to-[#FB923C] bg-clip-text text-transparent">
                          My Portfolio Website
                        </h2>
                        <div className="relative">
                          <ExternalLink className="w-5 h-5 text-[#FDBA74] group-hover:scale-110 transition-all duration-300" />
                          {/* Pulsing ring around the icon */}
                          <div
                              className="absolute inset-0 rounded-full border-2 border-[#22D3EE]/30 t-[1px] p-2"
                              style={{
                                animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                              }}
                          />
                        </div>
                      </div>
                      <p
                          className={`text-sm leading-relaxed font-light mb-6 ${isDark ? "text-[#E2E6F3]/80" : "text-[#1F1F1F]/80"}`}
                      >
                        Explore my complete portfolio with detailed project showcases, case studies, and interactive
                        demos.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[#FDBA74] font-medium text-sm relative z-10">
                      <span>Visit Portfolio</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </section>

          {/* Creative Portals */}
          <section
            className={`transition-all duration-1000 delay-800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-8">My Creative Portals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {creativePortals.map((portal, i) => (
                <Link key={i} href={portal.url} target="_blank" rel="noopener noreferrer">
                  <Card
                    key={i}
                    className={`${cardClasses} border transition-all duration-700 hover:scale-105 cursor-pointer hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] group`}
                    style={{ animationDelay: `${i * 200}ms` }}
                  >
                    <CardContent className="p-0">
                      <div
                          className={`h-32 bg-gradient-to-br ${portal.color} rounded-t-lg transition-all duration-500 group-hover:scale-105 relative flex items-center justify-center overflow-hidden`}
                      >
                        <Image
                            src={portal.logo}
                            alt={`${portal.name} logo`}
                            width={80}
                            height={80}
                            className={`object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-500`}
                            style={{
                              animation: `${portal.animation} 3s ease-in-out infinite`,
                              animationDelay: `${i * 0.5}s`,
                            }}
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold text-lg tracking-wide mb-1">{portal.name}</h3>
                        <p className={`text-sm font-light ${isDark ? "text-[#E2E6F3]/60" : "text-[#1F1F1F]/60"}`}>
                          {portal.subtitle}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
