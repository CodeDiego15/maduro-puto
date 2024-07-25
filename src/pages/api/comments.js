import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { text } = req.body;
      const comment = await prisma.comment.create({
        data: { text },
      });
      res.status(201).json(comment);
    } catch (error) {
      res.status(400).json({ error: 'Error al crear el comentario' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
