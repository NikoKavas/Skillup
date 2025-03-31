import { NoteForm } from "./NoteForm"

type NewNoteProps = {
    onSubmit: (data: NoteData) => void;
}

export function NewNote({onSubmit}: NewNoteProps){
    return (
    <>   
        <h1 className="mb-4">New Note</h1>
        <NoteForm onSubmit={onSubmit}/>
    </> 
    ) 
}