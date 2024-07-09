// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   const secretKey = process.env.RECAPTCHA_SECRET_KEY;
//   const postData = await request.json();
//   const { recaptchaToken } = postData;
//   const formData = `secret=${secretKey}&response=${recaptchaToken}`;

//   try {
//     const res = await fetch('https://www.recaptcha.net/recaptcha/api/siteverify', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: formData,
//     });

//     if (!res.ok) {
//       throw new Error(`reCAPTCHA request failed with status: ${res.status}`);
//     }

//     const data = await res.json();
//     console.log('Recaptcha response:', data);

//     // Verificar si la verificación de reCAPTCHA fue exitosa
//     if (!data.success) {
//       console.error('reCAPTCHA verification failed:', data['error-codes']);
//       return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
//     }

//     return NextResponse.json(data);
//   } catch (error) {
//     console.error('Error submitting recaptcha:', error);
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }
