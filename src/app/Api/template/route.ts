// src/app/api/template/route.ts

import prisma from '@/app/utils/prisma';
import { NextResponse } from 'next/server';


// POST method to create a new template
export async function POST(req: Request) {
  const body = await req.json();
  const { name, content } = body;

  // Check if required fields are provided
  if (!name || !content) {
    return NextResponse.json({ error: 'Name and content are required' }, { status: 400 });
  }

  try {
    // Create a new template in the database
    const newTemplate = await prisma.template.create({
      data: { name, content },
    });

    return NextResponse.json({ template: newTemplate }, { status: 201 });
  } catch (error) {
    console.error('Error creating template:', error);
    return NextResponse.json({ error: 'Error creating template' }, { status: 500 });
  }
}

// GET method to retrieve all templates
export async function GET() {
  try {
    // Fetch all templates from the database
    const templates = await prisma.template.findMany();

    // Respond with the list of templates
    return NextResponse.json({ templates }, { status: 200 });
  } catch (error) {
    console.error('Error fetching templates:', error);
    return NextResponse.json({ error: 'Error fetching templates' }, { status: 500 });
  }
}


