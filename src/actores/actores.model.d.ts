export interface actorCracionDTO {
    nombre: string;
    fechaNacimiento?: Date;
    foto?: File;
    fotoURL?: string;
    biografia?: string;
}

export interface ActorPeliculaDTO{
    id: number;
    nombre: string;
    personaje: string;
    foto: string;
}