import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import '../App.css';
import { 
  Mail, 
  Twitter, 
  MessageCircle, 
  Users, 
  Megaphone, 
  Settings, 
  Star, 
  ChevronDown,
  TrendingUp,
  Award,
  Clock,
  Target,
  Globe,
  Zap,
  Shield,
  Heart,
  CheckCircle,
  BarChart3,
  Calendar,
  MessageSquare,
  ThumbsUp,
  Rocket,
  Crown,
  Eye,
  Activity
} from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: '50+', label: 'Projects Managed', icon: Rocket },
    { number: '100K+', label: 'Community Members Grown', icon: Users },
    { number: '2M+', label: 'Social Media Reach', icon: Eye },
    { number: '95%', label: 'Client Satisfaction', icon: Heart },
    { number: '24/7', label: 'Community Support', icon: Clock },
    { number: '3+', label: 'Years Experience', icon: Award }
  ];

  const technicalSkills = [
    { name: 'Discord Server Management', level: 98 },
    { name: 'Telegram Administration', level: 95 },
    { name: 'Twitter/X Strategy', level: 92 },
    { name: 'Community Growth Hacking', level: 90 },
    { name: 'NFT Marketing', level: 88 },
    { name: 'DeFi Protocol Promotion', level: 85 },
    { name: 'Influencer Outreach', level: 92 },
    { name: 'Content Creation', level: 87 },
    { name: 'Event Management', level: 84 },
    { name: 'Analytics & Reporting', level: 89 }
  ];

  const softSkills = [
    { name: 'Leadership', level: 95 },
    { name: 'Communication', level: 98 },
    { name: 'Problem Solving', level: 90 },
    { name: 'Time Management', level: 92 },
    { name: 'Team Coordination', level: 88 },
    { name: 'Strategic Thinking', level: 85 }
  ];

  const achievements = [
    {
      title: 'Top 1% Community Manager',
      description: 'Ranked in the top 1% of Web3 community managers globally',
      icon: Crown,
      date: '2024'
    },
    {
      title: '500K+ Followers Generated',
      description: 'Successfully grew social media followings for multiple projects',
      icon: TrendingUp,
      date: '2024'
    },
    {
      title: 'Multi-Million Dollar Launches',
      description: 'Managed community for projects that raised $10M+ in funding',
      icon: Target,
      date: '2023-2024'
    },
    {
      title: 'Zero Downtime Record',
      description: '99.9% uptime in community management and moderation',
      icon: Shield,
      date: '2023-2024'
    }
  ];

  const services = [
    {
      title: 'Community Building',
      description: 'From 0 to 10K+ members with authentic engagement strategies',
      features: ['Discord/Telegram Setup', 'Moderation Systems', 'Engagement Campaigns', 'Growth Analytics'],
      icon: Users
    },
    {
      title: 'Social Media Management',
      description: 'Strategic content creation and community engagement across platforms',
      features: ['Content Strategy', 'Daily Posting', 'Engagement Optimization', 'Trend Analysis'],
      icon: Megaphone
    },
    {
      title: 'Project Management',
      description: 'End-to-end project coordination from planning to execution',
      features: ['Timeline Planning', 'Team Coordination', 'Quality Assurance', 'Regular Reporting'],
      icon: Settings
    },
    {
      title: 'Brand Ambassador',
      description: 'Authentic representation and promotion of your Web3 project',
      features: ['Thought Leadership', 'Network Expansion', 'Partnership Building', 'Reputation Management'],
      icon: Award
    }
  ];

  const testimonials = [
    {
      text: "Empire transformed our community from 500 to 15K members in just 3 months. Their strategic approach and authentic engagement tactics are unmatched.",
      author: "Alex Chen",
      role: "Founder, DeFi Protocol",
      rating: 5
    },
    {
      text: "Working with Empire was a game-changer. Their deep understanding of Web3 culture and community dynamics helped us achieve our launch goals.",
      author: "Sarah Martinez",
      role: "CMO, NFT Marketplace",
      rating: 5
    },
    {
      text: "Empire's 24/7 dedication and professional approach made them an invaluable part of our team. Highly recommended for any Web3 project.",
      author: "David Kim",
      role: "CEO, GameFi Platform",
      rating: 5
    }
  ];

  const experience = [
    {
      role: 'Senior Community Manager',
      company: 'Multiple Web3 Projects',
      period: '2023 - Present',
      achievements: [
        'Managed communities totaling 200K+ members',
        'Increased engagement rates by 300% on average',
        'Implemented automated moderation systems',
        'Coordinated successful token launches'
      ]
    },
    {
      role: 'Social Media Ambassador',
      company: 'Various DeFi & NFT Projects',
      period: '2022 - Present',
      achievements: [
        'Generated 2M+ impressions monthly',
        'Built strategic partnerships with 50+ influencers',
        'Created viral content reaching 500K+ users',
        'Managed ambassador programs for 10+ projects'
      ]
    },
    {
      role: 'Project Coordinator',
      company: 'Web3 Startups',
      period: '2022 - 2024',
      achievements: [
        'Successfully launched 15+ Web3 projects',
        'Maintained 98% on-time delivery rate',
        'Coordinated cross-functional teams of 20+ members',
        'Implemented project management best practices'
      ]
    }
  ];

  const roles = [
    {
      title: 'Community Moderator',
      icon: Users,
      description: 'Building and moderating vibrant Web3 communities with authentic engagement and growth strategies.'
    },
    {
      title: 'Social Media Ambassador',
      icon: Megaphone,
      description: 'Amplifying project visibility through strategic X posts, threads, and community connections.'
    },
    {
      title: 'Project Manager',
      icon: Settings,
      description: 'Managing Web3 projects from conception to launch with precision and strategic oversight.'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Particles Background */}
      <div className="floating-particles">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 relative">
            <img 
              src="/lovable-uploads/3508cd7e-4adc-4268-a009-fc2b63c29756.png"
              alt="Empire Profile"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-8 border-4 border-primary shadow-lg"
              style={{ 
                boxShadow: '0 0 40px hsl(var(--cyber-purple) / 0.6)',
                animation: 'pulse-glow 3s ease-in-out infinite'
              }}
            />
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 glow-text">
            Empire
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-primary">
            Web3 Community Builder & Brand Ambassador
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Crafting Vibrant Communities & Driving Project Visibility in Web3
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              className="btn-gradient px-8 py-3 text-lg font-semibold"
              onClick={() => window.location.href = 'mailto:proempire404@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('https://twitter.com/Empire2030', '_blank')}
            >
              <Twitter className="mr-2 h-5 w-5" />
              Twitter
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('https://t.me/Empirepro-', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Telegram
            </Button>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto text-primary" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 glow-text">
            Impact & Results
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="card-hover bg-card/80 backdrop-blur-sm border-primary/20 text-center">
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <div className="text-2xl md:text-3xl font-bold glow-text mb-2">
                      {stat.number}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 glow-text">
            About Me
          </h2>
          <Card className="card-hover bg-card/80 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-center mb-8">
                Versatile professional with an in-depth understanding of being a Web3 community manager and moderator. 
                Proficient in creating enabling, interactive, and unique online communities. I tailor strategies for each 
                project's audience, ensuring sustained growth and authentic engagement.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                  <p className="text-muted-foreground">
                    Working with teams and communities across all time zones
                  </p>
                </div>
                <div className="text-center">
                  <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Fast Execution</h3>
                  <p className="text-muted-foreground">
                    Rapid implementation of strategies and community growth
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Trusted Partner</h3>
                  <p className="text-muted-foreground">
                    Reliable and professional service with proven results
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 glow-text">
            Services Offered
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-hover bg-card/80 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-primary">
                          {service.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 glow-text">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="card-hover bg-card/80 backdrop-blur-sm border-primary/20">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{exp.role}</h3>
                      <p className="text-lg text-muted-foreground">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 glow-text">
            Technical & Soft Skills
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-primary text-center">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">{skill.name}</span>
                      <Badge variant="outline" className="border-primary text-primary">
                        {skill.level}%
                      </Badge>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full skill-bar rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-primary text-center">Soft Skills</h3>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">{skill.name}</span>
                      <Badge variant="outline" className="border-primary text-primary">
                        {skill.level}%
                      </Badge>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full skill-bar rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 glow-text">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="card-hover bg-card/80 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold text-primary">{achievement.title}</h3>
                          <Badge variant="outline" className="border-primary text-primary text-xs">
                            {achievement.date}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 glow-text">
            Client Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover bg-card/80 backdrop-blur-sm border-primary/20">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 glow-text">
            Let's Connect
          </h2>
          <Card className="card-hover bg-card/80 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <a href="mailto:proempire404@gmail.com" className="text-lg hover:text-primary transition-colors">
                    proempire404@gmail.com
                  </a>
                </div>
                <div className="flex flex-wrap gap-6 justify-center">
                  <a 
                    href="https://x.com/Empirepro_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg hover:text-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    @Empirepro_
                  </a>
                  <a 
                    href="https://t.me/Empirepro-" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg hover:text-primary transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    @Empirepro-
                  </a>
                </div>
                <div className="pt-6">
                  <Button 
                    className="btn-gradient px-8 py-3 text-lg font-semibold"
                    onClick={() => window.location.href = 'mailto:proempire404@gmail.com'}
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-primary/20">
  <p className="text-muted-foreground">
    © 2025 Empire. Made by
    <a
      href="https://basitresume.pro"
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold ml-1"
    >
      <span className="bg-gradient-to-r from-[#00fff7] to-[#00d9ff] bg-clip-text text-transparent drop-shadow-[0_0_6px_#00fff7]">
        Basit
      </span>
    </a> with ❤️. All rights reserved.
  </p>
</footer>
    </div>
  );
}

export default Index;