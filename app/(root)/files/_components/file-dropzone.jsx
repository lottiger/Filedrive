import { cn } from '@/lib/utils'
import React from 'react'
import Dropzone from 'react-dropzone'

const FileDropzone = () => {

    const onDrop = async (acceptedFiles) => {
        console.log(acceptedFiles)
    }

  return (
    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
            <section>
            <div {...getRootProps()} className={cn('bg-slate-50/5 h-64 rounded-lg my-10 flex flex-col items-center justify-center border-2 border-dashed transition-colors')}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            </section>
        )}
    </Dropzone>
  )
}

export default FileDropzone