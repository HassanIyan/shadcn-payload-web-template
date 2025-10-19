'use client'

import React, { FC } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { LucideArrowRight } from 'lucide-react'
import { Form } from '@/payload-types'

export interface FormOneProps {
    title?: string | null
    description?: string | null
    form?: (number | null) | Form
    id?: string | null
    blockName?: string | null
    blockType: 'form-one'
}

export const FormOne: FC<FormOneProps> = ({ ...props }) => {
    return (
        <section id="form" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                            {'Quick Inquiry Form'}
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            {'Get started with your application by filling out this form.'}
                        </p>
                    </div>

                    {/* Form Card */}
                    <Card className="shadow-lg border border-border/50 rounded-2xl">
                        <CardHeader>
                            <CardTitle>Student Inquiry</CardTitle>
                            <CardDescription>
                                Provide your details and we’ll get back to you shortly.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-6">
                                {/* Name Fields */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input
                                            id="firstName"
                                            placeholder="Enter first name"
                                            className="rounded-xl"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input
                                            id="lastName"
                                            placeholder="Enter last name"
                                            className="rounded-xl"
                                        />
                                    </div>
                                </div>

                                {/* Email & Phone */}
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter email address"
                                        className="rounded-xl"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input
                                        id="phone"
                                        placeholder="Enter phone number"
                                        className="rounded-xl"
                                    />
                                </div>

                                {/* Grade Level & Start Date */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="gradeLevel">Grade Level</Label>
                                        <Select>
                                            <SelectTrigger
                                                id="gradeLevel"
                                                className="rounded-xl h-10"
                                            >
                                                <SelectValue placeholder="Select grade level" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="kindergarten">
                                                    Kindergarten
                                                </SelectItem>
                                                <SelectItem value="primary">
                                                    Primary (Grades 1–5)
                                                </SelectItem>
                                                <SelectItem value="secondary">
                                                    Secondary (Grades 6–11)
                                                </SelectItem>
                                                <SelectItem value="alevels">
                                                    A-Levels (Grades 12–13)
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="startDate">Preferred Start Date</Label>
                                        <Input
                                            id="startDate"
                                            type="date"
                                            className="rounded-xl h-10"
                                        />
                                    </div>
                                </div>

                                {/* Additional Information */}
                                <div className="space-y-2">
                                    <Label htmlFor="message">Additional Information</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your child's interests, previous school experience, or any questions you have..."
                                        rows={4}
                                        className="rounded-xl"
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    className="w-full rounded-xl h-12 text-lg font-medium flex items-center justify-center gap-2"
                                >
                                    Submit Inquiry
                                    <LucideArrowRight className="h-5 w-5" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
