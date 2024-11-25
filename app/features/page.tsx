"use client"
import { ArrowRight, Github, FileCode, Zap, Server, Check, Star, Moon, Sun,FileCode2 } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
export default function Component() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
       <header className="container mx-auto px-4 py-8 sticky top-0 z-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <nav className="flex justify-between items-center">
        <Link href={"/"}> <div className="flex items-center">
              <FileCode2 className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl flex flex-col">DockerGen<span className='text-xs'>
              by DevSomeware
                </span></span>
            </div></Link>
            <div className="flex items-center space-x-4">
           <Link href={"/features"} ><Button variant="ghost" className="dark:text-gray-300">Features</Button></Link>
            <Link href={"/pricing"}><Button variant="ghost" className="dark:text-gray-300">Pricing</Button></Link>
            <Link href={"https://basirblog.hashnode.dev/dockerfile-generation-made-easy-build-download-and-commit-with-dockergen"} target='_blank'><Button variant="ghost" className="dark:text-gray-300">Docs</Button></Link>
            <Link href={"/"}> <Button className="dark:bg-blue-600 dark:text-white">Get Started</Button></Link>
            <Button variant="outline" size="icon" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        
        <section className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            Dockerize with Confidence
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Generate optimized Dockerfiles, commit to GitHub, and streamline your containerization workflow in seconds.
          </p>
          <div className="flex justify-center space-x-4">
           <Link href={"/"} ><Button size="lg" className="text-lg px-6 py-3 dark:bg-blue-600 dark:text-white">
              Get Started <ArrowRight className="ml-2" />
            </Button></Link>
            <Link href={"/"} target='_blank'><Button size="lg" variant="outline" className="text-lg px-6 py-3 dark:border-gray-600 dark:text-gray-300">
              Learn More
            </Button></Link>
          </div>
        </section>

        <section className="mb-24">
          <Tabs defaultValue="dockerfile" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="dockerfile">Dockerfile Generation</TabsTrigger>
              <TabsTrigger value="github">GitHub Integration</TabsTrigger>
              <TabsTrigger value="optimization">Image Optimization</TabsTrigger>
            </TabsList>
            <TabsContent value="dockerfile" className="mt-6">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-gray-100">Intelligent Dockerfile Generation</CardTitle>
                  <CardDescription className="dark:text-gray-300">Create optimized Dockerfiles tailored to your project</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <ul className="space-y-2">
                    <li className="flex items-center"><Check className="mr-2 h-5 w-5 text-green-500" /> Use lightweight base images</li>
                    <li className="flex items-center"><Check className="mr-2 h-5 w-5 text-green-500" /> Efficient layer caching</li>
                    <li className="flex items-center"><Check className="mr-2 h-5 w-5 text-green-500" /> Best practices implementation</li>
                  </ul>
                  <Image src="/imgg.webp" width={300} height={200} alt="Dockerfile Generation" className="rounded-lg shadow-lg" />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="github" className="mt-6">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-gray-100">Seamless GitHub Integration</CardTitle>
                  <CardDescription className="dark:text-gray-300">Commit your Dockerfiles directly to your repositories</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <ul className="space-y-2">
                    <li className="flex items-center"><Check className="mr-2 h-5 w-5 text-green-500" /> One-click commit</li>
                    <li className="flex items-center"><Check className="mr-2 h-5 w-5 text-green-500" /> Automatic branch creation</li>
                    <li className="flex items-center"><Check className="mr-2 h-5 w-5 text-green-500" /> Pull request generation</li>
                  </ul>
                  <Image src="/github.webp" width={300} height={200} alt="GitHub Integration" className="rounded-lg shadow-lg" />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="optimization" className="mt-6">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-gray-100">Advanced Image Optimization</CardTitle>
                  <CardDescription className="dark:text-gray-300">Minimize image sizes for faster deployments</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <ul className="space-y-2">
                    <li className="flex items-center"><Check className="mr-2 h-5 w-5 text-green-500" /> Multi-stage builds</li>
                    <li className="flex items-center"><Check className="mr-2 h-5 w-5 text-green-500" /> Dependency pruning</li>
                    <li className="flex items-center"><Check className="mr-2 h-5 w-5 text-green-500" /> Compression techniques</li>
                  </ul>
                  <Image src="/aimp.webp" width={300} height={200} alt="Image Optimization" className="rounded-lg shadow-lg" />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <FeatureCard
            icon={<FileCode size={24} />}
            title="Smart Dockerfile Generation"
            description="Our AI-powered system creates optimized Dockerfiles tailored to your specific project requirements."
          />
          <FeatureCard
            icon={<Github size={24} />}
            title="GitHub Integration"
            description="Seamlessly commit your generated Dockerfiles to your GitHub repositories with just one click."
          />
          <FeatureCard
            icon={<Server size={24} />}
            title="Image Size Optimization"
            description="Advanced algorithms minimize image layers, resulting in smaller, more efficient Docker images."
          />
          <FeatureCard
            icon={<Zap size={24} />}
            title="Instant Preview"
            description="See your Dockerfile in action with our instant preview feature, allowing you to test before committing."
          />
          <FeatureCard
            icon={<Star size={24} />}
            title="Best Practices"
            description="Automatically implement Docker best practices, ensuring your containers are secure and efficient."
          />
          <FeatureCard
            icon={<ArrowRight size={24} />}
            title="CI/CD Integration"
            description="Easily integrate with popular CI/CD tools to streamline your development pipeline."
          />
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center  dark:text-gray-100 mb-2">What Our Users Say</h2>
          <div className='flex justify-center items-center'>
           <div className='h-2 w-72 bg-indigo-600 rounded-full mb-12'></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="DockerGen has revolutionized our containerization process. It's a game-changer for our DevOps team."
              author="Basir Khan"
              position="Lead Developer @DeployLite."
              image="basir.jpg"
            />
            <TestimonialCard
              quote="The time saved using DockerGen is incredible. Our deployment efficiency has improved by 300%."
              author="Nyayabrata Das"
              position="DevRel, @DeployLite"
              image="na.png"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 my-2">
            <TestimonialCard
              quote="DockerGen simplified our complex Docker setup. It's now faster and more reliable!"
              author="Aniket Subudhi"
              position="Lead Developer @FinTrack."
              image="aniket.png"
            />
            <TestimonialCard
              quote="With DockerGen, we've eliminated manual errors in our Docker files. The automation is fantastic!."
              author="Ankit Kumar Yadav"
              position="Lead Developer @WorkPulse @TradeSpark."
              image="ankit.png"
            />
          </div>
         
          <div className="flex justify-center">
  <TestimonialCard
    quote="DockerGen has drastically reduced our build times. It’s hands down the best tool for Docker automation."
    author="Swagat Kumar Dash"
    position="Lead Developer @Universe"
    image="swgat.png"
  />
</div>


          
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-800 dark:to-teal-700 rounded-lg p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your Docker Workflow?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are streamlining their Docker development process with DockerGen.
          </p>
          <Link href={"/"}><Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white  hover:bg-gray-100">
            Start Your Free Trial <Github className="ml-2" />
          </Button></Link>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-12 mt-24 border-t border-gray-200 dark:border-gray-700">
        <div className="grid md:grid-cols-4 gap-8">
         
          
        </div>
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; 2024 DockerGen by DevSomeware. All rights reserved. Made with ❤️ by DevSomeware Team.</p>
</div>

      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }:any) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <div className="text-blue-600 dark:text-blue-400 mb-4">{icon}</div>
        <CardTitle className="dark:text-gray-100">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="dark:text-gray-300">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({ quote, author, position,image }:any) {
  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardContent className="pt-6">
        <blockquote  className="text-lg text-gray-600 dark:text-gray-300 mb-4">"{quote}"</blockquote>
        <div className="flex items-center">
          <Image src={`/${image}`} width={40} height={40} alt={author} className="rounded-full mr-4" />
          <div>
            <p className="font-semibold dark:text-gray-100">{author}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}