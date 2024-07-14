'use client'

import { useForm } from 'react-hook-form'
import { Input, Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { useRef, useState, useEffect } from 'react'
import emailjs from 'emailjs-com'

function Form() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const [send, setSend] = useState(false)
  const [loading, setLoading] = useState(false)
  const form = useRef()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const turnstileResponse = document
      .querySelector('.cf-turnstile')
      .querySelector('input[name="cf-turnstile-response"]').value

    if (!turnstileResponse) {
      ;('Turnstile response is missing.')
      return
    }

    try {
      setLoading(true)
      const response = await fetch('/api/turnstile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          turnstileToken: turnstileResponse,
        }),
      })
      const result = await response.json()

      if (result.success) {
        try {
          const emailResponse = await emailjs.sendForm(
            'service_cryt5gv',
            'template_a1j0bze',
            form.current,
            'ig09SV7KNYzL-JgK-'
          )

          if (emailResponse.status === 200) {
            setSend(true)
          } else {
            'Error sending email:', emailResponse.text
          }
        } catch (error) {
          'Error sending email:', error
        }
      } else {
        'Turnstile verification failed:', result.error
      }
    } catch (error) {
      'Error in Turnstile verification:', error
    } finally {
      setLoading(false) // Ensure spinner is hidden after the request
    }
  }

  return (
    <section className="flex h-full justify-center bg-bgcolor pb-32">
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="my-20 flex animate-fade-up justify-center sm:mt-2"
      >
        <div
          className={`flex min-h-[30rem] w-[20rem] flex-col gap-4 rounded-lg bg-slate-950 p-4 sm:w-[30rem]`}
        >
          <Input
            type="text"
            label="Nombre"
            className={`${send ? 'hidden' : 'block'} bg-slate-950`}
            classNames={{
              input: 'text-lg leading-none active:   ',
              label: 'text-lg leading-none mb-2',
            }}
            isRequired
            isInvalid={!!errors.nombre}
            errorMessage={
              errors.nombre?.type === 'required'
                ? 'First name is required'
                : errors.nombre?.type === 'minLength'
                  ? 'First name must be at least 3 characters'
                  : errors.nombre?.type === 'maxLength'
                    ? 'First name must be less than 20 characters'
                    : ''
            }
            variant="underlined"
            {...register('nombre', { required: true, minLength: 3, maxLength: 20 })}
            aria-invalid={errors.nombre ? 'true' : 'false'}
          />
          <Input
            type="text"
            label="Apellidos"
            className={`${send ? 'hidden' : 'block'} bg-slate-950 text-2xl`}
            classNames={{
              input: 'text-lg leading-none ',
              label: 'text-lg leading-none  mb-2',
            }}
            isRequired
            isInvalid={!!errors.apellidos}
            errorMessage={
              errors.apellidos?.type === 'required'
                ? 'Last name is required'
                : errors.apellidos?.type === 'minLength'
                  ? 'Last name must be at least 5 characters'
                  : errors.apellidos?.type === 'maxLength'
                    ? 'Last name must be less than 40 characters'
                    : ''
            }
            variant="underlined"
            {...register('apellidos', { required: true, minLength: 5, maxLength: 40 })}
            aria-invalid={errors.apellidos ? 'true' : 'false'}
          />
          <Input
            type="email"
            label="Email de contacto"
            className={`${send ? 'hidden' : 'block'} bg-slate-950 text-2xl`}
            classNames={{
              input: 'text-lg leading-none ',
              label: 'text-lg leading-none  mb-2',
            }}
            isRequired
            isInvalid={!!errors.email}
            errorMessage={
              (errors.email?.type === 'pattern' ? 'Invalid email address' : '',
              errors.email?.type === 'required' ? 'Email is required' : '')
            }
            variant="underlined"
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          <Input
            type="text"
            label="Asunto"
            className={`${send ? 'hidden' : 'block'} bg-slate-950 text-2xl`}
            classNames={{
              input: 'text-lg leading-none ',
              label: 'text-lg leading-none  mb-2',
            }}
            isRequired
            isInvalid={!!errors.asunto}
            errorMessage={
              errors.asunto?.type === 'required'
                ? 'Subject is required'
                : errors.asunto?.type === 'minLength'
                  ? 'Subject must be at least 5 characters'
                  : errors.asunto?.type === 'maxLength'
                    ? 'Subject must be less than 100 characters'
                    : ''
            }
            variant="underlined"
            {...register('asunto', { required: true, minLength: 5, maxLength: 100 })}
            aria-invalid={errors.asunto ? 'true' : 'false'}
          />
          <Textarea
            isRequired
            label="Mensaje"
            isInvalid={!!errors.mensaje}
            classNames={{
              input: 'text-lg leading-none ',
              label: 'text-lg leading-none  mb-2',
            }}
            errorMessage={
              errors.mensaje?.type === 'required'
                ? 'Message is required'
                : errors.mensaje?.type === 'minLength'
                  ? 'Message must be at least 20 characters'
                  : errors.mensaje?.type === 'maxLength'
                    ? 'Message must be less than 3000 characters'
                    : ''
            }
            variant="underlined"
            {...register('mensaje', { required: true, minLength: 20, maxLength: 3000 })}
            aria-invalid={errors.mensaje ? 'true' : 'false'}
            className={`${send ? 'hidden' : 'block'} bg-slate-950 text-2xl`}
          />
          <div className={`${send ? 'hidden' : 'block'}`}>
            <div
              className="cf-turnstile"
              data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
              data-response-field-name="cf-turnstile-response"
            ></div>
          </div>
          <Button
            variant="flat"
            className={`${send ? 'hidden' : 'block'} bg-blue-950 pt-1 text-xl text-textsecondary`}
            radius="sm"
            type="submit"
            isLoading={loading}
          >
            {loading ? '' : 'Enviar'}
          </Button>

          <div
            className={`${send ? 'flex' : 'hidden'} flex h-full flex-col items-center justify-center rounded-lg p-8 text-center shadow-lg`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 15 15"
              width={80}
              height={80}
            >
              <path
                stroke="#ffe438"
                d="M4 7.5 7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
              />
            </svg>
            <h1 className="mt-7 text-3xl font-bold text-textsecondary">
              ¡Gracias por tu mensaje!
            </h1>
            <p className="mt-4 text-xl">Te responderemos en menos de 48 horas.</p>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Form
