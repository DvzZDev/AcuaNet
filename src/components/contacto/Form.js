'use client'
import { useForm } from 'react-hook-form'
import { Input, Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

function Form() {
  const [send, setSend] = useState(false)

  const form = useRef()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    const recaptchaToken = await executeRecaptcha('contact_form')

    fetch('/api/recaptchasubmit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recaptchaToken: recaptchaToken,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          emailjs
            .sendForm(
              'service_cryt5gv',
              'template_a1j0bze',
              form.current,
              'ig09SV7KNYzL-JgJ-'
            )
            .then((response) => {
              console.log('Email sent successfully:', response.status, response.text)
            })
            .catch((error) => {
              console.error('Error sending email:', error)
            })
          console.log(data)
          setSend(true)
        } else {
          console.error('reCAPTCHA verification failed:', data.error)
        }
      })
      .catch((error) => {
        console.error('Error in reCAPTCHA verification:', error)
      })
  }

  return (
    <section className="flex h-full justify-center bg-bgcolor pb-32">
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="my-20 flex justify-center sm:mt-2"
      >
        <div
          className={`flex min-h-[30rem] w-[20rem] flex-col gap-4 rounded-lg bg-slate-950 p-4 sm:w-[30rem]`}
        >
          <Input
            type="text"
            label="Nombre"
            className={`${send ? 'hidden' : 'block'} bg-slate-950`}
            classNames={{
              input: 'text-lg leading-none text-textprimary',
              label: 'text-lg leading-none text-textprimary mb-2',
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
              input: 'text-lg leading-none text-textprimary',
              label: 'text-lg leading-none text-textprimary mb-2',
            }}
            isRequired
            isInvalid={!!errors.apellidos}
            errorMessage={
              errors.apellidos?.type === 'required'
                ? 'Last name is required'
                : errors.apellidos?.type === 'minLength'
                  ? 'Last name must be at least 3 characters'
                  : errors.apellidos?.type === 'maxLength'
                    ? 'Last name must be less than 40 characters'
                    : ''
            }
            variant="underlined"
            {...register('apellidos', { required: true, minLength: 3, maxLength: 40 })}
            aria-invalid={errors.apellidos ? 'true' : 'false'}
          />
          <Input
            type="email"
            label="Email de contacto"
            className={`${send ? 'hidden' : 'block'} bg-slate-950 text-2xl`}
            classNames={{
              input: 'text-lg leading-none text-textprimary',
              label: 'text-lg leading-none text-textprimary mb-2',
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
              input: 'text-lg leading-none text-textprimary',
              label: 'text-lg leading-none text-textprimary mb-2',
            }}
            isRequired
            isInvalid={!!errors.asunto}
            errorMessage={
              errors.asunto?.type === 'required'
                ? 'Subject is required'
                : errors.asunto?.type === 'minLength'
                  ? 'Subject must be at least 3 characters'
                  : errors.asunto?.type === 'maxLength'
                    ? 'Subject must be less than 100 characters'
                    : ''
            }
            variant="underlined"
            {...register('asunto', { required: true, minLength: 3, maxLength: 100 })}
            aria-invalid={errors.asunto ? 'true' : 'false'}
          />
          <Textarea
            isRequired
            label="Mensaje"
            isInvalid={!!errors.mensaje}
            classNames={{
              input: 'text-lg leading-none text-textprimary',
              label: 'text-lg leading-none text-textprimary mb-2',
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
          <Button
            variant="flat"
            className={`${send ? 'hidden' : 'block'} bg-blue-950 text-xl text-textsecondary`}
            radius="sm"
            type="submit"
          >
            Enviar
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
            <p className="mt-4 text-xl text-textprimary">
              Te responderemos en menos de 48 horas.
            </p>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Form
