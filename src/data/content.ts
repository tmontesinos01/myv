import type { StaticImageData } from 'next/image'
import extractionsImage from '@/public/images/treatments/extracciones.webp'
import restorationsImage from '@/public/images/treatments/restauraciones.webp'
import implantsImage from '@/public/images/treatments/implantes.webp'
import cleaningImage from '@/public/images/treatments/limpieza.webp'
import orthodonticsImage from '@/public/images/treatments/ortodoncia.webp'
import repairsImage from '@/public/images/treatments/reparaciones.webp'

export type Treatment = {
  name: string
  description: string
  tone: 'blue' | 'sky' | 'sand' | 'navy'
  image: StaticImageData
  imageAlt: string
}
export type Professional = { id: string; name: string; specialty: string; license?: string }
export type Testimonial = { quote: string; author: string }
export type FaqItem = { question: string; answer: string }

export const treatments: Treatment[] = [
  {
    name: 'Extracciones',
    description: 'Evaluación y extracción de piezas dentales cuando sea necesario.',
    tone: 'blue',
    image: extractionsImage,
    imageAlt: 'Profesional con guantes sosteniendo instrumental para una extracción dental.',
  },
  {
    name: 'Arreglos y restauraciones',
    description: 'Tratamientos para reparar piezas dentales y recuperar su función.',
    tone: 'sand',
    image: restorationsImage,
    imageAlt: 'Aplicación de una lámpara de fotocurado durante un tratamiento dental.',
  },
  {
    name: 'Implantes dentales',
    description: 'Evaluación para reemplazar piezas dentales perdidas con implantes.',
    tone: 'navy',
    image: implantsImage,
    imageAlt: 'Modelo dental que muestra un implante y su corona junto a dientes naturales.',
  },
  {
    name: 'Limpieza dental',
    description: 'Higiene profesional y recomendaciones para tu rutina diaria.',
    tone: 'sky',
    image: cleaningImage,
    imageAlt: 'Profesionales realizando una limpieza dental en el consultorio.',
  },
  {
    name: 'Ortodoncia',
    description: 'Evaluación y alternativas para mejorar la función y la sonrisa.',
    tone: 'navy',
    image: orthodonticsImage,
    imageAlt: 'Modelo de dientes con brackets y bandas de colores para ortodoncia.',
  },
  {
    name: 'Reparaciones dentales',
    description: 'Consultá por las opciones de reparación según lo que necesites.',
    tone: 'blue',
    image: repairsImage,
    imageAlt: 'Manos con guantes puliendo una prótesis dental con instrumental especializado.',
  },
]

export const professionals: Professional[] = [
  { id: 'professional-1', name: '[PENDIENTE] Nombre profesional', specialty: '[PENDIENTE] Especialidad', license: '[PENDIENTE] Matrícula' },
  { id: 'professional-2', name: '[PENDIENTE] Nombre profesional', specialty: '[PENDIENTE] Especialidad' },
]

export const testimonials: Testimonial[] = []

export const faqs: FaqItem[] = [
  { question: '¿Qué puedo esperar en la primera consulta?', answer: 'Vamos a conocer tu motivo de consulta, revisar tu salud bucal y conversar sobre las alternativas posibles. La primera charla es un espacio para que puedas preguntar todo lo que necesites.' },
  // { question: '¿Trabajan con obras sociales?', answer: 'Consultanos por WhatsApp para confirmar las obras sociales y prepagas disponibles.' },
  { question: '¿Atienden urgencias?', answer: 'Escribinos para contarnos qué necesitás y consultar la disponibilidad del centro.' },
  { question: '¿Qué formas de pago aceptan?', answer: 'Aceptamos todos los medios de pago, para que elijas el que te resulte más cómodo.' },
]
