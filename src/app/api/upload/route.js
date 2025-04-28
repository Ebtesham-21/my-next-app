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
    const buffer = Buffer.form(arrayBuffer);

    const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({folder: 'blogs'}, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        }).end(buffer);
    });

    return NextResponse.json(result);


}