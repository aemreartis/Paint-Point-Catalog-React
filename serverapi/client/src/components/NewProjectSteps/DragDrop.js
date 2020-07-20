import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function DragDrop() {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div  style={{height: '4cm' }} {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p className="pt-5" style={{textAlign: "center"}}>Drop the files here ...</p> :
                    <div className="pt-5" style={{textAlign: "center"}}>
                        <i className="fas fa-copy fa-3x"></i>
                        <p >Drag Images Here or browser your computer</p>
                    </div>
            }
        </div>
    )
}

export default DragDrop;