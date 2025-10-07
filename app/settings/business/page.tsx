"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Building2, Globe, FileText, CreditCard, Shield, Edit, X, Check } from "lucide-react"
import Link from "next/link"

export default function BusinessPage() {
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    businessName: "Easner Bank",
    businessType: "Financial Services",
    registrationNumber: "123456789",
    taxId: "12-3456789",
    website: "https://easnerbank.com",
    email: "business@easnerbank.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
    bankName: "Easner Bank",
    accountNumber: "1234567890",
    routingNumber: "021000021",
    swiftCode: "EASNUS33"
  })

  const handleEdit = (section: string) => {
    setEditingSection(section)
  }

  const handleCancel = () => {
    setEditingSection(null)
  }

  const handleSave = (section: string) => {
    // Here you would typically save to API
    console.log(`Saving ${section}:`, formData)
    setEditingSection(null)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/settings">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Business</h1>
          <p className="text-muted-foreground">Manage your business account details and settings</p>
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Business Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Business Information
                </CardTitle>
                {editingSection === 'business' ? (
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={handleCancel}>
                      <X className="h-4 w-4 mr-1" />
                      Cancel
                    </Button>
                    <Button size="sm" onClick={() => handleSave('business')}>
                      <Check className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                  </div>
                ) : (
                  <Button variant="outline" size="sm" onClick={() => handleEdit('business')}>
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input 
                  id="businessName" 
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  disabled={editingSection !== 'business'}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="legalName">Legal Business Name</Label>
                <Input 
                  id="legalName" 
                  value={formData.businessName + " Inc."}
                  onChange={(e) => handleInputChange('legalName', e.target.value)}
                  disabled={editingSection !== 'business'}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Input 
                    id="businessType" 
                    value={formData.businessType}
                    onChange={(e) => handleInputChange('businessType', e.target.value)}
                    disabled={editingSection !== 'business'}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input 
                    id="industry" 
                    value="Banking"
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    disabled={editingSection !== 'business'}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Business Description</Label>
                <textarea 
                  id="description"
                  className="w-full min-h-[100px] px-3 py-2 border border-input rounded-md resize-none disabled:opacity-50"
                  value="A modern digital banking platform providing seamless financial services."
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  disabled={editingSection !== 'business'}
                />
              </div>
            </CardContent>
          </Card>

          {/* Legal Entity */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Legal Entity
                </CardTitle>
                {editingSection === 'legal' ? (
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={handleCancel}>
                      <X className="h-4 w-4 mr-1" />
                      Cancel
                    </Button>
                    <Button size="sm" onClick={() => handleSave('legal')}>
                      <Check className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                  </div>
                ) : (
                  <Button variant="outline" size="sm" onClick={() => handleEdit('legal')}>
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ein">EIN / Tax ID</Label>
                  <Input 
                    id="ein" 
                    value={formData.taxId}
                    onChange={(e) => handleInputChange('taxId', e.target.value)}
                    disabled={editingSection !== 'legal'}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registrationNumber">Registration Number</Label>
                  <Input 
                    id="registrationNumber" 
                    value={formData.registrationNumber}
                    onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                    disabled={editingSection !== 'legal'}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="incorporationDate">Incorporation Date</Label>
                <Input 
                  id="incorporationDate" 
                  type="date" 
                  value="2024-01-01"
                  onChange={(e) => handleInputChange('incorporationDate', e.target.value)}
                  disabled={editingSection !== 'legal'}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="jurisdiction">Jurisdiction</Label>
                <Input 
                  id="jurisdiction" 
                  value="Delaware, United States"
                  onChange={(e) => handleInputChange('jurisdiction', e.target.value)}
                  disabled={editingSection !== 'legal'}
                />
              </div>
            </CardContent>
          </Card>

          {/* Public Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Public Information
                </CardTitle>
                {editingSection === 'public' ? (
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={handleCancel}>
                      <X className="h-4 w-4 mr-1" />
                      Cancel
                    </Button>
                    <Button size="sm" onClick={() => handleSave('public')}>
                      <Check className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                  </div>
                ) : (
                  <Button variant="outline" size="sm" onClick={() => handleEdit('public')}>
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input 
                  id="website" 
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  disabled={editingSection !== 'public'}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="supportEmail">Support Email</Label>
                <Input 
                  id="supportEmail" 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={editingSection !== 'public'}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Business Phone</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={editingSection !== 'public'}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Account Health */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Account Health</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Verification Status</span>
                <span className="text-sm font-medium text-green-600">Complete</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Compliance</span>
                <span className="text-sm font-medium text-green-600">Up to date</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Risk Level</span>
                <span className="text-sm font-medium text-yellow-600">Low</span>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

    </div>
  )
}
