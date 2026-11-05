export type Treatment = { name: string; description: string; tone: string }
export type Professional = { name: string; specialty: string; license?: string }
export type Testimonial = { quote: string; author: string }
export type FaqItem = { question: string; answer: string }

export const treatments: Treatment[] = [
  { name: 'Odontología general', description: 'Controles y atención integral para cuidar tu salud bucal.', tone: 'blue' },
  { name: 'Limpieza dental', description: 'Higiene profesional y recomendaciones para tu rutina diaria.', tone: 'sky' },
  { name: 'Estética dental', description: 'Opciones para acompañar tus objetivos de estética y bienestar.', tone: 'sand' },
  { name: 'Ortodoncia', description: 'Evaluación y alternativas para mejorar la función y la sonrisa.', tone: 'navy' },
]

export const professionals: Professional[] = [
  { name: '[PENDIENTE] Nombre profesional', specialty: '[PENDIENTE] Especialidad', license: '[PENDIENTE] Matrícula' },
  { name: '[PENDIENTE] Nombre profesional', specialty: '[PENDIENTE] Especialidad' },
]

export const testimonials: Testimonial[] = []

export const faqs: FaqItem[] = [
  { question: '¿Qué puedo esperar en la primera consulta?', answer: 'Vamos a conocer tu motivo de consulta, revisar tu salud bucal y conversar sobre las alternativas posibles. La primera charla es un espacio para que puedas preguntar todo lo que necesites.' },
  { question: '¿Trabajan con obras sociales?', answer: 'Consultanos por WhatsApp para confirmar las obras sociales y prepagas disponibles.' },
  { question: '¿Atienden urgencias?', answer: 'Escribinos para contarnos qué necesitás y consultar la disponibilidad del centro.' },
  { question: '¿Qué formas de pago aceptan?', answer: 'Consultanos por los medios de pago habilitados.' },
]
