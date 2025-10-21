import { Form as FormProps } from '@/payload-types'
import React, { FC, Fragment } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Textarea } from '../ui/textarea'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select'

const Form: FC<FormProps & { action?: (formData: FormData) => void }> = ({ action, ...props }) => {
    return (
        <form
            action={action}
            className="container max-w-4xl border-border border p-8 rounded-md bg-card text-card-foreground my-8"
        >
            {props.name && <h1 className="font-bold text-2xl mb-1">{props.name}</h1>}
            {props.description && <p className="mb-6">{props.description}</p>}
            <Input type="hidden" readOnly name="id" value={props.id} />
            {props?.blocks?.map((block, index) => (
                <div className="grid gap-2 mb-6" key={index}>
                    <Label
                        htmlFor={block?.name}
                    >{`${block?.label} ${block?.required ? '*' : ''}`}</Label>
                    {block?.blockType === 'checkboxGroup' ? (
                        <Fragment>
                            {block?.options?.map((option, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <Checkbox
                                        disabled={option?.disabled ? true : false}
                                        id={option.value}
                                        value={option.value}
                                        name={block?.name}
                                        defaultChecked={option?.defaultChecked ? true : false}
                                    />
                                    <Label htmlFor={option?.value}>{option?.label}</Label>
                                </div>
                            ))}
                        </Fragment>
                    ) : block?.blockType === 'radioGroup' ? (
                        <RadioGroup
                            name={block?.name}
                            defaultValue={block?.defaultValue || undefined}
                        >
                            {block?.options?.map((option, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <RadioGroupItem
                                        disabled={option?.disabled ? true : false}
                                        id={option.value}
                                        value={option.value}
                                    />
                                    <Label htmlFor={option?.value}>{option?.label}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    ) : block?.blockType === 'selectField' ? (
                        <Select
                            required={block?.required ? true : false}
                            name={block?.name}
                            defaultValue=""
                        >
                            <SelectTrigger className=" w-full">
                                <SelectValue placeholder={block?.placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {block?.options?.map((option, idx) => (
                                        <SelectItem
                                            key={idx}
                                            value={option.value}
                                            disabled={option?.disabled ? true : false}
                                        >
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    ) : block?.blockType === 'textareaField' ? (
                        <Textarea
                            required={block?.required ? true : false}
                            placeholder={block?.placeholder || ''}
                            rows={block?.rows || 3}
                            name={block?.name}
                        />
                    ) : (
                        <Input
                            name={block?.name}
                            type={
                                block?.blockType === 'emailField'
                                    ? 'email'
                                    : block?.blockType === 'fileUploadField'
                                      ? 'file'
                                      : block?.blockType === 'numberField'
                                        ? 'number'
                                        : 'text'
                            }
                            required={block?.required ? true : false}
                            // @ts-expect-error: nextjs issue
                            placeholder={block?.placeholder || ''}
                            // @ts-expect-error: nextjs issue
                            min={block?.min}
                            // @ts-expect-error: nextjs issue
                            max={block?.max}
                            // @ts-expect-error: nextjs issue
                            accept={block?.acceptedFileTypes}
                        />
                    )}
                    {block?.helpText && (
                        <p className="text-muted-foreground text-sm">{block?.helpText}</p>
                    )}
                </div>
            ))}
            <Button className="ms-auto block">Submit</Button>
        </form>
    )
}

export default Form
