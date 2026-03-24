export default function handler(req, res) {
  res.status(200).json({ 
    name: 'John Doe',
    message: 'Hola desde la API de Next.js!',
    env_test: process.env.API_KEY ? 'API Key configurada' : 'API Key no encontrada'
  })
}
