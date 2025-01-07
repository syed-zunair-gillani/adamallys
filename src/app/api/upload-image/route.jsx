// import axios from 'axios';
// import formidable from 'formidable';
// import { NextResponse } from 'next/server';

// // Disable body parsing, Next.js needs to parse it manually
// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

// export async function POST(req) {
//     const form = new formidable.IncomingForm();

//     return new Promise((resolve, reject) => {
//         form.parse(req, async (err, fields, files) => {
//             if (err) {
//                 return reject(new NextResponse(
//                     JSON.stringify({
//                         status: 'error',
//                         message: err.message,
//                     }),
//                     { status: 500 }
//                 ));
//             }

//             const { filepath, originalFilename } = files.file;

//             const strapiUrl = 'https://monkfish-app-ecq7g.ondigitalocean.app/api';
//             const authToken = '84ee029fe3241b6f36511c5800efffc2db34db0eac30ded8767b0729e9b1443cb2f6df956356785fd805050adc4e5d45612c8124ce1f1430575923233c1aff0c6d69e286b101b62b888186339528d728b8b50bcbec141ae71a0e2939e4490076444f7f0a3f36038c1f5ad6b1ab3322facc48410f60dd3de799b0b4bd0b496c4c';

//             const formData = new FormData();
//             formData.append('files', fs.createReadStream(filepath), originalFilename);

//             try {
//                 const response = await axios.post(`${strapiUrl}/upload`, formData, {
//                     headers: {
//                         Authorization: `Bearer ${authToken}`,
//                         ...formData.getHeaders(),
//                     },
//                 });

//                 resolve(new NextResponse(
//                     JSON.stringify({
//                         status: 'ok',
//                         message: 'Image uploaded successfully',
//                         ImageId: response.data[0].id,
//                     }),
//                     { status: 200 }
//                 ));
//             } catch (error) {
//                 reject(new NextResponse(
//                     JSON.stringify({
//                         status: 'error',
//                         message: error.message,
//                     }),
//                     { status: 500 }
//                 ));
//             }
//         });
//     });
// }


export async function POST(req) {
}