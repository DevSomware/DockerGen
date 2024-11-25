"use client"
import { useState, useEffect } from 'react'
import { Check, X, FileCode, Github, Zap, Moon, Sun ,FileCode2} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from 'next/navigation'
export default function PricingPlan() {
  const [darkMode, setDarkMode] = useState(false)
 const router = useRouter();
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300 z-10">
      <header className="container mx-auto px-4 py-8 sticky top-0 z-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <nav className="flex justify-between items-center ">
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
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            Simple Pricing for Everyone
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Optimize your Docker workflow with DockerGen - now completely free to use!
          </p>
        </section>

        <section className="max-w-4xl mx-auto">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center dark:text-gray-100">Free Plan</CardTitle>
              <CardDescription className="text-center text-2xl font-semibold dark:text-gray-300">$0 / month</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                <FeatureItem icon={<FileCode />} feature="Unlimited Dockerfile Generation" />
                <FeatureItem icon={<Github />} feature="GitHub Integration" />
                <FeatureItem icon={<Zap />} feature="Image Size Optimization" />
                <FeatureItem icon={<Check />} feature="Best Practices Implementation" />
                <FeatureItem icon={<Check />} feature="Instant Preview" />
                <FeatureItem icon={<X />} feature="Priority Support" available={false} />
                <FeatureItem icon={<X />} feature="Custom Integrations" available={false} />
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-lg py-6 dark:bg-blue-600 dark:text-white" onClick={()=>{
               router.push("/")
              }}>Get Started Now</Button>
            </CardFooter>
          </Card>
        </section>

        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-8 dark:text-gray-100">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FAQItem 
              question="Is it really free?" 
              answer="Yes, DockerGen is completely free to use. We believe in providing value to the developer community and making Docker optimization accessible to everyone."
            />
            <FAQItem 
              question="Are there any usage limits?" 
              answer="There are no strict limits on usage. However, we kindly ask users to be considerate and not abuse the service to ensure its availability for everyone."
            />
            <FAQItem 
              question="Do you offer premium features?" 
              answer="Currently, all our features are available for free. We may introduce premium features in the future, but our core functionality will always remain free."
            />
            <FAQItem 
              question="How do you make money?" 
              answer="We're currently focused on providing value and growing our user base. In the future, we may introduce optional paid features or enterprise solutions."
            />
          </div>
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

function FeatureItem({ icon, feature, available = true }:any) {
  return (
    <li className={`flex items-center space-x-3 ${available ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'}`}>
      <span className={`flex-shrink-0 w-5 h-5 ${available ? 'text-green-500' : 'text-red-500'}`}>
        {icon}
      </span>
      <span>{feature}</span>
    </li>
  )
}

function FAQItem({ question, answer }:any) {
  return (
    <div className="text-left">
      <h3 className="font-semibold mb-2 dark:text-gray-100">{question}</h3>
      <p className="text-gray-600 dark:text-gray-300">{answer}</p>
    </div>
  )
}