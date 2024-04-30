'use client'

import { auth } from "@/firebase.config"
import { signOut } from "firebase/auth"
import FileDropzone from "./_components/file-dropzone"

function FilesPage() {
  return (
    <div>
      <FileDropzone />
    </div>
  )
}

export default FilesPage