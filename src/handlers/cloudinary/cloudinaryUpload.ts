import cloudinary, {
    UploadApiErrorResponse,
    UploadApiResponse
} from 'cloudinary';

const upload = (
    file: string,
    public_id?: string,
    overwrite?: boolean,
    invalidate?: boolean,
): Promise<UploadApiErrorResponse | UploadApiResponse> => {
    return new Promise<UploadApiErrorResponse | UploadApiResponse>((resolve, reject) => {
        cloudinary.v2.uploader.upload(file, {
            public_id,
            overwrite,
            invalidate,
            resource_type: 'auto',
        }, (error, result) => {
            if (error) reject(error as UploadApiErrorResponse);
            else resolve(result as UploadApiResponse);
        });
    });
};

const videoUpload = (
    file: string,
    public_id?: string,
    overwrite?: boolean,
    invalidate?: boolean,
): Promise<UploadApiErrorResponse | UploadApiResponse> => {
    return new Promise<UploadApiErrorResponse | UploadApiResponse>((resolve, reject) => {
        cloudinary.v2.uploader.upload(file, {
            public_id,
            overwrite,
            invalidate,
            chunk_size: 50000,
            resource_type: 'video',
        }, (error, result) => {
            if (error) reject(error as UploadApiErrorResponse);
            else resolve(result as UploadApiResponse);
        });
    });
}

export {
    upload,
    videoUpload,
}
