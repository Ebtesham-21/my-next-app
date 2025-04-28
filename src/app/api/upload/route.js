import {v2 as cloudinary} from 'cloudinary';
import {NextResponse} from 'next/server';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


export async function POST(req){
    const formData = await req.formData();
    const file = formData.get('file');

    if(!file) return NextResponse.json({error: 'No file provided'}, {status: 400});

    const arrayBuffer = await file.arrayBuffer();
    

}