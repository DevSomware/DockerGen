'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Upload, FileCode2, Check, AlertCircle, Copy, RefreshCw, Trash2, Save, Download, Menu, X, Home, Settings, HelpCircle, Code2, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {Toaster,toast} from "sonner"
import { useTheme } from 'next-themes'
const generateDockerfile = async (repoUrl: string) => { 
  return `FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`
}
const commitToGithub = async (repoUrl: string, dockerfile: string) => { /* Implementation */ }
const detectLanguagesAndFrameworks = async (repoUrl: string) => {
  // This is a mock implementation. In a real scenario, this would analyze the repository.
  return {
    languages: ['JavaScript', 'TypeScript'],
    frameworks: ['React', 'Express']
  }
}

export default function DockerFilegen({userdata,repo,token,islogin}:any) {
    const { theme, setTheme } = useTheme()
  const [gitUrl, setGitUrl] = useState('')
  const [repos, setRepos] = useState<{ id: number; name: string; url: string; stars: number; language: string }[]>([])
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null)
  const [dockerfile, setDockerfile] = useState('')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isCommitting, setIsCommitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<{ name: string; avatar: string } | null>(null)
  const [detectedTech, setDetectedTech] = useState<{ languages: string[], frameworks: string[] } | null>(null)

  const handleSignIn = async () => {
                   const clientId = process.env.NEXT_PUBLIC_GIT_HUB_CLIENT_ID;
                   const redirectUri = encodeURIComponent(process.env.NEXT_PUBLIC_GIT_HUB_REDIRECT_URI||"");
                   const state = encodeURIComponent(process.env.NEXT_PUBLIC_STATE||"");
    window.open(
        `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo&state=${state}`,
        "_self"
      ); 
    // try {
    //   await signInWithGithub()
    //   setIsSignedIn(true)
    //   const userRepos = await fetchUserRepos()
    //   setRepos(userRepos)
    //   setUser({ name: 'John Doe', avatar: '/placeholder.svg?height=40&width=40' })
    // } catch (err) {
    //   setError('Failed to sign in. Please try again.')
    // }
  }
useEffect(()=>{
if(islogin){
    setIsSignedIn(true)
    setUser({name:userdata.name,avatar:userdata.img})
}
},[islogin])
  const handleGenerate = async (url: string) => {
    setIsGenerating(true)
    setError(null)
    try {
      const generatedDockerfile = await generateDockerfile(url)
      setDockerfile(generatedDockerfile)
      const detected = await detectLanguagesAndFrameworks(url)
      setDetectedTech(detected)
    } catch (err) {
      setError('Failed to generate Dockerfile. Please check the repository URL and try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCommit = async () => {
    if (selectedRepo && dockerfile) {
      setIsCommitting(true)
      setError(null)
      try {
        await commitToGithub(selectedRepo, dockerfile)
        // Show success message or update UI accordingly
      } catch (err) {
        setError('Failed to commit Dockerfile. Please try again.')
      } finally {
        setIsCommitting(false)
      }
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(dockerfile)
    toast.success("Copied Successfully");
    // You might want to show a temporary success message here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <Toaster position='top-center'/>
      <nav className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <FileCode2 className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl">DockerGen</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">Contact</Button>
            </div>
            <div className="flex items-center">
              {isSignedIn && user ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Signed in as {user.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <Button onClick={handleSignIn}>
                  <Github className="mr-2 h-4 w-4" /> Sign In
                </Button>
              )}
              <div className='mx-6'>
               <TooltipProvider >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle theme</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden ml-2">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>Navigate through our app</SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4 mt-4">
                    <Button variant="ghost" className="justify-start">
                      <Home className="mr-2 h-4 w-4" /> Home
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      <FileCode2 className="mr-2 h-4 w-4" /> Features
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      <Settings className="mr-2 h-4 w-4" /> Pricing
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      <HelpCircle className="mr-2 h-4 w-4" /> Contact
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-4 max-w-4xl relative">
        <div className="absolute inset-0 -z-10 bg-[url('/placeholder.svg?height=400&width=800')] bg-center bg-no-repeat opacity-5"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-background/80 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Docker File Generator</CardTitle>
                  <CardDescription>Generate Dockerfiles from Git repositories with ease</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="url" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="url">
                    <Upload className="w-4 h-4 mr-2" />
                    Git URL
                  </TabsTrigger>
                  <TabsTrigger value="github">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub Repos
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="url">
                  <div className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Enter Git repository URL"
                      value={gitUrl}
                      onChange={(e) => setGitUrl(e.target.value)}
                      className="bg-background/50 backdrop-blur-sm"
                    />
                    <Button onClick={() => handleGenerate(gitUrl)} disabled={isGenerating} className="w-full">
                      {isGenerating ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : <FileCode2 className="mr-2 h-4 w-4" />}
                      {isGenerating ? 'Generating...' : 'Generate Dockerfile'}
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="github">
                  {!isSignedIn ? (
                    <Button onClick={handleSignIn} className="w-full">
                      <Github className="mr-2 h-4 w-4" /> Sign in with GitHub
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <Select onValueChange={(value) => setSelectedRepo(value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a repository" />
                        </SelectTrigger>
                        <SelectContent>
                          {repo.map((item:any,index:number) => (
                            // @ts-ignore
                            <SelectItem key={index} value={item}>
                              <div className="flex items-center">
                                <FileCode2 className="mr-2 h-4 w-4" />
                                <span>{item.full_name}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button
                        onClick={() => selectedRepo && handleGenerate(selectedRepo)}
                        disabled={!selectedRepo || isGenerating}
                        className="w-full"
                      >
                        {isGenerating ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : <FileCode2 className="mr-2 h-4 w-4" />}
                        {isGenerating ? 'Generating...' : 'Generate Dockerfile'}
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Alert variant="destructive" className="mx-6 mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>
            {dockerfile && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
              >
                <CardContent>
                  {detectedTech && (
                    <div className="mb-4 p-4 bg-secondary/10 rounded-md">
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <Code2 className="mr-2 h-5 w-5" />
                        Detected Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {detectedTech.languages.map((lang) => (
                          <Badge key={lang} variant="secondary">{lang}</Badge>
                        ))}
                        {detectedTech.frameworks.map((framework) => (
                          <Badge key={framework} variant="outline">{framework}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="relative">
                    <pre className="bg-secondary/10 backdrop-blur-sm p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">{dockerfile}</code>
                    </pre>
                    <div className="absolute top-2 right-2 space-x-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                              <Copy className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          
                          <TooltipContent>
                            <p>Copy to clipboard</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={() => setDockerfile('')}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Clear Dockerfile</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={handleCommit} disabled={isCommitting} className="w-full sm:w-auto">
                    {isCommitting ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                    {isCommitting ? 'Committing...' : 'Commit to GitHub'}
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    Download Dockerfile
                  </Button>
                </CardFooter>
              </motion.div>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  )
}