import { PrismaClient } from '@prisma/client';
import CommentForm from '../components/CommentForm';

const prisma = new PrismaClient();

async function fetchComments() {
  return await prisma.comment.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

export default async function Home() {
  const comments = await fetchComments();

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <div className="container mx-auto p-6 md:p-8 lg:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">MALDITO MADURO IMBECIL HP</h1>
        <CommentForm />
        <div className="mt-8">
          <ul className="space-y-4">
            {comments.map(comment => (
              <li key={comment.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <p className="text-base md:text-lg">{comment.text}</p>
                <small className="text-gray-400">{new Date(comment.createdAt).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

