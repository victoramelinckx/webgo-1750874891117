
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transformamos tu negocio con una web lista en un día y soporte 24/7, sin complicaciones." cta1="Digitaliza Hoy" />
<How step1Title="Contacta WebGo" step1Desc="Llena el formulario con tus requisitos." step2Title="Creamos tu web" step2Desc="Desarrollamos tu sitio en 24 horas." step3Title="Soporte continuo" step3Desc="Te asistimos 24/7 para vender más." />
<Aboutus headline="WebGo: Digitaliza tus Ventas Hoy" subheadline="Transformamos recomendaciones en ventas online, sin que inviertas tu tiempo." beneficiotitulo1="Fácil Implementación" beneficio1="Digitaliza sin complicaciones ni esfuerzo." beneficiotitulo2="Aumenta Tus Ventas" beneficio2="Conviértete en líder del mercado." />
<Services heading="Tu Negocio Digital en 24 Horas" description="asda - asd crea tu tienda online rápida y eficientemente." services={[{"name":"Desarrollo Express","icon":"rocket","description":"Tu web lista en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headphones","description":"Asistencia constante y confiable."},{"name":"Optimización SEO","icon":"search","description":"Tu web visible y atractiva en buscadores."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita transacciones seguras online."},{"name":"Marketing Digital","icon":"bullhorn","description":"Impulsa tus ventas con estrategias digitales."},{"name":"Gestión de Contenido","icon":"pencil","description":"Mantén tu sitio actualizado sin esfuerzo."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en resultados digitales impresionantes y medibles." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio?","respuesta":"WebGo te facilita el paso al mundo digital creando una tienda online profesional para ti. Así, puedes alcanzar más clientes y no depender solo de recomendaciones."},{"pregunta":"¿Cuánto cuesta el servicio de WebGo y qué incluye?","respuesta":"El servicio de WebGo cuesta 123 e incluye el diseño de un sitio web optimizado para ventas online, ayudándote a atraer y convertir más clientes."},{"pregunta":"¿Qué beneficios obtengo al usar WebGo si no tengo tiempo para gestionar un sitio web?","respuesta":"WebGo se encarga de todo por ti. Crean y gestionan tu tienda online, lo que te permite enfocarte en atender tu negocio sin preocuparte por la parte técnica."},{"pregunta":"¿Cómo puedo generar ventas online si no sé cómo hacerlo?","respuesta":"WebGo no solo crea tu tienda online, sino que también te asesora sobre estrategias de marketing para maximizar tus ventas en internet, incluso si eres nuevo en ello."},{"pregunta":"¿Qué hace a WebGo diferente de otros servicios similares en Santiago?","respuesta":"WebGo se especializa en ayudar a pequeños negocios como el tuyo a crecer online con un enfoque personalizado y precios accesibles, garantizando resultados efectivos."}]} />
<BookAppointment 
                      heading="Transforma Tus Ventas Online Ahora" 
                      description="Descubre cómo WebGo puede digitalizar tu negocio en Santiago y multiplicar tus clientes. ¡Aprovecha nuestra oferta de asda por solo 123!"
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
