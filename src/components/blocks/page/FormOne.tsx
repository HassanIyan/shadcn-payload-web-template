'use client'

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
import { LucideArrowRight } from 'lucide-react'
import { Form } from '@/payload-types'
import React, { FC } from 'react'

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
        <section className="py-20" id="form">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Quick Inquiry Form
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get started with your application by filling out this form
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="rounded-lg bg-white shadow-xl p-8">
                        <form className="space-y-6">
                            {/* Name Fields */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input
                                        id="firstName"
                                        placeholder="Enter first name"
                                        className="rounded-full"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input
                                        id="lastName"
                                        placeholder="Enter last name"
                                        className="rounded-full"
                                    />
                                </div>
                            </div>

                            {/* Email & Phone */}
                            <div className="flex flex-col">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter email address"
                                    className="rounded-full"
                                />
                            </div>
                            <div className="flex flex-col">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    id="phone"
                                    placeholder="Enter phone number"
                                    className="rounded-full"
                                />
                            </div>

                            {/* Grade Level & Start Date */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <Label htmlFor="gradeLevel">Grade Level</Label>
                                    <Select>
                                        <SelectTrigger
                                            id="gradeLevel"
                                            className="rounded-full h-10"
                                        >
                                            <SelectValue placeholder="Select grade level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="kindergarten">
                                                Kindergarten
                                            </SelectItem>
                                            <SelectItem value="primary">
                                                Primary (Grades 1-5)
                                            </SelectItem>
                                            <SelectItem value="secondary">
                                                Secondary (Grades 6-11)
                                            </SelectItem>
                                            <SelectItem value="alevels">
                                                A-Levels (Grades 12-13)
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-col">
                                    <Label htmlFor="startDate">Preferred Start Date</Label>
                                    <Input
                                        id="startDate"
                                        type="date"
                                        className="rounded-full h-10"
                                    />
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div className="flex flex-col">
                                <Label htmlFor="message">Additional Information</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your child's interests, previous school experience, or any questions you have..."
                                    rows={4}
                                    className="rounded-2xl"
                                />
                            </div>

                            {/* Submit Button */}
                            <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white rounded-full h-12 text-lg font-semibold flex items-center justify-center gap-2">
                                Submit Inquiry
                                <LucideArrowRight className="h-5 w-5" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
