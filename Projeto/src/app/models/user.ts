export type User = {
    id?: number, 
    nome: string,
    email:string, 
    senha: string, 
    morada: string, 
    codigo_postal: string, 
    pais: string, 
    wishlist: Array<number>
    tipo: string; 
}
