"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Clock, Zap, Calendar, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { toast } from "sonner"

export default function AdminPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [apiKey, setApiKey] = useState("")
  const [lastGenerated, setLastGenerated] = useState<string | null>(null)

  const generateBlogPost = async () => {
    if (!apiKey.trim()) {
      toast.error("Please enter your API key")
      return
    }

    setIsGenerating(true)
    try {
      const response = await fetch('/api/generate-blog', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate blog post')
      }

      toast.success(`Blog post created successfully: ${data.slug}`)
      setLastGenerated(data.slug)
    } catch (error: any) {
      toast.error(error.message || 'Failed to generate blog post')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Blog <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Admin</span>
          </h1>
          <p className="text-lg text-slate-600">
            Manage your automated blog posting system
          </p>
        </div>

        <div className="grid gap-8">
          {/* Manual Generation Card */}
          <Card className="border-blue-200/50 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                Manual Blog Generation
              </CardTitle>
              <CardDescription>
                Generate a new blog post immediately using AI
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <Input
                  id="api-key"
                  type="password"
                  placeholder="Enter your blog generation API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="font-mono"
                />
                <p className="text-xs text-slate-500">
                  This is the BLOG_GENERATION_API_KEY from your environment variables
                </p>
              </div>
              
              <Button 
                onClick={generateBlogPost}
                disabled={isGenerating || !apiKey.trim()}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Generate Blog Post
                  </>
                )}
              </Button>

              {lastGenerated && (
                <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-700">
                    Last generated: <code className="font-mono bg-green-100 px-1 rounded">{lastGenerated}</code>
                  </span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Cron Schedule Info */}
          <Card className="border-blue-200/50 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Automated Schedule
              </CardTitle>
              <CardDescription>
                Your current Vercel cron configuration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-blue-900">Schedule</span>
                  </div>
                  <p className="text-sm text-blue-700">Every day at 9:00 AM UTC</p>
                  <p className="text-xs text-blue-600 mt-1">Cron: 0 9 * * *</p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-green-900">Status</span>
                  </div>
                  <p className="text-sm text-green-700">Active on Vercel</p>
                  <p className="text-xs text-green-600 mt-1">Configured in vercel.json</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-medium text-slate-900 mb-2">How it works:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Vercel automatically calls your API every day at 9 AM UTC</li>
                  <li>• AI generates content about web development topics</li>
                  <li>• New blog post appears on your site immediately</li>
                  <li>• No manual intervention required</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Environment Setup */}
          <Card className="border-blue-200/50 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                Environment Setup
              </CardTitle>
              <CardDescription>
                Required environment variables for the system to work
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h4 className="font-medium text-amber-900 mb-2">Required Variables:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="font-mono bg-amber-100 p-2 rounded">
                      <div>BLOG_GENERATION_API_KEY=your-secret-key</div>
                      <div>HUGGING_FACE_API_KEY=your-hf-token</div>
                      <div>CRON_SECRET=optional-cron-secret</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-slate-600">
                  <p className="mb-2"><strong>Setup Instructions:</strong></p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Get a Hugging Face API token from <a href="https://huggingface.co/settings/tokens" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">huggingface.co</a></li>
                    <li>Generate a secure random string for BLOG_GENERATION_API_KEY</li>
                    <li>Add these to your Vercel environment variables</li>
                    <li>Redeploy your application</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 