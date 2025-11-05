import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { userInfo, results } = await request.json();

    // Aquí deberías configurar nodemailer o usar un servicio de email como SendGrid, Resend, etc.
    // Por ahora, simularemos el envío

    console.log('Enviando resultados a:', userInfo.email);
    console.log('Nombre:', userInfo.nombre, userInfo.apellido);
    console.log('Código Holland:', results.hollandCode);
    console.log('Top Carreras:', results.topCareers.map((c: any) => c.name).join(', '));

    // Simular delay de envío
    await new Promise(resolve => setTimeout(resolve, 1000));

    // TODO: Implementar envío real de email
    // Ejemplo con nodemailer (requiere configuración SMTP):
    /*
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransporter({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const emailHTML = `
      <h1>Resultados de tu Test Vocacional UDHI</h1>
      <h2>Hola ${userInfo.nombre} ${userInfo.apellido}</h2>
      <p>Tu Código Holland es: <strong>${results.hollandCode}</strong></p>
      <h3>Tus áreas principales:</h3>
      <ul>
        <li>${results.primaryType.fullName}: ${results.percentages[0].percentage}%</li>
        <li>${results.secondaryType.fullName}: ${results.percentages[1].percentage}%</li>
        <li>${results.tertiaryType.fullName}: ${results.percentages[2].percentage}%</li>
      </ul>
      <h3>Carreras recomendadas:</h3>
      <ul>
        ${results.topCareers.slice(0, 5).map((career: any) =>
          `<li><strong>${career.name}</strong> - ${career.matchPercentage}% compatibilidad</li>`
        ).join('')}
      </ul>
      <p>Para ver tus resultados completos, visita: <a href="${process.env.NEXT_PUBLIC_BASE_URL}/results">Ver resultados completos</a></p>
    `;

    await transporter.sendMail({
      from: `"Test Vocacional UDHI" <${process.env.EMAIL_USER}>`,
      to: userInfo.email,
      subject: `Resultados de tu Test Vocacional - Código ${results.hollandCode}`,
      html: emailHTML
    });
    */

    return NextResponse.json({
      success: true,
      message: 'Resultados enviados correctamente'
    });

  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json(
      { success: false, message: 'Error al enviar el correo' },
      { status: 500 }
    );
  }
}
