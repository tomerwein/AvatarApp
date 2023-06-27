import { Request, Response } from 'express';
// @ts-ignore
import { createCanvas } from 'canvas';

export const getAvatar = async (req: Request, res: Response) => {
  const name = req.query.name as string | undefined;
  const backgroundColor = req.query.backgroundColor as string | undefined;

  if (!name) {
    return res.status(400).json({ error: 'Missing mandatory parameter: name' });
  }

  try {
    const canvas = createCanvas(100, 100);
    const context = canvas.getContext('2d');

    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
    context.fillStyle = typeof backgroundColor === 'string' ? `#${backgroundColor}` : '#0000FF';
    context.fill();

    context.fillStyle = '#FFFFFF';
    context.font = 'bold 50px Arial'; 
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    context.fillText(name.charAt(0).toUpperCase(), canvas.width / 2, canvas.height / 2);

    const buffer = canvas.toBuffer('image/png'); 

    res.set('Content-Type', 'image/png');
    res.send(buffer);
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
